import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate()
  let [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  function handleChange(e) {
    let { value, name } = e.target;
    if (name === 'name') {
      setNewUser({ ...newUser,name:value })
    } else if (name === 'email') {
      setNewUser({ ...newUser,email:value })
    } else if (name === 'password') {
      setNewUser({ ...newUser,password:value })
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    let register = await axios.post('http://localhost:8000/account/signup',newUser)
    if(register.status === 200){
      console.log(register)
      navigate('/')
    }else{
      console.log(register)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-nowrap">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input value={newUser.name} type="text" placeholder="Name" className="input input-bordered" required name="name" onChange={handleChange}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input value={newUser.email} type="email" placeholder="email" className="input input-bordered" required name="email" onChange={handleChange}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input value={ newUser.password} type="password" placeholder="password" className="input input-bordered" required name="password" onChange={handleChange}/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <div>
              <p className="text-xs text-center">Already have Account <span className="underline text-blue-500"><a href="/">Login</a></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register