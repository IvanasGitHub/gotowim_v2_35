// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import TopNav from "./components/TopNav/TopNav";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchResultsPage from "./components/Search/SearchResultsPage";
import Footer from "./components/Footer/Footer";
import recipesData from "./data/recipes";
import Home from "./components/HomePage";
import "./styles.css";
import CategoriesSlider from "./components/CategoriesSlider/CategoriesSlider";
import ProductInfo from "./components/ProductInfo/ProductInfo";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleSearchChange = (query) => {
    setSearchText(query);
  };

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearchChange} />
        <TopNav toggleNav={toggleNav} />
        <div className="main-container">
          <Nav isOpen={navOpen} />
          {navOpen && <div className="overlay" onClick={toggleNav}></div>}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/search"
                element={<SearchResultsPage recipes={filteredRecipes} />}
              />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route path="/recipe/:id" element={<RecipePage />} />
              <Route path="/products" element={<ProductInfo />} />
            </Routes>
          </main>
        </div>
        <CategoriesSlider />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
