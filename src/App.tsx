import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/detail/:id' element={<DetailPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
