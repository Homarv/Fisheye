function changeTotalLike (){
    let newPara = document.createElement('p');
    newPara.textContent = totalLike;
    totalLikeDOM.replaceWith(newPara);
}

function changeLikeDOM () {
    let newPara = document.createElement('h2');
    newPara.textContent = numberoflike;
    numberoflikeDOM.replaceWith(newPara);
}

function onHeartClick(event){
    console.log(event)
    heartlikeDOM = event.currentTarget
    numberoflikeDOM = event.currentTarget.previousElementSibling // Select DOM de number of like 
    numberoflike = parseInt(numberoflikeDOM.textContent); // convert in number 
    totalLikeDOM = document.querySelector(".photographer_heart_total_likes").previousElementSibling
    totalLike = parseInt(totalLikeDOM.textContent)
    if (heartlikeDOM.classList.contains("theme_color")){
        heartlikeDOM.classList.remove ("theme_color");
        numberoflike -= 1; 
        totalLike -= 1;  
        changeLikeDOM()
        changeTotalLike();
    }
    else{
        heartlikeDOM.classList.add ("theme_color"); /// voir avec SetAttribute
        console.log(heartlikeDOM.classList)
        numberoflike += 1;  
        totalLike +=1;  
        changeLikeDOM()
        changeTotalLike();
    }
}

function EventOnLike(){
    let listeneronheart = document.querySelectorAll(".media_photographer_heart")
    listeneronheart.forEach( 
        x=> x.addEventListener("click", onHeartClick )
    )
    listeneronheart.forEach( 
        x=> x.addEventListener("keyup", (e) => {
            if (e.key === "Enter"){
                onHeartClick(e)
            }
        })
    )  
}

