import React from 'react'
import styled from 'styled-components'
import Google from '../images/apple.png';
import Apple from '../images/download.png';
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
              <div className='download'>
                <img className='apple' src={Google} alt='Homely' />
                <img className='app' src={Apple} alt='Homely' />
              </div>
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
  margin: 50px 150px;
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
    margin: 50px 0;
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
  .hero-text {
    font-size: 23px;
    font-weight: 300;
  }
  .download{
    display: flex;
    align-items: flex-start;
    margin: 15px 0;
  }
  .app{
    width: 37%;
  }
  .apple{
    width: 30%;
    margin-top: 8px;
    margin-right: 20px;
  }
  .hero-img{
    width: 100%;
  }
`;
export default GetApp