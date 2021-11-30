import React from 'react';
import {Card} from 'react-bootstrap';
import MovieRating from '../Rating/Rating'

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card' style={{marginRight:'20px'}}>
            <Card style={{ width: '18rem', margin:"30px auto" }} >
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title> {movie.title} </Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <MovieRating movieRating={movie.rate} isMovieRating={true} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
