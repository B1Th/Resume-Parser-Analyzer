import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placekitten.com/150/150",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placekitten.com/151/151",
  },
  {
    id: 3,
    author: "Bob Johnson",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://placekitten.com/152/152",
  },
];

const Testimoni = ({ author, text, image }) => (
  <div className="testimonial_container_content">
    <img className="testimonial_image" src={image} alt={`${author}'s avatar`} />
    <p className="testimonial_text">{text}</p>
    <p className="testimonial_author">- {author}</p>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="testimonial">
        <div className="testimonial_box" data-aos="fade-up">
          <h1>
            <span className="gradient-text">Hear</span> From Our
            <span className="gradient-text"> Clients</span>
          </h1>
          <div className="testimonial_container">
            <Slider {...sliderSettings}>
              {testimonialsData.map((testimonial) => (
                <Testimoni key={testimonial.id} {...testimonial} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
