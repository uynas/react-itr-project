import React from 'react';
import './Model.css';

const text = "Why you doing this? Get out (」°ロ°)」(」°ロ°)」(」°ロ°)」(」°ロ°)」(」°ロ°)」";
const Model = (props) => {

    return (
        <div>
            <div>{props.name}</div>
            <div className="Model"
            >
                <img className="print" src={props.imageUrl}/>
            </div>
            <div>
                <button onClick={props.sort}>Buy</button>
            </div>


        </div>

    );

};

export default Model;
