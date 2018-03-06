//var moviesArray = [];
//var movie = {};
//import {movie} from 'index.js';
export let movie = {};
//import $ from "jquery";
export function addtocollection() {

    movie = {};
    movie.title = title;
    movie.vote = vote_average;
    movie.release = release_date;
    movie.img = "https://image.tmdb.org/t/p/w300" + data.poster_path;
    //moviesArray.push(movie);
    console.log(movie);

    /*var Movies = `<div class="row">`;

    var show = `<div class="col s12 m4">
                                  <div class="card">
                                      <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src="${img}" alt="${title}">
                                      </div>
                                      <div class="card-content">
                                        <span class="card-title activator black-text">${title}<i class="material-icons right">more_vert</i></span>
                                        
                                        <p>Release Date: ${release_date}</p>
                                      </div>
                                      <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                                        
                                        <p><h5>Rating</h5> ${vote}</p>
                                      </div>
                                  </div>
                              </div>
                              `;
                              Movies += show;
                              Movies += `</div>`;
                              document.getElementById("myCollection").innerHTML += Movies;*/
}