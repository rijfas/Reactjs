import {useState} from 'react'

const Update = () =>{
    var [number, setNumber] = useState(1)
    
    const Adder = () =>{
        setNumber(number + 1);
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={Adder}>Update</button>
        </>
    );
}

export default Update;