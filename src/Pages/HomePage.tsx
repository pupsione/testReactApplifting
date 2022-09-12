import { getAllArticles } from '../API';
import { useState, useEffect } from 'react';
import ArticlesList from '../Components/AllArticles/ArticlesList';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    getAllArticles().then((data) => setArticles(data.data.items));
  }, []);

  return (
    <div className='homePage'>
      <h1 className='font-medium text-4xl mb-10'>Recent articles</h1>
      <div className=''>
        <ArticlesList articles={articles} />
      </div>
    </div>
  );
};

export default HomePage;
