let rows=5

for(let i=1;i<=rows;i++){
    let str='';
    for(let j=1;j<rows-1;j++){
        str+=' '
    }
    for(let k=1;k<=i;k++){
        str+='* ';
    }
    console.log(str)

}