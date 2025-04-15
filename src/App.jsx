import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Silder';
import Hero from './components/Hero';
import Section from './components/Section';
import Section2 from './components/Section2';
import LoadingSpinner from './components/LoadingSpinner';
import FrontPage from './pages/home/FrontPage';
import AdminRegister from './pages/admin/AdminRegister';
import AdminLogin from './pages/admin/AdminLogin';
import Donar from './pages/user/Donar';
import Patient from './pages/user/Patient';
import About from './pages/home/About';
import Gallery from './components/Gallery';

function AppWrapper() {
  const location = useLocation();
  const hideLayoutRoutes = ['/adminRegister', '/adminLogin', '/donar', '/patient' , '/about'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && (
        <>
          <Header />
          <Slider />
          <Hero />
          <Section />
          <Section2 />
          <Gallery />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/adminRegister"
          element={<AdminRegister />}
        />
        <Route
          path="/adminLogin"
          element={<AdminLogin />}
        />
        <Route
          path="/donar"
          element={<Donar />}
        />
        <Route
          path="/patient"
          element={<Patient />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
