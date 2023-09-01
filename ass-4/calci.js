let num = document.querySelectorAll(".number");
let c = document.getElementById("curr");
let p = document.getElementById("prev");
let op = document.querySelectorAll(".op");
let equal = document.getElementById("eq");
let clear = document.getElementById("clear");
let back = document.getElementById("back");

let openter = false; 
let operator;
let op1, op2; 

for (n of num)
  n.addEventListener("click", (e) => {
    const ar = c.innerHTML;
    const has_dot = ar.includes(".");

    if (e.target.innerText == "." && has_dot) {
      return;
    }
    if (c.innerHTML == "0") {
      c.innerHTML = "";
    }

    c.innerHTML += e.target.innerText;

    if (c.innerHTML != "" ){
      openter = true;
    }
  });

for (o of op)
  o.addEventListener("click", (e) => {
    if (openter) {
      operator = e.target.innerText;
      op1 = Number(c.innerHTML);
      p.innerHTML = c.innerHTML + operator;
      c.innerHTML = "";
      openter = false;
    }
  });

equal.addEventListener("click", (e) => {
  op2 = Number(c.innerHTML);
  let res=1;
  if (operator === "+") {
   res = op1 + op2;
    p.innerHTML = "";
    operator = "";
    } else if (operator === "-") {
        res  = op1 - op2;
    p.innerHTML = "";
    operator = "";
  } else if (operator === "*") {
    res  = op1 * op2;
    p.innerHTML = "";
    operator = "";
  } else if (operator === "/") {
    res  = op1 / op2;
    console.log(res);
    p.innerHTML = "";
    operator = "";
  } 
  else if (operator === "^") {
    
    for(i=1;i<=op2;i++) {res *= op1}
    
    p.innerHTML = "";
    operator = "";
  }
  else if (operator === "log") {
    // res=Math.log10(op1)
    
    if (op2==0){

      res=Math.log10(op1)
    }
    else{
    op1=op2**op1
    console.log(op1,op2)
    res=Math.log10(op1)
    console.log(res)
    }
    
    p.innerHTML = "";
    operator = "";
  }
  else {
    c.innerHTML = c.innerHTML;
    operator = "";
  }
  if(isNaN(res))
  c.innerHTML = 0;
  else
  c.innerHTML = res;
  
});

back.addEventListener("click", (e) => {
  c.innerHTML = c.innerHTML.substring(0, c.innerHTML.length - 1);
  if (c.innerHTML.length == 0) c.innerHTML = "0";
});

clear.addEventListener("click", (e) => {
  c.innerHTML = "0";
  p.innerHTML = "";
  openter = false;
}
);
