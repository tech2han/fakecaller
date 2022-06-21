var nav_btn = document.getElementById("nav-btn");
var main_nav = document.getElementById("main-nav");
var nav_bar1 = document.getElementById("bar1");
var nav_bar2 = document.getElementById("bar2");
var nav_bar3 = document.getElementById("bar3");
var add_btn = document.getElementById("add-btn");
var add_new = document.getElementById("add-new");
var nameinput = add_new['name']
var numberinput = add_new['number']
var search_input = document.getElementById("search-input");
var bg = document.getElementById("bg-ful");
var deletebtn = document.getElementById("deletebtn");


var contact_div = document.createElement("li");






nav_btn.onclick = function(){
    if(main_nav.classList=="main-nav margin-left-120vw"){
        main_nav.classList="main-nav margin-left-0"
        nav_bar1.className="bar p-rotate margintop45";
        nav_bar3.className="bar n-rotate marginbot45";
        nav_bar2.className="bar opacity0";
    }
    else{
        main_nav.classList="main-nav margin-left-120vw"
        nav_bar1.className="bar";
        nav_bar3.className="bar";
        nav_bar2.className="bar";
    }
}
add_btn.onclick = function(){
    if(add_new.className=="add-new none"){
        add_new.className="add-new block";
        add_btn.className="add-btn p-rotate";
    }
    else{
        add_new.className="add-new none";
        add_btn.className="add-btn rotate0";
    }
}


// SEARCH  SCRIPT 8888888888811223\\\\\\\\\\\

  const searchcontacts = () => {
      let filter = document.getElementById('search-input').value.toUpperCase();

      let ul = document.getElementById('list');

      let li = ul.getElementsByTagName('li');

        for(var i=0; i<li.length; i++){
          let a = li[i].getElementsByTagName('a')[0];

          let textValue = a.textContent || a.innerHTML ;

          if(textValue.toUpperCase().indexOf(filter) > -1){
              li[i].style.display='';
          }else{
              li[i].style.display='none';
          }
      }
  }

//   search_input.onclick = function() {
//      if(ul.className=="none"){
//          ul.className="block";
//          bg.className="bg-ful block"
//      }
//   }
//   bg.onclick = function(){
//      if(ul.className=="block"){
//          ul.className="none";
//          bg.className="bg-ful none";
//      }
//   }


window.onload = function name()
{

const contact = JSON.parse(localStorage.getItem("contact")) || [];

const addcontact = (name,number) =>{
    contact.push({
        name,
        number
    })

    localStorage.setItem("contact", JSON.stringify(contact));
    return{name,number}
};

const createcontactelement = ({ name,number}) =>{

    
    var contact_div = document.createElement("li");
    const contactname = document.createElement("a");
    const contactnumber = document.createElement("p");
    var contactcall = document.createElement("div");

    contactname.innerText = name ;

    contactnumber.innerText = number ;

    contactcall.innerHTML = "&#10010;";

    contact_div.append( contactname , contactnumber );

    var list = document.getElementById("list");

    list.appendChild(contact_div);


};
contact.forEach(createcontactelement);

add_new.onsubmit = e =>{

    e.preventDefault();

    const newcontact = addcontact(
        nameinput.value,
        numberinput.value
    );

    createcontactelement(newcontact);

    nameinput.value ="";
    numberinput.value ="";
};
};

deletebtn.onclick = function(){

localStorage.removeItem("contact")
window.location.reload(true)
}