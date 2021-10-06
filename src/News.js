import React, { Component } from 'react'
import NewComponent from './NewComponent';

export class News extends Component {
    articles = []

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca9cac1c58342e3a9b7d34f03b7129d&page=1&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})
    }

     PreviousClick =async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca9cac1c58342e3a9b7d34f03b7129d&page=${this.state.page - 1}&pageSize=18`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles : parsedData.articles,
                page : this.state.page - 1
            })
    }
    
     NextClick = async()=>{
         if(this.state.page + 1 >= Math.ceil(this.state.totalResults/18)){

         }
         else {
             let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca9cac1c58342e3a9b7d34f03b7129d&page=${this.state.page + 1}&pageSize=18`;
                 let data = await fetch(url);
                 let parsedData = await data.json();
                 this.setState({
                     articles : parsedData.articles,
                     page : this.state.page + 1
                 })
         }
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
                        <h1>Top Headlines</h1>
                        {this.state.articles.map((element)=>{
                    return <div className="col md-4 my-2" key={element.url}>
                                <NewComponent title={element.title}
                                            description={element.description}
                                            image={element.urlToImage}
                                            newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button href="#" disabled={this.state.page<=1} onClick={this.PreviousClick} className="btn btn-dark"> &larr; Previous</button>
                    <button href="#" className="btn btn-dark" onClick={this.NextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
