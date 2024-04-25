const choices = document.querySelectorAll(".box");
const you = document.querySelector("#your_score");
const comp = document.querySelector("#comp_score");
let msg = document.querySelector(".move");
let y = 0;
let c = 0;
let compselect = () =>{
    let arr = ["rock","paper","scissor"];
     let ran = Math.floor(Math.random()*3);
    return arr[ran];
}

let selectors = (something) =>{
    console.log("Choice was clicked =",something);
    let comp_val = compselect();
    console.log("Computer choice =",comp_val);
    if(something ==="rock" && comp_val === "paper"){
        console.log("Computer Win");
        c++;
        comp.innerText = c;
        msg.innerText = `You Loss ${comp_val} beats your ${something}`;
        msg.setAttribute("class","move lose");
    }else if(something ==="rock" && comp_val === "scissor"){
        console.log("You Win");
        y++;
        you.innerText = y;
        msg.innerText = `You Win! Your ${something} beats ${comp_val}`;
        msg.setAttribute("class","move win");
    }else if(something ==="paper" && comp_val === "scissor"){
        console.log("Computer Win");
        c++;
        comp.innerText = c;
        msg.innerText = `You Loss ${comp_val} beats your ${something}`;
        msg.setAttribute("class","move lose");
    }else if(something ==="paper" && comp_val === "rock"){
        console.log("You Win");
        y++;
        you.innerText = y;
        msg.innerText = `You Win! Your ${something} beats ${comp_val}`;
        msg.setAttribute("class","move win");
    }else if(something ==="scissor" && comp_val === "rock"){
        console.log("Computer Win");
        c++;
        comp.innerText = c;
        msg.innerText = `You Loss ${comp_val} beats your ${something}`;
        msg.setAttribute("class","move lose");
    }else if(something ==="scissor" && comp_val === "paper"){
        console.log("You Win");
        y++;
        you.innerText = y;
        msg.innerText = `You Win! Your ${something} beats ${comp_val}`;
        msg.setAttribute("class","move win");
    }else{
        console.log("Draw");
        msg.innerText = "The match is draw";
        msg.setAttribute("class","move draw");
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let val = choice.getAttribute("id");
        selectors(val);
    })
})
