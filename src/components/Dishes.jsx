import React, { useState } from 'react';
import styled from 'styled-components';
import Dish1 from '../images/dish1.webp';
import Dish2 from '../images/dish2.webp';
import Dish3 from '../images/dish3.webp';
import Dish4 from '../images/dish4.webp';
import Dish5 from '../images/dish5.webp';
import Dish6 from '../images/dish6.webp';
import { motion } from 'framer-motion';


const dishVariant = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
      stiffness: 20,
    },
  },
}
const dishTwoVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
      stiffness: 20,
    },
  },
};

const Dishes = () => {
  const [amount, setAmount] = useState('');

  return (
    <>
      <motion.section
        id='dishes'
        className='hero'
        transition={{ staggerChildren: 0.3 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.1 }}
      >
        <Wrapper>
          <motion.div variants={dishVariant} className='heading'>
            <h1 className='why-us'>Our daily dishes</h1>
            <p className='diff'>Check out recommended dishes of your choice</p>
          </motion.div>
          <div className='dishes'>
            <motion.div variants={dishVariant} className='dish'>
              <img src={Dish1} alt='Homely' />
              <h3>Yam and egg sauce</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </motion.div>
            <motion.div variants={dishVariant} className='dish'>
              <img src={Dish2} alt='Homely' />
              <h3>Jollof rice and chicken</h3>
              <div className='cart'>
                <p className='price'>#3500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </motion.div>
            <motion.div variants={dishVariant} className='dish'>
              <img src={Dish3} alt='Homely' />
              <h3>Porridge beans</h3>
              <div className='cart'>
                <p className='price'>#2000.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </motion.div>
            <motion.div variants={dishTwoVariant} className='dish'>
              <img src={Dish4} alt='Homely' />
              <h3>Semo and egusi soup</h3>
              <div className='cart'>
                <p className='price'>5000.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </motion.div>
            <motion.div variants={dishTwoVariant} className='dish'>
              <img src={Dish5} alt='Homely' />
              <h3>Amala and ewedu soup</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </motion.div>
            <motion.div variants={dishTwoVariant} className='dish'>
              <img src={Dish6} alt='Homely' />
              <h3>Eba and okra soup</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' placeholder='1' />
                <button>+ Add</button>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </motion.section>
    </>
  );
};
const Wrapper = styled.section`
  margin: 50px 0;
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
    text-align: center;
  }
  .dishes {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 100px;
  }
  .dish {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    border: 1px solid #ff4d0b;
    padding: 20px;
    margin: auto;
  }
  h3 {
    font-size: 20px;
    margin: 10px 0;
  }
  .price {
    font-size: 20px;
    font-weight: 600;
  }
  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    width: 55px;
    height: 25px;
    margin-left: 30px;
    border: 1px solid #ff4d0b;
  }
  button {
    background-color: #ff4d0b;
    border: none;
    padding: 10px 30px;
    color: #fff;
    border-radius: 10px;
    font-size: 19px;
  }
  @media screen and (max-width: 800px) {
    .dishes {
      margin: 50px 20px;
    }
    .dish {
      border: none;
      border-bottom: 1px solid #ff4d0b;
    }
    .why-us {
      text-align: center;
    }
    button {
      padding: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    button {
      padding: 7px;
    }
  }
  @media screen and (max-width: 300px) {
    .dishes {
      margin: 50px 10px;
    }
    .dish {
      width: 260px;
    }
    .diff,
    .why-us {
      text-align: center;
    }
  }
`;
export default Dishes;
