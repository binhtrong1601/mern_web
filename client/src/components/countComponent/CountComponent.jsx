import React, { useState } from "react";
import { Button} from "reactstrap";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const reduceCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <div
        class="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="col">
          <Button onClick={reduceCount}>-</Button>
        </div>
        <div class="col">
          <Button style={{backgroundColor:"transparent",color:"#8d97ad"}}>{count}</Button>
        </div>
        <div class="col">
          <Button onClick={increaseCount}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default CountComponent;
