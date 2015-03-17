function transpose(x){
	var tmp = [];
	for(var j = 0; j < x[0].length; j++){
		tmp[j] = [];
		for(var i = 0; i < x.length; i++){
			tmp[j][i] = x[i][j];
		}
	}
	return tmp;
}

function add(x){
	var tmp = [];
	for(var i = 0; i < x.length; i++){
		tmp[i] = [];
		for(var j = 0; j < x[i].length; j++){
			tmp[i][j] = x[i][j] + x[i][j];
		}
	}
	return tmp;
}

function times(x, y){
	var tmp = [];
	var sum = 0;
	for(var i = 0; i < x.length; i++){
		tmp[i] = [];
		for(var j = 0; j < y[i].length; j++){
			tmp[i][j] = 0;
			for(var k = 0; k < x[i].length; k++){
				tmp[i][j] = tmp[i][j] + x[i][k] * y[k][j];
			}
		}
	}
	return tmp;
}
var a = [[3,2,1],[1,2,3]];
var b = transpose(a);
var c = add(a);
var d = times(a,b);

console.log("a = %j", a);
console.log("b = %j", b);
console.log("c = %j", c);
console.log("d = %j", d);