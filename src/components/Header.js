import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";


const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
        // eslint-disable-next-line
    },[darkMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}  //bg-light 
                className={darkMode? 'bg-light-black border-bottom':  'border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100, background:"gray"}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand style={{listStyle:"none ", textDecoration:'none'}} className={darkMode? ' text-dark-red': 'text-light-red'}>
                <b > Shopping</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-5">
              {/* <Link to="sign-in" className={`nav-link ${darkMode? 'text-dark-black' : 'text-light-white'}`}>
                Sign in
              </Link> */}
              <Nav.Link 
                className={darkMode? 'text-dark-red': 'text-light-red'}
                onClick={()=>setDarkMode(!darkMode)}
              >
                {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />}
              </Nav.Link>
              <Link to="my-account" className={`nav-link ${darkMode? 'text-dark-red': 'text-light-red'}`}>
                  <VscAccount size="1.8rem"/>
                  &nbsp;My Account
              </Link>
              <Link
                to="/cart"
                className={`${darkMode? 'text-dark-gray': 'text-light-black'} d-flex align-items-center`}
              >
                <BiCart size="2rem" style={{color:'black'}} className={`${darkMode? 'text-light-black': 'text-light-primary'}`}/>
                {!isEmpty && <span style={{  position: 'relative', listStyle:'none', textDecoration:'none', left: '-13px', color:'red', top: '-16px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-103px': 0}}></span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;