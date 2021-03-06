import React, { useState } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems(prevState => prevState.concat(prevState.length + 1));
  };

  const removeItemHandler = selIndex => {
    setItems(prevState => prevState.filter((item, index) => index !== selIndex));
  };

  const listItems = items.map((item, index) => (
    <CSSTransition key={index} classNames="fade" timeout={300}>
      <li
        className="ListItem"
        onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

    return (
      <div>
        <button className="Button" onClick={addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
}

export default List;
