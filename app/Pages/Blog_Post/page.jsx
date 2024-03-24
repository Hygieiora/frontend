"use client";
import React, { useState } from "react";
import ArticleCard from "../../(components)/ArticleCard";
import SideNav from "../../(components)/sideNav";
import AddButton from "../../(components)/AddButton";
import MobileNavBar from "../../(components)/mobileNavBar";
import Header from "../../(components)/Header";
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
      <Header isFirstPage={false} />
      <main className="flex ">
        <SideNav />
        <MobileNavBar />
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
      </main>
    </>
  );
};

export default HomePage;
