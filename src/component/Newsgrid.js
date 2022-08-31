import React, { Component } from 'react'
import Newsitem from './newsitem'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { technology } from './data/technology';
import { general } from './data/general';
import { science } from './data/science';
import { business } from './data/business';
import { health } from './data/health';
import { entertainment } from './data/entertainment';
import { sports } from './data/sports';

export default class Newsgrid extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pagesize: 1000
  }
  static proptyes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.int
  }
  constructor() {
    super();
    console.log("constructor")
    this.state = {
      articles: [],
      page: 1,
      ttlresult: 0,
      resultloaded: 0
      //ttlresultshowed: 0,
      // loading: true
    }
  }
  
  async componentDidMount() {
    // const limk = `https://newsapi.org/v2/top-headlines?apiKey=86dd1a4f6ecd41b2a26f2d340f433660&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pagesize}&page=${this.state.page}`;
    // let data = await fetch(limk)
    // console.log("add news")
    var jsondata = {}
    if(this.props.category === "sports")
       jsondata = sports
    else if(this.props.category === "general")
       jsondata = general
    else if(this.props.category === "science")
       jsondata = science
      else if(this.props.category === "entertainment")
       jsondata = entertainment
    else if(this.props.category === "business")
       jsondata = business
      else if(this.props.category === "health")
       jsondata = health
    else if(this.props.category === "technology")
       jsondata = technology
    
    let ttlarticles = jsondata.articles;
    console.log(jsondata)
    this.setState({
      ttlresult: jsondata.totalResults,
      articles: ttlarticles.slice(0,9),
      resultloaded: 9
    })
  }


  fetchMoreData = async () => {
    // let limk = `https://newsapi.org/v2/top-headlines?apiKey=86dd1a4f6ecd41b2a26f2d340f433660&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pagesize}&page=${this.state.page+1}`;
    // let data = await fetch(limk)
    // console.log("add news")
    // let jsondata = await sports.json();
    let jsondata = sports;
    let ttlarticles = jsondata.articles;
    this.setState({
      ttlresult: jsondata.totalResults,
      articles: this.state.articles.concat(ttlarticles.slice(this.state.resultloaded,this.state.resultloaded + 9)),
      resultloaded: this.state.resultloaded + 9
    })
  }
  render() {
    return (
      <div key="hehe" className="container my-5">
        <h1 className="text-center" style={{positon:"fixed"}}>Top headlines in {this.props.category}</h1>
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={setTimeout(this.fetchMoreData,3000)}
            hasMore={this.state.articles.length !== this.state.ttlresult}
            loader={<div style={{margin : "auto",width: "100px"}}>......</div>}
            >
            <div className="container">
            <div className="conatiner row">
            {this.state.articles.map( 
              (elemen) => {
                return (
                  <Newsitem key={elemen.url} title={elemen.title} description={elemen.description} image={elemen.urlToImage} url={elemen.url} />)
              }
            )
            }
             </div>
            </div>
          </InfiniteScroll>
         
      </div>
    )
  }
}




        //sp={this.setprogress}