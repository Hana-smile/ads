ADS.addEvent(window,'load',function(){
	function modifiedAddEvent(obj, type, fn){
		if(obj.addEventListener){
			obj.addEventListener(type, fn , type);
		}else if(obj.attachEvent){
			obj['e' + type + fn] = fn;
			obj[type + fn] = function(){
				obj['e' + type + fn](window.event);
			};
			obj.attachEvent('on' + type, obj[type + fn]);
		}else{
			return false;
		}
	}
	
	var counter = 0;
	
	var lists = document.getElementsByTagName('ul');
	for(var i=0; i<lists.length; i++){
		modifiedAddEvent(lists[i],'click', function(){
			var append = document.createTextNode(':' + counter++);
			this.getElementsByTagName('p')[0].appendChild(append);
			this.className = 'clicked';
		});
	}
});