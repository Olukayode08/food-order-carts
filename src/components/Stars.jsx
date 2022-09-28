import React from 'react'
import styled from 'styled-components'

const Stars = () => {
  return (
    <>
      <section>
        <Wrapper>
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
        </Wrapper>
      </section>
    </>
  );
}
const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
    .partners{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20px;
    }
    h3{
        font-size: 29px;
        font-weight: 600;
    }
    .orders{
        font-size: 20px;
        margin-top: 10px;
        color: #959190;
        font-weight: 500;
    }
`
export default Stars
