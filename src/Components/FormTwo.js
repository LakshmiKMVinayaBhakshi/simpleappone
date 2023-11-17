import React, { useState } from 'react';

const FormTwo= () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation: Check if username and password are not empty
    if (!username || !password) {
    setError("Please enter both username and password.");
    } else {
      setError(""); // Clear the error message if validation passes
    console.log('Form Data submitted.', { username, password });
    }
};

return (
    
    <div className="form-container">
        
    <form>
        <label htmlFor="username">Enter your name:</label><br />
        <input type='text' value={username} onChange={handleUsernameChange} /><br />

        <label htmlFor="password">Enter your password:</label><br />
        <input type='text' value={password} onChange={handlePasswordChange} /><br />

        <button onClick={handleSubmit}>Submit</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </div>
);
};

export default FormTwo;
