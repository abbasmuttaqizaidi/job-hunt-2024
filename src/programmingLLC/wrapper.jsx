import { useEffect, useState } from "react";

const api = 'https://reqres.in/api/users';

// //page


// export const ProgrammingLLC = () => {


//     const [search, setSearch] = useState('');
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const debounce = setTimeout(() => {
//             getUsers()
//         }, 500);

//         return () => {
//             clearTimeout(debounce)
//         }
//     }, [search])



//     const getUsers = () => {
//         fetch(api).then(res => res.json()).then(users => {
//             let tempusers = users?.data ?? []
//             if (search !== '')
//                 tempusers = prepareFilteredList(users?.data)
//             setUsers(tempusers)
//         })
//     }

//     const prepareFilteredList = (users = []) => {
//         return users.filter(elem => elem?.first_name?.toLowerCase()?.startsWith(search))
//     }

//     return (
//         <div className="container">
//             <input value={search} onChange={(e) => {
//                 setSearch(e.target.value)
//             }} />
//             <ListRenderer users={users} />
//         </div>
//     )
// }

// const ListRenderer = ({ users }) => {

//     return (
//         users?.map(elem => {
//             return (
//                 <>
//                     <li>{elem?.first_name}</li>
//                 </>
//             )
//         })
//     )
// }


//--------------------------------------------------------
export const ProgrammingLLC = () => {


    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        getUsers();
    }, [pageCount])


    const getUsers = () => {
        fetch(api + '&page=' + pageCount).then(res => res.json()).then(users => {
            setData(users?.data ?? [])
        })
    }

    return (
        <div className="container">
            <UserList list={data} />
            <Pagination onClick={setPageCount} pageCount={pageCount} />
        </div>
    )
}

const UserList = ({ list, }) => {
    return (
        <>
            {
                list?.length > 0 ? list.map(e => <li>{e?.name}</li>) : <p>No users found</p>
            }
        </>
    )
}

const Pagination = ({ onClick, pageCount }) => {

    const onNext = () => {
        onClick(prev => prev + 1)
    }

    const onPrev = () => {
        onClick(prev => prev - 1)
    }

    return <div className="pagination__container">
        <button onClick={onPrev} disabled={pageCount === 1}>&lt;</button>
        <button onClick={onNext}>&gt;</button>
    </div>
}