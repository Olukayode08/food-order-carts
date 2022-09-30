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
          <nav>
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
                    to='testimonial'
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
                    to='hero'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className='mobile-link'>
                  <Link
                    className='mobile-link'
                    to='choose'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Why choose us
                  </Link>
                </li>
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
                    to='about'
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
          </nav>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  margin-bottom: 150px;

  nav {
    background-color: #ffe9e0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
  }
  .big-screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    margin: 0px 100px;
    color: #fff;
  }
  .hero-img {
    position: absolute;
    top: 20px;
    left: 15px;
    z-index: 50;
    align-items: center;
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
    color: #959190;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    transition: all 0.3s ease-in;
    :hover {
      color: #ff4d00;
    }
  }
  .open-nav {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 50;
    color: #000;
  }
  .close-nav {
    display: none;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 50;
    color: #000;
  }

  @media screen and (max-width: 1050px) {
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
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 350px;
      background-color: #ffe9e0;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .mobile-link {
      cursor: pointer;
      color: #000;
      margin: 10px 0;
      text-decoration: none;
    }
    .mobile-close {
      position: absolute;
      top: -100%;
      left: -100%;
    }
    .big-screen {
      margin: 0 0px;
    }
  }
  @media screen and (min-width: 1050px) {
    .mobile-open,
    .mobile-close,
    .open-nav {
      display: none;
    }
  }
`;
export default Navbar;
