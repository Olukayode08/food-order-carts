import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/testimonial.svg'
import ImageTwo from '../images/delivery.svg';
import Image from '../images/FoodImage.webp';
import ImageThree from '../images/top-food.svg';


const Whyus = () => {
  return (
    <>
      <section id='choose'>
        <Wrapper>
          <div className='heading'>
            <h1 className='why-us'>Why choose is</h1>
            <p className='diff'>This is what makes our product different</p>
          </div>
          <div className='our-diff'>
            <div className='easy'>
              <img src={ImageOne} alt='Homely' />
              <h5>Easy to order</h5>
              <p>
                Order food at a single click and select all food to order at any
                poin in time and at ease and comfort
              </p>
            </div>
            <div className='easy'>
              <img src={ImageTwo} alt='Homely' />
              <h5>Fast delivery</h5>
              <p>
                Food delivery fast and reliable and get delivered at deliivery
                time and location any day, any time
              </p>
            </div>
            <div className='easy'>
              <img src={ImageThree} alt='Homely' />
              <h5>100% quality</h5>
              <p>
                We provide quality food for you and your loved ones for health
                and so onnnnnn and for wellness
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

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
  .our-diff {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffe9e0;
    margin: 40px 0;
  }
  .easy{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    margin: 20px;
    height: 400px;
    background-color: #fff;
  }
  h5{
    font-size: 24px;
    margin: 10px 0;
  }
  p{
    text-align: center;
    font-size: 17px;
  }
`;
export default Whyus;
