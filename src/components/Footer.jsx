import React from 'react'
import logo from '../images/logo.svg';
import styled from 'styled-components';
import {GiLoveHowl} from 'react-icons/gi'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im';



const Footer = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className='about'>
            <footer>
              <div className='footer-one'>
                <img src={logo} alt='Homely' />
                <p className='solution'>
                  Solution for easy and flexible getting meals for the
                  household.You can trust us anywhere through this platform
                </p>
                <p className='made'>
                  ©2022 Made with <GiLoveHowl className='love' /> by
                  <a href='https://github.com/Olukayode08'> Olukayode</a>
                </p>
              </div>
              <div className='footer'>
                <p className='heading'>About</p>
                <p className='text'>Our Company</p>
                <p className='text'>Career</p>
                <p className='text'>Investor Relations</p>
                <p className='text'>Social Impact</p>
              </div>
              <div className='footer-social'>
                <p className='heading'>Social</p>
                <div className='social-icons'>
                  <AiOutlineInstagram className='social-media' />
                  <BsTwitter className='social-media' />
                  <ImFacebook className='social-media' />
                </div>
              </div>
              <p className='made footer'>
                ©2022 Made with <GiLoveHowl className='love' /> by
                <a href='https://github.com/Olukayode08'> Olukayode</a>
              </p>
            </footer>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
const Wrapper = styled.section`
  background-color: rgba(255, 77, 0, 0.6);
  padding: 40px;
  .about {
    margin: 0 30px;
  }
  footer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .footer-social,
  .footer {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .footer-one {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  .heading {
    margin: 10px 0;
    font-size: 27px;
  }
  .social-media {
    margin: 10px 0;
    font-size: 27px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    transition: all 0.3s ease-in;
    :hover {
      background-color: #ff4d00;
    }
  }
  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .solution {
    font-size: 18px;
    margin: 10px 0;
    max-width: 600px;
    line-height: 26px;
  }
  .made.footer {
    display: none;
  }
  .text {
    font-size: 18px;
    margin: 10px 0;
    transition: all 0.3s ease-in;
    cursor: pointer;
    :hover {
      color: #ff4d00;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    margin-top: 5px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    :hover {
      color: #ff4d00;
    }
  }
  @media screen and (max-width: 1050px) {
    footer {
      display: flex;
      flex-direction: column;
    }
    .text {
      font-size: 17px;
      margin: 6px 0;
    }
    .footer-social,
    .footer {
      align-items: flex-start;
      justify-content: flex-start;
    }
    .footer-one {
      margin-bottom: 30px;
    }
    .about {
      margin: 0 90px;
    }
    .social-icons {
      flex-direction: row;
    }
    .social-media {
      margin: 10px 10px;
    }
    .made {
      display: none;
    }
    .made.footer {
      display: block;
      text-align: center;
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 800px) {
    .about {
      margin: 0 30px;
    }
  }
  @media screen and (max-width: 500px) {
    .about {
      margin: 0 15px;
    }
  }
`;
export default Footer