import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import LPLOGOCLEAN from './assets/LPLOGOCLEAN.png';
import  {NavLink } from "react-router-dom";

const navigation = (props) => {
    return (
        
        <Navbar bg="light" expand="lg">
            <Container  className={'d-flex justify-content-between'}>
                <Navbar.Brand href="Home" className={'col-2 col-xl-4'}>
                    <img
                        alt=""
                        src={LPLOGOCLEAN}
                        width="150"
                        height="100"
                        className="d-inline-block align-middle me-auto"
                    /> {' '}

                </Navbar.Brand>

                <div className={'col-4 col-sm-4'} >
                    <h5 className={''}>LP & COMPANY HAIR DESIGN</h5>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="col">
                        <Nav.Link href="#home"><NavLink to={'/Home'} ><Button type={'button'} variant="outline-danger" className={' '}>Home</Button></NavLink></Nav.Link>
                        <Nav.Link href="#services"><NavLink to={'/Services'} ><Button type={'button'}  variant="outline-danger" className={''} >Services</Button></NavLink></Nav.Link>
                        <Nav.Link href="#community"><NavLink to={'/Community'} ><Button type={'button'}  variant="outline-danger" className={''} >Community</Button></NavLink></Nav.Link>
                        <Nav.Link href="#contact"><NavLink to={'/Contact'} ><Button type={'button'}  variant="outline-danger" className={''} >Contact</Button></NavLink></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default navigation;
