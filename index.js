const container1=document.querySelector(".container");
const container2=document.querySelector(".container2");
const emailbox=document.querySelector('#email');
const notvalid=document.querySelector(".valid");
const suscribeBtn=document.querySelector(".subscribeBtn");
const dissmissBtn=document.querySelector(".dismissBtn");
const displayemail=document.querySelector(".subscribedemail");


function checkValid(str)
{
    let pattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(str.match(pattern))
    {
        return true;
    }
    else 
    {
        return false;
    }

}

function subsbtn()
{
    let str=emailbox.value;
    if(str=="")
        return;
    if(checkValid(str))
    {
        container1.style.display="none";
        displayemail.textContent=str;
        container2.style.display="flex";
    }
    else{
        notvalid.style.display="flex"
        emailbox.classList.add("notvalid");
    }
}

function dissMiss()
{
        container2.style.display="none";
        console.log("hello");
        container1.style.display="flex";
}

suscribeBtn.addEventListener('click',()=>subsbtn());
dissmissBtn.addEventListener('click',()=>dissMiss());
emailbox.addEventListener('click',()=>{
    emailbox.classList.remove("notvalid");
    notvalid.style.display="none"

})
