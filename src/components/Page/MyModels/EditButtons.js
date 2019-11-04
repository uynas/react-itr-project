import React from 'react';
import './EditButtons.css';
import {Dropdown, ButtonToolbar, Row} from "react-bootstrap";

let ColorButtonRef = React.createRef();
let ButtonClick=() =>{
    let a=ColorButtonRef.current.innerText;
    alert(a );
}



    const EditButtons = (props)=>
    {
    return (
            <div className="EditButtons">
        <ButtonToolbar >
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Color
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"  ref={ColorButtonRef} onClick={ButtonClick}>Green</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"  ref={ColorButtonRef} onClick={ButtonClick}>Black</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"  ref={ColorButtonRef} onClick={ButtonClick}>White</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button  value="new">new</button>
            <button onClick= {props.addModel}>delete</button>
        </ButtonToolbar>
            </div>
    );
}
export  default  EditButtons;