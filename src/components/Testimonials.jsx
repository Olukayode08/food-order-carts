import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { slider } from './data';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <>
      <section id='testimonial'>
        <Wrapper>
          <div className='heading'>
            <h2 className='why-us'>Testimonials</h2>
            <p className='diff'>This is what our client are saying</p>
          </div>
          <div>
            <div className='slider-container'>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: '.swiper-custom-navigation-prev',
                  nextEl: '.swiper-custom-navigation-next',
                }}
              >
                {slider.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div>
                      <article className='slider'>
                        <h3 className='name'>{slide.name}</h3>
                        <p className='state'>{slide.state}</p>
                        <p className='text'>{slide.text}</p>
                      </article>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='btn-container'>
            <button className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate'>
              <AiOutlineArrowLeft size={25} />
            </button>
            <button className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'>
              <AiOutlineArrowRight size={25} />
            </button>
          </div>
          <div className='subscribe'>
            <div className='heading'>
              <h2 className='why-us'>Subscribe to our Newsletter</h2>
              <p className='diff'>
                Enter your Email address to get daily offers and news
              </p>
              <div className='input'>
                <input type='email' placeholder='Enter your email' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .why-us {
    font-size: 40px;
  }
  .diff {
    font-size: 20px;
    color: #959190;
    font-weight: 500;
    margin-top: 10px;
  }
  .slider-container {
    width: 500px;
    height: 230px;
    background-color: rgba(255, 77, 0, 0.6);
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    margin: 30px 0;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-size: 27px;
    font-weight: 500;
  }
  .state {
    font-size: 24px;
    margin: 10px 0;
  }
  .text {
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    margin-bottom: 50px;
  }
  .frontNavigate {
    position: absolute;
    top: 30%;
    right: 25%;
    background-color: #ff4d00;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 10px;
  }
  .backNavigate {
    position: absolute;
    top: 30%;
    left: 25%;
    background-color: #ff4d00;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 7px;
  }
  .subscribe {
    margin: 60px 0;
  }
  .input {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    font-family: 'Space Grotesk', sans-serif;
    width: 350px;
    height: 50px;
    border: 1px solid #959190;
    margin-right: 10px;
    outline-color: #140d09;
    border-radius: 10px;
  }
  input::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    color: #959190;
    font-size: 17px;
    padding-left: 15px;
  }
  button {
    background-color: #ff4d00;
    color: #fff;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    .backNavigate {
      left: 10%;
    }
    .frontNavigate {
      right: 10%;
    }
  }
  @media screen and (max-width: 900px) {
    .btn-container {
      display: none;
    }
    .subscribe {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 700px) {
    .slider-container {
      width: 365px;
      height: 280px;
    }
    .why-us {
      text-align: center;
      font-size: 37px;
    }
    .diff {
      font-size: 18px;
    }
    input {
      width: 200px;
    }
    .diff {
      text-align: center;
    }
  }
  @media screen and (max-width: 370px) {
    .slider-container {
      width: 350px;
      height: 300px;
    }
  }
  @media screen and (max-width: 280px) {
    .slider-container {
      width: 270px;
      height: 300px;
    }
    .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .why-us {
      font-size: 30px;
    }
  }
`;
export default Testimonials;
