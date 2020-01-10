import React, { Component } from "react";

class CardInfo extends Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", minHeight: "680px", backgroundColor: "#fff", marginTop: "15px" }}>
        <header style={{ backgroundColor: "#eb751d", minHeight: "30px" }}>
          <p style={{ color: '#fff', padding: "4px" }}>التفاصيل</p>
        </header>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "650px" }}>
          {this.props.cardSelected ?
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding:"0px"}}>

            </div>
            :
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding:"0px",textAlign:"center",marginTop:"20px"}}>
              <h4> الرجاء اختيار وظيفة لاظهار التفاصيل</h4>
            </div>}
        </div>
      </div>
    )
  }
}

export default CardInfo