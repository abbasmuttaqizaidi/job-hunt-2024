import { forwardRef, useImperativeHandle, useRef } from "react"

export const ForwardRefsIndex = () => {
    const inputrefParent = useRef(null);

    const handleRef = () => {
        inputrefParent.current.focusInput();
    }

    return (
        <>
            <Child ref={inputrefParent} />
            <button onClick={() => {
                handleRef()
            }}>Click</button>
        </>
    )
}

export const Child = forwardRef((props, ref) => {

    const inputrefChild = useRef(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputrefChild.current.focus()
        }
    }))

    return <input ref={inputrefChild} />

})