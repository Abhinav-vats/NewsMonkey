// import React, { Component, useEffect } from 'react'

import React, { useEffect } from "react";

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import jsonData from '../sampleResponse.json';
import { useState } from 'react';

const News =(props)=> {

    const [articles, setArticles]=useState([])
    const [loading, setLoading]=useState(false)
    const [page, setPage]=useState(1)
    const [hasNextPage, setHasNextPage]=useState(true)

    

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //         hasNextPage: true
    //     };

    //     document.title = `News Monkey $ {props.category?" - "+this.capitalizeFirstLetter(props.category):""}`;
    // }

    const capitalizeFirstLetter  = (str) => {
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

    const handlePreviousClick = async () => {
        

        const finalResponse = await updateNews(page-1);

        await setPage(page - 1);

        let totalItemsFetched = props.pagesize * (page + 1);
        if (totalItemsFetched > finalResponse.totalResults) {
            // this.setState({
            //     hasNextPage: false
            // })

            setHasNextPage(false)
        } else {
            // this.setState({
            //     hasNextPage: true
            // })
            setHasNextPage(true)
        }

    }
    const handleNextClick = async () => {
        const inc = page+1;

        const finalResponse = await updateNews(page+1);

        
        await setPage(inc);

        let totalItemsFetched = props.pagesize * (page + 1);
        if (totalItemsFetched > finalResponse.totalResults) {
             // this.setState({
            //     hasNextPage: false
            // })

            setHasNextPage(false)
        } else {
            // this.setState({
            //     hasNextPage: true
            // })
            setHasNextPage(true)
        }
    }

    const updateNews = async (page) => {
        props.setProgress(10);
        const url = //"https://httpbin.org/json";
            `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-09-24&to=2022-09-20&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=`
                .concat(page)
                .concat(`&pageSize=${props.pagesize}`);

            setLoading(true);

        // this.setState({
        //     loading: true
        // })
        const data = await fetch(url)
        
        const finalResponse = await data.json()
        if (finalResponse.status !== "error") {

            setArticles(finalResponse.articles);
            
            // this.setState({
            //     articles: finalResponse.articles,
            //     loading: false
            // })
            props.setProgress(30);
        }else{

            setArticles(jsonData.articles);
            

            // this.setState({
            //     articles: jsonData.articles,
            //     loading: false
            // })
            props.setProgress(30);
        }
        setLoading(false);
        props.setProgress(100);
        return finalResponse;
    }

    useEffect(()=>{
        updateNews(page);
        document.title = `News Monkey ${props.category?" - "+capitalizeFirstLetter(props.category):""}`;
    }, []);

    // async componentDidMount() {
    //     await this.updateNews(page);
    // }
    // render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center my-9" style={{marginTop:"80px"}}>NewsMonkey - Top Bites{props.category?" - "+capitalizeFirstLetter(props.category):""}</h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem source={element.source.name} author={element.author} pubDate={element.publishedAt} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : `https://content.api.news/v3/images/bin/a85e4068a06acf0bed467669d1063c7e`} title={element.title ? element.title : ""} description={element.description ? element.description : ""} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePreviousClick}>{page} &larr; Privious </button>
                    <button disabled={!hasNextPage} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr; {page}</button>
                </div>
            </div>
        )
    // }
}

News.defaultProps = {
    pagesize: 12,
    country: "in",
    apiKey: "",
    category: "entertainment"
}

News.propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string
}

export default News
