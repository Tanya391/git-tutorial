let user=0
let comp=0
let choices=document.querySelectorAll(".choice")
let userScore=document.getElementById("user")
let compScore=document.getElementById("computer")
const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    let compChoice=Math.floor(Math.random()*3)
    return options[compChoice]
}
const drawGame=()=>{
    console.log("game was drawn!")
}
const showWinner=(userWin)=>{
    if(userWin){
        user++
        userScore.innerText=user
        msg.innerText="You won!"
        msg.style.backgroundColor="#38b000"
    }else{
        comp++
        compScore.innerText=comp
        msg.innerText="You lose :("
        msg.style.backgroundColor="#bf0603"
    }
}
const userChoice=(choiceId)=>{
    const compChoice=genCompChoice()
    if(userChoice===compChoice){
        drawGame()
    }else{
        let userWin=true
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true
        }
        else{
            userWin=compChoice==="rock"?false:true
        }
        showWinner(userWin)
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id")
        userChoice(choiceId)
    })
})
const msg=document.getElementById("msg")
