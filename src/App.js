import "./styles.css";
import { Button, Score } from "./components/";
import { useState } from "react";
export default function App() {
  const runs = [1, 2, 3, 4, 6];
  const [totalScore, setTotal] = useState(0);
  const setScore = (value) => {
    setTotal(Number(value) + Number(totalScore));
  };
  return (
    <div className="App">
      <Score score={totalScore} />
      {runs &&
        runs.map((item, index) => {
          return <Button key={index} value={item} setScore={setScore} />;
        })}
    </div>
  );
}
