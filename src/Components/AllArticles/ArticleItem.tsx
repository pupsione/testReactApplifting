import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticle } from '../../API';

const ArticleItem = (props: any) => {
  const [infoDetail, setInfoDetail] = useState<any>();
  const { articleId, title, createdAt } = props;

  const getDateCreate = () => {
    const dateCreate = new Date(createdAt);

    return `${dateCreate.getDate()}/${
      dateCreate.getMonth() + 1
    }/${dateCreate.getFullYear()}`;
  };

  useEffect(() => {
    getArticle(articleId).then((data) => setInfoDetail(data.data));
  }, [props]);

  return (
    <article className=' mb-10 flex-col sm:flex-row sm:flex' >
      <div className='image sm:pr-[29px] w-full sm:max-w-[300px]'>
        <img src='./images/imagesArticles/1.png' alt='image article' className='w-full object-cover	mb-2 max-h-60	' />
      </div>
      <div className='wrap max-w-lg'>
        <div className='content'>
          <h2 className='text-2xl font-medium leading-7 mb-4'>{title}</h2>
          <div className='infoAutor text-gray-400	text-sm'>
            <span className='pr-4'>Elisabeth Strain</span>
            <span>{getDateCreate()}</span>
          </div>
          <p className='pt-2 pb-3'>
            {infoDetail ? `${infoDetail.content.slice(0, 200)}...` : null}
          </p>
        </div>

        <div className='flex'>
          <Link to={`/detail/${articleId}`}>
            <span className='pr-5 text-blue-500 hover:text-black active:text-blue-300'>
              Read whole article
            </span>
          </Link>
          <div className=''>
            {infoDetail ? `${infoDetail.comments.length} coments` : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleItem;
