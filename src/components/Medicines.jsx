import { useContextLayer } from "../context";
import { Filter } from "./filter"
import './styles.css';


export const Medicines = () => {

    const data = useContextLayer();

    console.log(data, 'fafsasafddfs');
    return (
        <div className="container">
            <Filter />
        </div>
    )
}