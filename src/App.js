import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
