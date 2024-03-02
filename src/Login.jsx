import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  let [user, setUser] = useState({
    email: "",
    password: ""
  })
  let navigate = useNavigate();


  async function handleLogin(e) {
    e.preventDefault();
    let verifyLogin = await axios.post('http://localhost:8000/account/signin', user)
    if (verifyLogin.status === 200) {
      localStorage.setItem('token',JSON.stringify(verifyLogin.data))
      navigate('/')
    } else {
      console.log("login failed")
    }

  }

  function handleChange(e) {
    let { name, value } = e.target;
    if (name === 'email') {
      setUser({ ...user, email: value })
    } else if (name === 'password') {
      setUser({ ...user, password: value })
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-nowrap">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={user.email} placeholder="email" className="input input-bordered" required onChange={handleChange} name="email" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input value={user.password} type="password" placeholder="password" className="input input-bordered" required onChange={handleChange} name="password" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-xs text-center">New here <span className="underline text-blue-500"><a href="/register">Register</a></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login