import { useState } from "react"
import './styles.css'
export const AccordionGateway = () => {

    const [isOpen, setIsOpen] = useState(false);
    const activator = <button onClick={() => {
        setIsOpen(!isOpen);
    }}>Open</button>
    return <>
        <Accordion isOpen={isOpen} activator={activator} body={<>Greetings</>} setIsOpen={setIsOpen} title={'Item'} />
    </>
}

export const Accordion = ({
    isOpen,
    setIsOpen,
    activator,
    title,
    body
}) => {
    return (
        <div className="accordion">
            <div className="accordion__activator">
                {activator}
            </div>
            {isOpen && <div className="accordion__structure">
                <div className="accordion__header">{title}</div>
                <div className="accordion__body">{body}</div>
            </div>}
        </div>
    )
}