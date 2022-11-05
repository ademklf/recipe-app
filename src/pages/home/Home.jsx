import React, { useState } from "react";

const Home = () => {
  const APP_ID = "7e6a6c65";
  const APP_KEY = "90c58a4680f9f2b586938756169dc24e";
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  return <div>Home</div>;
};

export default Home;
