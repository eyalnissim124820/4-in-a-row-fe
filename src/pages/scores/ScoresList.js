import React from "react";
import ScoresItem from "./ScoresItem";
import "./ScoresPage.css";

export default function ScoresList({ list }) {
  return (
    <ul>
      {list && list.map((item) => <ScoresItem key={item.id} {...item} />)}
    </ul>
  );
}
