import React, { Component } from "react";
import JobsCards from "./JobsCards"
import CardInfo from "./CardInfo"

class Container extends Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor:"#f8f8f8"}}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <JobsCards />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <CardInfo />
        </div>
      </div>
    )
  }
}

export default Container