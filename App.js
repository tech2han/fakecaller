var nav_btn = document.getElementById("nav-btn");
var main_nav = document.getElementById("main-nav");
var nav_bar1 = document.getElementById("bar1");
var nav_bar2 = document.getElementById("bar2");
var nav_bar3 = document.getElementById("bar3");
var add_btn = document.getElementById("add-btn");
var add_new = document.getElementById("add-new");
var list = document.getElementById("list");
var nameinput = add_new['name']
var numberinput = add_new['number']

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
    const contactdiv = document.createElement("div");
    const contactname = document.createElement("h2");
    const contactnumber = document.createElement("p");

    contactname.innerText = name ;
    contactnumber.innerText = number ;

    contactdiv.append(contactname,contactnumber);
    list.appendChild(contactdiv);
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