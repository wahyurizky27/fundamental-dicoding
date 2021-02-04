import css from "bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            ${css}

            .card {
                font-weight:16px;
                font-weight:400;
                border-radius:20px;
                width: 100%;
                display: block;
                box-shadow: 0 3px 20px rgba(0,0,0,0.5);
            }

            .card img{
                height: 400px;
                object-fit: cover;
                border-radius: 20px;   
            }
            
        </style>
        <div class="card mb-4 bg-gray-400">
            <img src="${this._movie.Poster}" class="card-img">
            <div class="card-body bg-grey-400">
                <h5 class="card-title text-center">${this._movie.Title}</h5>
            </div>
        </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);