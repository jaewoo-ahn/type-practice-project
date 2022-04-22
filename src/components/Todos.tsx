import React from "react";

const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <li>Learn Typescript</li>
    </ul>
  );
};

export default Todos;
