import UserForm from "./UserForm";
const NewUser = (props)=>{
    const formHandler =(data)=>{
        //console.log(data);
    }
    return (<div className="new-user">
        <UserForm formHandler={props.newUserData}/>
    </div>)
}
export default NewUser;
