
// syntax -->   const [x, setx] = useState(defaultValueofx)





import React, { useState } from 'react'

const Increment = () => {
    const [z,setz]= useState(0);
    const IncreaseTheValue = () => {setz(z+1)}
    const DecreaseTheValue = () => {setz(z-5)}
return (
    <div>
        <h1>count :{z}</h1>
        <button onClick={IncreaseTheValue}>Increment</button>
        <button onClick={DecreaseTheValue}>Decrement</button>


    </div>
    
)
}

export default Increment