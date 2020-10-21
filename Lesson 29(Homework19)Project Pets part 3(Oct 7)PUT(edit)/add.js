const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const description = document.getElementById('description');
const contactPersonName = document.getElementById('contactPersonName');
const contactPersonNumber = document.getElementById('contactPersonNumber');
const idinput = document.getElementById('id');
const address = document.getElementById('address');
const pet = document.getElementById('pet');
const price = document.getElementById('price');

const currentpos = document.querySelector('.currentpos');
// localStorage.setItem('hello', '3');
// const newStatement = new Statement(titleInput.nodeValue, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imageInput.value); 
// const statements = JSON.parse(localStorage.getItem('statements'));
// const statements = [];
const statements = JSON.parse(localStorage.getItem('statements')) || [];

addBtn.addEventListener('click', () => {
    const newStatement = new Statement(titleInput.value, imageInput.value, description.value, contactPersonName.value,  contactPersonNumber.value, address.value, pet.value, price.value); 
    console.log(newStatement);
    // Storing data:
    var myObj, myJSON, text, obj;
    myJSON = JSON.stringify(newStatement);
    // Retrieving data:
    // text = localStorage.getItem("testJSON");
    // obj = JSON.parse(text);
    // document.getElementById("demo").innerHTML = obj.name;
    
    localStorage.setItem("testJSON", myJSON);
    console.log(localStorage.setItem("testJSON", myJSON));
    // // Storing data2 update:
    // var myObj2, myJSON2, text2, obj2;
    // myJSON2 = JSON.stringify(newStatement.);
    // localStorage.setItem("testJSON2", myJSON2);


    const x = document.forms["add-form"]["title"].value;
    const y = document.forms["add-form"]["image"].value;
    const a = document.forms["add-form"]["description"].value;
    const b = document.forms["add-form"]["contactPersonName"].value;
    const c = document.forms["add-form"]["contactPersonNumber"].value;
    const d = document.forms["add-form"]["address"].value;
    const e = document.forms["add-form"]["pet"].value;
    const f = document.forms["add-form"]["price"].value;
        if (x == "" || y == "" || a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
            alert("Argument must be filled out");
            return false;
            } else {
            statements.push(newStatement);
            addStatements(newStatement);
            localStorage.setItem('statements', JSON.stringify(statements));
            console.log(statements);
            const currentpos = statements.length-1;
            console.log(currentpos);
            // window.location.href = "";
            // window.location.replace("index.html");
        }
    
});

const addStatements = (statementParam) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/statements",
        data: statementParam
    })
    .done(function (data) {
        console.log(data);
        // window.location.href = "";
        window.location.replace("index.html");
    });
}
