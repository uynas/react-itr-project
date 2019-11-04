import React from 'react';
import './Models.css';
import "bootstrap/dist/css/bootstrap.css";
import Model from "./Model";
import {Container, Row} from "react-bootstrap";
import UnderRoutes from "../UnderRoutes/UnderRoutes";

const Models = (props) => {
    const Models = (props) => {
        return (
            props.Models.Models.map(p => <Model name={p.name} imageUrl={p.imageUrl} sort={props.sort}/>)

        )
    }
    return (
        <div className="app-wrapper">
            <UnderRoutes className='header'>
            </UnderRoutes>
            <div className='Panel'>

                <Container>
                    <Row>
                        {Models(props)}
                    </Row>
                </Container>
            </div>
        </div>


    );
};

export default Models;
