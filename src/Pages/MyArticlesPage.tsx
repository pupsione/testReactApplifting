import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllArticles, getToken } from '../API';
import MyArticlesList from '../Components/MyAtricles/MyArticlesList';

const MyArticles = () => {
  const [myArticles, setMyArticles] = useState<any>([]);

  useEffect(() => {
    getAllArticles().then((data) => setMyArticles(data.data.items));
  }, []);

  return (
    <div>
      {!getToken() ? (
        <p>Oups! Failed Login</p>
      ) : (
        <div>
          <div>
            <div className='flex items-center'>
              <h1 className='text-4xl font-medium	pr-8'>My Articles</h1>
              <Link to={'/createarticles'} className='btn-defalut'>
                Create new article
              </Link>
            </div>
          </div>
          <div className='overflow-auto	'>
            {myArticles ? <MyArticlesList myArticles={myArticles} /> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticles;
