import { FC } from "react";
import { Slide } from "react-slideshow-image";
import styles from "./ProductSlideShow.module.css";

interface props {
  imgs: String[];
}

export const ProductSlideShow: FC<props> = ({ imgs }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {imgs.map((slideImage, index) => {
        let url = `/products/${slideImage}`;
        return (
          <div className={styles["each-slide"]} key={index}>
            <div
              className="fadeIn"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            >
              {/* <span>{slideImage.caption}</span> */}
            </div>
          </div>
        );
      })}
    </Slide>
  );
};
