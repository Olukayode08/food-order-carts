import React from 'react';
import styled from 'styled-components';
import Image from '../images/FoodImage.webp';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <>
      <section>
        <Wrapper>
          <article>
            <div className='hero'>
              <div className='left'>
                <h1 className='hero-heading'>
                  Enjoy <span>home made meals</span> far away from home
                </h1>
                <p className='hero-text'>
                  Helping you enjoy comfortable and healthy food anywhere and
                  anytime on the go
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
                    Order now
                  </Link>
                </p>
              </div>
              <div className='right'>
                <img className='hero-img' src={Image} alt='Essence' />
              </div>
            </div>
          </article>
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 150px;
    font-weight: 400;
  }
  .hero {
    display: flex;
  }
  .right,
  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .hero-heading {
    font-size: 50px;
    font-weight: 300;
  }
  span {
    color: #ff4d00;
  }
  .hero-text {
    font-size: 20px;
    margin: 15px 0 20px 0;
    font-weight: 200;
  }
  .hero-img {
    width: 80%;
    margin: auto;
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
  @media screen and (max-width: 1200px) {
    article {
      margin: 0 80px;
    }
    .hero-img {
      width: 80%;
      margin: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    article {
      margin: 0 120px;
    }
    .hero {
      flex-direction: column;
    }
    .hero-img {
      width: 65%;
      margin: auto;
    }
  }
  @media screen and (max-width: 800px) {
    article {
      margin: 0 60px;
    }
    .hero-heading {
      font-size: 40px;
    }
    .hero-img {
      width: 70%;
      margin: auto;
    }
  }
  @media screen and (max-width: 500px) {
    article {
      margin: 0 20px;
    }
    .hero-heading {
      font-size: 35px;
      line-height: 40px;
    }
    .hero-img {
      width: 70%;
      margin: auto;
    }
    .hero-text {
      font-size: 19px;
      margin: 25px 0;
      line-height: 27px;
    }
  }
`;
export default Hero;
