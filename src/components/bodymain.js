import React, { useState } from 'react'
import '../App.css';

const bodymain = () => {

    const [count, setCount] = useState(0)

    const setCounts = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }


    return (
        <>
            <div className="CountCenter container ">

                <h1 >Count {count}</h1>
                <button onClick={setCounts} className="button is-primary is-outlined"> + </button>
                <button onClick={minus} className="button is-primary is-outlined"> - </button>
            </div>

        </>
    )
}
export default bodymain