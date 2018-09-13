// let email = document.querySelector('#email');
// console.log(email);
const Httpcall = new XMLHttpRequest();
const method = 'GET';
const url = 'http://127.0.0.1:3000/key/';
let newP = document.createElement("p");
let textp = document.createTextNode("");
    newP.appendChild(textp);


function login(){
    // console.log(this);
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');
    let container = document.querySelector('.container');
    //console.log(user.value,pass.value);

    
    //encrypt
    let userHash = md5(user.value);
    let passHash = md5(pass.value);
    let keyHash = userHash+passHash;
    let hashString = "";
    keyHash = md5(keyHash);
    // let sha1 = SHA1("value");
    console.log("keyHash : "+keyHash);
    console.log("User : "+userHash,"Pass : "+passHash);
    hashString = ('{\n\t"key" : "'+keyHash+'",\n\t"user" : "'+user.value+'",\n\t"pass" : "'+pass.value+'"\n}');
    console.log(hashString);
    // console.log('{\n\t"key" : "'+keyHash+'",\n\t"user" : "'+user.value+'",\n\t"pass" : "'+pass.value+'"\n}');
    let create_json = JSON.parse('{\n\t"key" : "'+keyHash+'",\n\t"user" : "'+user.value+'",\n\t"pass" : "'+pass.value+'"\n}');
    console.log(create_json);
    



    //call API 
    Httpcall.open(method, url+keyHash,true);
    Httpcall.send();
    // console.log(Http);
    Httpcall.onreadystatechange = () =>{
        if(Httpcall.readyState===4)
        {
            console.log("This text : "+Httpcall.responseText)
            if(Httpcall.responseText == "")
            {
                alert("Wrong User or Pass");
            }
            else if(Httpcall.responseText  != "null")
            {
                alert("user : "+user.value+"\nLogin Success");
            }
            else{
                alert("Wrong User or Pass");
            }
        }
        // newP.innerHTML = "THIS Response messages is : "+Httpcall.responseText;
        // document.body.insertBefore(newP,container.nextSibling);
    };



    // Http.onreadystatechange((e)=>{console.log(this);});
    // Http.onreadystatechange=(e)=>{console.log(Http.responseText)}

    // var xhr = CheckCORS(method, url);
    // if (!xhr) {
    // throw new Error('CORS not supported');
    // }
    // var text = xhr.responseText;
    // xhr.send();
    // httpcall.open('GET', url+'b-kung',true);
    // httpcall.send();
    // httpcall.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       // newP.innerHTML = this.responseText;
    //       console.log(httpcall.response);
    //     }
    //   };
}
// function CheckCORS(){
//     var httpcall = new XMLHttpRequest;
//     httpcall.setRequestHeader('Content-Type', 'text/plain');
//     // httpcall.withCredentials = true;
//     if("withCredentials" in httpcall){
//         httpcall.open(method, url, true);
//     }
//     else if(typeof XDomainRequest != "undefined"){
//         httpcall = new XDomainRequest();
//         httpcall.open(method, url);
//     }
//     else{

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;
//     }
// }
