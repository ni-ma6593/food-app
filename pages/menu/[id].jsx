import axios from "axios";
import DetailsPage from "@/components/templates/FoodDetail/DetailPage";
import FallbackPage from "@/components/templates/Fallback/FallbackPage";
import { useRouter } from "next/router";

const FoodDetail = ({ food }) => {
  const router = useRouter();

  if (router.isFallback) return <FallbackPage />;
  return <DetailsPage {...food} />;
};

export default FoodDetail;

export const getStaticPaths = async () => {
  const {data} = await axios.get(`${process.env.BASE_URL}/data`);


  const sliced = data.slice(0, 5);

  const paths = sliced.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {

  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}/`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }





  return { props: {
    food: data
    },
    revalidate: +process.env.REVALIDATE
  };
};
