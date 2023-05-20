import { useEffect, useState } from "react";
// import moment from "moment"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home"
import Signup from "./components/Signup";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Post from "./components/Post";
// import Hidden from "./components/Hidden";
// import sun from "./icons/sun.png";
// import lightRain from "./icons/light-rain.png";
// import heavyRain from "./icons/heavy-rain.png";
// import onlyCloud from "./icons/only-cloud.png";
// import SearchIcon from '@mui/icons-material/Search';
// import Login from './components/Login'
// import Signup from "./components/Signup";

function App() {

  // // Current data
  // // const [data, setData] = useState("");
  // const [time, setTime] = useState("");
  // const [temp, setTemp] = useState("11");
  // const [cloud, setCloud] = useState("0");
  // const [date, setDate] = useState("0");
  
  // // Location data
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("0");

  
  // // Getting search input
  // const [searchValue, setSearchValue] = useState("london")
  // function handleChange(e) {
  //   setSearchValue(e.target.value);
  //   console.log(searchValue);
  // }

  // // To search location
  // let locationAPI = `http://api.weatherapi.com/v1/search.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}`;
  // const fetchLocation = async (url) => {
  //   try {
  //     const locationRes = await fetch(url);
  //     const locationData = await locationRes.json();
  //     // console.log(locationData);
  //     setCity(locationData[0].name);
  //     setCountry(locationData[0].country);
  //     setRegion(locationData[0].region);
  //     // console.log(locationData[0].name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // // to fetch current weather data
  // let API = `http://api.weatherapi.com/v1/current.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}&aqi=no`;
  // const fetchApiData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // console.log(data);
  //     // setData(data);
  //     // Formating date
  //     var mydate = data.location.localtime.slice(0, 10);
  //     var myFormat =  moment(mydate).format("dddd, DD-MMM-YYYY");
  //     setDate(myFormat);
  //     setTime(data.location.localtime.slice(10, 16));
  //     setTemp(data.current.temp_c);
  //     setCloud(data.current.cloud);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // week forcasting days
  // let newdaysData;
  // const [element, setElement] = useState(); 
  // // const [day1, setDay1] = useState("");
  // const fetchForcasting = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     let daysData = data.forecast.forecastday
  //       newdaysData = daysData.slice(1).map((day) => {
  //         let abc = day.day.condition.icon;
  //         var mydate = day.date;
  //         var weekDayName =  moment(mydate).format('dddd');
  //         let temp = day.day.avgtemp_c;
  //         // let cloud = day.hour[0].cloud;
  //         // let image;
  //         // if (cloud > 85) {
  //         //   image = heavyRain;
  //         // } else if (cloud > 65) {
  //         //   image = lightRain;
  //         // } else if (cloud > 40) {
  //         //   image = onlyCloud;
  //         // } else {
  //         //   image = sun;
  //         // }
  //       return (
  //         <div>
  //           <h3>{weekDayName}</h3>
  //           <i>
  //             <img src={abc} alt="" srcset="" />
  //           </i>
  //           <h3>
  //             {temp}<sup>o</sup>
  //           </h3>
  //         </div>
  //     );
  //     });
  //     setElement(newdaysData);

      
  //     // console.log(day1);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // To fetch the week forcasting
  // let forcastingAPI = `http://api.weatherapi.com/v1/forecast.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}&days=7&aqi=no&alerts=no`
  

  // useEffect(() => {
  //   fetchApiData(API);
  // }, [API]);

  // useEffect(() => {
  //   fetchLocation(locationAPI);
  // }, [locationAPI])

  // useEffect(() => {
  //   fetchForcasting(forcastingAPI);
  // }, [forcastingAPI])

  // // display image of cloud depending upon conditions
  // let image;
  // if (cloud > 85) {
  //   image = heavyRain;
  // } else if (cloud > 65) {
  //   image = lightRain;
  // } else if (cloud > 40) {
  //   image = onlyCloud;
  // } else {
  //   image = sun;
  // }

  // // Login Form Button
  // let [loginOpen, setLoginOpen]  = useState(false);
  // function fLoginOpen() {
  //   setLoginOpen(!loginOpen);
  // }
  // // Signup Form Button
  // let [sigupOpen, setSigupOpen]  = useState(false);
  // function fSignupOpen() {
  //   setSigupOpen(!sigupOpen);
  // }
  // // console.log(isOpen);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   {/* if any form is open just close it */}
    //   {loginOpen && <Login /> }
    //   {sigupOpen && <Signup /> }
    //   <div className="topnav">
    //     <div>
    //       <a className="active" href="#home">Home</a>
    //       <a onClick={fLoginOpen}>Login</a>
    //       <a onClick={fSignupOpen}>Signup</a>
    //     </div>
    //     <div className="search">
    //       <input type="text" id="search" placeholder="Search.." onChange={handleChange} />
    //       <SearchIcon className="abc" />
    //     </div>
    //   </div>
    //   <div className="weather-div">
    //     <div className="upper-div">
    //       <div>
    //         <h1>{time}</h1>
    //         <p>{date}</p>
    //       </div>
    //       <div>
    //         <h1 id="city">{city}</h1>
    //         <div className="region">
    //           <h3>{region},</h3>
    //           <p>{country}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lower-div">
    //       <div className="today">
    //         <div>
    //           <i>
    //             <img src={image} alt="" srcset="" />
    //           </i>
    //         </div>
    //         <div>
    //           <h1>Today</h1>
    //           <h3>
    //             {temp}
    //             <sup>o</sup>{" "}
    //           </h3>
    //         </div>
    //       </div>
    //       <div className="week" >
    //         {element}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
