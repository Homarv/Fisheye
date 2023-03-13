
    function inittest(arrayOfActualMedia, photographer){
        console.log(arrayOfActualMedia)
        const selectsortmedia = document.querySelector("select")
        selectsortmedia.addEventListener("change", function(){
        console.log(sort(this.selectedIndex, arrayOfActualMedia, photographer))
        })
    }
    
    // fonction destroy DOM 
    function sort(x, arrayOfActualMedia, photographer ){
        //trier par les likes 
        if (x === 0){
           const datasort = arrayOfActualMedia.sort(function compareNombres(a, b) {
                return a.likes - b.likes;
              })
            console.log(datasort)
            const recovery = document.querySelector(".media_photographer")
            recovery.innerHTML = ""
            displayDataMedia(photographer, datasort)
         }
         //trier par la date d'ajout 
        else if(x === 1){
            const datasort = arrayOfActualMedia.sort(function compareDate(a, b) {
                return new Date(b.date) - new Date(a.date)
            })
            console.log(datasort)
            const recovery = document.querySelector(".media_photographer")
            recovery.innerHTML = ""
            displayDataMedia(photographer, datasort)
        }
        //Trier dans l'ordre alphabétique 
        else if(x === 2){
            const datasort = arrayOfActualMedia.sort(function compareNombres(a, b) {
                return  a.title.localeCompare(b.title)});
              
            console.log(datasort)
            const recovery = document.querySelector(".media_photographer")
            recovery.innerHTML = ""
            displayDataMedia(photographer, datasort)
        }
        EventOnLike();
        Lightbox.init();
    }
   





