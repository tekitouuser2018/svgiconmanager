const selectElement = document.querySelector('.selectIcon');

selectElement.addEventListener('change', (event) => {

    switch (event.target.value){
        case "Heart":
            deleteDrawStar();
            attachDrawHeart();
            break;
        case "Star":
            deleteDrawHeart();
            attachDrawStar();
            break;
        case "Cloud":
            deleteDrawStar();
            deleteDrawHeart();

            break;
        
    }
});
