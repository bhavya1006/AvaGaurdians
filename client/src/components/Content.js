import React from 'react'

function Content() {

    return (
    <div className='content-page'>
            <div className="container-fluid padup">
                <div className="row">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success"
                            type="submit">Search</button>
                    </form>
                </div>
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
            <br/>
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
