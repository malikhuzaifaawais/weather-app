import { useEffect, useState } from "react";
import moment from "moment"
import "./Home.css";
import sun from "./icons/sun.png";
import lightRain from "./icons/light-rain.png";
import heavyRain from "./icons/heavy-rain.png";
import onlyCloud from "./icons/only-cloud.png";
import SearchIcon from '@mui/icons-material/Search';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useLocation } from "react-router";
// import { Jwt } from "jsonwebtoken";
// import Login from './components/Login'
// import Signup from "./components/Signup";

function App() {
  
  

  // Current data
  // const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [temp, setTemp] = useState("11");
  const [cloud, setCloud] = useState("0");
  const [date, setDate] = useState("0");
  
  // Location data
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("0");

  
  // Getting search input
  const [searchValue, setSearchValue] = useState("london")
  function handleChange(e) {
    setSearchValue(e.target.value);
    // console.log(searchValue);
  }

  // To search location
  


  // to fetch current weather data
  let API = `https://api.weatherapi.com/v1/current.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}&aqi=no`;
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      // setData(data);
      // Formating date
      var mydate = data.location.localtime.slice(0, 10);
      var myFormat =  moment(mydate).format("dddd, DD-MMM-YYYY");
      setDate(myFormat);
      setTime(data.location.localtime.slice(10, 16));
      setTemp(data.current.temp_c);
      setCloud(data.current.cloud);
    } catch (error) {
      console.log(error);
    }
  };

  // week forcasting days
  let newdaysData;
  const [element, setElement] = useState(); 
  // const [day1, setDay1] = useState("");
  const fetchForcasting = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let daysData = data.forecast.forecastday
        newdaysData = daysData.slice(1).map((day) => {
          let abc = day.day.condition.icon;
          var mydate = day.date;
          var weekDayName =  moment(mydate).format('dddd').slice(0,3);
          let temp = day.day.avgtemp_c;
          // let cloud = day.hour[0].cloud;
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
        return (
          <div className="weeks-data">
            <p className="margin-0 weeks-day-name">{weekDayName}</p>
            <i>
              <img src={abc} alt="" srcset="" />
            </i>
            <h5 className="margin-0">
              {temp}<sup>o</sup>
            </h5>
          </div>
      );
      });
      setElement(newdaysData);

      
      // console.log(day1);

    } catch (error) {
      console.log(error);
    }
  };

  // To fetch the week forcasting
  
  
  let forcastingAPI = `https://api.weatherapi.com/v1/forecast.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}&days=7&aqi=no&alerts=no`
  useEffect(() => {
    fetchApiData(API);
  }, [API]);

  let locationAPI = `https://api.weatherapi.com/v1/search.json?key=1a8f326782e84a78ad0160730230905&q=${searchValue}`;
  useEffect(() => {
    const fetchLocation = async () => {
    try {
      const locationRes = await fetch(locationAPI);
      const locationData = await locationRes.json();
      // console.log(locationData);
      setCity(locationData[0].name);
      setCountry(locationData[0].country);
      setRegion(locationData[0].region);
      // console.log(locationData[0].name);
    } catch (error) {
      console.log(error);
    }
  }
  fetchLocation();
  }, [locationAPI])
  /* 
  const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const jsonData = await response.json();
    setData(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  */

  useEffect(() => {
    fetchForcasting(forcastingAPI);
  }, [forcastingAPI])

  // display image of cloud depending upon conditions
  let image;
  if (cloud > 85) {
    image = heavyRain;
  } else if (cloud > 65) {
    image = lightRain;
  } else if (cloud > 40) {
    image = onlyCloud;
  } else {
    image = sun;
  }

  // Login Form Button
  let [loginOpen, setLoginOpen]  = useState(false);
  function fLoginOpen() {
    setLoginOpen(!loginOpen);
  }
  // Signup Form Button
  let [sigupOpen, setSigupOpen]  = useState(false);
  function fSignupOpen() {
    setSigupOpen(!sigupOpen);
  }

  // Check if the token is avalible in the localStorage
  let login = false;
  let store = JSON.parse(localStorage.getItem('login'))
  // console.log(store);
  if(store && store.token) {
    login = true
  }


  // And finally logout the user
  function logout() {
    login = false
    localStorage.clear();
  }

  // confirmation alert to logout
  function confirmed() {
    if (window.confirm('Are you sure you wish to logout?')){
      logout();
    }
  }
  
  let coma = <b>, </b>;
  return (
    <div className="App">
      <div className="layer">
      {/* <div className="expand-icon-div"><ExpandCircleDownOutlinedIcon className="expand-icon" /></div> */}
      {/* if any form is open just close it */}
      {/* {loginOpen && <Login /> } */}
      <div className="topnav">
        <div className="anchors-div">
          {/* <a className='delete-button' onClick={confirmed}> confirm </a> */}
          <a className="active" href="#home">Home</a>
          {
            login ? 
            <>
              <a href="/post">Contact</a>
              <a href="/" onClick={confirmed} className="right">Logout</a>
            </>
            :
            <>
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </>
          }
        </div>
        <div className="search">
          <input type="text" id="search" placeholder="Search.." onChange={handleChange} />
          <SearchIcon className="abc" />
        </div>
      </div>
      <div className="weather-div">
        <div className="upper-div">
          <div className="time">
            <h1>{time}</h1>
            <p>{date}</p>
          </div>
          <div className="location">
            <PinDropOutlinedIcon className="pindrop" />
            <h1 className="city">{city}</h1>
            <p>{country}</p>
            {/* <div className="region">
            </div> */}
          </div>
        </div>
        <div className="lower-div">
          <div className="today">
            <div>
              <i>
                <img src={image} alt="" srcset="" />
              </i>
            </div>
            <div>
              <h1>Today</h1>
              <p  className="margin-0">Feel's like</p>
              <h3  className="margin-0">
                {temp}
                <sup>o</sup>{" "}
              </h3>
            </div>
          </div>
          <div className="week" >
            {element}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
