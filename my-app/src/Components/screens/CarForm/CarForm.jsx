import React, { useEffect } from "react";
import styles from "./CarForm.module.css";
import { useState } from "react";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const clearData = {
  text: "",
  // price: "",
  // rating: "",
  // image: "",
};

const CarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://62584f320c918296a49543e7.mockapi.io/tasks"
      );
      const data = await response.json();
      setCars(data);
    };
    fetchData();
  }, [setCars]);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [
      {
        id: prev.length,
        ...data,
      },
      ...prev,
    ]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setData((prev) => ({ ...prev, text: e.target.value }))}
        value={data.name}
      />
      {/* <input
        placeholder="Price"
        onChange={(e) =>
          setData((prev) => ({ ...prev, price: e.target.value }))
        }
        value={data.price}
      />
      <input
        placeholder="Rating"
        onChange={(e) =>
          setData((prev) => ({ ...prev, rating: e.target.value }))
        }
        value={data.rating}
      />
      <input
        placeholder="Image"
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e.target.value }))
        }
        value={data.image}
      /> */}
      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CarForm;
