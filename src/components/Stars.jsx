import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const starsVariant = {
  hidden: {
    y: '50px',
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
const Stars = () => {
  return (
    <>
      <motion.section
        className='hero'
        transition={{ staggerChildren: 0.3 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.1 }}
      >
        <Wrapper>
          <motion.article
          variants={starsVariant}>
            <div className='partners'>
              <h3>500+</h3>
              <p className='orders'>Food partners</p>
            </div>
            <div className='partners'>
              <h3>10k+</h3>
              <p className='orders'>Orders delivered</p>
            </div>
            <div className='partners'>
              <h3>12k+</h3>
              <p className='orders'>Clients</p>
            </div>
          </motion.article>
        </Wrapper>
      </motion.section>
    </>
  );
};
const Wrapper = styled.section`
  article {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }

  .partners {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
  }
  h3 {
    font-size: 32px;
    margin: 10px 0;
    font-weight: 600;
  }
  .orders {
    font-size: 20px;
    color: #959190;
    font-weight: 500;
  }
  @media screen and (max-width: 700px) {
    article {
      flex-direction: column;
    }
  }
`;
export default Stars;
