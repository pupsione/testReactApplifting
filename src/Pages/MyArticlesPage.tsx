import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllArticles } from '../API';
import MyArticlesList from '../Components/MyAtricles/MyArticlesList';

const MyArticles = () => {
  const [myArticles, setMyArticles] = useState<any>([]);

  useEffect(() => {
    getAllArticles().then((data) => setMyArticles(data.data.items));
  }, []);

  return (
    <div>
      <div className='flex items-center'>
        <h1 className='text-4xl font-medium	pr-8'>My Articles</h1>
        <Link to={'/createarticles'} className='btn-defalut'>
          Create new article
        </Link>
      </div>
      {myArticles ? <MyArticlesList myArticles={myArticles} /> : null}
    </div>
  );
};

export default MyArticles;
