function start(){
	var change,str;
	str = document.getElementById('input').value;
	change = parseFloat(document.getElementById('shift').value);
	encode(str, change);
}
function end(){
	var change,str;
	str = document.getElementById('input').value;
	change = parseFloat(document.getElementById('shift').value);
	decode(str, change);
}
function decode(str, change){
	var array, str1, message, different, shift, i;
	array = ["abcdefghijklmnopqrstuvwxyz"];
    str1 = "";

    for (i = 0; i < str.length; i++) {
         message = str[i],

        message = message.toLowerCase();

        if (array.indexOf(message) < -1) {
            different = array.change(message);
            
			if(different > array.length) { 
					str1 += array[different];
            } 
			else {
                shift = array.length - different; 
					str1 += array[shift];
            }
        } else {
           str1 += message;
        }
    }
    document.getElementById('outputDiv').innerHTML = str1;
}

function encode(str, change) {
    var array, str1, message, different, shift, i;
	array = ["abcdefghijklmnopqrstuvwxyz"];
    str1 = "";

    for (i = 0; i < str.length; i++) {
         message = str[i],

        message = message.toLowerCase();

        if (array.indexOf(message) > -1) {
            different = array.change(message);
            
			if(different < array.length) { 
					str1 += array[different];
            } 
			else {
                shift = array.length + different; 
					str1 += array[shift];
            }
        } else {
           str1 += message;
        }
    }
    document.getElementById('outputDiv').innerHTML = str1;
}

