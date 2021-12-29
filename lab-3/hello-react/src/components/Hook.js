import React,{ useState } from "react";
import { useEffect } from "react";

function Hook() {
    const [color, setColor] = useState("red");
    const [count, setcount] = useState(0);
    const [multi, setMuli] = useState(1);
    const [car, setCar] = useState({
        brand: "Mazda",
        year: 2012,
        color : "red"});

        const updateCarColor = ()=> {
            setCar((previousState) =>{
                return {...previousState,color:"green"}
            });
        };
        useEffect(() => {
          document.title = `change Stage ${count} : ${color}`;
         // setTimeout(() => {
          set((Count) => count *2);
        //},1000);
        },[count]);
    return(
        <>
         <p>Color is {color}</p>;
         <p>Count is{count}</p>
         <button onClick={() => setcount(count + 1)}>Inc</button>

         <p>{car.brand} Car color is {car.color}</p>
         <button onClick={updateCarColor}>Change</button>
         </>
    );
}


export default Hook;