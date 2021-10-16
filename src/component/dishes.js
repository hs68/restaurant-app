import React from "react";
import Dish from "./dish";
export function Dishes(props) {
  return props.dishes.map((dish) => {
    return (
      <>
        {(props.text === "all" || dish.time === props.text) ? <Dish dish={dish} Delete={props.Delete} Edit={props.Delete} key={dish.id} />:null}
      </>

      //  {/* <Dish dish = { dish } Delete = { props.Delete } Edit = { props.Delete } /> */}
    );
  });
}
