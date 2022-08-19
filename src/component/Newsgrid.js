import React, { Component } from 'react'
import Newsitem from './newsitem'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Newsgrid extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pagesize: 9
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
      //ttlresultshowed: 0,
      // loading: true
    }
  }
  
  async componentDidMount() {
    const limk = `https://newsapi.org/v2/top-headlines?apiKey=86dd1a4f6ecd41b2a26f2d340f433660&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pagesize}&page=${this.state.page}`;
    let data = await fetch(limk)
    console.log("add news")
    let jsondata = await data.json();
    this.setState({
      ttlresult: jsondata.totalResults,
      articles: jsondata.articles 
    })
  }
  fetchMoreData = async () => {
    let limk = `https://newsapi.org/v2/top-headlines?apiKey=86dd1a4f6ecd41b2a26f2d340f433660&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pagesize}&page=${this.state.page+1}`;
    let data = await fetch(limk)
    console.log("add news")
    let jsondata = await data.json();
    this.setState({
      page: this.state.page + 1,
      ttlresult: jsondata.totalResults,
      articles: this.state.articles.concat(jsondata.articles)
    })
  }
  render() {
    return (
      <div key="hehe" className="container my-5">
        <h1 className="text-center">Top headlines in {this.props.category}</h1>
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.ttlresult}
            loader={<h4>......</h4>}
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