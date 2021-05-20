import React, {useState} from "react";
const UserForm = (props)=>{

    const [name, nameHandler]=useState("");
    const [date, dateHandler]=useState("");

    const nameHandlerEvent = (event)=>{
        nameHandler(event.target.value)
    }
    const dateHandlerEvent = (event)=>{
        dateHandler(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const data={
            name: name,
            date: new Date(date)
        }
        nameHandler("")
        dateHandler("")
        props.formHandler (data);
    }
    return (<form>
        <div>
            <label>Name</label>
            <input type='text'onChange ={nameHandlerEvent} value={name}/>
            
        </div>
        <div>
            <label>Date</label>
            <input type='date'onChange ={dateHandlerEvent}value={date}/>
            
        </div>
        <div><input type="submit" onClick={submitHandler} /></div>
    </form>)
}
export default UserForm;