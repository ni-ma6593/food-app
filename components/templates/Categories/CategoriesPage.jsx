import { useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";
import Card from "../../modules/Card";
import { useEffect } from "react";

const Categories = ({ data }) => {
  const router = useRouter();

  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const clickHandler = (e) => {
    // console.log(query);
    router.push({
      pathname: "/categories",
      query: {
        difficulty: query.difficulty,
        time: query.time,
      },
    });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value={""}>Difficulty</option>
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </select>

          <select value={query.time} name="time" onChange={changeHandler}>
            <option value={""}>Cooking Time</option>
            <option value={"more"}>More than 30 min</option>
            <option value={"les"}>Les than 30 min</option>
          </select>
          <button onClick={clickHandler} type="button">
            Search
          </button>
        </div>

        <div className={styles.cards}>
          {!data.length ? (
            <img src="/images/search.png" alt="Categories" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
