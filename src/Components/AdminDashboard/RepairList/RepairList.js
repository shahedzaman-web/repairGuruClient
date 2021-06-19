import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RepairList = () => {
  const [bookingList, setBookingList] = useState([]);

  const { setValue, handleSubmit } = useForm();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [id,setId]=useState("")
  useEffect(() => {
    fetch("https://sz-repair-guru.herokuapp.com/bookingListDetails")
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [isSubmitSuccess]);

  const handleSelect = (e) => {
    setValue("status", e.target.value)
    
  };
  const onSubmit = data=>{
    axios.put(`https://sz-repair-guru.herokuapp.com/statusUpdate/${id}`, data)
    .then(response => {
      setIsSubmitSuccess(true)
        console.log(response)});
console.log(data);
}
console.log(id);
  
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark rounded mb-3">
          <h2>Repair List</h2>
        </div>
        <table className="table table-borderless">
          <thead className="ms-2  bg-dark text-white rounded">
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Email Id
              </th>
              <th className="text-secondary" scope="col">
                Services
              </th>

              <th className="text-secondary" scope="col">
                Pay With
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
              <th className="text-secondary" scope="col">
                Status Update
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((bookingList, index) => (
              <tr key={bookingList._id}>
                <td>{index + 1}</td>
                <td>{bookingList.Name}</td>
                <td>{bookingList.email}</td>
                <td>{bookingList.problem}</td>
                <td>{bookingList.payWith}</td>

                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleSelect}
                  >
                    <option defaultValue>{bookingList.status}</option>
                    <option value="pending">pending</option>
                    <option value="onGoing">onGoing</option>
                    <option value="done">done</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-success" onClick={()=>{handleSubmit(onSubmit) ; setId(bookingList._id) }}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RepairList;
