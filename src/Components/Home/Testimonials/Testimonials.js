import React, { useEffect, useState } from "react";

import "./Testimonials.css";

import Testimonial from "../Testimonial/Testimonial";


const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch(`https://sz-repair-guru.herokuapp.com/reviewDetails`)
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
    console.log(testimonialData);
  });
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header tab-pane text-center">
          <h5 className="text-primary text-uppercase">Testimonial</h5>
          <h1>
            What Our Customer <br /> Says{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial 
              testimonial={testimonial}
              key={testimonial.name}
            ></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
