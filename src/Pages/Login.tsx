import { getLogin, getToken } from '../API';
import { useEffect, useState } from 'react';

const Login = () => {
  const [token, setToken] = useState<string | boolean>(getToken());

  useEffect(() => {
    setToken(getToken());
  }, [token]);

  const sumbitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { email, password } = document.forms[0];

    getLogin(email.value, password.value)
      .then((data) => {
        localStorage.setItem(
          'access_token',
          JSON.stringify(data.data.access_token)
        );
        setToken(getToken());
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {token ? (
        <div className='shadow-md p-[32px] max-w-sm w-full absolute right-[50%] left-[50%] top-[35%] translate-y-[-50%] translate-x-[-50%] text-center'>
          Welcome!
        </div>
      ) : (
        <div className='shadow-md p-[32px] max-w-sm w-full absolute right-[50%] left-[50%] top-[35%] translate-y-[-50%] translate-x-[-50%]'>
          <h1 className='font-medium text-3xl pb-3'>Login</h1>
          <form action='login' id='login' onSubmit={(e) => sumbitData(e)}>
            <label htmlFor='email' className='pb-2 block'>
              Email
              <input
                className='block min-w-[300px] w-full p-2 border border-grey rounded mt-2'
                type='text'
                name='email'
                placeholder='me@example.com'
              />
            </label>
            <label htmlFor='password'>
              Password
              <input
                className='block min-w-[300px] w-full p-2 border border-grey rounded mt-2 mb-4'
                type='password'
                name='password'
                placeholder='**********'
              />
            </label>
            <button className='btn-defalut float-right' type='submit'>
              Log In
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
