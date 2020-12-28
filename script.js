const parent = document.getElementById('movie-list');
const filters = Array.from(document.getElementsByName('filter'));

const removeAllMovies = () => {
    const children = Array.from(parent.getElementsByTagName('li'));
    children.forEach((child) => {
        parent.removeChild(child);
    });
};

const imdbID = (imdbID) => {
    return "<a href=\"http://www.imdb.com/title/" + imdbID + "\" target=\"_blank\">";
};

const imagePoster = (poster) => {
    return  "<img src=\"" + poster + " width=\"400px\"></a>";
};

const addMoviesToDOM = (movies) => {
    removeAllMovies();

    movies.forEach((movie) => {
        const listElement = document.createElement('li');
        listElement.id = movie.Title;
        listElement.innerHTML = imdbID(movie.imdbID) + imagePoster(movie.Poster);
        parent.appendChild(listElement);
    });
};

const filterLatestMovies = () => {
    const filteredMovies = movies.filter((movie) => {
        return movie.Year >= 2014;
    });

    addMoviesToDOM(filteredMovies);
};

const filterMovies = (filter) => {
    const filteredMovies = movies.filter((movie) => {
        if(movie.Title.toLowerCase().includes(filter)) {
            return movie;
        };
    });

    addMoviesToDOM(filteredMovies);
};

const addEventListeners = (filters) => {
    filters.forEach((filter) => {
        filter.addEventListener('change', function(e) {
            if(e.target.id === "nieuwste") {
                filterLatestMovies();
            } else {
                filterMovies(e.target.id);
            };      
        });
    });
};

getInputValue = () => {
    const search = document.getElementById('zoekbalk').value.toLowerCase();
    filterMovies(search);
};

addMoviesToDOM(movies);
addEventListeners(filters);

