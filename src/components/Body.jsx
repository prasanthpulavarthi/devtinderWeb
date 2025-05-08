import React, { useDebugValue, useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch ,useSelector} from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios';

const Body = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userData=useSelector((store)=>store.user)
   const fetchUser=async()=>{
    try{
      if (userData) return;
      const res=await axios.get(BASE_URL+"/profile",{withCredentials:true});
      dispatch(addUser(res.data))


    }catch(err){
      navigate('/login')
      console.log(err)
    }
   }

   useEffect(()=>{
  
      fetchUser()

    
   },[])



  return (
    <div><NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Body