import React from "react";
import styles from "../../../App.module.css";

const CarItem = ({ car, handleDelete }) => {
  return (
    <div className="styles.item">
      {/* <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      /> */}
      <div className={styles.info}>
        <h2>{car.text}</h2>
        <button onClick={() => handleDelete(car.id)}>Delete</button>
        {/* <p>${car.price}</p>
        <p>${car.rating}</p>
        <button>Read mote</button> */}
      </div>
    </div>
  );
};

export default CarItem;
