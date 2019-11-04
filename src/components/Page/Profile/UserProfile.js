import React from 'react';
import './UserProfile.css'
import {Container, Row} from "react-bootstrap";


const UserProfile = (props) => {

    return (<Container>
            <div className='UserProfile'>
                <div>
                    <Row>
                        <div className="Header"> Profile</div>
                    </Row>
                    <Row> <img class="rounded-circle Avatar" src={props.User.User.image}></img> </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <div className="Row"> Login:</div>
                        <div className="Value">{props.User.User.login}</div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="Row"> Name:</div>
                        <div className="Value">{props.User.User.name}</div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="Row"> Second Name:</div>
                        <div className="Value">{props.User.User.secondName}</div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="Row"> Male:</div>
                        <div className="Value">{props.User.User.login}</div>
                    </Row>
                    <br/>
                    <button className="ChangingButton">Change</button>

                </div>

            </div>
        </Container>
    );
}
export default UserProfile;
