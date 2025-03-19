// Importing React and useState hook from React library
import React, { useState } from "react";

const DynamicList = () => {
  // Defining state 'items' to store the list of tasks
  // Each item has 'text' (task name) and 'completed' (boolean to track completion status)
  const [items, setItems] = useState([
    { text: "Grocery shopping", completed: false },
    { text: "Temple visit", completed: false },
    { text: "Vegan Milk", completed: true },
  ]);

  // Function to toggle the 'completed' status of an item
  const handleToggleCompleted = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo-container">
      <ul>
        {/* Iterating over 'items' state to render each list item */}
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            {/* Using 'index' as key (not ideal but okay for static lists) */}
            <input
              type="checkbox"
              checked={item.completed} // Checkbox reflects the 'completed' state
              onChange={() => handleToggleCompleted(index)} // Toggles the item's completion status when clicked
            />
            <span className={item.completed ? "completed" : ""}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList; // Exporting the component for use in other parts of the application
