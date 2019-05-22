import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      <h1>Hello World <span className="hello-world__tech">{ tech }!</span></h1>
    </div>
  );
};

export default HelloWorld;