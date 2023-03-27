


// references

const container = document.getElementsByClassName("container")

function createball (mouseX,mouseY) {

const div = document.createElement("div");

div.id ="circleDiv"
div.className="ball";

//setting ball postion to mouse cordinates
div.style.position = "absolute"
div.style.left = mouseX+'px';
div.style.top = mouseY+'px';

//setting div parent
document.body.appendChild(div);
}

//draw ball at client mouse location
window .addEventListener('mousedown',function (event){
  
    createball(event.clientX,event.clientY)
})




