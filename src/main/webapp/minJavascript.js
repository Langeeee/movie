
function makeUI(data) {
    const lis = data.map(function (data){
        return `<li> Id = (${data.id}) Titel = (${data.title}) År = (${data.year}) Medvirkende = (${data.actors}) </li>`
    });
    const listItemsAsStr = lis.join("");
    return listItemsAsStr;
}



document.getElementById("btn").onclick = function() {
   fetch("api/movie/all")
           .then(res => res.json())
           .then(data => {
               const lis = makeUI(data);
               document.getElementById("data").innerHTML = lis;
   })
   }
   
  function findmoviebyid (data) {
      
      var lookup = {};
    for (var i = 0, len = data.length; i < len; i++) {
    lookup[data[i].id] = data[i];
    return i;
}

};
   



