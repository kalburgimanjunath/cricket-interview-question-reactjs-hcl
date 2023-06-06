import { useState } from "react";
export default function Button({ value, setScore }) {
  // const [scorevalue, setPlayedScore] = useState();
  return (
    <button
      className="mbutton"
      value={value}
      onClick={(e) => {
        // console.log(e.target.value);
        setScore(e.target.value);
      }}
    >
      {value}
    </button>
  );
}
