const button = document.querySelector(".Search-button");
const inputKey = document.querySelector(".input-keyword");
const moviewContainer = document.querySelector(".movie-container");

//refactor async await
// karena ini sync makanya kita hrus declare dia jd async
// klo ga dia bakal baliki promise caranya diaksi async di functionnya
// trs di kasi tau apa yg mau di async pakai await

button.addEventListener("click", async function () {
    const movies = await getMovies(inputKey.value);
    updateUI(movies);
});

//event binding
document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("modal-button")) {
        const imdbid = e.target.dataset.imdbid;
        const moviesDetail = await getMoviesDetail(imdbid);
        updateUIDetail(moviesDetail);
    }
});

function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?&apikey=dca61bcc&s=" + keyword)
        .then((respone) => respone.json())
        .then((response) => response.Search);
}

function getMoviesDetail(imdbid) {
    return fetch("http://www.omdbapi.com/?&apikey=dca61bcc&i=" + imdbid)
        .then((respone) => respone.json())
        .then((response) => response);
}

function updateUI(movies) {
    let cards = "";
    movies.forEach((result) => {
        cards += showCard(result);
    });
    moviewContainer.innerHTML = cards;
}

function updateUIDetail(Detail) {
    const moviesDetail = showModal(Detail);

    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = moviesDetail;
}

function showCard(movie) {
    return ` <div class="col-md-4 my-3">
                <div class="card">
                    <img src=${movie.Poster}  class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title} </h5>
                        <div class="card-subtitlle mb-2 text-muted">
                            ${movie.Year} 
                        </div>
                        <a href="#" class="btn btn-primary modal-button"  data-bs-toggle="modal"
                        data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Detail</a>
                    </div>
                </div>
            </div>`;
}

function showModal(DetailMovie) {
    return ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src=${DetailMovie.Poster} class="img-fluid" />
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${DetailMovie.Title} (${DetailMovie.Year})</h4>
                            </li>
                            <li class="list-group-item">
                                <strong>Director : </strong> ${DetailMovie.Director}
                            </li>
                            <li class="list-group-item">
                                <strong>Actor : </strong> ${DetailMovie.Actors}
                            </li>
                            <li class="list-group-item">
                                <strong>Writer : </strong> : ${DetailMovie.Writer}
                            </li>
                            <li class="list-group-item">
                                <strong>Plot</strong> : <br> ${DetailMovie.Plot}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
