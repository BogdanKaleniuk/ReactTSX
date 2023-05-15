import { useState } from "react";
import CarForm from "./Components/screens/CarForm/CarForm";
import CarItem from "./Components/screens/CarItem/CarItem";
// import { allCars } from "./Components/screens/home/cars.data";

function App() {
  const [cars, setCars] = useState([]);

  const handleDelete = (id) => {
    console.log("delete todo");
    setCars([...cars].filter((t) => t.id !== id));
  };
  return (
    <div>
      <h1>Todo App</h1>
      <CarForm setCars={setCars} />

      <div>
        {cars.length ? (
          cars.map((car) => (
            <CarItem handleDelete={handleDelete} key={car.id} car={car} />
          ))
        ) : (
          <p>Todo not found or Loading ....</p>
        )}
      </div>
    </div>
  );
}

export default App;
