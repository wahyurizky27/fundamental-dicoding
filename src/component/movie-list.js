import css from "bootstrap/dist/css/bootstrap.min.css";
import './movie-item.js';

class MovieList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        ${css}
        
        .row{
            margin-top: -50px;
            padding-bottom: 30px;
        }
        </style>

        <div class="row" id="results">
        <div class="col-12">
        </div>
        </div>`;

        const results = this._shadowRoot.querySelector('#results');
        this._movies.Search.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            movieItemElement.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mb-3');
            results.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this._shadowRoot.innerHTML = `
        <style>
        h4{
            margin-top: -150px;
            font-weight: lighter;

        }
        </style>
        <h4>${message}</h4>
        `;
    }
}

customElements.define("movie-list", MovieList);