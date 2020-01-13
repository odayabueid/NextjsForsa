import React, { Component } from "react";
import JobsCards from "./JobsCards"
import CardInfo from "./CardInfo"
import Router, { useRouter } from 'next/router';

class Container extends Component {
  state = {
    cardSelected: null
  }
// when select card
  selectCard = (card) => {
    this.setState({
      cardSelected: card
    })
  }
// redirect to about page(login)
  redirectToSignIn = () => {
    Router.push('/about')
  }
//when signOut clear the user_id from local storage and redirect to login
  signOut = () => {
    localStorage.removeItem('user_id')
    this.redirectToSignIn()
  }
// when applied to job hide the job info
  applyed = () => {
    this.setState({
      cardSelected: null
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundColor: "#f8f8f8", minHeight: "720px" }}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <JobsCards selectCard={(card) => this.selectCard(card)} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <CardInfo cardSelected={this.state.cardSelected} applyed={this.applyed} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: "center", marginTop: "10px" }}>
          <button type="button" class="btn" style={{ backgroundColor: "#426d7d", color: "#fff", minWidth: "100px" }} onClick={this.signOut}>تسجيل الخروج</button>
        </div>
      </div>
    )
  }
}

export default Container