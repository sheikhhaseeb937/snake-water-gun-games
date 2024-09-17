

// var ramdon_num = Math.random()
// var conv = (ramdon_num * 2) + 1;
// var conv_num = Math.round(conv)

var conv_num = Math.floor(Math.random()*3)
var comp = ["snake","water","gun"][conv_num]


console.log(comp)
var user_input = prompt("enter sanke water gun")


if(user_input === comp){
console.log("ty game")
}else if (comp === "snake" && user_input === "water"){
console.log("computer win")
}else if (comp === "snake" && user_input === "gun"){
    console.log("user  win")
    }else if (comp === "water" && user_input === "gun"){
        console.log("computer win")

    }else if (comp === "water" && user_input === "snake"){
        console.log("user win")

    }else if (comp === "gun" && user_input === "snake"){
        console.log("computer win")

    }else if (comp === "gun" && user_input === "water"){
        console.log("user win")

    }else{
        alert("try again")
    }