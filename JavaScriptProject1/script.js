const buttons =  document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function (event) {
       console.log(event);
       console.log(event.target);
       if(event.target.id === 'grey'){
        // body.style.backgroundColor = event.target.id;
        body.style.backgroundColor= " rgb(218, 214, 214)";
    
       }

       if(event.target.id==='white'){
        // body.style.backgrondColor=event.target.id;
        body.style.backgroundColor="white";
       }

       if(event.target.id ==='blue'){
        // body.style.backgrondColor=event.target.id;
        body.style.backgroundColor="rgb(135, 135, 240)";
       }

       if(event.target.id ==='yellow'){
        // body.style.backgrondColor=event.target.id;
        body.style.backgroundColor="yellow";
       }
    });
});