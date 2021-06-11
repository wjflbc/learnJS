"use strict";

const numberOfFilms = prompt('How many films you watch');

const personalMovieDB = {
    count: numberOfFilms,
    movie:{},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What do you watch last film', ''),
      b = prompt('rate it', ''),
      c = prompt('What do you watch last film', ''),
      d = prompt('rate it', '');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);