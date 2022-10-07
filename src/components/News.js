import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import jsonData from '../sampleResponse.json';

export class News extends Component {

    static defaultProps = {
        pagesize: 12,
        country: "in",
        apiKey: "",
        category: "entertainment"
    }

    static propTypes = {
        pagesize: PropTypes.number,
        country: PropTypes.string,
        apiKey: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            hasNextPage: true
        };

        document.title = `News Monkey - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    capitalizeFirstLetter  = (str) => {
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

    handlePreviousClick = async () => {
        await this.setState({
            page: this.state.page - 1
        })

        const finalResponse = await this.updateNews(this.state.page);

        let totalItemsFetched = this.props.pagesize * (this.state.page + 1);
        if (totalItemsFetched > finalResponse.totalResults) {
            this.setState({
                hasNextPage: false
            })
        } else {
            this.setState({
                hasNextPage: true
            })
        }

    }
    handleNextClick = async () => {

        await this.setState({
            page: this.state.page + 1
        });

        const finalResponse = await this.updateNews(this.state.page);

        let totalItemsFetched = this.props.pagesize * (this.state.page + 1);
        if (totalItemsFetched > finalResponse.totalResults) {
            this.setState({
                hasNextPage: false
            })
        } else {
            this.setState({
                hasNextPage: true
            })
        }
    }

    updateNews = async (page) => {
        this.props.setProgress(10);
        const url = //"https://httpbin.org/json";
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2022-09-24&to=2022-09-20&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=`
                .concat(page)
                .concat(`&pageSize=${this.props.pagesize}`);

        this.setState({
            loading: true
        })
        const data = await fetch(url)
        
        const finalResponse = await data.json()
        if (finalResponse.status !== "error") {
            this.setState({
                articles: finalResponse.articles,
                loading: false
            })
            this.props.setProgress(30);
        }else{
            this.setState({
                articles: jsonData.articles,
                loading: false
            })
            this.props.setProgress(30);
        }
        this.props.setProgress(100);
        return finalResponse;
    }


    async componentDidMount() {
        await this.updateNews(this.state.page);
    }

    // componentWillUnmount(){
    //     alert("Hello");
    // }
    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">NewsMonkey - Top Bites{this.props.category?" - "+this.capitalizeFirstLetter(this.props.category):""}</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem source={element.source.name} author={element.author} pubDate={element.publishedAt} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : `https://content.api.news/v3/images/bin/a85e4068a06acf0bed467669d1063c7e`} title={element.title ? element.title : ""} description={element.description ? element.description : ""} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>{this.state.page} &larr; Privious </button>
                    <button disabled={!this.state.hasNextPage} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr; {this.state.page}</button>
                </div>
            </div>
        )
    }
}

export default News
