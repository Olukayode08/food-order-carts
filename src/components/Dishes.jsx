import React, {useState} from 'react'
import styled from 'styled-components'
import Dish1 from '../images/dish1.webp';
import Dish2 from '../images/dish2.webp';
import Dish3 from '../images/dish3.webp';
import Dish4 from '../images/dish4.webp';
import Dish5 from '../images/dish5.webp';
import Dish6 from '../images/dish6.webp';

const Dishes = () => {
  const [amount, setAmount] = useState('')


  return (
    <>
      <section id='dishes'>
        <Wrapper>
          <div className='heading'>
            <h1 className='why-us'>Our daily dishes</h1>
            <p className='diff'>Check out recommended dishes of your choice</p>
          </div>
          <div className='dishes'>
            <div className='dish'>
              <img src={Dish1} alt='Homely' />
              <h3>Yam and egg sauce</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </div>
            <div className='dish'>
              <img src={Dish2} alt='Homely' />
              <h3>Jollof rice and chicken</h3>
              <div className='cart'>
                <p className='price'>#3500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </div>
            <div className='dish'>
              <img src={Dish3} alt='Homely' />
              <h3>Porridge beans</h3>
              <div className='cart'>
                <p className='price'>#2000.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </div>
            <div className='dish'>
              <img src={Dish4} alt='Homely' />
              <h3>Semo and egusi soup</h3>
              <div className='cart'>
                <p className='price'>5000.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </div>
            <div className='dish'>
              <img src={Dish5} alt='Homely' />
              <h3>Amala and ewedu soup</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' />
                <button>+ Add</button>
              </div>
            </div>
            <div className='dish'>
              <img src={Dish6} alt='Homely' />
              <h3>Eba and okra soup</h3>
              <div className='cart'>
                <p className='price'>#1500.00</p>
                <input type='number' placeholder='1' />
                <button>+ Add</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
const Wrapper = styled.section`
  margin: 50px 100px;
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
  .dishes{
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
  }
  .dish{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    border: 1px solid #ff4d0b;
    padding: 20px;
    margin: auto;
  }
  h3{
    font-size: 20px;
    margin: 10px 0;
  }
  .price{
    font-size: 20px;
    font-weight: 600;
  }
  .cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input{
    width: 55px;
    height: 25px;
    margin-left: 30px;
    border: 1px solid #ff4d0b;
  }
  button{
    background-color: #ff4d0b;
    border: none;
    padding: 10px 30px;
    color: #fff;
    border-radius: 10px;
    font-size: 19px;

  }
`;
export default Dishes