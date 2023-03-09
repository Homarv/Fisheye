function getProtographerObject (photographers){
    const photographersSection = document.querySelector(".photographer_section");
    const queryString = window.location.search;
   // console.log(queryString) /// on obtiens le ?id  du photographe 

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

function displayDataPhotogapher(photographer){
    const photographerModel = photographerFactory(photographer);

    ////input name Photographer on Form
    const photographerName = document.querySelector(".photographer_name");
    const photographerNameFormDOM = photographerModel.getphotographerNameFormDOM(); 
    photographerName.appendChild(photographerNameFormDOM)
    ////input display Data description
    const photographerDescription = document.querySelector(".photographer_description");
    const ProfilDescriptionCardDOM = photographerModel.getProfilDescriptionCardDOM(); 
    photographerDescription.appendChild(ProfilDescriptionCardDOM); 
    ////input display Data photo
    const photographerPhoto = document.querySelector(".photographer_photo");
    const ProfilPhotoCardDOM = photographerModel.getProfilPhotoCardDOM(); 
    photographerPhoto.appendChild(ProfilPhotoCardDOM)
    
}
       
function displayDataMedia(photographer,media) {
    ////input display media and save total like
    const mediaCard = document.querySelector(".media_photographer");
    let totalLike = 0

    //// boucle on object media to filter and display media 
    media.forEach((media) => { 
        if (media.photographerId === photographer.id){
            totalLike += media.likes;
            const mediaModel = mediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaPhotographerCardDOM();
            mediaCard.appendChild(mediaCardDOM);       
   //         console.log(totalLike)
        }
        else{
        }
    });
    const photographerModel = photographerFactory(photographer, totalLike);
    ////input display Price and Like                      ///////voir si il est nécessaire de modifier cette partie et d'en apporter une partie dans la partie supérieur (séparation) 
    const photographerPriceAndLike = document.querySelector(".photographer_price_and_like");
    const ProfilPriceAndLikeCardDOM = photographerModel.getProfilPriceAndLikeCardDOM(); 
    photographerPriceAndLike.appendChild(ProfilPriceAndLikeCardDOM)

    return totalLike;
};

async function test() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    console.log( { photographers, media })
    //separate(photographers);
    const photographer = getProtographerObject(photographers);
    displayDataPhotogapher(photographer);
    const totalLike = displayDataMedia(photographer, media);
    console.log(totalLike)
  /*console.log(AllLikeDOM)*/
    EventOnLike();
    Lightbox.init()
   // navigationOnLightbox()
};

// lance la fonction test
test();
