const link = "https://spreadsheets.google.com/feeds/list/1vnKwmmsSAnZKvp_B1aGO3OcEXAQ1NMiuLv3yn-m9qPg/od6/public/values?alt=json";

fetch(link)
    .then(res => res.json())
    .then(handleData);

function handleData(data) {
    const myData = data.feed.entry;
    console.log(myData);
    myData.forEach(showMovies);

     cMovies = myData.filter(function (movie) {
        return movie.gsx$topmovie.$t === "TRUE";
    });

    cMovies.forEach(showCmovies)

    function showCmovies(cMovie){

     const template2 = document.querySelector("#cmovies").content;
    const clone2 = template2.cloneNode(true);

    clone2.querySelector(".front h3").textContent = cMovie.gsx$name.$t;
     clone2.querySelector(".imgplace").innerHTML = "<img src=../images/databaseimg/" + cMovie.gsx$photo.$t + ">";
    document.querySelector(".movies").appendChild(clone2);
    }

}

var clone;

function showMovies(movie) {

    const genreSplit = movie.gsx$genre.$t.split(", ");

    const actorSplit = movie.gsx$mainactor.$t.split(", ");

    const directorSplit = movie.gsx$director.$t.split(", ");


    const year = movie.gsx$year.$t;

    const template = document.querySelector("#allmovies").content;
    clone = template.cloneNode(true);
    const art = clone.querySelector('article');
    var actorSpaceless;
    var directorSpaceless;

    for (i = 0; i < actorSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = actorSplit[i];
        actorSpaceless = actorSplit[i].replace(/\s+/g, '');
        art.classList.add(actorSpaceless);
        clone.querySelector(".actors span").appendChild(elemLi);

    }

    for (i = 0; i < genreSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = genreSplit[i];
        clone.querySelector(".genre span").appendChild(elemLi);

    }

    for (i = 0; i < directorSplit.length; i++) {
        const elemLi = document.createElement("li");
        elemLi.textContent = directorSplit[i];
        directorSpaceless = directorSplit[i].replace(/\s+/g, '');
        art.classList.add(directorSpaceless);
        clone.querySelector(".director span").appendChild(elemLi);

    }

    genreSplit.forEach(genre => {
        art.classList.add(genre)
    })



    clone.querySelector(".card .year span").textContent = movie.gsx$year.$t;
    clone.querySelector(".front h3").textContent = movie.gsx$name.$t;
    clone.querySelector(".back .time span").textContent = movie.gsx$runtime.$t;
    clone.querySelector(".imgplace").innerHTML = "<img src=../images/databaseimg/" + movie.gsx$photo.$t + ">";

clone.querySelector(".anim").addEventListener("click", flipCard);

    function flipCard(){

        const card = clone.querySelector(".card");
        console.log(card)
    }



    document.querySelector(".maincontent").appendChild(clone);

    art.classList.add(year);





}



document.querySelectorAll('.genres button').forEach(button => {
    button.addEventListener('click', function () {
        //console.log(button.dataset.filter)
        filterByGenre(button.dataset.filter)
    })
})

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

function filterByActor(actor) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains(actor)) {
            oneMovie.classList.remove('hide')
        } else {
            oneMovie.classList.add('hide')
        }
    })
}


document.querySelectorAll('.directorsfilter button').forEach(button => {
    button.addEventListener('click', function () {
        //console.log(button.dataset.filter)
        filterByDirector(button.dataset.filter)
    })
})

function filterByDirector(director) {
    document.querySelectorAll(".oneMovie").forEach(oneMovie => {
        if (oneMovie.classList.contains(director)) {
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


var textInput = document.querySelector("textarea");
var addButton = document.querySelector(".add");
var container = document.querySelector(".placeholder");

addButton.addEventListener("click", addComment);

function addComment() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
    newDiv.textContent = "Anonymous user said: " + textInput.value;
    newDiv.classList.add("review");
    container.appendChild(newDiv);
}
