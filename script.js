const button = document.getElementById('joke-btn');
const theJoke = document.getElementById('joke');

button.addEventListener('click', getDadJoke);


function getDadJoke(){
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open('GET',"https://api.chucknorris.io/jokes/random", true);

    myRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            // Change the text content of the h1 element
            var myObj = JSON.parse(this.response);
            theJoke.textContent = myObj.value;
        }else{
            theJoke.textContent = 'something is off!!!';
        }
    }
    
    myRequest.send();
}
document.addEventListener('DOMContentLoaded', getDadJoke);