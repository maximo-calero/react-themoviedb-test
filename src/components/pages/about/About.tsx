import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const About = () => {
    return (
        <Container>

            <Typography variant="body1" gutterBottom>
                This is a test app to show the possibilities of React, being a class oriented approach.
                The app offer these functionalities:
            </Typography>
            <Typography variant="body2" gutterBottom>
                - Search Movies
            </Typography>
            <Typography variant="body2" gutterBottom>
                - Search Tv Shows
            </Typography>
            <Typography variant="body2" gutterBottom>
                - Rate Movies
            </Typography>
            <Typography variant="body1" gutterBottom>
                The API used in this app is The Movie Database API:
            </Typography>
            <a href='https://www.themoviedb.org/' target='_blank'>The Movie Database API</a>
            <Typography variant="body1" gutterBottom>
                You can see the code in the following GitHub repo :
            </Typography>
            <a href='https://github.com/maximo-calero/react-themoviedb-test' target='_blank'>React TheMovieDB Test Repo</a>


        </Container>
    );
};

export default About;
