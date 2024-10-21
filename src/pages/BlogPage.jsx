import React from "react";
import HeadingReuse from "../reuse/HeadingReuse";

const BlogPage = () => {
  return (
    <>
      <HeadingReuse heading="Blogs" toLink="/" toPage="Home" fromPage="Blog" />

      <section>
        <div className="container mx-auto p-[10px]">Blog Page will be created tomorrow.</div>
      </section>
    </>
  );
};

export default BlogPage;
