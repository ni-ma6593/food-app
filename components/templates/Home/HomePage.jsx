import Attributes from "../../modules/Attributes";
import Banner from "../../modules/Banner";
import Companies from "../../modules/Companies.jsx";
import Definition from "../../modules/Definition";
import Instruction from "../../modules/Instruction.jsx";
import Guide from "../../modules/Guide.jsx";
import Restrictions from "../../modules/Restrictions.jsx";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />

      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
