import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Image} from 'react-bootstrap'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Register from '../../Login/Register/Register';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {} )
        .catch( error => console.log(error) )
    }

    return (
        <div>
            <Navbar collapseOnSelect className="mb-4" expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to ='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">All News</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>

                    <>
                        {
                            user?.uid?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogOut} variant="light">Logout</Button>
                                </>
                            :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link className='ms-2' to='/register'>Register</Link>
                                </>
                        }
                    </>

                    <Nav.Link eventKey={2} href="#userPhoto">
                        
                    {
                        user?.photoURL?
                            <Image 
                                style={{height : '10 px'}} roundedCircle src ={user.photoURL}>
                            </Image>
                            :
                            <FaUser></FaUser>
                    }
                    
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
    );
};

export default Header;