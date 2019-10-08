import React, { Component } from 'react';
import ViewCaseNav from './Navbar/ViewCaseNav.js'
import CrimeScenePhotographs from './CrimeScenePhotographs';

class ViewCase extends Component 
{
    
    render()
    {
        var crimeId = this.props.routeParams.caseId;
        console.log(this.props);
        return(
            <div>
            <ViewCaseNav crimeId = {crimeId}/>
            <div className="">
                <CrimeScenePhotographs/>
            </div>
            </div>
        )

    }
}

export default ViewCase;