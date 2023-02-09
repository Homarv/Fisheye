async function getProtographerObject (photographers){
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
        console.log(i)
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

async function displayData(photographer) {
    const photographerModel = photographerFactory(photographer);
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

};

     // QUESTION ???
        /// dois-je ségmenter le GetUserCArdDomen plusieur fonction pour pouvoir le manipuler dans 
        /// le CSS ou dois-je agir sur chaque élement via le CSS => MIXIN

async function test() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    console.log(photographers, media) 


    //separate(photographers);
    const photographer = await getProtographerObject(photographers);
    displayData(photographer); 
};

test();

   