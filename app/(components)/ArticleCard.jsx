import React from "react";

// This component represents each individual article card on the blog page.
const ArticleCard = ({ title, excerpt }) => {
  return (
    <div className="p-4 bg-white my-2 rounded-md shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  );
};

export default ArticleCard;
