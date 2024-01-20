import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL_BACKEND } from '../service/Api'
import { useStatistics } from '../store'
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

    const {setToast}=useToast()

    const handleGetreport = async () => {
        await axios.post(`${BASE_URL_BACKEND}home/get_report`, { city: input }).then((response) => {
            setStatistics(response.data)
        }).catch(err => {
            setToast({message:err.data,type:false})
        })
    }

    const handleCities = async (e) => {
        await axios.post(`${BASE_URL_BACKEND}home/get_cities`, { input: e.target.value }).then((response) => {
            setCities(response.data.cities)
            setInput(e.target.value)
        })
        if (e.target.value == "") {
            setCities([])
        }
    }

    return (
        <div className='content-page'>
            <div className="container-fluid padup">
                <div className="row">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search" onChange={handleCities} />
                        <button className="btn btn-outline-success" onClick={handleGetreport}>Search</button>
                    </form>
                </div>
            </div>
            <div className='cities'>
                {cities.map((city) => <div key={city} onClick={() => { setInput(city) }}>{city}</div>)}
            </div>
            <div id="map-margin" className=" bg-body-tertiary">
                <div
                    className="position-relative overflow-hidden p-3 p-md-5 text-center ">
                    <div className="col-md-6 p-lg-5">

                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div
                        className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        <div id="alert-box" className="col green-panel">
                            <h2>ALERTS</h2><hr />
                            <div id="container-alert-caution" className="container-fluid">
                                <div className="container text-center">
                                    <div id="alert-box-prop"
                                        className="row alert-container">
                                        <div className="col box-prop">
                                            Wind-Direction<hr /> Lorem ipsum dolor sit amet
                                        </div>
                                        <div className="col box-prop">
                                            Wind-Speed<hr /> Lorem, ipsum dolor sit amet
                                        </div>
                                        <div className="col box-prop">
                                            Temperature<hr /> Lorem ipsum dolor sit amet
                                        </div>
                                        <div className="col box-prop">
                                            Humidity<hr /> Lorem ipsum dolor sit
                                        </div>
                                        <div className="col box-prop">
                                            Siesmic Intensity<hr /> Lorem, ipsum dolor sit
                                        </div>
                                        <div className="col box-prop">
                                            VPS<hr /> Lorem ipsum dolor sit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="caution-box" className="col yellow-panel">
                            <h2>CAUTION</h2><hr />
                            <div className="container-fluid">
                                <div className="container text-center">
                                    <div className="row ">
                                        <p>GIVE RED ALERTS HERE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="precaution-box-outside" className="container-fluid">
                <div id="precaution-box" className="col text-center red-panel">
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
