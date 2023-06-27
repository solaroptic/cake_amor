import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cakeBuffet from "../assets/cakesBuffet.jpg";
import eatCake from "../assets/eatCake.jpg";
import cookieShot from "../assets/cookieShot.jpg";
import baking from "../assets/baking.jpg";
import styles from "../componentsCSS/Slide.module.css";

const cakeImages = [
  { url: cakeBuffet, caption: "Unique recipes..." },
  { url: eatCake, caption: "Oven-baked goodness" },
  { url: cookieShot, caption: "Not just cakes..." },
  { url: baking, caption: "Fresh, from scratch in our kitchen" },
];

const Slide = () => {
  return (
    <Fade autoplay infinite canSwipe duration="3000" arrows={false}>
      {cakeImages.map((cakeSlide, index) => (
        <div className={styles.eachSlide} key={index}>
          <img
            className={styles.slideImage}
            style={{ borderRadius: "28px" }}
            src={cakeSlide.url}
            alt={cakeSlide.caption}
          />
          <h2>{cakeSlide.caption}</h2>
        </div>
      ))}
    </Fade>
  );
};

export default Slide;
