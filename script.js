const input = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-movie");
const table = document.getElementById("table-movie");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '30ed671deamsh92cc402a0d75e4ep1a87d9jsn6ec76f5bd48d',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
};

async function findMovie(movie) {
    const url = `https://moviesminidatabase.p.rapidapi.com/series/idbyTitle/${movie}/`;
    try {
        const response = await fetch(url, options);
        const resultText = await response.text();

        // Convertir la cadena de texto a un objeto JSON
        const resultJSON = JSON.parse(resultText);
        //addInfoMovie(resultJSON);
        console.log(resultJSON);

    } catch (error) {
        console.error(error);
    }
}

function addInfoMovie(movie) {
    table.innerHTML = "";

    const ftd = table.insertRow();
    ftd.innerHTML = `
    <td>IMDB_ID</td>
    <td>Movie Name</td>`;

    movie.results.forEach(m => {
        const row = table.insertRow();
        row.innerHTML = `
    <td>${m.imdb_id}</td>
    <td>${m.title}</td>
    `;
    });
}

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        findMovie(input.value);
    }
})

searchBtn.addEventListener("click", () => {
    findMovie(input.value);
})