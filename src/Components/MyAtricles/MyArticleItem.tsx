import { useEffect, useState } from 'react';
import { getArticle, deleteArticle } from '../../API';

const MyArticleItem = (props: any) => {
  const [detail, setDetail] = useState<any>([]);

  const { articleId, title } = props;

  useEffect(() => {
    getArticle(articleId).then((data) => setDetail(data.data));
  }, [props]);

  return (
    <div className='flex justify-beetween pt-3 pb-3 border-b'>
      <h2 className='block max-w-[200px] w-full'>{title}</h2>
      <p className='block max-w-sm w-full'>
        {detail.content ? `${detail.content.slice(0, 45)}...` : null}
      </p>
      <span className='block max-w-[150px] w-full'>Elisabeth Strain</span>
      <span className='block max-w-[150px] w-full'>
        {detail.comments ? `${detail.comments.length}` : '0'}
      </span>
      <div className='block max-w-[80px] w-full'>
        <button className='pr-3'>
          <img src='../images/icons/edit.svg' alt='edit' />
        </button>
        <button onClick={() => deleteArticle(articleId)}>
          <img src='../images/icons/trash.svg' alt='delete' />
        </button>
      </div>
    </div>
  );
};

export default MyArticleItem;
