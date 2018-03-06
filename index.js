import $ from "jquery";
import {getMovie} from './src/getMovie.js';
import {addtocollection} from './src/addtocollection.js';
import {collectioncreation} from './src/collectioncreation.js';
//import {addMoviesToCollection} from './src/addMoviesToCollection.js';

/*onclick="addtocollection('${data.results[i].original_title}','${data.results[i].vote_average}','${data.results[i].release_date}','${poster}'*/


export let collectionsArray = [];

$("#searchbutton").click(function(){
	getMovie();
});

$("#createbutton").click(function(){
	collectioncreation($("#newCollection").val(), collectionsArray);
});
