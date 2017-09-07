
window.onload  = function () {
    let text2= document.getElementById('text2') // text to be typed
    let text1= document.getElementById('text1') // text type by user
    let result = document.getElementById('result');
    let counters=0;
    let err=0;

    let time=60;
    let array2 = [];
    array2 = text2.value.split(' ');    // convert the given text into an array
    
    text1.onclick = function () {
        ontimer();
    }
    let array1= [];

    // this function control the time loop
    function ontimer(){

        document.getElementById('time').innerHTML = "Time is "+ time;
        time--;
        if(time<0){
            alert("Time up champ! Press Result to see Speed!!");
            array1 = text1.value.split(' ');
           // text1.value = ' ';

            //check();
        }

        else{
            setTimeout(ontimer, 1000)
            text1.onclick= null;
        }
    }

    function refresh(){
        location.reload();
    }

    // function to check the words written by user
    function check(){
        for(let k=0; k<array1.length; k++){
            if(array1[k]==array2[k]){
                counters++;
            }
            else{
                err++;
            }
        }
        console.log("Speed : "+ counters);
        console.log("Errors : "+ err);
    }

    // this will show result on the DOM/Screen
    result.onclick = function(){
        check();
        document.getElementById('speed').innerHTML = "Speed is : "+ counters;
        document.getElementById('err').innerHTML = "Errors are :"+ err;
    }

}
