import React from 'react';
import { Rate } from 'antd';
import './Rating.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({ movieRating, isMovieRating, rating, setRating }) => {
    
    const handleChange = value => {
        setRating( value );
    };

        return (
            isMovieRating ?
            <span className='ratingContent'>
                <Rate disabled value={movieRating} />
            </span>
            :
            <span className='ratingContent'>
            <Rate tooltips={desc} onChange={handleChange} value={rating} />
            </span>
        );
    }

export default Rating