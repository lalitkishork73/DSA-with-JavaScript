    let k = 1;
    let string="";
    for (let i = 1; i <=5; i++) {
      for(let j=1;j<i+1;j++){
        string+=(k++) +" ";
      }
      string+="\n";
    }
    console.log(string);
