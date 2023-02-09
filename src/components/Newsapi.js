import React, { Component } from "react";
import NewsItemapi from "./NewsItemapi";

export default class News extends Component {
  data = [];
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      offset: 0,
    };
  }

  async componentDidMount() {
    let url =
      `http://api.mediastack.com/v1/news?access_key=7f77260c72fd16b7b8240ccc3541d1d4&countries=in&offset=${this.props.offset}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      data: parsedData.data,
      totalResults: parsedData.totalResults,
    });
  }

   handlePrevClick = async () => {
     console.log("Previous");
     let url = `http://api.mediastack.com/v1/news?access_key=7f77260c72fd16b7b8240ccc3541d1d4&countries=in&offset=${
      this.state.offset - 1
    }`;
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({
       offset: this.state.offset - 1,
       data: parsedData.data,
     });
   };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.offset + 1 > Math.ceil(this.state.totalResults / this.props.offset)) {
    } else {
      let url = `http://api.mediastack.com/v1/news?access_key=7f77260c72fd16b7b8240ccc3541d1d4&countries=in&offset=${
         this.state.offset + 1
       }`;
       let data = await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData);
       this.setState({
         offset: this.state.offset + 1,
         data: parsedData.data,
       });
     }
   };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsExpo - Top Blogs And Articles</h1>
        <div className="row">
          {this.state.data.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItemapi
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  newsUrl={element.url}
                />
              </div>
            );
          })} 
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.offset <= 0}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
           disabled={this.state.offset + 1 > Math.ceil(this.state.totalResults / this.props.offset)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
