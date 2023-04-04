function mediaFactory(data) {
    const {id, PhotographerId, title, image, price, date, likes, video } = data; 
    
    const media = getrootofMedia();

    function getrootofMedia(){
        if(data.video == undefined){
            const rootofphoto = `./assets/photos/${image}`;
            return rootofphoto;
        }else{
            const rootofvideo = `./assets/photos/${video}`;
            return rootofvideo;
        }
    }
    
    function getMediaPhotographerCardDOM() {
        const article = document.createElement( 'article' );
        if(data.video == undefined){
        article.innerHTML = // faire data.id pour récupérer le même Id que querySELECT
        `  
        <div class="media_photographer_card"> 
            <div class ="containt_image">
                <img src=${media} alt='${data.title}, close up view' class='media_photographer_photo' role='link' tabindex="0"></img> 
            </div>
            <div class='media_photographer_titleandlike flex_center_sb'>
                <h2 class="media_photographer_title">${data.title}</h2>
                <div class="flex_center unliked ">
                    <h2 class="media_photographer_like">${data.likes }</h2>
                    <i class="fa-solid fa-heart media_photographer_heart" aria-label="likes" tabindex="0" role="button" aria-label="icon coeur permet de liker l'image"></i>
                </div>
            </div>
        </div>
        `;
        }else{
            article.innerHTML = 
            `  
            <div class="media_photographer_card">
                <video class="video" tabindex="0">
                    <source src=${media} alt='${data.title}, close up view' type="video/mp4"></img> 
                </video>
                <div class='media_photographer_titleandlike flex_center_sb'>
                    <h2 class="media_photographer_title">${data.title}</h2>
                    <div class="flex_center unliked ">
                        <h2 class="media_photographer_like">${data.likes }</h2>
                     <i class="fa-solid fa-heart media_photographer_heart" aria-label="likes" tabindex="0" role="button" aria-label="icon coeur permet de liker la vidéo"></i>
                    </div>
                 </div>
            </div>
            `;
        }
        return article;
    }
    return {id, PhotographerId, title, image, price, date, likes,video, getMediaPhotographerCardDOM } 
}