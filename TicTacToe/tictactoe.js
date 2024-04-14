let user=true;
let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let boxes=document.querySelectorAll(".box");
let count=0;
func=()=>{
    for(let pattern of patterns){
        console.log(pattern);
    }
}
let checkWinner=()=>{
    for(let pattern of patterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2&&pos2===pos3){
                return pos1;
            }
        }
    }
}
boxes.forEach((val)=>{
val.addEventListener("click",()=>{
    if(user){
        val.innerText="X";
        user=false;
    }
    else{
        val.innerText="O";
        user=true;
    }
    val.disabled=true;
    let winner=checkWinner();
    console.log(winner);
});
});