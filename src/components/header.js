import React from 'react'
import '../App.css'


const header = (props) => {
    return (
        <div>

            <div className="header CountCenter">
                {props.data ?
                    <>
                        <img src={props.data.avatar_url} alt="avatar" width="70px" />
                        <h1>{props.data.name}</h1>
                        <h2>{props.data.login}</h2>

                        <p><b>id : {props.data.id}</b></p>
                    </>
                    : ''}

            </div>
        </div>
    )

}

export default header