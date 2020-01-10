import React, { Component } from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';


class JobsCards extends Component {

  state = {
    jobsCardArr: [],
    hasMore: true,
    limit: 12,
    pageNum: 1
  }

  componentDidMount = () => {
    this.loadMoreJobs()
  }
  loadMoreJobs = () => {
    if (!this.state.hasMore) {
      return
    }
    axios.get(`https://api.for9a.com/opportunity/filter?count=${this.state.limit}&page=${this.state.pageNum}&type=29`).then(res => {
      console.log("our res eq", res.data.result.items.length)
      if (res.data.result.items.length < this.state.limit) {
        var hasMoreStatus = false
      } else {
        var hasMoreStatus = true
      }
      this.setState({
        jobsCardArr: [...this.state.jobsCardArr, ...res.data.result.items],
        hasMore: hasMoreStatus,
        pageNum: this.state.pageNum + 1
      }, () => {
        console.log("//////////////////////////////", this.state.jobsCardArr)
      })
      // this.setState({
      //   jobsCardArr:res.data.result.items
      // })
    }).catch(err => {
      console.log(err)
    })


  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{  minHeight: "750px",marginTop:"15px" }}>
        <header style={{ backgroundColor: "#eb751d", minHeight: "30px", borderRadius: '5px' }}>
          <p style={{ color: '#fff', padding: "4px" }}>Jobs Cards</p>
        </header>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "650px", overflowY: "auto", backgroundColor: "#fff" }}>
          <InfiniteScroll
            pageStart={0}
            initialLoad={false}
            loadMore={() => {
              console.log("load more true")
              this.loadMoreJobs()
            }}
            hasMore={this.state.hasMore}
            loader={
              <div></div>
            }
            useWindow={false}
          >
            {this.state.jobsCardArr.map(item => {
              return (
                <div key={Math.random()} className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding:"10px 0px 0px 0px",cursor:"pointer"}}>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{minHeight:"70px",padding:"0px", backgroundImage:`url(${item.images.sm})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition: 'center'}}>
                  </div>
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{border:"1px solid #ccc",minHeight:"70px"}}>
                  
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{textAlign:"center",padding:"10px 0px"}}>
                       {item.location.title}
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{padding:"10px 0px",textAlign:"right"}}>
                      {item.title}
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{textAlign:"center"}}>
                      {`# ${item.id}`}
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{padding:"0px",textAlign:"right"}}>
                        {`اخر موعد للتقديم : ${item.deadline}`}
                    </div>
                  </div>

                </div>
              )
            })}

          </InfiniteScroll>
        </div>

      </div>
    )
  }
}

export default JobsCards