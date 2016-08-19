walk(document.body);

function walk(node) 
{
	var child, next;
	
	if (node.tagName == 'input' || node.tagName == 'textarea') {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				console.log(next);
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			console.log(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bEsports\b/g, "Esporks");
	v = v.replace(/\beSports\b/g, "eSporks");
	v = v.replace(/\bESporks\b/g, "ESporks");
	v = v.replace(/\besports\b/g, "esporks");
	v = v.replace(/\bESPORKS\b/g, "ESPORKS");

	console.log(v);
	
	textNode.nodeValue = v;
}


