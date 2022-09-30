import React from 'react'
import styled from 'styled-components'

const Stars = () => {
  return (
    <>
      <section>
        <Wrapper>
          <article>
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
          </article>
        </Wrapper>
      </section>
    </>
  );
}
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
    article{
      flex-direction: column;
    }
  }
`;
export default Stars
