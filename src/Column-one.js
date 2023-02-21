import React, { useState } from 'react';
function Columnone () {
    const [counter, setCounter] = useState(1);
    const handleIncrement = () => setCounter(count => count += 1);
    const handleDecrement = () => setCounter(count => count -= 1);

    return ( 
        <div className="columnOne">
            <form> 
                <p>{ counter }</p> 
            </form>            
            <div className='controls'>
                <button onClick={ handleIncrement } id= "incrementButton" type="submit">+</button>
                <button onClick={ handleDecrement } id= "decrementButton" type="submit">-</button>
            </div>
         
        </div>
     );
}

 
export default Columnone;