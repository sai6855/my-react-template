import React, { useEffect, useRef } from "react";
import useInfiniteLoader from "../common-code/Hooks/useInfiniteLoader";
import wait from "../common-code/Utilis/wait";

type Testimonial = {
  title: string;
};

const InfiniteScroll = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);

  const ref = useRef(null);

  const { isVisible } = useInfiniteLoader(ref);

  useEffect(() => {
    try {
      const fetchTestimonials = async () => {
        await wait(1000);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${testimonials.length /
            10 +
            1}&_limit=10`
        );
        const data = await response.json();
        setTestimonials((prevTestimonials) => [...prevTestimonials, ...data]);
      };
      isVisible && fetchTestimonials();
    } catch (error) {}

    //eslint-disable-next-line
  }, [isVisible]);

  console.log(isVisible);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // width: "20rem",
        // height: "20rem",
        // overflow: "scroll",
        // overflow: "hidden",
      }}
    >
      <div style={{ position: "fixed" }}>
        testimonials count: {testimonials.length}
      </div>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          style={{ margin: "2rem", padding: "2rem", border: "1px solid black" }}
        >
          {testimonial.title}
        </div>
      ))}
      <div ref={ref} style={{ background: "red" }}>
        {isVisible && (
          <div style={{ margin: "2rem", padding: "2rem" }}>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
