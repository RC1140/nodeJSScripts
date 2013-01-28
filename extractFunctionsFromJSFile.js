//Note this script will only extract named functions from a file
//closures will not be detected , if there is a need for it I might 
//update the script some day
var Uglify = require('uglify-js')
var fs = require('fs')

function main(filename){
	fs.readFile(filename,'utf-8',function(err,data){
		topLevel = Uglify.parse(data);
		for(var i =0 ;i< topLevel.body.length; i++){
			if(topLevel.body[i].start.value == 'function'){
				console.log(topLevel.body[i].name.start.value);
			}
		}
	});
};

if(process.argv.length > 2){
	main(process.argv[2]);
}else{
	console.log('Please provider a file name to extract function names from.');
};
