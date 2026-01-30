let cnt=3
const checkBoxList=document.querySelectorAll(".customCheckbox")
const inputList=document.querySelectorAll(".goal-item")
let allGoals=JSON.parse(localStorage.getItem('myGoals'))||{}
let progressBar=document.querySelector(".progress-value")
let progressLabel=document.querySelector(".progress-label")
let goalCnt=Object.values(allGoals).filter((goal)=>goal.completed).length
progressBar.firstElementChild.innerText=`${goalCnt}/${cnt} completed`
progressBar.style.width=`${(goalCnt/cnt)*100}%`
if(goalCnt==1){
    (progressLabel).firstElementChild.innerText="Well begun is half done"
}
if(goalCnt==2){
    (progressLabel).firstElementChild.innerText="Just a step away, keep going!"
}
if(goalCnt==3){
    (progressLabel).firstElementChild.innerText="Whoaa!!! you just completed all the goals. time to chill !!"
}
function AllGoalsAdded(arr){
    let ans=true;
    arr.forEach((e)=>{
        if(e.value==""){
            ans= false;
        }
        console.log(e);
        
    })
    return ans;
}
const error=document.querySelector(".required-item")
checkBoxList.forEach((e)=>{
e.addEventListener('click',()=>{ 
    if(AllGoalsAdded([...inputList])){
    e.parentElement.classList.toggle('completed') 
    allGoals[e.nextElementSibling.id].completed=!allGoals[e.nextElementSibling.id].completed
    }  
    else {
    error.classList.remove("error-label")
    }
    
    localStorage.setItem('myGoals',JSON.stringify(allGoals))
    goalCnt=Object.values(allGoals).filter((goal)=>goal.completed).length
    progressBar.style.width=`${(goalCnt/cnt)*100}%`
    progressBar.firstElementChild.innerText=`${goalCnt}/${cnt} completed`
    if(goalCnt==1){
        (progressLabel).firstElementChild.innerText="Well begun is half done"
    }
    if(goalCnt==2){
        (progressLabel).firstElementChild.innerText="Just a step away, keep going!"
    }
    if(goalCnt==3){
        (progressLabel).firstElementChild.innerText="Whoaa!!! you just completed all the goals. time to chill !!"
    }
})
    
})

inputList.forEach((e)=>{
    e.addEventListener('focus',()=>{
        error.classList.add("error-label")
    })
})

inputList.forEach((e)=>{
    e.addEventListener('input',()=>{
    if(allGoals[e.id].completed){
    e.value=allGoals[e.id].name
    return;}
    allGoals[e.id]={
        name:e.value,
        completed:false,
    }
    localStorage.setItem('myGoals',JSON.stringify(allGoals))
    })
})

inputList.forEach((e)=>{
if(allGoals[e.id])
e.value=allGoals[e.id].name
else{
    allGoals[e.id]={
        name:e.value,
        completed:false
    } 
}
if(allGoals[e.id].completed){
    e.parentElement.classList.add('completed') 
}
    
})
