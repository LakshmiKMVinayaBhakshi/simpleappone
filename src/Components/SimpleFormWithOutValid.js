// import React, { useState } from 'react'

// const SimpleFormWithOutValid = () => {
//     const[username, setUsername] = useState("");
//     const[password, setPassword] = useState("");
//     const[usernameerror, setUsernameError] = useState(null);
//     const[passwordError, setPassWordError] = useState(null);
//     const handleChange =(e) => {
//         const value = e.target.value;
//         setUsername(value);

//         if(value.length <=6)

//         {
//         setUsernameError("user name must be more than 6 char");
//         }
//         else
//         {
//             setUsernameError(null);
//         }
//     }

//     const handleChangeTwo = (e)=>{
//     const value =  e.target.value;
//     setPassword(value);

//     if(value.trim() === "")
//     {
//     setPassWordError("password invalid");
//     }
//     else if(value.length<=8)
//     {
//     setPassWordError("password required");

//     } 
//     else{
//         setPassWordError("");
//     }

//     }
// return (
//     <div>
//     <form onSubmit={()=>{alert("Form sumbitted")}}>
//     <label>UserName:</label><input type='text'onChange={handleChange} value={username}/><br></br>
//     {usernameerror && <div>{usernameerror}</div>}
//     <label>Password:</label><input type='text' onChange={handleChangeTwo} value={password}/><br></br>
//     {passwordError && <div>{passwordError}</div>}
//     <button >Submit</button>

//         </form>
//         </div>
// )
// }


// const SimpleFormWithOutValid = () => {
//   // State to manage form data
// const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
// });

//   // Handle form input changes
// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
// };

//   // Handle form submission
// const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation (you can add more sophisticated validation as needed)
//     if (formData.firstName && formData.lastName && formData.email && formData.message) {
//       // Form data is valid, you can handle the submission here
//     console.log('Form submitted:', formData);
//     alert('form submitted succesfully');
//     } else {
//       // Display an error message or handle validation feedback
//     console.log('Please fill out all fields.');
//     }
// };

// return (
//     <div>
//     <h2>Simple Form</h2>
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />

//         <br />

//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />

//         <br />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

//         <br />

//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>

//         <br />

//         <button type="submit">Submit</button>
//     </form>
//     </div>
// );
// };
// import React, { useState } from 'react';

// const SimpleFormWithOutValid = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});

//     const handleChangeUsername = (e) => {
//         if (username.trim() === "") {
//             setErrors((error) => ({ ...error, username: "enter valid name " }))
//         } else if (username.length <= 6) {
//             setErrors((error) => ({ ...error, username: "enter minimum 6 char" }))
//         } else {
//             setErrors((error) => ({ ...error, username: "" }))
//         }

//         return Object.values(errors).some(error => error !== "");
//     }

//     const handleChangePassword = (e) => {
//         if (password.trim() === "") {
//             setErrors((error) => ({ ...error, password: "enter password" }))
//         } else {
//             setErrors((error) => ({ ...error, password: "" }))
//         }

//         return Object.values(errors).some(error => error !== "");
//     }

//     const handleClick = (event) => {
//         event.preventDefault();

//         if (!handleChangeUsername() || !handleChangePassword()) {
//             alert("Form has errors. Please fix them.");
//         } else {
//             alert("Form submitted successfully.");
//         }
//     }

//     return (
//         <div>
//             <form>
//                 <br></br>
//                 <label>Enter Your Name:</label><br></br>
//                 <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
//                 <div style={{ color: "red" }}>{errors.username}</div>
//                 <label>Enter Password:</label><br></br>
//                 <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
//                 <div style={{ color: "red" }}>{errors.password}</div>
//                 <br></br>
//                 <button onClick={handleClick}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default SimpleFormWithOutValid;

// import React, { useState } from 'react'

// const SimpleFormWithOutValid = () => {
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

// export default SimpleFormWithOutValid;

import React from 'react'

const SimpleFormWithOutValid = () => {
return (
    <div>SimpleFormWithOutValid</div>
)
}

export default SimpleFormWithOutValid