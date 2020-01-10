import React, { Component } from "react";

class CardInfo extends Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", minHeight: "680px", backgroundColor: "#fff", marginTop: "15px" }}>
        <header style={{ backgroundColor: "#eb751d", minHeight: "30px",textAlign:"right"}}>
          <p style={{ color: '#fff', padding: "4px" }}>التفاصيل</p>
        </header>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "650px" }}>
          {this.props.cardSelected ?
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px" }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: "center", marginTop: "20px", padding: "0px" }}>
                <img src={this.props.cardSelected.images.sm} style={{ borderRadius: "20px", height: "200px"}} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ minHeight:"220px", color: "#339eba", marginTop: "30px", textAlign: "right", backgroundColor: "#f1f1f1", border: "1px solid #f1f1f1", borderRadius: "8px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", marginTop: "20px" }}>
                  {this.props.cardSelected.title}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ margin: "30px 0", padding: "0px" }}>
                  {this.props.cardSelected.desc}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: "20px", padding: "0px" }}>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {`البلد : ${this.props.cardSelected.location.title}`}
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {`اخر موعد للتقديم : ${this.props.cardSelected.deadline}`}
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ padding: "0px" }}>
                    {` رقم الوظيفة: ${this.props.cardSelected.id}`}
                  </div>
                </div>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{marginTop:"70px"}}>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <button type="button" class="btn" style={{ backgroundColor: "#339eba", color: "#fff", minWidth: "80px", float: "right" }}>الغاء</button>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <button type="button" class="btn" style={{ backgroundColor: "#eb751d", color: "#fff", minWidth: "80px" }}>قدم الان</button>
                </div>

              </div>
            </div>
            :
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", textAlign: "center", marginTop: "20px" }}>
              <h4> الرجاء اختيار وظيفة لاظهار التفاصيل</h4>
            </div>}
        </div>
      </div>
    )
  }
}

export default CardInfo