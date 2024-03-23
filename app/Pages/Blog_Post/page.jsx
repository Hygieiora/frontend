"use client";
import React, { useState } from "react";
import ArticleCard from "../../(components)/ArticleCard";
// import AddButton from "../../components/AddButton";
import AddButton from "../../(components)/AddButton";
import SideNav from "../../(components)/sideNav";

// The main page component that renders article cards and the add button.
const HomePage = () => {
  const [articles, setArticles] = useState([
    { title: "Article 1", excerpt: "This is the excerpt for Article 1." },
    { title: "Article 2", excerpt: "This is the excerpt for Article 2." },
    { title: "Article 3", excerpt: "This is the excerpt for Article 3." },
  ]);

  const handleAddArticle = (article) => {
    setArticles([article, ...articles]);
  };

  return (
    <>
      <div className="p-3 m-4">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
          />
        ))}
        <AddButton onAdd={handleAddArticle} />
      </div>
    </>
  );
};

export default HomePage;
