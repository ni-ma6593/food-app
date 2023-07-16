import MenuPage from "@/components/templates/Menu/MenuPage";
import axios from "axios";
import React from "react";

const Menu = ({ foods }) => {
  return (
    <div>
      <MenuPage foods={foods} />
    </div>
  );
};

export default Menu;

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL}/data`);
  // const data = await res.json();
  return { props: { foods: res.data }, revalidate:+process.env.REVALIDATE };
};
