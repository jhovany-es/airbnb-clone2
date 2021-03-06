import React, { useState } from "react";
import style from "../style/location.module.css";

export default function Location() {
  const [data, setData] = useState([
    { image: "./airbnb-clone2/lahore.webp", title: "Lahore", description: "5.5 hour drive" },
    { image: "./airbnb-clone2/muree.webp", title: "Muree", description: "2.5 hour drive" },
    {
      image: "./airbnb-clone2/rawalpindi.webp",
      title: "./airbnb-clone2/Rawalpindi Cantt",
      description: "2 hour drive",
    },
    { image: "./airbnb-clone2/nathia.jpg", title: "Nathia Gali", description: "3 hour drive" },
    { image: "./airbnb-clone2/multan.webp", title: "Multan", description: "7.5 hour drive" },
    {
      image: "./airbnb-clone2/peshawar.webp",
      title: "Peshawar",
      description: "1.5 hour drive",
    },
    {
      image: "./airbnb-clone2/faisalabad.webp",
      title: "Faisalabad",
      description: "5 hour drive",
    },
    { image: "./airbnb-clone2/bhurban.webp", title: "Bhurban", description: "3 hour drive" },
  ]);
  return (
    <div className={style.Location}>
      <div className="row m-0" style={{ minWidth: "750px" }}>
        {data.map((item) => (
          <div className="col-3  mb-3">
            <div className={style.LocationCard}>
              <img src={`/images/${item.image}`} alt="" />
              <div>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
