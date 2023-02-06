function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = 
        `
            <a href = "./photographer.html?id=${data.id}">
                <h2>${data.name}</h2>
                <img src=${picture} alt=""> </img>
            </a>
            <h3>${city} </h3>
            <p>${tagline} </p>
            <p>${price}€/jour</p>
        `;
    /*  const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        const taglinearea = document.createElement( 'p' );
        taglinearea.textContent = tagline;
        const pricearea = document.createElement( 'p' );
        pricearea.textContent = price +" €/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglinearea);
        article.appendChild(pricearea); */

        return (article);
    }
    return { name, picture, city, tagline, price, getUserCardDOM }
}