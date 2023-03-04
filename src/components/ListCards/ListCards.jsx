import React from "react";
import Card from "../Card/Card";
import "./ListCards.css";

function ListCards({ listObject}) {
  return (
    <div className="containerListCards">
      {listObject.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          gender={item.gender}
          status={item.status}
          species={item.species}
          location={item.location}
          episode={item.episode}
          airDate={item.air_date}
          created={item.created}
        />
      ))}
    </div>
  );
}

export default ListCards;
