
var i=0;
function typeWriter() {
    var text="Hey! I'm Aryan Sardana, Computer Science Junior @Manipal University Jaipur."
    var speed=50;
    if (i < text.length) {
      document.getElementById("blinking_heading").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


window.addEventListener("load", (event) => {
    typeWriter();
  });

   
    
    

    
    






