(function(){
	if(!window.ADS){
		window['ADS'] = {};
	}
	
	//是否兼容库
	function isCompatible(other){
		if(	other === false 
				|| !Array.prototype.push 
				|| !Object.hasOwnProperty
				|| !document.createElement
				|| !document.getElementsByTagName
				){
			return false;
		}
		return true;
	}
	window['ADS']['isCompatible'] = isCompatible;
	
	//
	function $(){
		var elements = new Array();
		
		for(var i = 0; i < arguments.length; i++){
			var element = arguments[i];
			
			if(typeof element == 'string'){
				element = document.getElementById(element);
			}
			
			if(arguments.length == 1){
				return element;
			}
			elements.push(element);
		}
		return elements;
	};
	window['ADS']['$'] = $;
	
	function addEvent(node, type, listener){ 
		if(!isCompatible()){
			return false;
		}
		if(!(node = $(node))){
			return false;
		}
		if(node.addEventListener){
			node.addEventListener(type, listener, false);
			return true;
		}else if(node.attachEvent){
			node['e' + type +listener] =  listener;
			node[type + listener] = function(){
				node['e' + type +listener](window.event);  
			};
			node.attachEvent('on' + type, node[type+listener]);
			return true;
		}
		return false;
	};
	window['ADS']['addEvent'] = addEvent;
	
	function removeEvent(node, type, listener){ 
		if(!(node = $(node))){
			return false;
		}
		if(node.removeEventListener){
			node.removeEventListener(type, listener, false);
			return true;
		}else if(node.detachEvent){
			node.detachEvent('on' + type, node[type + linstener]);
			node[type+linstener] = null;
			return true;
		}
		return false;
	};
	window['ADS']['removeEvent'] = removeEvent;
	
	function getElementByClassName(className, tag, parent){ 
		parent = parent || document;
		if(!(parent = $(parent))){ return false;}
		
		var allTags = (tag =="*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
		var matchingElements = new Array(); 
		
		className = className.replace(/\-/g , "\\-");
		var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
		
		var element;
		
		for(var i=0; i < allTags.length; i++){
			element = allTags[i];
			if(regex.test(element.className)){
				matchingElements.push(element);
			}
		}
		return matchingElements;
	};
	window['ADS']['getElementByClassName'] = getElementByClassName;
	
	function toggleDisplay(node, value){ 
		if(!(node = $(node))){
			return false;
		}
		if( node.style.display != "none"){
			node.style.display = "none";
		}else{
			node.style.display = value || '';
		}
		return true;
	};
	window['ADS']['toggleDisplay'] = toggleDisplay;
	
	function insertAfter(node, referenceNode){
		if(!(node = $(node))) return false;
		if(!(referenceNode = $(referenceNode))) return false;
		return referenceNode.parentNode.insertBefore(
				node, referenceNode.nextSibling
				);
	};
	window['ADS']['insertAfter'] = insertAfter;
	
	function removeChildren(parent){
		if(!(parent = $(parent))) return false;
		while(parent.firstChild){
			parent.firstChild.parentNode.removeChild(parent.firstChild);
		}
		return parent;
	};
	window['ADS']['removeChildren'] = removeChildren;
	
	function prependChild(parent, newChild){
		if(!(parent = $(parent))) return false;
		if(!(newChild = $(newChild))) return false;
		
		if(parent.firstChild){
			parent.insertBefore(newChild, parent.firstChild);
		}else{
			parent.appendChild(newChild);
		}
		return parent;
	};
	window['ADS']['prependChild'] = prependChild;
	
	function bindFunction(obj,func){
		return function(){
			func.apply(obj, arguments);
		};
	};
	window['ADS']['bindFunction'] = bindFunction;
	
	function getBrowserWindowSize(){
		var de = document.documentElement;
		return {
			'width' : (window.innerWidth 
					|| (de && de.clientWidth) 
					|| document.body.clientWidth),
			'height' : (
					window.innerHeight
					|| (de && de.clientHeight)
					|| document.body.clientHeight)
		};
	};
	window['ADS']['getBrowserWindowSize'] = getBrowserWindowSize;
	
	function walkElementsLinear(func,node){
		var root = node || window.document;
		var nodes = root.getElementsByTagName("*");
		for(var i = 0; i< nodes.length; i++){
			func.call(nodes[i]);
		}
	};
	window['ADS']['walkElementsLinear'] = walkElementsLinear;
	
	function walkTheDomRecursive(func,node,depth,returnedFormParent){
		var root = node || window.document;
		var returnedFormParent = func.call(root, depth++, returnedFormParent);
		var node = root.firstChild;
		while(node){
			walkTheDomRecursive(func, node, depth, returnedFormParent);
			node = node.nextSibling;
		}
	};
	window['ADS']['walkTheDomRecursive'] = walkTheDomRecursive;
	
	function walkTheDOMWithAttributes(node,func, depth, returnedFormParent){
		var root = node || window.document;
		returnedFormParent = func(root,depth++, returnedFormParent);
		if(root.attributes){
			for(var i=0; i<root.attributes.length; i++){
				walkTheDOMWithAttributes(root.attributes[i], func, depth - 1, returnedFormParent);
			}
		}
		if(node.nodeType != ADS.node.ATTRIBUTE_NODE){
			none = root.firstChild;
			while(node){
				walkTheDOMWithAttributes(node, func, depth, returnedFormParent);
				node = node.nextSibling;
			}
		}
	};
	window['ADS']['walkTheDOMWithAttributes'] = walkTheDOMWithAttributes;
	
	//把word-word 转化为wordWord
	function camelize(s){
		return s.replace(/-(\w)/g, function(strMatch, p1){
			return p1.toUpperCase();
		});
	};
	window['ADS']['camelize'] = camelize;
	
	window['ADS']['node'] = {
			ELEMENT_NODE 												:1,
			ATTRIBUTE_NODE												:2,
			TEXT_NODE														:3,
			CDATA_SECTION_NODE									:4,
			ENTITY_REFERENCE_NODE								:5,
			ENTITY_NODE													:6,
			PROCESSING_INSTRUCTION_NODE				:7,
			COMMENT_NODE											:8,
			DOCUMENT_NODE											:9,
			DOCUMENT_TYPE_NODE								:10,
			DOCUMENT_FRAGMENT_NODE					:11,
			NOTATION_NODE											:12
	}
})();

//重复一个字符串
if(!String.repeat){
	String.prototype.repeat = function(l){
		return new Array(l+1).join(this);
	}
}
//清除结尾和开头处的空白符
if(!String.trim){
	String.prototype.trim = function(){
		return this.replace(/^\s+|\s+$/g,'');
	}
}
