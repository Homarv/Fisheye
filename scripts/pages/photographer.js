//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    let photographers =  fetch("/data/photographers.json")
    // et bien retourner le tableau photographers seulement une fois récupéré
    .then((photographers) => photographers.json())
    console.log(photographers) 
    return photographers
}

////////////////////////

async function test2 (photographers){
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
    }
};

//async function separate (photographers){
//    photographers.forEach((x) =>
//    console.log(x.name)
//    )};
    

async function test() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    //separate(photographers);
    const i = await test2(photographers);
    displayData(i); 
};

test();

  async function displayData(photographer) {
        const photographersSection = document.querySelector(".photographer_section");
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM(); 
        photographersSection.appendChild(userCardDOM);
        
    };


