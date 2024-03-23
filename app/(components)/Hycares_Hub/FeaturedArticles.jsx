// components/FeaturedArticles.js
import React from "react";
import ArticleCard from "../../(components)/ArticleCard";

// This component represents the content of the "Featured Articles" tab.
const FeaturedArticles = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}
    </div>
  );
};

export default FeaturedArticles;
