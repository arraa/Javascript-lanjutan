$ ('.Search-button').on('click', function(){

    $.ajax({
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=dca61bcc&s=" + $('.input-keyword').val(),
        success: (result) => {
            const movies = result.Search;
            let cards = "";
            movies.forEach((result) => {
                cards += showCard(result);
            });
    
            $(".movie-container").html(cards);
    
            $(".modal-button").on("click", function () {
                $.ajax({
                    url:
                        `http://www.omdbapi.com/?&apikey=dca61bcc&i=` +
                        $(this).data("imdbid"),
                    success: (result) => {
                        const moviesDetail = showModal(result);
                        $(".modal-body").html(moviesDetail);
                    },
                    error: (e) => console.log(e.responseText),
                });
            });
        },
        error: (e) => console.log(e.responseText),
    });
    
})

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

function showModal(DetailMovie){
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
