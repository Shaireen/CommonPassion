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


    const year = movie.gsx$year.$t;

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    const art = clone.querySelector('article');
    var actorSpaceless;

    for (i = 0; i < actorSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = actorSplit[i];
        actorSpaceless = actorSplit[i].replace(/\s+/g, '');
         art.classList.add(actorSpaceless);
        console.log(actorSpaceless)
        clone.querySelector(".actors span").appendChild(elemLi);

    }

    for (i = 0; i < genreSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = genreSplit[i];
        clone.querySelector(".genre span").appendChild(elemLi);

    }

    genreSplit.forEach(genre => {
        art.classList.add(genre)
    })



    clone.querySelector(".year span").textContent = movie.gsx$year.$t;
    clone.querySelector("h3").textContent = movie.gsx$name.$t;
    clone.querySelector(".director span").textContent = movie.gsx$director.$t;
    clone.querySelector(".time span").textContent = movie.gsx$runtime.$t;
    clone.querySelector(".imgplace").innerHTML = "<img src=images/databaseimg/" + movie.gsx$photo.$t + ">";

    document.querySelector(".maincontent").appendChild(clone);

    art.classList.add(year);






}



document.querySelectorAll('.genres button').forEach(button => {
    button.addEventListener('click', function () {
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
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains(genre)) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}

document.querySelectorAll('.actorsfilter button').forEach(button => {
    button.addEventListener('click', function () {
        //console.log(button.dataset.filter)
        filterByActor(button.dataset.filter)
    })
})
/*document.querySelector("#dramafilter").addEventListener("click", function(){
    filterByGenre('drama')
});
document.querySelector("#crimefilter").addEventListener("click", function(){
    filterByGenre('crime')
});*/
function filterByActor(actor) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains(actor)) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}


document.querySelector(".firstdecade").addEventListener("click", filterByYear1);
document.querySelector(".seconddecade").addEventListener("click", filterByYear2);
document.querySelector(".thirddecade").addEventListener("click", filterByYear3);

function filterByYear1(year) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains("1990") || oneMovie.classList.contains("1991") || oneMovie.classList.contains("1992") || oneMovie.classList.contains("1993") ||
            oneMovie.classList.contains("1994") || oneMovie.classList.contains("1995") || oneMovie.classList.contains("1996") || oneMovie.classList.contains("1997") ||
            oneMovie.classList.contains("1998") || oneMovie.classList.contains("1999") || oneMovie.classList.contains("2000")
        ) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}


function filterByYear2(year) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains("2001") || oneMovie.classList.contains("2002") || oneMovie.classList.contains("2003") || oneMovie.classList.contains("2004") ||
            oneMovie.classList.contains("2005") || oneMovie.classList.contains("2006") || oneMovie.classList.contains("2007") || oneMovie.classList.contains("2008") ||
            oneMovie.classList.contains("2009") || oneMovie.classList.contains("2010")
        ) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}

function filterByYear3(year) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains("2011") || oneMovie.classList.contains("2012") || oneMovie.classList.contains("2013") || oneMovie.classList.contains("2014") ||
            oneMovie.classList.contains("2015") || oneMovie.classList.contains("2016") || oneMovie.classList.contains("2017") || oneMovie.classList.contains("2018") ||
            oneMovie.classList.contains("2019") || oneMovie.classList.contains("2020")
        ) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}


document.querySelectorAll('.all').forEach(button => {
    button.addEventListener('click', function () {
        //console.log(button.dataset.filter)
        showAll()
    })
})



function showAll() {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        oneMovie.classList.remove("hide")
    })
}
