import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placekitten.com/150/150",
    animation: "fade-right",
    delay: 0,
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placekitten.com/151/151",
    animation: "fade-right",
    delay: 300,
  },
  {
    id: 3,
    author: "Bob Johnson",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://placekitten.com/152/152",
    animation: "fade-right",
    delay: 500,
  },
];

const Testimoni = ({ author, text, image, animation, delay }) => (
  <div
    className="testimonial_container_content"
    data-aos={animation}
    data-aos-delay={delay}
  >
    <img className="testimonial_image" src={image} alt={`${author}'s avatar`} />
    <p className="testimonial_text">{text}</p>
    <p className="testimonial_author">- {author}</p>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="testimonial">
      <h1 data-aos="fade-left">Testimonials</h1>
      <div className="testimonial_container">
        {testimonialsData.map((testimonial) => (
          <Testimoni key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
