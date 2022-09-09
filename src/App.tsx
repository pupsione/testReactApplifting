import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import MyArticles from './Pages/MyArticles';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const refreshToken = () => {
      window.location.reload();
    };

    window.addEventListener('storage', refreshToken);
    return () => {
      window.removeEventListener('storage', refreshToken);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/detail/:id' element={<DetailPage />}></Route>
          <Route path='/myarticles' element={<MyArticles />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
