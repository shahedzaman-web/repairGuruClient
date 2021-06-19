
import { useHistory } from "react-router-dom";
import LoginBg from "../../../images/loginBg.jpg";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useContext } from "react";
const LoginAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit} = useForm();

  const history = useHistory();



  const onSubmit = data => {
    console.log(data.email)
    const url = `https://sz-repair-guru.herokuapp.com/admin/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
     
    }).then((res) =>
  
    res.status === 201
    ?  (history.replace("/adminDashboard"),  setLoggedInUser(data.email))
    : alert("Login Failed!")
    );
    
  };
  console.log(loggedInUser)

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" {...register("email")} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"{...register("password")} />
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
