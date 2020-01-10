import React, { Component } from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';


class JobsCards extends Component {

  state={
    jobsCardArr:[],
    hasMore:true,
    limit:12,
    pageNum:1
  }

  componentDidMount = () => {
    this.loadMoreJobs()
  }
  loadMoreJobs =()=>{
    if(!this.state.hasMore){
      return
    }
    axios.get(`https://api.for9a.com/opportunity/filter?count=${this.state.limit}&page=${this.state.pageNum}&type=29`).then(res => {
      console.log("our res eq", res.data.result.items.length)
     if(res.data.result.items.length < this.state.limit){
       var hasMoreStatus = false
     }else{
       var hasMoreStatus = true
     }
     this.setState({
       jobsCardArr:[...this.state.jobsCardArr, ...res.data.result.items],
       hasMore:hasMoreStatus,
       pageNum:this.state.pageNum + 1
     },()=>{
       console.log("//////////////////////////////",this.state.jobsCardArr)
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
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{height:"500px",minHeight:"500px"}}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding:"0px", height:"200px", overflowY:"auto"}}>
          <InfiniteScroll 
          pageStart={0}
          initialLoad={false}
          loadMore={()=>{
            console.log("load more true")
            this.loadMoreJobs()
          }}
          hasMore={this.state.hasMore}
          loader={
            <div></div>
          }
          useWindow={false}
          >
            {this.state.jobsCardArr.map(item=>{
              return(
                <div key={Math.random()} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {item.title}
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