import { Link } from "react-router-dom";
import React, { Component } from 'react'
import NewComponent from './NewsComponent';
import Spinner from './Spinner';

export class News extends Component {
    articles = []

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }
    async componentDidMount() {
        console.log(this.props.cardmode)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    PreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }
    NextClick = async () => {
        if (!(this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
                        <h1 className={`text-center text-${this.props.textmode}`}>Top Headlines</h1>
                        {this.state.loading && <Spinner />}
                        {!this.state.loading && this.state.articles.map((element) => {
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
                    <button href="#" disabled={this.state.page <= 1} onClick={this.PreviousClick} className={`btn btn-${this.props.mode? "light" : "light"}`}> &larr; Previous</button>
                    <Link to="/" ><button onClick={this.PreviousClick} className={`btn btn-${this.props.mode? "light" : "light"}`}>Home</button> </Link>
                    <button href="#" disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} className={`btn btn-${this.props.mode? "light" : "light"}`} onClick={this.NextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
