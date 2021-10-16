import React, { useState } from "react";
export default function Dish(props) {
    
    const Edit = (e) => {
     
  };
  function Delete(e) {
    e.preventDefault();
    props.Delete(props.dish);
  }
  return (
    <div className="container">
      <p>Name-{props.dish.name}</p>
      <button onClick={Edit}>Edit</button>
      <button onClick={Delete}>Delete</button>
    </div>
  );
}
