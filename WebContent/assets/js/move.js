ADS.addEvent(window, 'load', function(W3CEvent){
	function logit(W3CEvent){
		switch(this.nodeType){
		case ADS.node.DOCUMENT_NODE:
			ADS.log.write(W3CEvent.type + ' on document');
		break;
		case ADS.node.ELEMENT_NODE:
			ADS.log.wrote(W3CEvent.type + ' on box');
		break;
		}
	}
	ADS.addEvent(document,'mousemove', logit);
});