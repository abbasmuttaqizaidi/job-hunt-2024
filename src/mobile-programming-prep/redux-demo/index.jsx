// Counter.js
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reduxTradiotional/actions';

const ReduxDemo = () => {
    const dispatch = useDispatch();
    const countVa = useSelector(state=>state?.counter?.count);
    return (
        <div>
            <h2>ReduxDemo: {countVa}</h2>
            <button onClick={()=>{
                dispatch(increment())
            }}>Increment</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>Decrement</button>
        </div>
    );
};

export default ReduxDemo;

// const mapStateToProps = (state) => ({
//     count: state.count,
// });

// const mapDispatchToProps = {
//     increment,
//     decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
