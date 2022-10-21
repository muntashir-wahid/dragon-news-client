import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  return (
    <div>
      <h2>This is category has {categoryNews.length} news</h2>
    </div>
  );
};

export default Category;
