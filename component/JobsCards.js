import React, { Component } from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { ClipLoader } from "react-spinners";
import Alert from 'react-s-alert';


class JobsCards extends Component {

  state = {
    jobsCardArr: [],
    hasMore: true,
    limit: 12,
    pageNum: 1,
    isLoading: false,
    itemId: '',
    jobId: "",
    notNumber:false
  }

  componentDidMount = () => {
    this.loadMoreJobs()
  }
  changeInputHandle = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  pressOnEnter = (event) => {
    console.log(event)
    if (event.keyCode === 13 || event.key === "Enter") {
      if (this.state.jobId.trim() !== "") {
        if (!isNaN(this.state.jobId)) {
          this.setState({
            hasMore: true,
            pageNum: 1,
            jobsCardArr: [],
            notNumber:false
          }, () => {
            this.loadMoreJobs()
          })
        } else {
          console.log("enter num")
          this.setState({
            notNumber:true
          })
        }
      } else {
        this.setState({
          pageNum: 1,
          jobsCardArr: [],
          hasMore: true,
          notNumber:false
        }, () => {
          this.loadMoreJobs()
        })
      }
    }
  }
  loadMoreJobs = () => {
    if (this.state.isLoading) {
      return
    }
    if (!this.state.hasMore) {
      return
    }
    this.setState({
      isLoading: true
    })
    axios.get(`https://api.for9a.com/opportunity/filter?${this.state.jobId.trim() !== "" ? 'id=' + this.state.jobId : 'id='}&count=${this.state.limit}&page=${this.state.pageNum}&type=29`).then(res => {
      if (res.data.result.items.length < this.state.limit) {
        var hasMoreStatus = false
      } else {
        var hasMoreStatus = true
      }
      this.setState({
        jobsCardArr: [...this.state.jobsCardArr, ...res.data.result.items],
        hasMore: hasMoreStatus,
        pageNum: this.state.pageNum + 1,
        isLoading: false
      })
    }).catch(err => {
      console.log(err)
    })
  }

  itemInformation = (item) => {
    this.setState({
      itemId: item.id
    })
    this.props.selectCard(item)
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", minHeight: "680px", marginTop: "15px", backgroundColor: "#fff" }}>
        <header style={{ backgroundColor: "#eb751d", minHeight: "30px", textAlign: "right" }}>
          <p style={{ color: '#fff', padding: "4px" }}>الوظائف</p>
        </header>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "660px" }}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px" }}>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ float: 'right', padding: "0px" }}>
              <input class="form-control form-control-sm" type="text" style={{ margin: "15px 0px 7px 0px", textAlign: "right" }} onKeyPress={this.pressOnEnter} placeholder="ابحث باستخدام رقم الوظيفة" onChange={() => this.changeInputHandle("jobId", event.target.value)} />
            </div>
            {this.state.notNumber &&
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"style={{maxHeight:"30px",marginTop:"15px",maxWidth:"150px",float:"right"}}>
                <p style={{color:"#426d7d",marginTop:"7px"}}>الرجاء البحث برقم الوظيفة</p>
            </div>
            }
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "575px", overflowY: "auto"}}>
            <InfiniteScroll
              pageStart={0}
              initialLoad={false}
              loadMore={() => {
                this.loadMoreJobs()
              }}
              hasMore={this.state.hasMore}
              loader={
                <div style={{ textAlign: "center" }}><ClipLoader color="#339eba" loading={this.state.isLoading} /></div>
              }
              useWindow={false}
            >
              {this.state.jobsCardArr.map(item => {
                return (
                  <div key={Math.random()} className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={() => { this.itemInformation(item) }}
                    style={{
                      padding: "0px",
                      marginTop: "15px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      boxShadow: this.state.itemId == item.id ? "#339eba 0px 0px 10px 0px" : 'rgb(88,87,87)'
                    }}>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ minHeight: "70px", padding: "0px", backgroundImage: `url(${item.images.sm})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center' }}>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9" style={{ minHeight: "70px" }}>
                      <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{ textAlign: "center", padding: "10px 0px" }}>
                        {item.location.title.length > 8 ? `... ${item.location.title.substr(0,8)}` :item.location.title}
                      </div>
                      <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{ padding: "10px 0px", textAlign: "right" }}>
                        {item.title.length > 40 ? `... ${item.title.substr(0,40)}`:item.title}
                      </div>
                      <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{ textAlign: "center", padding: "0px" }}>
                        {`# ${item.id}`}
                      </div>
                      <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{ padding: "0px", textAlign: "right" }}>
                        {`اخر موعد للتقديم : ${item.deadline}`}
                      </div>
                    </div>

                  </div>
                )
              })}

            </InfiniteScroll>
          </div>
        </div>

      </div>
    )
  }
}

export default JobsCards