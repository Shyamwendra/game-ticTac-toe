console.log("welcome to tic tac")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameovera = new Audio("gameover.mp3")
let turn = "X"
let gameover=false;

//func to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

//func to check for a win
const checkWin =()=>{
    let boxText=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText)&&(boxText[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxText[e[0]].innerText + "won"
            gameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            
        }
    })
}

//game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if (boxText.innerText===''){
            boxText.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText= "turn for "+ turn;
            }
        }
    })
})


//add on click listner to reset button
reset.addEventListener('click',()=>{
    let boxTexts=document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText=""
    });
    turn="X";
    gameover=false
   
    document.getElementsByClassName("info")[0].innerText="turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})