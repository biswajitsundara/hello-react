import React from "react";
import AutoComplete from "./AutoComplete";
import './Auto.css';

function AutoApp() {
  const staticData = ["Apple", "Mango", "Cherry"];

  const fetchSuggestions = async (query) => {
    let response;
    
    if(query){
      response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
    } else{
      response = await fetch(
        `https://dummyjson.com/recipes`
      );
    }
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log(result.recipes);
    if(!query){
      const minResults = result.recipes.splice(0,5);
      return minResults;
    }

    return result.recipes;
  };

  return (
    <AutoComplete
      placeholder={"Enter recipe"}
      staticData={[]}
      fetchSuggestions={fetchSuggestions}
      dataKey={"name"}
      customLoading={<div>Loading Recipes...</div>}
      onSelect={(res) => console.log(res)}
      onChange={() => {}}
      onBlur={() => {}}
      onFocus={() => {}}
      customStyles={{}}
    />
  );
}

export default AutoApp;
