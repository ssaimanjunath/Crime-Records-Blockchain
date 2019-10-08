import React, { Component } from 'react';
import knife from '../../Images/knife.jpg';
import '../../CSS/forensics.css'

class Forensics extends Component 
{

    state = {
        report: [
            {
                exhibitId: 101,
                name: "Knife",
                description: "A 3 and a quarter inch wooden hilt dagger.",
                imageURL: __dirname + "/../../Images/knife.jpg"
            }
        ]
    }
    render() {
        let caseId = this.props.match.params.caseId;
        console.log(this.state.report[0].imageURL);
        return(
            <div className = "container signInCard center">
            <div className="card setCardWidth">
            <div className="card-image ">
              <img src={knife} alt="Notes" className = "cardImageHeight"/>
            </div>
            <div className="signInContainer card-content">
              <h4 className="grey-text card-title">Forensic Report</h4>
              
            </div>
          </div>
            </div>
        )
    }
}

export default Forensics;