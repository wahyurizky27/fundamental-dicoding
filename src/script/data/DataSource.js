class DataSource {
    static searchMovie(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=2fa0325&s=${keyword}`)
            .then(res => res.json())
            .then(res => {
                if (res.Response) {
                    return Promise.resolve(res);
                }
            })
            .catch(() => Promise.reject(`Please Check Your Network Connection`));
    }
}

export default DataSource;
