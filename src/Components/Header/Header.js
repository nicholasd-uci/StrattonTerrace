import React, { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import Logo from '../../Assets/Logo/Logo.png'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header">
<Navbar light expand="md">
<NavLink id="header__home" href="/"><img src={Logo} alt="main_image"/></NavLink>
        <NavbarToggler color="white"onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="header__Navbar" navbar>
            <NavItem>
            <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Solutions">Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vision">Vision</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default Header

