import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Authentification from "./components/Authentification.jsx"
import AuthentificationSignUp from "./components/AuthentificationSignup.jsx"
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'

const App = () => {
  const [loginState, setLoginState] = useState(true)
  const [data, setData] = useState([])
  const [refrech, setRefrech] = useState(false)
  const [userData, setUserdata] = useState([])
  // const [signinAlert,setSigninAlerte]=useState(false)
  const [userid, setUserid] = useState(1)
  const [dataHome, setDatahome] = useState([])
  const [dataProfile, setDataprofile] = useState([])
const [image,setImage] = useState("")

const onChangeFile = (e)=>{
  const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "x83nan8v");
        console.log(formData);
        axios.post("https://api.cloudinary.com/v1_1/detkzcizc/image/upload",formData)
        .then(res=>setImage(res.data.secure_url))
        .catch(err=>console.log(err))
        // formData.append("cloud_name", "dkcwqbl9d");

}

  // const [colorData, setColordata] = useState([])
  // const [categoryData, setCategoryData] = useState([])
  // const [brand, setBrand] = useState([])
 

  const userHome = () => {
    axios.get(`/api/shop/car/getonly/${userid}`)
      .then((res) => { setDatahome(res.data) })
      .catch((err) => console.log(err))
  }
  const userProfile = () => {
    axios.get(`/api/shop/car/getuserCars/${userid}`)
      .then((res) => { setDataprofile(res.data) })
      .catch((err) => console.log(err))
  }
  // const getColors = () => {
  //   axios.get("/api/shop/color/getAll")
  //     .then((res) => { setColordata(res.data) })
  //     .catch((err) => console.log(err))
  // }
  // const getCategory = () => {
  //   axios.get("/api/shop/category/getAll")
  //     .then((res) => { setCategoryData(res.data) })
  //     .catch((err) => console.log(err))
  // }
  // const getBrand = () => {
  //   axios.get("/api/shop/brand/getAll")
  //     .then((res) => { setBrand(res.data) })
  //     .catch((err) => console.log(err))
  // }
  const createCar = async (name, description, price, image) => {
    try {
      const post = await axios.post("/api/shop/car/add", {
        userId: userid,
        name: name,
        description: description,
        price: Number(price),
        image: image
      })
      console.log("Create Button");
      setRefrech(!refrech)
    } catch (error) {
      console.log(error)
      
    }
  }

  const fetch = () => {
    axios.get("/api/shop/car/getAll")
      .then((res) => { setData(res.data) })
      .catch((err) => console.log(err))
  }
  // const getUser = () => {
  //   axios.get("/api/shop/user/getAll")
  //     .then((res) => { console.log(res,"user"), setUserdata(res.data) })
  //     .catch((err) => console.log(err))
  // }
  //   userData.map((e)=>{
  //   const fetchOther = () => {
  //     axios.get(`/api/shop/car/getonly/${e.id}`)
  //       .then((res) => { console.log(res), setData(res.data) })
  //       .catch((err) => console.log(err))
  //   }
  // })

  useEffect(() => {
    fetch()
    userHome()
    userProfile()
    // getColors()
    // getCategory()
    // getBrand()
  }, [refrech])

  const signIn = async (name, email, password) => {
    try {
      const sign = await axios.post(`/api/shop/user/add`, {
        name: name,
        email: email,
        password: password,
      })
    } catch (error) {
      console.log(error);
    }
  }

// const logina = (emailVal,passVal)=>{

  // axios.get(`/api/shop/user/email/${emailVal}`) 
  // .then((res)=>{setUserdata(res),setUserid(res.id),console.log(res,"its res"),console.log(loginState,"its loginstate"),console.log(userData,"its userData")})
  // .catch((err)=>console.log(err))
  // if(userData.email !== emailVal || userData.password !== passVal){
  //   setLoginState(false)
  // }
  // else{
  //   setLoginState(true)
  // }      
  //   }

  const login = async (emailVal, passVal) => {
    try {
     const log = await  axios.get(`/api/shop/user/email/${emailVal}`)
      const dataUs = response.data
      if (dataUs.email !== emailVal || dataUs.password !== passVal) {
        setLoginState(false)
      }
      else {
        setLoginState(true)
      }
      setUserdata(dataUs),
        console.log(dataUs, "its dataUs")
      console.log(loginState, "its loginstate")
      console.log(userData, "its userData")
      setRefrech(!refrech)

    } catch (error) {
      console.log(error)
    }
  }

  const deliteCar= async (id)=>{
    try {
      const del = await axios.delete(`/api/shop/car/${id}`)
      setRefrech(!refrech)
    } catch (error) {
      console.log(error)
    }
  }
  const updateCar = async (idUpdate,name, description, price, image)=>{
    try {
    const up = await  axios.put(`/api/shop/car/${idUpdate}`,{
        name: name,
        description: description,
        price: Number(price),
        image: image
   
      })
      console.log("this is update");
      setRefrech(!refrech)
    } catch (error) {
      console.log(error);
    }
  }

  
  
     const searchProfile = async (name)=>{
      console.log("name",name);
    try {
    const sear = await  axios.get(`/api/shop/car/search/${1}/${name}`)
    setDatahome(sear.data)

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>

      <BrowserRouter>

        <Link to="/"></Link>
        <Link to="/signup"></Link>
        <Link to="/home"></Link>
        <Link to="/home/profile"></Link>


        <Routes>

          <Route path="/" element={<Authentification login={login} loginState={loginState} />} ></Route>
          <Route path="/signup" element={<AuthentificationSignUp signIn={signIn} />} ></Route>
          <Route path="/home" element={<Home  searchProfile={searchProfile} deliteCar={deliteCar} dataHome={dataHome} />} ></Route>
          <Route path="/home/profile"   element={<Profile   onChangeFile={onChangeFile} updateCar={updateCar} deliteCar={deliteCar} createCar={createCar}  dataProfile={dataProfile} />} ></Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
