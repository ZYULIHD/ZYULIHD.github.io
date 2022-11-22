let pictures = ['jpg1.jpg', 'jpg2.jpg', 'jpg3.jpg', 'jpg4.jpg', 'jpg5.jpg'];
let descriptions =
    ['description for picture 1',
        'description for picture 2',
        'description for picture 3',
        'description for picture 4',
        'description for picture 5',
    ];
let picture = document.getElementById('pic');
let description = document.getElementById('desc');
let indexFollow=0;
function rightClick(){
    if(indexFollow<pictures.length-1){
        indexFollow++;
    }else{
        indexFollow=0; 
    }
        showPicture();
   
}

function leftClick(){
    if(indexFollow<=0){
        indexFollow=pictures.length-1;
    }
    else{
        indexFollow--;
    }
    showPicture();
}
function showPicture(){
    description.innerText=descriptions[indexFollow];

}