const Head = () => {
  document.title = "Portfolio | Patricia Steinberg";
  document
    .querySelector("meta[name='description']")
    ?.setAttribute("content", "This website was made to showcase my projects");

  document
    .querySelector("link[rel='icon']")
    ?.setAttribute("href", "/favicon.svg");

  return <></>;
};

export default Head;
