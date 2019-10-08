import React, { Component } from 'react';
import '../CSS/policeHome.css';
import CaseList from './CaseList';


class PoliceHome extends Component {
    render() {
        return(
            <div>
            <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Thadam</a></b>
               <ul className = "right">
                   <li active><a href = "/police">Home</a></li>
                   <li><a href = "/newfir">New FIR</a></li>
                   <li><a href = "/">Log out</a></li>
               </ul>
            </div>
            
        </nav>
        <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of pending cases</h4>
            <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Crime ID</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Offense Code</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Description</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Created Timestamp</h6>
                        </div>
                    </div>
                </div>
                <CaseList/>
            </div>
            </div>
        )
    }
}

export default PoliceHome;