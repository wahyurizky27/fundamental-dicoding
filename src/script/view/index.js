import '../../component/search-bar';
import '../../component/movie-list';

import DataSource from "../data/DataSource";


const index = () => {
    
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(res => {
                if (res.Search) {
                    renderResult(res);
                } else {
                    fallbackResult(`${searchElement.value} Not found.. please try again`);
                }
            })
            .catch(message => fallbackResult(message));
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default index;