const selectElement = document.querySelector('.selectIcon');

selectElement.addEventListener('change', (event) => {

    switch (event.target.value){
        case "Heart":
            deleteDrawCloud();
            deleteDrawStar();
            attachDrawHeart();
            break;
        case "Star":
            deleteDrawHeart();
            deleteDrawCloud();
            attachDrawStar();
            break;
        case "Cloud":
            deleteDrawStar();
            deleteDrawHeart();
            attachDrawCloud();
            break;
        
    }
});
