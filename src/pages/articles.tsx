import React from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";

const addUserDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  // Get a list of users from your database
  const readUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  
  // Call the async function
  // addUserDocument();
  // readUsers();

interface Article {
    id: number;
    title: string;
    content: string;
}

const articles: Article[] = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    { id: 3, title: "Article 3", content: "Content of Article 3" },
];

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