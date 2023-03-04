import React from "react";
import "./Components/style.css";
import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Favrecipe from "./Components/Favrecipe";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
        <Route path="/Favrecipe" element={<Favrecipe />} />
      </Routes>
    </>
  );
}

export default App;
