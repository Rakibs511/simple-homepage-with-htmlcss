const newvalue= document.getElementById("new-value");
const currentValue= document.getElementById("current-Balance");
const total= document.getElementById("total-value");

let test =2000
currentValue.innerText=test;
total.innerText=test

const addBalanceHande=()=>{
    if(newvalue!==NaN){
        test=test+parseInt(newvalue.value);
        total.innerText=test
        newvalue.value=""
    }
}


//======================================================================

const todo =()=>{
    const todoContainer = document.getElementById("t-container");
    const heading = "Lorem Ispam";
    const paragraph =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente amet fuga consectetur dolor, laborum ad, totam molestiae quod maiores repellat inventore ab quo nam, debitis ex necessitatibus! Dolores, harum?`;

    const outerdiv=document.createElement("div");
    outerdiv.className="todo-system";
    todoContainer.appendChild(outerdiv)
    const innerDiv=document.createElement("div");
    innerDiv.className="info";
    outerdiv.appendChild(innerDiv);

    // create heading
    const h2= document.createElement('h2')
    h2.innerHTML=heading;
    innerDiv.appendChild(h2);

    // create paragraph
    const p=document.createElement("p");
    p.innerHTML=paragraph;
    innerDiv.appendChild(p);

    //create Button
    const button =document.createElement("button");
    button.innerHTML="Add";
    button.className="add-button";
    button.onclick="addHandle()";
    outerdiv.appendChild(button)

    // create new element with button click
    button.addEventListener('click',()=>{
        todo();
    
    })
}


todo();