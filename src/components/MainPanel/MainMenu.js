import React from 'react';
import {Navbar,Nav,Form,FormControl,Button,NavDropdown}  from 'react-bootstrap'
import s from './MainMenu.css';
const Menu = ()=>
{
    return (<>
            <Navbar bg="light" variant="light" width>

                <Nav className="mr-auto">

                    <Nav.Link href="home"  active={s.activeLink} >Home</Nav.Link>
                    <Nav.Link href="profile">Profile</Nav.Link>
                    <Nav.Link href="mymodels">My Models</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
</>
    );
}
export  default  Menu;