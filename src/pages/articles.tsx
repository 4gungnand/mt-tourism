import React from 'react';

interface Article {
    id: number;
    title: string;
    content: string;
}

const articles: Article[] = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    { id: 3, title: "Article 3", content: "Content of Article 3" },
]; // Dummy data

// Future implementation: Fetch articles from an API

const ArticlesPage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Articles</h1>
            {articles.map((article) => (
                <div key={article.id} className="mb-4">
                    <h2 className="text-xl font-bold">{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ArticlesPage;