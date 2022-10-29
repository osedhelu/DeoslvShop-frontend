import { FC } from "react";
import { Slide } from "react-slideshow-image";

interface props {
  imgs: String[];
}

export const ProductSlideShow: FC<props> = ({ imgs }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {imgs.map((slideImage, index) => {
        let url = `/products/${slideImage}`;
        return (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            >
            </div>
          </div>
        );
      })}
    </Slide>
  );
};
