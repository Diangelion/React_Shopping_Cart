import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling
import "./App.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

// Component
import MainContent from "./components/MainContent";
import MyShoppingCart from "./components/MyShoppingCart";
import NotFound from "./components/NotFound.jsx";

// Template
import Layout from "./template/Layout";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const baseURL = "https://api.escuelajs.co/api/v1/products";
      try {
        const response = await fetch(baseURL);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainContent products={products} />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <MyShoppingCart />
            </Layout>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
