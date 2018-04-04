function generateBoard(kolomBaris) {
	var arr=[];
	//declare kolom
	for(var i=0;i<kolomBaris;i++) {
		arr.push([])
	}
	numberGenap=kolomBaris*kolomBaris;
	numberGanjil=1;

	//declare baris (angka depan genap)

	for(var j=0;j<kolomBaris;j++){
		for(var k=0;k<kolomBaris;k++){
			if(j%2===0 ||j===0){	
				arr[j].push(numberGenap);
				numberGenap=numberGenap-1;
			}else{
				numberGenap--
			}			
		}			
	}
	
	//declare baris (angka depan ganjil)
	for(var m=kolomBaris-1;m>0;m--){
		for(var n=0;n<kolomBaris;n++){
			if(m%2!==0){	
				arr[m].push(numberGanjil);
				numberGanjil=numberGanjil+1;
			}else{
				numberGanjil++
			}			
		}			
	}
	
	
return arr;
}

console.log(generateBoard(8));
console.log('\n');
console.log(generateBoard(10));











//alternatif pake unshift
// function generateBoard(kolomBaris) {
// 	var arr=[];
// 	//declare kolom
// 	for(var i=0;i<kolomBaris;i++) {
// 		arr.push([])
// 	}
// 	numberGenap=kolomBaris*kolomBaris;
// 	numberGanjil=kolomBaris*kolomBaris-(kolomBaris)+1;

// 	for(var j=0;j<kolomBaris;j++){
// 		for(var k=0;k<kolomBaris;k++){
// 			if(j%2===1){	
// 				arr[j].unshift(numberGenap);
// 			}else{
// 				arr[j].push(numberGenap)
// 			}
// 		numberGenap--	
// 		}			
// 	}
	
// return arr;
// }

// console.log(generateBoard(8));