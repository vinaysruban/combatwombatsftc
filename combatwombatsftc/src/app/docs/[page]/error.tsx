import React from "react";

const mdStyles = {
  wrapper: "px-2 sm:px-6 md:px-12 py-12 h-full w-4/5 max-w-screen-3xl mx-auto",
  title: "descendant:text-wrap descendant:break-words child-h1:text-2xl sm:child-h1:text-4xl md:child-h1:text-6xl child-h1:font-bold child-h1:my-8",
  separator: "border-t-2 mb-3 border-black dark:border-white",
  message: "font-semibold",
};

export default function Error() {
  return (
    <section className={mdStyles.wrapper}>
      <h1 className={mdStyles.title}>Error: 404</h1>
      <hr className={mdStyles.separator} />
      <p className={mdStyles.message}>This page does not exist</p>
    </section>
  );
}
