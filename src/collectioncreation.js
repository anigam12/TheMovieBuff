/*var collectionsArray = [];*/

export function collectioncreation (newCollectionName, collectionsArray) {
    //let newCollectionName = document.getElementById("newCollection").value;
    let collection = {};
    collection['name'] = newCollectionName;
    collection['moviesArray'] = [];
    collectionsArray.push(collection);
    let abc = document.getElementById("variousCollections");
    let collectionLists = `<li><a href="" id="${newCollectionName}" onclick="addMoviesToCollection(collectionsArray,${newCollectionName})" class="collection-item">${newCollectionName}</a></li>`;
    abc.innerHTML += collectionLists;
}