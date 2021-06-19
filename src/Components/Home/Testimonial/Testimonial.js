import React from "react";

const Testimonial = (props) => {
  const { Name, email, description } = props.testimonial;
  console.log(props);
  return (
    <div className="card bg-light m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <p className="card-text ">Name: {Name}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <div>
          <h6 className="">Email: {email}</h6>
          <p className="m-0">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
