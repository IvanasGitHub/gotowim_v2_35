import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ isOpen }) => {
  const [subNavOpen, setSubNavOpen] = useState({});

  const toggleSubNav = (index) => {
    setSubNavOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <nav className={isOpen ? "side-nav active" : "side-nav"}>
      <h2>Recipes</h2>

      <ul>
        <li>
          <div onClick={() => toggleSubNav(1)}>Dish Types </div>
          <ul className={subNavOpen[1] ? "sub-nav active" : "sub-nav"}>
            <li>
              <Link to="/category/Breakfasts">Breakfasts</Link>
            </li>
            <li>
              <Link to="/category/soups-and-broths">Soups and Broths</Link>
            </li>
            <li>
              <Link to="/category/main-dishes">Main Dishes</Link>
            </li>
            <li>
              <Link to="/category/appetizers">Appetizers</Link>
            </li>
            <li>
              <Link to="/category/salads">Salads</Link>
            </li>
            <li>
              <Link to="/category/desserts">Desserts</Link>
            </li>
            <li>
              <Link to="/category/baking">Baking</Link>
            </li>
            <li>
              <Link to="/category/drinks">Drinks</Link>
            </li>
            <li>
              <Link to="/category/puree-soups">Puree Soups</Link>
            </li>
            <li>
              <Link to="/category/side-dishes">Side Dishes</Link>
            </li>
            <li>
              <Link to="/category/pizza">Pizza</Link>
            </li>
            <li>
              <Link to="/category/pasta-dishes"> Pasta Dishes</Link>
            </li>
            <li>
              <Link to="/category/burgers">Burgers</Link>
            </li>
            <li>
              <Link to="/category/grilled-dishes">Grilled Dishes</Link>
            </li>
            <li>
              <Link to="/category/casseroles">Casseroles</Link>
            </li>
          </ul>
        </li>
        <li>
          <div onClick={() => toggleSubNav(2)}>World Cuisine</div>
          <ul className={subNavOpen[2] ? "sub-nav active" : "sub-nav"}>
            <li>
              <Link to="/category/european-cuisine">European cuisine</Link>
            </li>
            <li>
              <Link to="/category/asian-cuisine">Asian cuisine</Link>
            </li>
            <li>
              <Link to="/category/american-cuisine">American cuisine</Link>
            </li>
            <li>
              <Link to="/category/latin-american-cuisine">
                Latin American cuisine
              </Link>
            </li>
            <li>
              <Link to="/category/mediterranean-cuisine">
                Mediterranean cuisine
              </Link>
            </li>
            <li>
              <Link to="/category/italian-cuisine">Italian Cuisine</Link>
            </li>
            <li>
              <Link to="/category/african-cuisine">African Cuisine</Link>
            </li>
            <li>
              <Link to="/category/scandinavian-cuisine">
                Scandinavian Cuisine
              </Link>
            </li>
            <li>
              <Link to="/category/russian-cuisine">Russian Cuisine</Link>
            </li>
            <li>
              <Link to="/category/pacific-cuisine">Pacific Cuisine</Link>
            </li>
            <li>
              <Link to="/category/french-cuisine">French Cuisine</Link>
            </li>
            <li>
              <Link to="/category/japanese-cuisine">Japanese Cuisine</Link>
            </li>
          </ul>
        </li>
        <li>
          <div onClick={() => toggleSubNav(3)}>Diets</div>
          <ul className={subNavOpen[3] ? "sub-nav active" : "sub-nav"}>
            <li>
              <Link to="/category/vegetarian">Vegetarian</Link>
            </li>
            <li>
              <Link to="/category/gluten-free">Gluten-free</Link>
            </li>
            <li>
              <Link to="/category/keto">Keto</Link>
            </li>
            <li>
              <Link to="/category/paleo">Paleo</Link>
            </li>
            <li>
              <Link to="/category/low-carb"> Low-Carb</Link>
            </li>
            <li>
              <Link to="/category/weight-loss-diet">Weight Loss Diet</Link>
            </li>
            <li>
              <Link to="/category/mediterranean-diet">Mediterranean Diet</Link>
            </li>
            <li>
              <Link to="/category/athlete's-diet">Athlete's Diet</Link>
            </li>
            <li>
              <Link to="/category/kid-friendly-dishes">
                {" "}
                Kid-Friendly Dishes
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div onClick={() => toggleSubNav(4)}>Special Diets</div>
          <ul className={subNavOpen[4] ? "sub-nav active" : "sub-nav"}>
            <li>
              <Link to="/category/vegetarian">Vegetarian</Link>
            </li>
            <li>
              <Link to="/category/gluten-free">Gluten-free</Link>
            </li>
            <li>
              <Link to="/category/keto">Keto</Link>
            </li>
            <li>
              <Link to="/category/paleo">Paleo</Link>
            </li>
            <li>
              <Link to="/category/lactose-free">Lactose-Free</Link>
            </li>
            <li>
              <Link to="/category/sugar-free">Sugar-Free</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
