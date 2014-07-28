function customAlert(){
  this.render=function(dialog){
    var windH = window.innerHeight;
    var windW = window.innerWidth;
    var overlay = document.getElementById('overlay');
    var alertbox = document.getElementById('alertbox');
    
    overlay.style.display = "block";
    overlay.style.height = windH+"px";
    
      alertbox.style.left = (windW/2) - (550 * .5)+"px";
			alertbox.style.top = "100px";
			alertbox.style.display = "block";
    
      document.getElementById("alertheader").innerHTML = "Aknowledge this message";
			document.getElementById("alertbody").innerHTML = dialog;
			document.getElementById("alertfooter").innerHTML = "<input type='button' value='ok' onclick='Alert.ok()'>";
    
  }
  this.ok=function(){
    overlay.style.display = "none";
    alertbox.style.display = "none";
  }
}

var Alert = new customAlert();
