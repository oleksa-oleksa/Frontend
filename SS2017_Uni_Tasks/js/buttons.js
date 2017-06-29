function showBgColor(id){ 

	switch(id){
		case "greenButton":
						var b = document.getElementById("greenButton");	
						b.style.backgroundColor = "#4CAF50"; 
                        break;
        case "redButton":
                        var b = document.getElementById("redButton"); 
                        b.style.backgroundColor = "#f44336"; 
                        break;
        case "blueButton":
                        var b = document.getElementById("blueButton"); 
                        b.style.backgroundColor = "#008CBA"; 
                        break;
	}

	/*if(id == "greenButton") {	
		var b = document.getElementById("greenButton");	
		b.style.backgroundColor = "#4CAF50"; 

	}*/

}  