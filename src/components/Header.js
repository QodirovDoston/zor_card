import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const Header = () => {
  const { t } = useTranslation()

  const handlClick = (lang) => {
      i18next.changeLanguage(lang)
  }
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  },);

  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"
      variant={darkMode ? 'dark' : 'light'}  //bg-light 
      className={darkMode ? 'bg-light-black border-bottom' : 'border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100, background: "gray" }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand style={{ listStyle: "none ", textDecoration: 'none' }} className={darkMode ? ' text-dark-red' : 'text-light-red'}>
            <b > {t("shopping")}</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
            {/* <Link to="sign-in" className={`nav-link ${darkMode? 'text-dark-black' : 'text-light-white'}`}>
                Sign in
              </Link> */}
            <Nav.Link
              className={darkMode ? 'text-dark-red' : 'text-light-red'}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-red' : 'text-light-red'}`}>
              <VscAccount size="1.8rem" />
              &nbsp;{t('text')}
            </Link>
            <Link
              to="/cart"
              className={`${darkMode ? 'text-dark-gray' : 'text-light-black'} d-flex align-items-center`}
            >
              <BiCart size="2rem" style={{ color: 'black' }} className={`${darkMode ? 'text-light-black' : 'text-light-primary'}`} />
              {!isEmpty && <span style={{ position: 'relative', listStyle: 'none', textDecoration: 'none', left: '-13px', color: 'red', top: '-16px' }}>{totalItems}</span>}
              <span style={{ marginLeft: !isEmpty ? '-103px' : 0 }}></span>
            </Link>
            <Form.Select onChange={(e)=>handlClick(e.target.value)}  style={{ backgroundColor:'transparent', borderRadius:'none'}}>
              <option className='m-2'  value="rus">Russian</option>
              <option className='m-2'  value="uz">Uzbek</option>
              <option className='m-2'  value="eng">English</option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;