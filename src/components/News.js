import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            hasNextPage:true
        }
    }

    handlePreviousClick = async () => {
        console.log("Previous Button clicked");
        let url = //"https://httpbin.org/json";
            "https://newsapi.org/v2/top-headlines?country=in&from=2022-09-24&to=2022-09-20&sortBy=popularity&apiKey=26304ff743c34f4f8851b7b81300ed8a&page=".concat(this.state.page - 1).concat("&pageSize=12");
        const data = await fetch(url)
        const finalResponse = await data.json()
        console.log(finalResponse)
        this.setState({ articles: finalResponse.articles })
        this.setState({
            page: this.state.page - 1
        })

        let totalItemsFetched  = 12 *(this.state.page+1);
        if(totalItemsFetched>finalResponse.totalResults){
            this.setState({
                hasNextPage: false
            })
        }else{
            this.setState({
                hasNextPage: true
            })
        }
        
    }
    handleNextClick = async () => {
        console.log("Next Button clicked");
        
        let url = //"https://httpbin.org/json";
            "https://newsapi.org/v2/top-headlines?country=in&from=2022-09-24&to=2022-09-20&sortBy=popularity&apiKey=26304ff743c34f4f8851b7b81300ed8a&page=".concat(this.state.page + 1).concat("&pageSize=12");;
        const data = await fetch(url)
        const finalResponse = await data.json()
        console.log(finalResponse);
        
        this.setState({ articles: finalResponse.articles })

        this.setState({
            page: this.state.page + 1
        })
        
        let totalItemsFetched  = 12 *(this.state.page+1);
        if(totalItemsFetched>finalResponse.totalResults){
            this.setState({
                hasNextPage: false
            })
        }else{
            this.setState({
                hasNextPage: true
            })
        }
    }


    async componentDidMount() {
        // "https://httpbin.org/json"
        let url = //"https://httpbin.org/json";
            "https://newsapi.org/v2/top-headlines?country=in&from=2022-09-24&to=2022-09-20&sortBy=popularity&apiKey=26304ff743c34f4f8851b7b81300ed8a&page=".concat(this.state.page).concat("&pageSize=12");;
        const data = await fetch(url)
        const finalResponse = await data.json()
        console.log(finalResponse)
        this.setState({ articles: finalResponse.articles })
    }
    render() {
        console.log("Inside render")
        return (
            <div className='container my-3'>
                <h1>NewsMonkey - Top Bites</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : "https://content.api.news/v3/images/bin/a85e4068a06acf0bed467669d1063c7e"} title={element.title ? element.title : ""} description={element.description ? element.description : ""} />
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
