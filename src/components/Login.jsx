import axios from 'axios';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const [emailId,setEmailId]=useState("simran@gmail.com");
  const [password,setPassword]=useState("Simran@12345");
  const [err,setErr]=useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()

const handleLogin= async ()=>{
  try{
 const res=await axios.post(BASE_URL+"/login",{
    emailId,password
  },{withCredentials:true})
  dispatch(addUser(res.data))
  navigate("/")

}
  catch(err){
    setErr(err.response.data);
    console.error(err)
  }

}

  return (
    <div className='flex justify-center my-10'> 
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className=''>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id</legend>
  <input type="text" value={emailId} className="input" placeholder="" onChange={(e)=>setEmailId(e.target.value)}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" value={password} className="input" placeholder="" onChange={(e)=>setPassword(e.target.value)} />
</fieldset>
    </div>
    <p className="text-red-500">{err}</p>
    <div className="card-actions justify-center py-4">
      <button className="btn btn-primary " onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login