import React, { useState } from 'react';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
import logo from '../images/logo.svg';


const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <section>
        <Wrapper>
          <div className='big-screen'>
            <div>
              <img className='hero-img' src={logo} alt='Essence' />
            </div>
            <ul className='links'>
              <li>
                <Link
                  className='link'
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='link'
                  to='choose'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Why choose us
                </Link>
              </li>
              <li>
                <Link
                  className='link'
                  to='dishes'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Our Dishes
                </Link>
              </li>
              <li>
                <Link
                  className='link'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className='link'
                  to='Testimonials'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className='link'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className={active ? 'open-nav' : 'close-nav'}>
              <Hamburger
                toggled={active}
                toggle={setActive}
                easing='ease-in'
                size={25}
                direction='left'
              />
            </div>
          </div>
          <div className={active ? 'mobile-open' : 'mobile-close'}>
            <ul className='mobile-links'>
              <li className='mobile-link'>
                <Link
                  className='mobile-link'
                  to='dishes'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Our Dishes
                </Link>
              </li>
              <li className='mobile-link'>
                <Link
                  className='mobile-link'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About us
                </Link>
              </li>
              <li className='mobile-link'>
                <Link
                  className='mobile-link'
                  to='Testimonials'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li className='mobile-link'>
                <Link
                  className='mobile-link'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  margin-bottom: 30px;
  background-color: #ffe9e0;
  .big-screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    margin: 0px 100px;
    color: #fff;
  }
  .links {
    display: flex;
  }
  li {
    list-style: none;
  }
  .link {
    text-decoration: none;
    padding: 15px;
    color: #000;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.3s ease-in;
    :hover{
      color: #ff4d00;
    }
  }
  .open-nav {
    position: fixed;
    top: 10px;
    right: 30px;
    z-index: 50;
    color: blue;
  }
  .close-nav {
    display: none;
    z-index: 50;
    color: green;
  }

  @media screen and (max-width: 800px) {
    .close-nav {
      display: block;
    }
    .mobile-close {
      display: block;
    }
    .links {
      display: none;
    }
    .mobile-open {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      background-color: #000;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .mobile-link {
      cursor: pointer;
      color: #fff;
      margin: 10px 0;
      text-decoration: none;
    }
    .mobile-close {
      position: absolute;
      top: -100%;
      left: -100%;
    }
  }
  @media screen and (min-width: 800px) {
    .mobile-open,
    .mobile-close,
    .open-nav {
      display: none;
    }
  }
`;
export default Navbar;
