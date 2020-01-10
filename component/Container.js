import React, { Component } from "react";
import JobsCards from "./JobsCards"
import CardInfo from "./CardInfo"

class Container extends Component {
  state={
    cardSelected:null
  }

  selectCard=(card)=>{
    console.log("my item card eq",card)
    this.setState({
      cardSelected:card
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor:"#f8f8f8",minHeight:"720px"}}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <JobsCards selectCard={(card)=>this.selectCard(card)}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <CardInfo cardSelected={this.state.cardSelected} />
        </div>
      </div>
    )
  }
}

export default Container