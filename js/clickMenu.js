// function clickMenu(target){
//     let menu = document.createElement('div');
//     menu.setAttribute('class','objectMenu');

//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     li.setAttribute('innerHTML','LIST01');
//     // li.setAttribute('onclick' , function(){console.log('object is clicked')});
//     li.setAttribute('class','subList');
//     // li.setAttribute('onclick' , display);

//     ul.appendChild(li);
//     menu.appendChild(ul);

//     target.appendChild(menu);
// }

// function menuDisplay(target){
//     // let target = document.getElementsByClassName('subList');
//     function display(e){
//         // let sub = documenht.getElementsByClassName('objectMenu');
//         let t = e.target();
//         console.log(t);
//         if (t.display === 'none'){
//             t.display = 'inline-item';
//         }else{
//             t.display = 'none'
//         }
//     }

//     target.addEventListner('click' , display);
// }

function display(e){
    // let sub = documenht.getElementsByClassName('objectMenu');
    let t = e.target();
    console.log(t);
    if (t.display === 'none'){
        t.display = 'inline-item';
    }else{
        t.display = 'none'
    }
}