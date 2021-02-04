import css from "bootstrap/dist/css/bootstrap.min.css";

class searchBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector('#searchElement').value;
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            ${css}

            .search-container {
                
                padding: 5px;
                margin: 5px;
                border-radius: 5px;
                display: flex;   
                background-color: #dbc6eb;
                box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
              }

              .search-container > input {
                border-color: #17a2b8;
              }
            </style>
            <div class="input-group mt-5 mb-3 col-lg search-container">
                <input type="text" 
                    class="form-control" 
                    id="searchElement" 
                    placeholder="Input movie title">

                <div class="input-group-append">
                    <button id="search-submit" 
                        class="btn btn-outline-info" 
                        type="submit"> Search </button>
                </div>
            </div>

        `;

        this._shadowRoot.querySelector("#search-submit").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-bar', searchBar);