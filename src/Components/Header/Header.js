import React, { useState } from 'react'
import './Header.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import Logo from '../../Assets/Logo/LOGO.gif'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='header'>
      <Navbar light expand='md'>
        <NavLink id='header__home' href='/'><img src={Logo} alt='Website' /></NavLink>
        <NavbarToggler color='white' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='header__Navbar' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/solutions'>Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/portfolio'>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/About'>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>Contact</NavLink>
            </NavItem>
            <NavLink href='https://calendly.com/strattonterrace/30min' target='_blank' alt='Button' ><button id='header__button'>
              Book a consultation</button>
              </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
