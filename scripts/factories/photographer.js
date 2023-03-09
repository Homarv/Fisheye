function photographerFactory(data, totalLike) {
    const { name, portrait, city, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    console.log(data)
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = 
        `
            <a href = "./photographer.html?id=${data.id}" alt='${data.name}'>
                <h2>${data.name}</h2>
                <img src=${picture} alt='${data.name}'></img> 
            </a>
            <h3>${city}</h3>
            <p>${tagline}</p>
            <p>${price}€/jour</p>
        `;
        return (article);
    }

    function getProfilDescriptionCardDOM(){
        const article = document.createElement('article'); 
        article.innerHTML =
         `
        <h2>${data.name}</h2>
        <h3>${city}</h3>
        <p>${tagline}</p>        

        `;
        return (article);

    }

    function getProfilPhotoCardDOM(){
        const article = document.createElement('div'); 
        article.innerHTML =
         `
            <img src=${picture} alt='${data.name}' class='photographer-photo'></img> 
        `;
        return (article);

    }

    /// créer un élémént paragraphe pour le prix 
    function getProfilPriceAndLikeCardDOM(){
        const article = document.createElement('div'); 
        article.classList.add("flex_center");
        article.innerHTML =
         `
            <p>${totalLike}</p>
            <i class="fa-solid fa-heart photographer_heart_total_likes"></i>
            ${price}€/jour
        `;
        return (article);
    }

    /// créer un élément h2 dans la modale pour le nom du photographe 
    function getphotographerNameFormDOM(){
        const article = document.createElement('h2'); 
        article.innerHTML =
         `
         ${data.name}
         `;
        return (article);

    }

    return { name, picture, city, tagline, price, getUserCardDOM, getProfilDescriptionCardDOM, getProfilPhotoCardDOM, getProfilPriceAndLikeCardDOM, getphotographerNameFormDOM}
}


