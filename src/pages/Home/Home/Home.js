import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <h3 className="mb-5">Welcome to Dragon News</h3>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
