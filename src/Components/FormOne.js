// import React, { useState } from 'react'

// const FormOne = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const  handleUsernameChange = (e) =>{
//         setUsername(e.target.value);

//     }
//     const  handlePasswordChange = (e) =>{
//         setPassword(e.target.value);

//     }


//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         alert('Form Data submitted.', {username,password});
//     }
// return (
//     <div>
//         <form>
//         <label>enter your name:</label><br></br>
//         <input type='text' value={username} onChange={handleUsernameChange}></input><br></br>
//         <label>enter your password</label><br></br>
//         <input type='text' value={password} onChange={handlePasswordChange}></input><br></br>
//         <button onClick={handleSubmit}>Submit</button>


//         </form>

//     </div>
// )
// }

// export default FormOne;

import React,{useState} from 'react';
import '../Components/FormOne.css'

const FormOne = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange=(e)=>
    {
            
            setUsername(e.target.value);
    }

    const handlePasswordChange=(e)=>
    {
            
            setPassword(e.target.value);
    }

    const handleClick = (event)=>
    {
        alert("Form Submitted Succesfully." )
    }

return (
    <div className="form-container">
        <form>
            <label htmlFor="username">Enter Your Name:</label><br></br>
            <input type='text' value={username} onChange={handleUsernameChange} ></input><br></br>
            <label htmlFor="password">Enter Your Password:</label><br></br>
            <input type='text' value={password} onChange={handlePasswordChange}></input><br></br>
            <button onClick={handleClick}>Submit</button>

        </form>
    </div>
)
}

export default FormOne