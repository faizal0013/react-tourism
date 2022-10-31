import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

import HomePage from './pages/HomePage';
import Page404 from './pages/Page404/Page404';
import AboutPage from './pages/AboutPage/AboutPage';
import PlacesPage from './pages/PlacesPage';
import PlacePage from './pages/PlacePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/place/:_id" element={<PlacePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
