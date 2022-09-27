import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <section>
        <Wrapper>
          <div className='big-screen'>
            <div>
              <Link className='link' to='/'>
                Essence
              </Link>
            </div>
            <div>
              <Link className='link' to='/dishes'>
                Our Dishes
              </Link>
              <Link className='link' to='/about'>
                About us
              </Link>
              <Link className='link' to='/testimonial'>
                Testimonials
              </Link>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </div>
          </div>
          <div>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={25}
              direction='left'
            />
          </div>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  .big-screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  .link {
    text-decoration: none;
    padding: 10px;
    color: #000;
  }
`;
export default Navbar;
