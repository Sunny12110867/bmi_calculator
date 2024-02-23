
// this will not work because it will automatically diapper so the solution is preventDefault

// function fun(){

//     console.log("first is woking");
//     var hgt = document.querySelector('#height').value;
//     var wgt = document.getElementById("weight").value;
//     hgt = hgt / 100; 
//     var hgtSquared = hgt * hgt; 

//     var bmi = wgt / hgtSquared; 
//     console.log(bmi);
//     document.getElementById("result").innerHTML = bmi.toFixed(2); 


// }

// using prevent default


// const form =document.querySelector('form');

// form.addEventListener('submit',function(e){
//     console.log("it is working")
//     e.preventDefault();
//     const hgt = parseInt(document.querySelector('#height').value);  // it return the value in string so we have to convert into int using parseInt
//     const wgt = parseInt(document.querySelector('#weight').value);  // using . value we can acess the value from the doc
//     const result=document.querySelector('#result');

//     // if(hgt=== '' || wgt=== ''){
//     //     console.log("enter some value");
//     // }
//     // else{
//         hgt = hgt / 100; 
//         var hgtSquared = hgt * hgt; 
//         var bmi = wgt / hgtSquared; 
//         result.innerHTML=`you perfect bmi is ${bmi}`;
//     // }
//     console.log("it is visible")

// })



const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>your bmi is  ${bmi}</span>`;
    if(bmi<=18.6){
       const text = document.querySelector('.state');
       text.innerText=`you are lying in under weight`;
    }
    else if(bmi>18.6 && bmi<=24.9){
        const text = document.querySelector('.state');
        text.innerText=`you are lying in normal range`;
        
     }
     else{
        const text = document.querySelector('.state');
        text.innerText=`you are lying in under overweight`;
     }
  }
});



//   e.preventDefault() is commonly used in scenarios like 
//form submissions, link clicks, and other interactive
//  elements where you want to control the behavior using 
//  JavaScript rather than letting the browser perform its 
//  default action.