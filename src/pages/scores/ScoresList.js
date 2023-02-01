import React from "react";
import ScoresItem from "./ScoresItem";
import "./ScoresPage.css";

export default function ScoresList({ list }) {
  return (
    <ul>
      {list[0] ? list.map((item,i) => <ScoresItem key={item.id} {...item} i={i} />) : ''}
    </ul>
  );
}
