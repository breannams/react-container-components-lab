import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'kRCjfNclXGCHXmZY45WZxFAoKkvezwHR'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`+`api-key=${NYT_API_KEY}`+`&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then((movies) => {
            this.setState({
                reviews: movies.results
            })
        }) 
 
    }

    handleInputChange = (e) => {
        this.setState({ 
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} value={this.state.searchTerm}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }


}