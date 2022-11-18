const inc=document.getElementById('inc');
const dec=document.getElementById('dec');
const tb=document.getElementById('root');
const counter=document.getElementById('counter');
let count=0


async function getData(){
    try{
        return await fetch("https://api.publicapis.org/entries").then((res)=>console.log(res.json())).then(data=>console.log(data)).catch(err=>console.log(err));
    }
    catch(err){
        console.log(err)
    }
}

tb.innerHTML+="";


getData();

{/* <tr>
                  <td>text1.1</td>
                  <td>text1.2</td>
                  <td>text1.2</td>
                  <td>text1.2</td>
                  <td>text1.3</td>
                </tr> */}