import React from 'react'
import styled from 'styled-components'
import Image from '../images/mobile.webp';


const GetApp = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className='heading'>
            <h1 className='why-us'>Get our mobile app</h1>
            <p className='diff'>Enjoy better experience</p>
          </div>
          <div className='hero'>
            <div className='left'>
              <p className='hero-text'>
                With our app, you never have to settle for unhealthy, expensive
                takeaway food again. From spicy noodles to fresh salads, we'll
                deliver anywhere in your city. Get tasty meals in just 30
                minutes. It's simple. We make it easy for you to make smart
                business decisions fast. Whether you have a busy schedule or
                just enjoy home-cooked food,
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
}
const Wrapper = styled.section`
  margin: 70px 150px;
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #ff4d0b;
    font-size: 40px;
  }
  .diff {
    font-size: 20px;
    color: #959190;
    font-weight: 500;
    margin-top: 10px;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
  }
  .left {
    width: 120%;
    border: 1px solid black;
  }
  .right {
    width: 100%;
    border: 1px solid yellow;
  }
  img {
    border: 1px solid yellow;
    margin-top: 120px;
  }
  .hero-text {
    font-size: 23px;
    font-weight: 300;
  }
`;
export default GetApp
