import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg';



const Footer = () => {
  return (
    <>
      <section>
        <Wrapper>
          <footer>
            <div className='footer'>
              <img src={logo} alt='Homely' />
              <p className='solution'>
                Solution for easy and flexible getting meals for the
                household.You can trust us anywhere through this platform
              </p>
              <p className='made'>©2022 Made with by Olukayode</p>
            </div>
          </footer>
        </Wrapper>
      </section>
    </>
  );
}
const Wrapper = styled.component`
  

`
export default Footer
