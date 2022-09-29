import React from 'react';
import styled from 'styled-components';
import Image from '../images/about-image.webp';
import { Link } from 'react-scroll';
const About = () => {
  return (
    <>
      <section id='about'>
        <Wrapper>
          <div className='hero'>
            <div className='left'>
              <h1 className='hero-heading'>About us</h1>
              <p className='hero-text'>
                I make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? The Hot Plate makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go.
              </p>
              <p>
                <Link
                  className='mobile-link'
                  to='dishes'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  See more
                </Link>
              </p>
            </div>
            <div className='right'>
              <img className='hero-img' src={Image} alt='Essence' />
            </div>
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
  margin: 0 150px;
  font-weight: 400;
  .hero {
    display: flex;
  }
  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .right {
    width: 100%;
  }
  .hero-heading {
    font-size: 45px;
    font-weight: 600;
  }
  span {
    color: #ff4d00;
  }
  .hero-text {
    font-size: 24px;
    margin: 15px 0 20px 0;
    font-weight: 400;
  }
  .mobile-link {
    text-decoration: none;
    background-color: #ff4d00;
    padding: 10px 25px;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
`;
export default About;
