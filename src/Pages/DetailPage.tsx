import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticle } from '../API';

import Comments from '../Components/Comments';

const DetailPage = () => {
  const [detail, setDetail] = useState<any>();
  const { id } = useParams();

  const getDateCreate = () => {
    if (detail) {
      const dateCreate = new Date(detail.createdAt);

      return `${dateCreate.getDate()}/${
        dateCreate.getMonth() + 1
      }/${dateCreate.getFullYear()}`;
    } else {
      console.log('none');
    }
  };

  useEffect(() => {
    getArticle(id).then((data) => setDetail(data.data));
  }, [id]);

  return (
    <>
      {detail ? (
        <div className=''>
          <div className='max-w-3xl	mb-8 border-b-2 pb-8'>
            <h1 className='font-medium text-4xl mb-4'>{detail.title}</h1>
            <div className='infoAutor text-gray-400	text-sm'>
              <span className='pr-4'>Elisabeth Strain</span>
              <span>{getDateCreate()}</span>
            </div>
            <div className='mt-5 mb-5'>
              <img
                className='w-full'
                src='../images/imagesArticles/1.png'
                alt='image article'
              />
            </div>
            <div>
              <p className='leading-9 text-base '>{detail.content}</p>
            </div>
          </div>
          <Comments comments={detail.comments} articleId={detail.articleId} />
        </div>
      ) : null}
    </>
  );
};

export default DetailPage;
