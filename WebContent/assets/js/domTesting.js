/*ADS.addEvent(window,'load',function(){
	ADS.log.header('testNodeName');
	ADS.log.write('nodeName id: ' + document.getElementById('firefox').nodeName);
});

ADS.addEvent(window,'load',function(){
	ADS.log.header('The node value of the anchor');
	ADS.log.write('nodeValue is: ' + document.getElementById('firefox').nodeValue);
});

ADS.addEvent(window,'load',function(){
	ADS.log.header('Testing nodeType');
	ADS.log.write('nodeType is: ' + document.getElementById('firefox').nodeType);
});
ADS.addEvent(window,'load',function(){
	ADS.log.header('List child node of the document body');
	for(var i = 0; i < document.body.childNodes.length; i++){
		ADS.log.write(document.body.childNodes.item(i).nodeName);
	}
});
ADS.addEvent(window,'load',function(){
	ADS.log.header('List child node of the document body');
	for(var i in document.body.childNodes){
		ADS.log.write(document.body.childNodes.item(i).nodeName);
	}
});
ADS.addEvent(window,'load',function(){
	ADS.log.header('Attributes');
	var firefoxAnchor = document.getElementById('firefox');
	for(var i = 0; i<firefoxAnchor.attributes.length; i++){
		ADS.log.write(firefoxAnchor.attributes.item(i).nodeName
				+ '=' 
				+ firefoxAnchor.attributes.item(i).nodeValue);
	};
});

function example(node){
	var document = 'something else';
	var anotherNode = node.ownerDocument.getElementById('id');
	//var anotherNode = document.getElementById('id');//error
}

ADS.addEvent(window, 'load', function(){
	ADS.log.header('Attributes And ChildNodes');
	
	var h2 = document.getElementsByTagName('h2')[0];
	
	ADS.log.write(h2.nodeName);
	ADS.log.write(h2.nodeName +' hasChildNodes:' + h2.hasChildNodes());
	 
});

ADS.addEvent(window,'load',function(){
	ADS.log.header('Append Child');
	var newChild = document.createElement('li');
	newChild.appendChild(document.createTextNode('A new list item!'));
	var list = document.getElementById('browserList');
	//list.appendChild(newChild);
	//list.insertBefore(newChild, list.lastChild);
	var firefoxLi = document.getElementById('firefox');
	//firefoxLi.parentNode.replaceChild(newChild, firefoxLi);
	firefoxLi.parentNode.removeChild(firefoxLi);
});
*/

 ADS.addEvent(window,'load',function(){
	 ADS.log.header('CLone and Move a Node');
	 var firefoxLi = document.getElementById('firefoxListItem');
	 var firefoxLiClone = firefoxLi.cloneNode(true);
	 var unorderedList = firefoxLi.parentNode;
	 
	 unorderedList.appendChild(firefoxLi);
	 unorderedList.appendChild(firefoxLiClone);
 });

ADS.addEvent(window,'load',function(){
	ADS.log.header('Get Safari href attribute');
	var safariAnchor = document.getElementById('safari');
	var href = safariAnchor.getAttribute('href');
	ADS.log.write(href);
});

ADS.addEvent(window,'load',function(){
	ADS.log.header('Get all browsweList elements by tag name');
	var list = document.getElementById('browserList');
	var ancestors = list.getElementsByTagName('*');
	for(var i=0; i<ancestors.length; i++){
		ADS.log.write(ancestors.item(i).nodeName);
	}
});






















