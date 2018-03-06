//const collectionsArray = [];
import $ from "jquery";
import {addtocollection} from './addtocollection';
export function addMoviesToCollection(collectionsArray, collectionId) {
    // let collectionId = this.id;
    //console.log(collectionId.innerHTML);
    // for (let i = 0; i < collectionsArray.length; i += 1) {
    collectionsArray.forEach(function(element) {
        // statements
        if (collectionId.innerHTML == element.name) {
            //console.log(element.moviesArray);
            //let movieadded = addtocollection
            element.moviesArray.push(movie);
            //console.log(element);
        }
    });
    // for(let i in collectionsArray){
    //     if(collectionsArray[i].name == collectionId)
    // }

    // }
}