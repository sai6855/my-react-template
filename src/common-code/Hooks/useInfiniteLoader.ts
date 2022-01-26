import React from "react";

//MDN source: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

type Options = {
  root: null | HTMLElement;
  rootMargin: string;
  threshold: number;
};

const defaultOptions: Options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const useInfiniteLoader = (
  ref: React.MutableRefObject<null | HTMLElement>,
  options?: Partial<Options>
) => {
  const [isVisible, setisVisible] = React.useState(false);

  React.useEffect(() => {
    const callbacks = (entries: IntersectionObserverEntry[], observer: any) => {
      entries.forEach((entry) => {
        setisVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callbacks, {
      ...defaultOptions,
      ...options,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  });

  return { isVisible };
};

export default useInfiniteLoader;
