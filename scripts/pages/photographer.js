function getProtographerObject (photographers){
    const photographersSection = document.querySelector(".photographer_section");
    const queryString = window.location.search;
    console.log(queryString)

    const urlParams = new URLSearchParams(queryString)
    const idPhotographer = urlParams.get('id')
    console.log(urlParams.get('id'))

    for (let i of photographers) {
    if (i.id == idPhotographer)
    {
        console.log(i)
        return(i)
    }
    else{
    }
    };
  
};
        // QUESTION ???
        /// Est-ce que ça change réellement quelque chose de mettre la fonction si dessus en async ?? 
        /// Ou placer le fichier "getData", a-il une dénomination en particulier ? 


//async function separate (photographers){
//    photographers.forEach((x) =>
//    console.log(x.name)
//    )};

async function displayData(photographer, media) {
    ////input display media and save total like
    const mediaCard = document.querySelector(".media_photographer");
    let totalLike = 0;

    media.forEach((media, i= 0) => {
        if (media.photographerId === photographer.id){
            i += 1;
            async function addLike(){{
                this.style.color ='orange';
                media.likes += 1; 
                console.log(media.likes)
                }
                return (media.likes);
            }
            const mediaModel = mediaFactory(media, i);
            const mediaCardDOM = mediaModel.getMediaPhotographerCardDOM();
            mediaCard.appendChild(mediaCardDOM); 
            let like = document.querySelector(`.media_photographer_like${i}`);
            like.addEventListener('click',addLike);
            
            console.log(media.likes)
            totalLike += media.likes;
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
    ////input display Price and Like
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




test();
