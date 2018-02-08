var zoomwidth= 100;
var zoomheight = 70;
var current_bg = 0;

document.getElementById("open").addEventListener("click", function(){
	document.getElementById("menu").style.left="0px"
});

document.getElementById("close").addEventListener("click", function(){
	document.getElementById("menu").style.left="-110px"
});

document.getElementById("bg1").addEventListener("click", function(){
	current_bg=1;
	document.getElementById("ch1").style.backgroundImage="url(images/i1.jpg)";
	document.getElementById("ch2").style.backgroundImage="url(images/i2.jpg)";
	document.getElementById("ch3").style.backgroundImage="url(images/i3.jpg)";
});

document.getElementById("bg2").addEventListener("click", function(){
	current_bg=2;
	document.getElementById("ch1").style.backgroundImage="url(images/i4.jpg)";
	document.getElementById("ch2").style.backgroundImage="url(images/i5.jpg)";
	document.getElementById("ch3").style.backgroundImage="url(images/i6.jpg)";
});

document.getElementById("bg3").addEventListener("click", function(){
	current_bg=3;
	document.getElementById("ch1").style.backgroundImage="url(images/i7.jpg)";
	document.getElementById("ch2").style.backgroundImage="url(images/i8.jpg)";
	document.getElementById("ch3").style.backgroundImage="url(images/i9.jpg)";
});

document.getElementById("bg4").addEventListener("click", function(){
	current_bg=4;
	document.getElementById("ch1").style.backgroundImage="url(images/i10.jpg)";
	document.getElementById("ch2").style.backgroundImage="url(images/i11.jpg)";
	document.getElementById("ch3").style.backgroundImage="url(images/i12.jpg)";
});

document.getElementById("ch1").addEventListener("mouseenter", function(){
	if (current_bg == 1) {
		document.getElementById("zoom").style.backgroundImage="url(images/i1.jpg)";
	}
	else if (current_bg == 2) {
		document.getElementById("zoom").style.backgroundImage="url(images/i4.jpg)";
	}
	else if (current_bg == 3) {
		document.getElementById("zoom").style.backgroundImage="url(images/i7.jpg)";
	}
	else if (current_bg == 4) {
		document.getElementById("zoom").style.backgroundImage="url(images/i10.jpg)";
	}
});

document.getElementById("ch2").addEventListener("mouseenter", function(){
	if (current_bg == 1) {
		document.getElementById("zoom").style.backgroundImage="url(images/i2.jpg)";
	}
	else if (current_bg == 2) {
		document.getElementById("zoom").style.backgroundImage="url(images/i5.jpg)";
	}
	else if (current_bg == 3) {
		document.getElementById("zoom").style.backgroundImage="url(images/i8.jpg)";
	}
	else if (current_bg == 4) {
		document.getElementById("zoom").style.backgroundImage="url(images/i11.jpg)";
	}
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
	if (current_bg == 1) {
		document.getElementById("zoom").style.backgroundImage="url(images/i3.jpg)";
	}
	else if (current_bg == 2) {
		document.getElementById("zoom").style.backgroundImage="url(images/i6.jpg)";
	}
	else if (current_bg == 3) {
		document.getElementById("zoom").style.backgroundImage="url(images/i9.jpg)";
	}
	else if (current_bg == 4) {
		document.getElementById("zoom").style.backgroundImage="url(images/i12.jpg)";
	}
});

document.getElementById("make_bg").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage=document.getElementById("zoom").style.backgroundImage;
});

document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage="";
});

document.getElementById("show_app").addEventListener("click", function(){
	document.getElementById("app1").style.display="block";
});

document.getElementById("hide_app").addEventListener("click", function(){
	document.getElementById("app1").style.display="none";
});

document.getElementById("zoom").addEventListener("click", function(){
	document.getElementById("zoomcontrols").style.display="block";
});

document.getElementById("plus").addEventListener("click", function(){
	zoomwidth = zoomwidth + 10;
	zoomheight = zoomheight + 7;
	document.getElementById("zoom").style.width=zoomwidth+"%";
	document.getElementById("zoom").style.height=zoomheight+"%";
});

document.getElementById("minus").addEventListener("click", function(){
	zoomwidth = zoomwidth - 10;
	zoomheight = zoomheight - 7;
	document.getElementById("zoom").style.width=zoomwidth+"%";
	document.getElementById("zoom").style.height=zoomheight+"%";
});

document.getElementById("next").addEventListener("click", function(){
	current_bg += 1; 
	
	if (current_bg == 5){
		current_bg = 1;
		if (current_bg == 1){
		document.getElementById("ch1").style.backgroundImage="url(images/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage="url(images/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage="url(images/i3.jpg)";
		}
		
		else if (current_bg == 2){
			document.getElementById("ch1").style.backgroundImage="url(images/i4.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i5.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i6.jpg)";
		}
		
		else if (current_bg == 3){
			document.getElementById("ch1").style.backgroundImage="url(images/i7.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i8.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i9.jpg)";
		}
		
		else if (current_bg == 4){
			document.getElementById("ch1").style.backgroundImage="url(images/i10.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i11.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i12.jpg)";
		}
	}
	else {
		if (current_bg == 1){
		document.getElementById("ch1").style.backgroundImage="url(images/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage="url(images/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage="url(images/i3.jpg)";
		}
		
		else if (current_bg == 2){
			document.getElementById("ch1").style.backgroundImage="url(images/i4.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i5.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i6.jpg)";
		}
		
		else if (current_bg == 3){
			document.getElementById("ch1").style.backgroundImage="url(images/i7.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i8.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i9.jpg)";
		}
		
		else if (current_bg == 4){
			document.getElementById("ch1").style.backgroundImage="url(images/i10.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i11.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i12.jpg)";
		}
	}
});


document.getElementById("previous").addEventListener("click", function(){
	current_bg -= 1; 
	
	if (current_bg == 0){
		current_bg = 4;
		if (current_bg == 1){
		document.getElementById("ch1").style.backgroundImage="url(images/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage="url(images/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage="url(images/i3.jpg)";
		}
		
		else if (current_bg == 2){
			document.getElementById("ch1").style.backgroundImage="url(images/i4.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i5.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i6.jpg)";
		}
		
		else if (current_bg == 3){
			document.getElementById("ch1").style.backgroundImage="url(images/i7.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i8.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i9.jpg)";
		}
		
		else if (current_bg == 4){
			document.getElementById("ch1").style.backgroundImage="url(images/i10.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i11.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i12.jpg)";
		}
	}
	else {
		if (current_bg == 1){
		document.getElementById("ch1").style.backgroundImage="url(images/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage="url(images/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage="url(images/i3.jpg)";
		}
		
		else if (current_bg == 2){
			document.getElementById("ch1").style.backgroundImage="url(images/i4.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i5.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i6.jpg)";
		}
		
		else if (current_bg == 3){
			document.getElementById("ch1").style.backgroundImage="url(images/i7.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i8.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i9.jpg)";
		}
		
		else if (current_bg == 4){
			document.getElementById("ch1").style.backgroundImage="url(images/i10.jpg)";
			document.getElementById("ch2").style.backgroundImage="url(images/i11.jpg)";
			document.getElementById("ch3").style.backgroundImage="url(images/i12.jpg)";
		}
	}
});




