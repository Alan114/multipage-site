import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        aspernatur eos, laboriosam in sapiente odio natus atque hic reiciendis,
        optio accusantium itaque aliquid ipsa recusandae distinctio quas nisi,
        placeat provident.
      </p>
    </div>
  );
};

export default Contact;
