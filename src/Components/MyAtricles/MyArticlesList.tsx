import MyArticleItem from './MyArticleItem';

const MyArticlesList = (props: any) => {
  const { myArticles = [] } = props;

  return (
    <div className='max-w-[970px] mt-10'>
      <ul className='flex pb-3 border-b'>
        <li className='max-w-[200px] w-full flex items-center'>
          <span className='pr-2'>Title</span>
          <button>
            <img src='../images/icons/Union.svg' alt='' />
          </button>
        </li>
        <li className='max-w-sm w-full flex items-center'>
          <span className='pr-2'>Perex</span>
          <button>
            <img src='../images/icons/Union.svg' alt='' />
          </button>
        </li>
        <li className='max-w-[150px] w-full flex items-center'>
          <span className='pr-2'>Author</span>
          <button>
            <img src='../images/icons/Union.svg' alt='' />
          </button>
        </li>
        <li className='max-w-[150px] w-full flex items-center'>
          <span className='pr-2'># of comments</span>
          <button>
            <img src='../images/icons/Union.svg' alt='' />
          </button>
        </li>
        <li className='max-w-[80px] w-full'>Actions</li>
      </ul>
      {!myArticles.length
        ? 'You dont have article'
        : myArticles.map((item: any) => {
            return <MyArticleItem key={item.articleId} {...item} />;
          }, [])}
    </div>
  );
};

export default MyArticlesList;
