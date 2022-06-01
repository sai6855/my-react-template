class ScrollTo {
  constructor() {}

  top() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  bottom() {
    window.scrollTo({
      behavior: "smooth",
      top: document.documentElement.scrollHeight,
    });
  }

  element(ref) {
    const top = ref.current.getBoundingClientRect().top;
    const documentHeight = document.documentElement.scrollHeight;
    const screenHeight = window.innerHeight;
    console.log(top, documentHeight, screenHeight, ref.current);
    if (top > 0) {
      window.scrollTo({
        behavior: "smooth",
        top: documentHeight - screenHeight + top,
      });
    } else {
      window.scrollTo({
        behavior: "smooth",
        top: documentHeight - screenHeight + top,
      });
    }
  }
}

export default new ScrollTo();
