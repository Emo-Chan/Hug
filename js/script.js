
$(document).ready(function() {

	change_image();
});

function change_image(){
	
    var a = [];
    var temp;
    var i = 1;
	while (i < 5) {
		temp=Math.floor(Math.random() * (21-i)) + 1;
		if (a.indexOf(temp)==-1){
			a[i]=temp;
			i++;
		}else{
			i=i+0;
		}
	}
    for (i = 1; i < 5 ; i++) {
		var imgName ="pic_ ("+a[i]+").jpg";
		document.getElementById("image_"+i).src="images/"+imgName;
	}

}