import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/testimonial.svg';
import ImageTwo from '../images/delivery.svg';
import ImageThree from '../images/top-food.svg';
import { motion } from 'framer-motion';


const headingVariant = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.3,
      stiffness: 20,
    },
  },
};
const bodyVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      stiffness: 20,
    },
  },
};
const Whyus = () => {
  return (
    <>
      <motion.section id='choose'
       className='hero'
        transition={{ staggerChildren: 0.3 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.1 }}>
        <Wrapper>
          <motion.div variants={headingVariant} className='heading'>
            <h1 className='why-us'>Why choose us</h1>
            <p className='diff'>This is what makes our product different</p>
          </motion.div>
          <div className='our-diff'>
            <motion.div variants={bodyVariant} className='easy'>
              <img src={ImageOne} alt='Homely' />
              <h5>Easy to order</h5>
              <p>
                Order food at a single click and select all food to order at any
                poin in time and at ease and comfort
              </p>
            </motion.div>
            <motion.div variants={bodyVariant} className='easy'>
              <img src={ImageTwo} alt='Homely' />
              <h5>Fast delivery</h5>
              <p>
                Food delivery fast and reliable and get delivered at deliivery
                time and location any day, any time
              </p>
            </motion.div>
            <motion.div variants={bodyVariant} className='easy'>
              <img src={ImageThree} alt='Homely' />
              <h5>100% quality</h5>
              <p>
                We provide quality food for you and your loved ones for health
                and so onnnnnn and for wellness
              </p>
            </motion.div>
          </div>
        </Wrapper>
      </motion.section>
    </>
  );
};

const Wrapper = styled.section`
  margin: 70px 0;
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
    margin: 40px 100px;
  }
  .easy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    margin: 20px;
    height: 400px;
    background-color: #fff;
  }
  h5 {
    font-size: 24px;
    margin: 10px 0;
  }
  p {
    text-align: center;
    font-size: 17px;
  }

  @media screen and (max-width: 1300px) {
    .our-diff {
      margin: 40px 100px;
    }
  }
  @media screen and (max-width: 1050px) {
    .our-diff {
      flex-direction: column;
      margin: 40px 200px;
    }
    .easy {
      height: 300px;
    }
  }
  @media screen and (max-width: 850px) {
    .our-diff {
      flex-direction: column;
      margin: 40px 90px;
    }
    .easy {
      height: 250px;
    }
  }
  @media screen and (max-width: 600px) {
    .our-diff {
      flex-direction: column;
      margin: 40px 10px;
    }
    .easy {
      height: 250px;
    }
  }
`;
export default Whyus;
