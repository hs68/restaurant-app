import "./App.css";
import { Dishes } from "./component/dishes";
import AddDish from "./component/adddish";
import Header from "./component/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  let list = [];
  if (localStorage.getItem("dish") === null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("dish"));
  }
  const Add = (dish) => {
    let ind = 0;
    if (dishlist.length === 0) ind = 1;
    else ind = dishlist[dishlist.length - 1].id + 1;
    let newdish = {
      id: ind,
      name: dish.name,
      time: dish.time,
    };
    setdishlist([...dishlist, newdish]);
  };
  const Edit = (dish) => {
    let newdishlist = dishlist;
    let ind = dishlist.findIndexOf(dish);
    newdishlist[ind] = dish;
    setdishlist(newdishlist);
  };
  function Delete(dish) {
    setdishlist(
      dishlist.filter((e) => {
        return e.id !== dish.id;
      })
    );
  }
  const [dishlist, setdishlist] = useState(list);
  useEffect(() => {
    localStorage.setItem("dish", JSON.stringify(dishlist));
  }, [dishlist]);
  return (
    <>
      <Router>
        
        <Header/>
        <Switch>
          
          <Route exact path="/">
            <AddDish Add={Add} text="add"/>
            <Dishes dishes={dishlist} Delete={Delete} Edit={Edit} text="all" />
          </Route>
          <Route exact path="/breakfast">
            <Dishes
              dishes={dishlist}
              Delete={Delete}
              Edit={Edit}
              text="breakfast"
            />
          </Route>
          <Route exact path="/lunch">
            <Dishes
              dishes={dishlist}
              Delete={Delete}
              Edit={Edit}
              text="lunch"
            />
          </Route>
          <Route exact path="/dinner">
            <Dishes
              dishes={dishlist}
              Delete={Delete}
              Edit={Edit}
              text="dinner"
            />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
