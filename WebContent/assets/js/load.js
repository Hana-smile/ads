ADS.addEvent(window,'load',function(){
	ADS.addEvent('generate', 'click', function(W3CEvent){
		var source = ADS.$('source').value;
		ADS.$('result').value = generateDOM(source);
	});
});