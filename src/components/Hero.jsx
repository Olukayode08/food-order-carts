import React from 'react'
import styled from 'styled-components'
import Image from '../images/FoodImage.webp'
const Hero = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className='hero'>
            <div className='left'>
              <h1 className='hero-heading'>
                Enjoy <span>home made meals</span> far away from home
              </h1>
              <p className='hero-text'>
                Helping you enjoy comfortable and healthy food anywhere and
                anytime on the go
              </p>
              <a href='#dishes' className='dishes'>
                Order Now
              </a>
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
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 100px;
.hero{
    display: flex;
}
  .left,
  .right{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero-heading{
    font-size: 55px;
  }
  span{
    color: #ff4d00;
  }
`
export default Hero
