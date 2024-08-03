import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }    
constructor(){
     super();
     this.state = {
       articles: [],
       loading: false,
       page: 1,
       totalPage: 0
     }
   }
   // componentDidMount() react will call it when your component is mounted on screen
   async componentDidMount(){
     this.props.setProgress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey} &page=1&pageSize=${this.props.pageSize}`
     this.setState({loading: true});
     this.props.setProgress(40);
     let data= await fetch(url);
     let parsedData= await data.json();
     this.props.setProgress(70);
     this.setState({loading: false});
     this.setState({ articles: parsedData.articles, totalPage: parsedData.totalResults});
     this.props.setProgress(100);
   }
   fetchMoreData = async() => {
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey} &page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
     {this.state.loading && < Spinner/>}
     let data= await fetch(url);
     let parsedData= await data.json();
     this.setState({loading: false});
     this.setState({ 
      articles: this.state.articles.concat(parsedData.articles), 
      totalPage: parsedData.totalResults
    });
   };
   // infinite scroll from npm docs to continuously load objects on a page
  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop: 77}}>Top headlines</h1>
        {this.state.loading && < Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalPage}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element)=>{
                console.log(element);
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                imgUrl={element.urlToImage?element.urlToImage:"https://picsum.photos/300/190"} newsUrl={element.url}/>
                </div>
                // image url for random images from lorem picsum website
            })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between" style={{marginBottom: 50}}>
        <button disabled={this.state.page<=1} type="button" className="btn btn-outline-primary" onClick={this.handleprev}>&larr; Previous</button>
        <button disabled={Math.ceil(this.state.totalPage/this.props.pageSize)<this.state.page+1} type="button" className="btn btn-outline-primary" onClick={this.handlenxt}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News