function mediaFactory(data) {
    const {id, PhotographerId, title, image, price, date, likes, video } = data; 
    
    function getrootofMedia(){
        let imageOrVideo
        if(data.video == undefined){
            const root = `./assets/photos/${image}`;
            imageOrVideo = 
            `
            <div class ="containt_image">
                <img src=${root} alt='${data.title}, close up view' class='media_photographer_photo' role='link' tabindex="0"></img> 
            </div>
            `
        }else{
            const root = `./assets/photos/${video}`;
            imageOrVideo =
            `
            <video class="video" tabindex="0">
                <source src=${root} alt='${data.title}, close up view' type="video/mp4"></img> 
            </video>
            `
        }
        return  imageOrVideo;
    }
    
    function getMediaPhotographerCardDOM() {
        const imageOrVideo = getrootofMedia();
        const article = document.createElement( 'article' );
        article.innerHTML = // faire data.id pour récupérer le même Id que querySELECT
        `  
        <div class="media_photographer_card"> 
            ${imageOrVideo}
            <div class='media_photographer_titleandlike flex_center_sb'>
                <h2 class="media_photographer_title">${data.title}</h2>
                <div class="flex_center unliked ">
                    <h2 class="media_photographer_like">${data.likes }</h2>
                    <i class="fa-solid fa-heart media_photographer_heart" aria-label="likes" tabindex="0" role="button" aria-label="icon coeur permet de liker l'image"></i>
                </div>
            </div>
        </div>
        `;
       
        return article;
    }
    return {id, PhotographerId, title, image, price, date, likes,video, getMediaPhotographerCardDOM } 
}