// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, author, pubDate, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>{source?source:"Unknown"}</span>
                    <img src={imageUrl} width={'100px'} height={'150px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...
                            {/* <span className="badge text-bg-success">{source?source:"Unknown"}</span> */}
                            </h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} at {new Date(pubDate).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
