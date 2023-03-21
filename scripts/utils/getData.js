async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    console.log(window.location.href)
    let photographers = await fetch(`${window.location.origin}/Fisheye/data/test.json`)
    // et bien retourner le tableau photographers seulement une fois récupéré
    .then((x) => x.json())
    console.log(photographers)
    return photographers;
};