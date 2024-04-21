import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProductList from "./components/ProductList";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list/:category" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
