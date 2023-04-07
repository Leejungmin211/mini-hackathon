import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const WeatherContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
align-items: center;
`
const Select = styled.select`
width: 170px;
height: 35px;
border: 3px solid #ffbbc7;
border-radius: 10px;
background: #ffffff00;
font-size: 15px;
padding: 0px 10px;
`
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px;
> .city-name{
    font-size: 35px;
    color: rgb(194 131 239);
    font-weight: 500;
}
> .city-img{
    width: 100px;
    position: absolute;
    bottom: -70px;
}
> .city-div{
    display: flex;
    align-items: baseline;
    justify-content: center;
    > .city-temp{
        font-size: 25px;
        padding: 10px;
    }
}
`

export default function Weather(){
    const [city, setCity] = useState('Seoul')
    const [temp, setTemp] = useState("")
    const [sky, setSky] = useState("")
    const [icon, setIcon] =useState("")

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    let iconUrl = `http://openweathermap.org/img/w/${icon}.png`
    const handleChage = (e) => { setCity(e.target.value) }
    const searchWeather = async () => {
              const res = await axios({
                method : 'get',
                url : url
            })
           .then(res => {
            console.log(res)
            setTemp(Math.round(((res.data.main.temp - 273.15) * 10)) / 10)
            setSky(res.data.weather[0].main)
            setIcon(res.data.weather[0].icon)
           })
    }

    useEffect(() => {
        searchWeather()
    }, [city])

    return(
        <WeatherContainer>
          <Select value={city} onChange={handleChage}>
            <option selected value="Seoul">서울</option>
            <option value="Gyeonggi-do">경기도</option>
            <option value="Gangneung-si">강릉</option>
            <option value="Daejeon">대전</option>
            <option value="Daegu">대구</option>
            <option value="Busan">부산</option>
            <option value="Jeju">제주</option>
          </Select>
          <Div>
            <div className="city-name">{city}</div>
            <div className="city-div">
             <div className="city-temp">{temp} ℃</div>
             <div>{sky}</div> 
            </div>
            <img className="city-img" src={iconUrl} />
          </Div>
       </WeatherContainer>
    )
}