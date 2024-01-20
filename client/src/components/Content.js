import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL_BACKEND } from '../service/Api'
import { useStatistics,useProbability } from '../store'
import { useToast } from '../store'

function Content() {
    const [input, setInput] = useState("")
    const [cities, setCities] = useState([])
    const { temperature,
        wind_direction,
        wind_speed,
        humidity,
        precipitation,
        coordinates, setStatistics }= useStatistics()
    const{probability,setProbability}=useProbability()

    const {setToast}=useToast()

    const handleGetreport = async () => {
        await axios.post(`${BASE_URL_BACKEND}home/get_report`, { city: input }).then((response) => {
            setStatistics(response.data)
        }).catch(err => {
            setToast({message:err.data,type:false})
        })
    }

    const handleCities = async (e) => {
        setInput(e.target.value)
        await axios.post(`${BASE_URL_BACKEND}home/get_cities`, { input: e.target.value }).then((response) => {
            setCities(response.data.cities)
        })
        if (e.target.value == "") {
            setCities([])
        }
    }

    return (
        <div className='content-page'>
            <div className="container-fluid padup">
                <div className="row">
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" value={input}
                           id='search-input' placeholder="Search" aria-label="Search" onChange={handleCities} />
                        <button className="btn btn-outline-success" onClick={handleGetreport}>Search</button>
                    </div>
                </div>
            </div>
            <div className={`cities ${cities.length>0?<></>:"hidden"}`}>
                {cities.map((city) => <div key={city} onClick={() => { setInput(city.city) }}>{city.city}</div>)}
            </div>
            
            {/* <div id="map-margin" className=" bg-body-tertiary">
                <div
                    className="position-relative overflow-hidden p-3 p-md-5 text-center ">
                    <div className="col-md-6 p-lg-5">

                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div
                        className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div> */}
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        <div id="alert-box" className="col">
                            <h2>Details</h2><hr />
                            <div id="container-alert-caution" className="container-fluid">
                                <div className="container text-center">
                                    <div id="alert-box-prop"
                                        className="row alert-container">
                                        <div className="col box-prop">
                                            Wind-Direction<hr />
                                             {/* {wind_direction} */}
    East West
                                        </div>
                                        <div className="col box-prop">
                                            Wind-Speed<hr /> 
                                            {/* {wind_speed} */}
                                            6 Km/h
                                        </div>
                                        <div className="col box-prop">
                                            Temperature<hr /> 
                                            {/* {temperature} */}
                                            28 C
                                        </div>
                                        <div className="col box-prop">
                                            Humidity<hr />
                                             {/* {humidity} */}
                                             60.7%
                                        </div>
                                        <div className="col box-prop">
                                            Precipitation<hr />
                                            {/* {precipitation} */}
                                            0%
                                        </div>
                                        <div className="col box-prop">
                                            Co-Ordinates<hr /> Latitude : 26.218287 {coordinates.latitude}<br></br>
                                            Longitude : 78.182831 {coordinates.longitude}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="caution-box" className="col green-panel">
                            <h2>Alerts</h2><hr style={{margin:"0px"}}/>
                            <div className="container-fluid probability-container">
                                <div className="container text-center probability-container">
                                    <div className="row ">
                                        {/* <p>{probability} %</p> */}
                                        <p id='percentage'>0 %</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="precaution-box-outside" className="container-fluid">
                <div id="precaution-box" className="col text-center green-panel">
                    <h2>Precautions</h2><hr />
                    <ul>
                        <li>Write ur content here</li>
                        <li>Write ur content here</li>
                        <li>Write ur content here</li>
                        <li>Write ur content here</li>
                        <li>Write ur content here</li>
                        <li>Write ur content here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content
