const link = "https://spreadsheets.google.com/feeds/list/1vnKwmmsSAnZKvp_B1aGO3OcEXAQ1NMiuLv3yn-m9qPg/od6/public/values?alt=json";

fetch(link)
    .then(res => res.json())
    .then(handleData);

function handleData(data) {
    const myData = data.feed.entry;
    console.log(myData);

    cMovies = myData.filter(function (movie) {
        return movie.gsx$topmovieabout.$t === "TRUE";
    });

    cMovies.forEach(showCmovies)

    function showCmovies(cMovie) {

        const template2 = document.querySelector("#cmovies").content;
        const clone2 = template2.cloneNode(true);

        clone2.querySelector(".front h3").textContent = cMovie.gsx$name.$t;
        clone2.querySelector(".creview span").textContent = cMovie.gsx$review.$t;
        clone2.querySelector(".revlink").innerHTML = "<a href=" + cMovie.gsx$reviewlink.$t + ">Read full review</a>";
        clone2.querySelector(".imgplace").innerHTML = "<img src=../images/databaseimg/" + cMovie.gsx$photo.$t + ">";
        document.querySelector(".bestmovies").appendChild(clone2);
    }

}
