import React, { useState } from "react"

export const ReactDotMemo = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('John');

    return <>
        <button onClick={() => { setCounter(prev => prev + 1) }}>Counter</button>
        <button onClick={() => { setName(name === 'John' ? 'Cena' : 'John') }}>Switch name</button>

        <Greetings name={name}/>
    </>
}

export default ReactDotMemo

export const Greetings = React.memo((name) => {

    const [greet, setGreet] = useState(0);

    console.log('rendered');
    return (
        <>
        <button onClick={()=>{
            setGreet( prev => prev + 1)
        }}> update greet</button>
        Name is: {name?.name}

        Greeting = {greet}
        </>
    )
 },)