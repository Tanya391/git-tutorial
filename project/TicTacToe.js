let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let winner=document.getElementById("msg");
let turn0=true;//playerX,playerO
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8], // Rows
    [0,3,6],[1,4,7],[2,5,8], // Columns
    [0,4,8],[2,4,6]          // Diagonals
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0){//player0
            box.innerText="O";
            box.style.color="#65AFFF";
            turn0=false // Switch to player X
        }
        else{
            box.innerText="X";
            box.style.color="#3d348b";
            turn0=true // Switch to player O
        }
        box.disabled=true; // Disable the box after selection
        checkWinner();
    });
});
function checkWinner(){
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!= "" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("Winner",pos1);
                winner.innerText=`Congratulations Player${pos1} Wins!`
                winner.style.color="#468C98";
                winner.classList.remove("hidden");
                boxes.forEach((box)=>{
                    box.disabled=true   // Disable all boxes after a win
                })
            }
        }
    }
}
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=""; // Clear the text in each box
        box.disabled=false; // Enable the boxes for a new game
    })
    winner.innerText=""; // Clear the winner message
    winner.classList.add("hidden"); // Hide the winner message
    turn0=true; // Reset the turn to player O
});