import "./FirstItem.css";
import DateFormater from "./DateFormater";
import Manja from "./Manja";
import React,{useState} from "react";
function FirstItem(props) {
  const n=props.name;
  const [name, setName]=useState(n);
  
  const clickHandler = ()=>{
     console.log("here");
     console.log("here");
     console.log("here");
     console.log("here");
     console.log("here");
    setName("Div");
  }

  return (
    <div>
      <Manja className="card">
        <h2>
          Hi <span className="name">{name}</span>,
          You are so sweet today <DateFormater date={props.date} /> and forever
        </h2>
        <button onClick={clickHandler}>click</button>
      </Manja>
    </div>
  );
}
export default FirstItem;
