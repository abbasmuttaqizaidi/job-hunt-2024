import React, { useCallback, useState } from "react"

export const UseCallBackDemo = () => {

    const [count, setCounter] = useState(0);

    const handleCounter = useCallback(() => {
        setCounter(prov => prov + 1)
    }, [])

    console.log('Parent rendered');
    return <>
        <button onClick={handleCounter}>Increasee couter: {count}</button>
        <ChildComponent handleCounter={handleCounter} />
    </>
}

export const ChildComponent = React.memo((props) => {
    console.log(props, 'rendered');
    return (
        <>Child component</>
    );
});