/*if(ADS.isCompatible(true)){
	alert("true");
}else{
	alert("false");
}*/
/*ADS.addEvent(window, 'load' ,function(W3CEvent){

});*/

/*function sayHello(){
	alert("hello");
}
ADS.addEvent(window, 'load', sayHello);*/

/*var found = ADS.getElementByClassName('findme', '*', document);
console.log(found);*/

//ADS.toggleDisplay(ADS.$('theList'));
//ADS.insertAfter(ADS.$('list'),ADS.$('list'));

/*	var alert = function(message){
		window.alert('overridden: ' + message);
	};
	alert('alert');*/
	
//	window.alert('window.alert');

//override();

//alert('alert from outside');

/*var sound = "Roar!";
function myOrneryBeast() {
	this.style.color = 'green';
	//alert(sound);
	alert($(this));
}
//alert(window === this);

function initPage(){
	var example = ADS.$('list');
	
	example.onclick = myOrneryBeast;
	ADS.addEvent(example,'mouseover',myOrneryBeast);
}
ADS.addEvent(window,'load',initPage);
*/
/*
function doubleCheck(){
	this.message = 'Are';
}

doubleCheck.prototype.sayGoodbye = function(){
	return confirm(this.message);
}

function initPage(){
	var clickedLink = new doubleCheck();
	var links = document.getElementsByTagName('a');
	for(var i=0; i<links.length; i++){
		
		ADS.addEvent(
				links[i],
				'click',
				ADS.bindFunction(clickedLink,clickedLink.sayGoodbye)
		);
	}
}
ADS.addEvent(window,'load',initPage);*/

if(document.implementation){
	if(document.implementation.hasFeature('Core','2.0')){
		alert('DOM2 Core Supported');
	}else{
		alert('DOM2 Core Not Supported');
	}
}else{
	alert('No DOMImplementation Support');
}


