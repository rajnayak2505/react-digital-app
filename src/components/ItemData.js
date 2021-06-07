import React from "react";

const ItemData = ({ title, description, image }) => {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <div className="text-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </>
  );
};

export default ItemData;
