// principle intrest formula is  (p*t*r)/100;

//p = principle Amount
// t = Time
// r = rate of intrest
// syntax -->   const [x, setx] = useState(defaultValueofx)
import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'


const SimpleIntrest = () => {
const [p ,setp] = useState(0);
const [t, sett] = useState(0);
const [r, setr] = useState(0);
// const [tl, settl] = useState(0);
const [i, seti]  = useState(0);
const calculateIntrest = () => {
    const result = (p*t*r)/100;
    seti(result);
}
return (
    <div>
        <h1>Simple Intrest</h1>
    <div>
        Enter principle amount:
        <input type='text' onChange={e =>{setp(e.target.value)}}/>
    </div>
    <div>
        Enter Time Period:
        <input type='text' onChange={e =>{sett(e.target.value)}}/>
    </div>
    <div>
        Enter Rate of Intrest:
        <input type='text'  onChange={e =>{setr(e.target.value)}}/>
    </div>
        <button onClick={calculateIntrest}>Calculate</button>

    <div>
        intrest :{i}
    </div>
    <div>
        
        Total : {parseInt(p)+parseInt(i)}
    </div>

    </div>
)
}

export default SimpleIntrest