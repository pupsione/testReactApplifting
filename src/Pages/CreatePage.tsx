import { postArticle } from '../API';

const CreatePage = () => {
  const onPostArticle = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    let { titleArticle, textconent } = document.forms[0];

    if (!titleArticle.value || !textconent.value) {
      alert('You have not completed all input fields. Try again!');
    } else {
      postArticle(titleArticle.value, textconent.value).then((data) => {
        alert('You create article!');
        window.location.reload();
      });
    }
  };

  return (
    <div className='max-w-3xl'>
      <form onSubmit={(e) => onPostArticle(e)}>
        <div className='flex mb-12'>
          <h1 className='text-4xl font-medium	pr-8'>Create new article</h1>
          <button className='btn-defalut' type='submit'>
            Publish Article
          </button>
        </div>
        <label>
          Article Title
          <input
            name='titleArticle'
            type='text'
            placeholder='My First Article'
            className='block w-full border border-grey rounded mt-2 mb-5 p-2'
          />
        </label>

        <label htmlFor='image'>Featured image</label>
        <input
          type='file'
          name='image'
          placeholder='Upload an Image'
          className='file:mr-4 file:py-2 file:px-4 file:mt-2 file:mb-8
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-neutral-400	file:text-white
      hover:file:bg-blue-500
      active:file:bg-green-500	
      focus:file:bg-green-700	
      block w-full text-sm text-slate-500
      hover:file:cursor-pointer'
        />

        <label htmlFor='textconent' className='block'>
          Content
        </label>
        <textarea
          name='textconent'
          rows={20}
          placeholder='Supports markdown. Yay!'
          className='w-full border border-grey rounded mt-2 mb-4 p-2'
        ></textarea>
      </form>
    </div>
  );
};

export default CreatePage;
