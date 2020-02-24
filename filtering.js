const link = "https://spreadsheets.google.com/feeds/list/1vnKwmmsSAnZKvp_B1aGO3OcEXAQ1NMiuLv3yn-m9qPg/od6/public/values?alt=json";

fetch(link)
    .then(res => res.json())
    .then(handleData);

function handleData(data) {
    const myData = data.feed.entry;
    console.log(myData);
    myData.forEach(showMovies);
}

function showMovies(movie) {

    const genreSplit = movie.gsx$genre.$t.split(", ");
    console.log(genreSplit);
    const actorSplit = movie.gsx$mainactor.$t.split(", ");
    console.log(actorSplit);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    for (i = 0; i < actorSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = actorSplit[i];
        clone.querySelector(".actors span").appendChild(elemLi);

    }

     for (i = 0; i < genreSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = genreSplit[i];
        clone.querySelector(".genre span").appendChild(elemLi);

    }
    const art = clone.querySelector('article');
    genreSplit.forEach(genre=>{
        art.classList.add(genre)
    })
    clone.querySelector(".year span").textContent = movie.gsx$year.$t;
    clone.querySelector("h3").textContent = movie.gsx$name.$t;
    clone.querySelector(".director span").textContent = movie.gsx$director.$t;
    clone.querySelector(".time span").textContent = movie.gsx$runtime.$t;
    clone.querySelector(".imgplace").innerHTML = "<img src=images/databaseimg/" + movie.gsx$photo.$t + ">";

    document.querySelector(".maincontent").appendChild(clone);


}

document.querySelectorAll('.genres button').forEach(button=>{
    button.addEventListener('click', function(){
        //console.log(button.dataset.filter)
        filterByGenre(button.dataset.filter)
    })
})
/*document.querySelector("#dramafilter").addEventListener("click", function(){
    filterByGenre('drama')
});
document.querySelector("#crimefilter").addEventListener("click", function(){
    filterByGenre('crime')
});*/
function filterByGenre(genre) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie=>{
        if(oneMovie.classList.contains(genre)){
             oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}

document.querySelector("#all").addEventListener("click", showAll);

function showAll() {
    document.querySelectorAll(".oneMovie").forEach(oneMovie=>{
        oneMovie.classList.remove("hide")
    })
}