import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import styles from "./myCarousel.module.css";

export default function MyCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slides = props.photos.map((item) => (
    <CarouselItem
      tag="div"
      className={styles.customTag}
      key={item.id}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={() => next()}
      previous={() => previous()}
    >
      <CarouselIndicators
        items={props.photos}
        activeIndex={activeIndex}
        onClickHandler={() => goToIndex()}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={() => previous()}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={() => next()}
      />
    </Carousel>
  );
}
