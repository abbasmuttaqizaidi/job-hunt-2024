import { useEffect } from "react";
import { useState } from "react";
import './styles.css'

export default function MobileProgrammingPrep() {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [laoder, setLoader] = useState(false);

    useEffect(() => {
        getData();
    }, [count]);


    const getData = () => {
        setLoader(true);
        const url = `https://reqres.in/api/users?page=${count}`;
        fetch(url).then(res => res.json()).then(data => {
            if (search === "")
                setData(data?.data ?? []);
            else prepareFilteredList(data?.data);
            setLoader(false)
        });
    }

    const prepareFilteredList = (data = []) => {
        const newArr = data?.filter(elem => elem?.first_name?.startsWith(search));
        setData(newArr);
    }

    const handleInput = (event) => {
        setSearch(event);
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            getData();
        }, 500);

        return () => {
            clearTimeout(debounce);
        }
    }, [search])

    return (
        <div className="container">
            {!laoder ? <>
                <Pagination onChange={setCount} count={count} />
                <input value={search} onChange={(e) => { handleInput(e.target.value) }} />
                <Listrenderer list={data} />
            </> : 'Loading...'}
        </div>
    )
}

const Pagination = (props = {}) => {
    const { onChange, count } = props;

    const onNext = () => {
        onChange(prev => prev + 1);
    }

    const onPrev = () => {
        onChange(prev => prev - 1);
    }

    return (
        <div className="pagination__container">
            <button onClick={onPrev} disabled={count <= 1}>&lt;</button>
            <button onClick={onNext}>&gt;</button>
        </div>
    )
}

const Listrenderer = (props = []) => {
    const { list } = props;
    return (
        list?.map(elem => {
            return <div className="listrenderer__container">
                <div className="list__card">
                    <img src={elem?.avatar} />
                    <p>{elem?.first_name}</p>
                </div>
            </div>
        })
    )
}