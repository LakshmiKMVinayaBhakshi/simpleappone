import React, { useState } from 'react';

const FormThree = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [usernameError, setUsernameError] = useState("");
const [passwordError, setPasswordError] = useState("");

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(""); // Clear username error when the user types
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when the user types
};

const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation: Check if username is not empty
    if (!username) {
    setUsernameError("Please enter a username.");
    }

    // Simple validation: Check if password is not empty
    if (!password) {
    setPasswordError("Please enter a password.");
    }

    // If both username and password are provided, submit the form
    if (username && password) {
    console.log('Form Data submitted.', { username, password });
    }
};

return (
    <div>
    <form>
        <label>Enter your name:</label><br />
        <input type='text' value={username} onChange={handleUsernameChange} /><br />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}

        <label>Enter your password:</label><br />
        <input type='password' value={password} onChange={handlePasswordChange} /><br />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    
);
};

export default FormThree;
