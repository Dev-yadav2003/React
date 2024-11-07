import { useState } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <h3>Count = {count}</h3>
      <h3>Count2 = {count2}</h3>

      <h4>Name: {name}</h4>
      <h4>Location: {location}</h4>
      <h4>Contact: dev@yadav</h4>
    </div>
  );
};
