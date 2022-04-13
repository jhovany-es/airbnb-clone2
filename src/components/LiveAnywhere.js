import React, { useState } from "react";
import style from "../style/liveAnyWhere.module.css";

export default function LiveAnywhere() {
  const [data, setData] = useState([
    { image: "./airbnb-clone2/entireHome.webp", title: "Entire homes" },
    { image: "./airbnb-clone2/cabin.webp", title: "Cabins and cottages" },
    { image: "./airbnb-clone2/unique.webp", title: "Unique stays" },
    { image: "./airbnb-clone2/pets.webp", title: "Pets Welcome" },
  ]);
  return (
    <div className={style.LiveAnywhere}>
      <h1>Live anywhere</h1>
      <div style={{ overflow: "auto" }}>
        <div className="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div className="col-3">
              <div className={style.LiveAnywhereCard}>
                <img src={`/images/${item.image}`} alt="" />
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
