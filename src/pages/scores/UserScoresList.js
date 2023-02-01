import React from "react";
import UserScoresItem from "./UserScoresItem";

export default function UserScoresList({ list }) {
  return (
    <ul>
      {list[0]
        ? list.map((item) => <UserScoresItem key={item.id} {...item} />)
        : ""}
    </ul>
  );
}
