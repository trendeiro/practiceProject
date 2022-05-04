import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);


  const addUserHandler = (event) => {
      event.preventDefault();
    if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
        setIsValid(false);
        return;
    }
    if(+enteredAge < 1){
        return
    }
    console.log(enteredUsername,enteredAge)
    setEnteredUsername('');
    setEnteredAge('');
    
  };
  props.onAddUser(enteredUsername,enteredAge)
  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
