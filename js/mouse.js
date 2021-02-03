// import item from './id';
// const item = new item();
let objectDrag = false;
let objectTarget;

document.addEventListener('click' ,function(){
    document.getElementById('clickMenu').style.display ="none";
});

function mouseClick(e){
    
    //イベントのバブリングを中止。親要素へのイベントの伝播を中止。
    e.stopPropagation();
    //DEBUG
    // console.log(e.currentTarget);
    // console.log(`${e.pageX + 5}`);
    // console.log(`${e.pageY - 5}`);

    //clickMenuの表示
    document.getElementById('clickMenu').style.top =`${e.pageY - 5}px`;
    document.getElementById('clickMenu').style.left =`${e.pageX + 5}px`;
    document.getElementById('clickMenu').style.display ="block";
    //対象オブジェクトのidをメモする
    document.getElementById('idmemo').innerHTML ='id change';

}

function objectMouseDown(e){
    e.stopPropagation();

    let object = e.currentTarget;
    currentX = object.getAttribute('cx');
    currentY = object.getAttribute('cy');

    objectTarget = object;
    // console.log(e);
    // console.log(object);
    // console.log('' + currentX + ':' + currentY);
    objectDrag = true;
}


function objectMouseUp(e){
    e.stopPropagation();

    let object = objectTarget;

    let x = e.clientX;
    let y = e.clientY;


    if (objectDrag){
        objectDrag = false;
        // console.log(e);
        // console.log(object);
        // console.log('' + x + ':' + y);
        object.remove();
        drawHeart(e);
        objectTarget = null
    };

}
document.getElementsByTagName('svg')[0].addEventListener("mouseup", objectMouseUp);


function objectMouseMove(e){
    e.stopPropagation();

}

function drawHeart(e){
    let x = e.clientX;
    let y = e.clientY;
    x -= 184;
    y -= 0;
    let target = e.currentTarget;
    let heart = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    heart.setAttributeNS(null, 'cx', x);
    heart.setAttributeNS(null, 'cy', y);
    heart.setAttributeNS(null, 'stroke' , "skyblue");
    heart.setAttributeNS(null, 'fill' , "red");
    heart.setAttributeNS(null, 'd' , 
    `M${x} ${y} 
    L ${x-7} ${y-7} 
    A 5 5 0 0 1 ${x} ${y-15}  
    A 5 5 0 0 1 ${x+7} ${y-7}`);
    target.appendChild(heart);
    // console.log(heart);
    heart.setAttributeNS(null, 'style', 'cursor:pointer;');
    heart.setAttributeNS(null, 'class', 'iconObject');
    heart.addEventListener("contextmenu", mouseClick);
    heart.addEventListener("mousedown", objectMouseDown);
    // heart.addEventListener("mouseup", objectMouseUp);
    // heart.addEventListener("mousemove", objectMouseMove);
    heart.oncontextmenu = function () {
        return false;
    }
    // clickMenu(heart);

    // let newId = item.getId();
    // heart.setAttributeNS(null, 'id', `${newId}`);
    // attachIconEvent(newId);
    // let hr = document.getElementsByClassName('iconObject');
    // for (h of hr ){
    //     icon();
    // }
}

function drawStar(e){
    let x = e.clientX;
    let y = e.clientY;
    x -= 184;
    y -= 0;
    let target = e.currentTarget;
    let star = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    star.setAttributeNS(null, 'cx', x);
    star.setAttributeNS(null, 'cy', y);
    star.setAttributeNS(null, 'stroke' , "skyblue");
    star.setAttributeNS(null, 'fill' , "orange");
    star.setAttributeNS(null, 'd' , 
    `M${x} ${y} 
    L ${x+5} ${y-10} L ${x+10} ${y}
    L ${x+21.5} ${y} L ${x+12.5} ${y+7.5}  
    L ${x+15} ${y+20} L ${x+5} ${y+10}
    L ${x-5} ${y+20} L ${x-2.5} ${y+7.5}
    L ${x-11.5} ${y}
    `);
    target.appendChild(star);
    star.setAttributeNS(null, 'style', 'cursor:pointer;');
    star.setAttributeNS(null, 'class', 'iconObject');
    star.addEventListener("contextmenu", mouseClick);
    star.addEventListener("mousedown", objectMouseDown);
    star.oncontextmenu = function () {
        return false;
    }
}

function drawCloud(e){
    let x = e.clientX;
    let y = e.clientY;
    x -= 184;
    y -= 0;
    let target = e.currentTarget;
    let cloud = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    cloud.setAttributeNS(null, 'cx', x);
    cloud.setAttributeNS(null, 'cy', y);
    cloud.setAttributeNS(null, 'stroke' , "skyblue");
    cloud.setAttributeNS(null, 'fill' , "gray");
    cloud.setAttributeNS(null, 'd' , 
    `M${x} ${y} 
    A 5 5 0 0 1 ${x+5} ${y-8} 
    A 4 4 0 0 1 ${x+12} ${y-8}  
    A 5 5 0 0 1 ${x+20} ${y}`);
    target.appendChild(cloud);
    cloud.setAttributeNS(null, 'style', 'cursor:pointer;');
    cloud.setAttributeNS(null, 'class', 'iconObject');
    cloud.addEventListener("contextmenu", mouseClick);
    cloud.addEventListener("mousedown", objectMouseDown);
    cloud.oncontextmenu = function () {
        return false;
    }
}

function deleteHover(){
    document.getElementById('deleteList').style.display ="block";
}
document.getElementById('delete').addEventListener("mouseover", deleteHover);
function deleteMouseOut(){
    document.getElementById('deleteList').style.display ="none";
}
document.getElementById('delete').addEventListener("mouseout", deleteMouseOut);

function attachDrawHeart(){
    document.getElementsByTagName('svg')[0].addEventListener("click", drawHeart);
}

function attachDrawStar(){
    document.getElementsByTagName('svg')[0].addEventListener("click", drawStar);
}

function attachDrawCloud(){
    document.getElementsByTagName('svg')[0].addEventListener("click", drawCloud);
}

function deleteDrawHeart(){
    document.getElementsByTagName('svg')[0].removeEventListener("click", drawHeart);
}

function deleteDrawStar(){
    document.getElementsByTagName('svg')[0].removeEventListener("click", drawStar);
}

function deleteDrawCloud(){
    document.getElementsByTagName('svg')[0].removeEventListener("click", drawCloud);
}

document.getElementsByTagName('svg')[0].addEventListener("click", drawHeart);
document.getElementsByTagName('svg')[0].oncontextmenu = function () {
    document.getElementById('clickMenu').style.display ="none";
    return false;
}
document.getElementById('clickMenu').oncontextmenu = function () {
    return false;
}