import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../login/Login.style";

const Home = () => {
  const APP_ID = "7e6a6c65";
  const APP_KEY = "90c58a4680f9f2b586938756169dc24e";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
    setRecipes(data.hits);
  };

  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  );
};

export default Home;
