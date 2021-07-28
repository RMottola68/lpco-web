import React, {useEffect, useState} from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import LPLOGOCLEAN from './assets/LPLOGOCLEAN.png';
import LPLOGONONUM from './assets/LPLOGONONUM.png';
import  {NavLink } from "react-router-dom";

const Navigation = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container  className={'d-flex justify-content-between'}>
                <Navbar.Brand href="Home" className={'col-6 '}>
                    <div className={'col-2 col-lg-12'}>
                    <img
                        alt=""
                        src={LPLOGONONUM}
                        width="150"
                        height="100"
                        className="d-inline-block align-middle me-auto"
                    /> {' '}
                    </div>

                </Navbar.Brand>

                {/* <div className={'col-4 col-sm-4'} >
                    <h5 className={''}>LP & COMPANY HAIR DESIGN</h5>
                </div> */}

                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"/>
                
                    <Navbar.Collapse id="basic-navbar-nav" >
                        
                        <Nav className="col-12">
                            <Nav.Link href="#home" onClick={() => setExpanded(false)}><NavLink to={'/Home'} ><Button type={'button'} variant="outline-danger" className={''}>Home</Button></NavLink></Nav.Link>
                            <Nav.Link href="#services" onClick={() => setExpanded(false)}><NavLink to={'/Services'} ><Button type={'button'}  variant="outline-danger" className={''} >Services</Button></NavLink></Nav.Link>
                            <Nav.Link href="#community" onClick={() => setExpanded(false)}><NavLink to={'/Community'} ><Button type={'button'}  variant="outline-danger" className={''} >Community</Button></NavLink></Nav.Link>
                            <Nav.Link href="#contact" onClick={() => setExpanded(false)}><NavLink to={'/Contact'} ><Button type={'button'}  variant="outline-danger" className={''} >Contact</Button></NavLink></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigation;
