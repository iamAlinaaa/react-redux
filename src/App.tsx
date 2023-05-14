import React from "react";
import "./App.css";

// we add useSelector to have easy access to every store element
// and also we import useDispatch to make dispatch work
import { useSelector, useDispatch } from "react-redux";

// with purpose to use it here when button will be clicked ( we pass our actions (types)) into dispatch func
import {increment, decrement, signIn } from "./actions/actionsForReducer"

// create an interface with purpose to remove an error
interface RootState {
  counter?: number;
  isLogged?: boolean;
}



function App() {
  const dispatch = useDispatch();

  // TS infers type: (state: RootState) => boolean/number.
  const counter = useSelector((state: RootState) => state.counter);
  const isLogged = useSelector((state: RootState) => state.isLogged);

  return (
    <>
      <h1>This is our counter</h1>
      <div className="counter">
        <h1>{counter}</h1>
      </div>
      <div className="btn">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(signIn())}>{isLogged ? "Logout" : "Login"}</button>
      </div>
      {isLogged ? <h1>Some string is being shown</h1> : <></>}
    </>
  );
}

export default App;
