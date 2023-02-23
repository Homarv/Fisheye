function getProtographerObject (photographers){
    const photographersSection = document.querySelector(".photographer_section");
    const queryString = window.location.search;
    console.log(queryString) /// on obtiens le ?id  du photographe 

    const urlParams = new URLSearchParams(queryString)
    const idPhotographer = urlParams.get('id')
    console.log(urlParams.get('id')) //on conserve uniquement la valeur de l'id

    for (let i of photographers) {
    if (i.id == idPhotographer)
    {
        return(i) //retourne l'objet photgrapher  {name: "", id: "", city: "", country: '', tagline: '', …}
    }
    else{
    }
    };
  
};
       
async function displayData(photographer, media) {
    ////input display media and save total like
    const mediaCard = document.querySelector(".media_photographer");
    let totalLike = 0

    //// boucle on object media to filter media 
    media.forEach((media, i= 0) => { 
        ///// REMPLACER i par l'égalité de variable de Id 
        /// est ce que c'est le .for each qui limite ma fonction de variable 
        if (media.photographerId === photographer.id){
            i += 1;
            const mediaModel = mediaFactory(media, i);
            const mediaCardDOM = mediaModel.getMediaPhotographerCardDOM();
            mediaCard.appendChild(mediaCardDOM); 
            let like = document.querySelector(`.media_photographer_like${i}`);
            let Parentslike = document.querySelector(`.DomSelector${i}`);

            ///?? remplacer toute la partie texte ReplaceChild OU destroy + add
            // ?? il sera peut être nécessaire de définir 2 états, cliquable et déja cliqué 
            // ?? switch position true and false 
            like.addEventListener('click',addLike(media));
            totalLike += media.likes;
            console.log(totalLike)
            function addLike(media){{
                i=0
                if(i === 0)
                {   
                    i += 1;
                    media.likes += 1; 
                ////// Remplace l'émément du body par l'élément sélectionné 
                let newLike = document.createElement('h2');
                newLike.innerHTML = 
                    `${media.likes}`;
                Parentslike.replaceChild(newLike, like);
                }
                else{
                    console.log("djkbfqsd")
                }
                ////// Remplace l'émément du body par l'élément sélectionné 
                ////   newTotalLike.innerHTML = 
                //      `${totalLike}`;
                // Parentslike.replaceChild(newTotalLike, totalLike);
            }};
        }
        else{
        }
    });
    
    const photographerModel = photographerFactory(photographer, totalLike);
    ////input display Data description
    const photographerDescription = document.querySelector(".photographer_description");
    const ProfilDescriptionCardDOM = photographerModel.getProfilDescriptionCardDOM(); 
    photographerDescription.appendChild(ProfilDescriptionCardDOM); 
    ////input display Data photo
    const photographerPhoto = document.querySelector(".photographer_photo");
    const ProfilPhotoCardDOM = photographerModel.getProfilPhotoCardDOM(); 
    photographerPhoto.appendChild(ProfilPhotoCardDOM)
    ////input display Price and Like                      ///////voir si il est nécessaire de modifier cette partie et d'en apporter une partie dans la partie supérieur (séparation) 
    const photographerPriceAndLike = document.querySelector(".photographer_price_and_like");
    const ProfilPriceAndLikeCardDOM = photographerModel.getProfilPriceAndLikeCardDOM(); 
    photographerPriceAndLike.appendChild(ProfilPriceAndLikeCardDOM)
    ////input name Photographer on Form
    const photographerName = document.querySelector(".photographer_name");
    const photographerNameFormDOM = photographerModel.getphotographerNameFormDOM(); 
    photographerName.appendChild(photographerNameFormDOM)

    
};

async function test() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    //separate(photographers);
    console.log(media)
    const photographer = getProtographerObject(photographers);
    displayData(photographer, media);
};

// lance la fonction test
test();
