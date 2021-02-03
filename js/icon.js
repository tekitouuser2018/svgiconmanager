/*
各iconにオブジェクト操作用のfunctionを付与する
 */
function icon(){
    function objectClick(e){
        e.stopPropagation();
        console.log('icon object is clicked');

    }
    let io = document.getElementsByClassName('iconObject');
    for (ic of io ){
        ic.addEventListener("click", objectClick);
    }
}

function attachIconEvent(id){
    let memo = id;
    function objectClick(e){
        e.stopPropagation();
        console.log('icon object is clicked');
        console.log('id = ' + memo);
    }
    let icon = document.getElementById(`${id}`);
    icon.addEventListener("click", objectClick);
}