// Code MovieReviews Here
import React, {Component} from 'react'

const Review = ({display_title, headline, summary_short}) => {
return(
    <div className = "review">
        <ol>
            <li>{display_title}</li>
        </ol>
        
        <ul>
            <li>{headline}</li>
            <li>{summary_short}</li>

        </ul>
        
    </div>
)
}

const MovieReviews = ({reviews}) => <div className = "review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
