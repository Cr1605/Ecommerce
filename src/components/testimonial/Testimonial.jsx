import React from 'react'
import './Testimonial.css'
import Hero from '../../assets/testimonialHero.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {TestimonialsData} from '../../data/testimonials'

const Testimonial = () => {
    return (
        <div className='testimonials'>
            <div className="wapper">
                <div className="containers">
                    <span>Top Rated</span>
                    <span>SEEDILY SAY HAS SUITABLE DISPOSAL</span>
                </div>

                <img src={Hero} alt="" />

                <div className="containers">
                    <span>100K</span>
                    <span>HAPPY CUSTOMERS WITH US</span>
                </div>
            </div>

            <div className="reviews">
                Reviews
            </div>

            <div className="carousal">
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className='tCalrousel'
                >
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className="testimonal">
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr></hr>
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial
