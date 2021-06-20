
import { useHistory, useLocation } from "react-router-dom";
import LoginBg from "../../../images/loginBg.jpg";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useContext } from "react";

const LoginAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit} = useForm();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = data => {
    const url = `https://sz-repair-guru.herokuapp.com/admin/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
     
    }).then((res) =>

 res.status === 201
    ?  (history.replace(from),
    setLoggedInUser('email', data.email))
    : alert("Login Failed!")
    );
    
    
  

    
  };
  sessionStorage.setItem("email",loggedInUser)
  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" {...register("email")} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"{...register("password")} />
  </div>
  <input type="submit" className="btn btn-primary" />
         
</form>
       
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
