// const editbtn = document.querySelectorAll('editbtn');

const titlevalue = localStorage.getItem("title2JSON");
console.log(titlevalue);
const imagevalue = localStorage.getItem("image2JSON");
console.log(imagevalue);
const descriptionvalue = localStorage.getItem("description2JSON");
console.log(descriptionvalue);
const contactPersonNamevalue = localStorage.getItem("contactPersonName2JSON");
console.log(contactPersonNamevalue);
const contactPersonNumbervalue = localStorage.getItem("contactPersonNumber2JSON");
console.log(contactPersonNumbervalue);
const addressvalue = localStorage.getItem("address2JSON");
console.log(addressvalue);
const petvalue = localStorage.getItem("pet2JSON");
console.log(petvalue);
const pricevalue = localStorage.getItem("price2JSON");
console.log(pricevalue);

document.getElementById("title").value.innerHTML = titlevalue;
$("#test3").val("Dolly Duck");
$(document).ready(function(){
    $("#title").val(titlevalue);
    $("#image").val(imagevalue);
    $("#description").val(descriptionvalue);
    $("#contactPersonName").val(contactPersonNamevalue);
    $("#contactPersonNumber").val(contactPersonNumbervalue);
    $("#address").val(addressvalue);
    $("#pet").val(petvalue);
    $("#price").val(pricevalue);
});

const editPutmodify = document.getElementById('editPutmodify');

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



// Retrieving data:
text = localStorage.getItem("idvalue2JSON");
obj = JSON.parse(text);
console.log(obj);
const valueid = parseFloat(obj.value);
console.log(valueid);

// localStorage.setItem('hello', '3');
// const newStatement = new Statement(titleInput.nodeValue, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imageInput.value); 
// const statements = JSON.parse(localStorage.getItem('statements'));
// const statements = [];
const statements = JSON.parse(localStorage.getItem('statements')) || [];

editPutmodify.addEventListener('click', () => {
    let editStatement = new Statement(titleInput.value, imageInput.value, description.value, contactPersonName.value,  contactPersonNumber.value, address.value, pet.value, price.value); 
    console.log(editStatement);
    // Storing data:
    // var myObj, myJSON, text, obj;
    // myJSON = JSON.stringify(editStatement);
    // Retrieving data:
    // text = localStorage.getItem("testJSON");
    // obj = JSON.parse(text);
    // document.getElementById("demo").innerHTML = obj.name;
    
    // localStorage.setItem("testJSON", myJSON);
    // console.log(localStorage.setItem("testJSON", myJSON));
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
            // statements.push(editedStatement);
            

            // document.getElementById("title").value = titlevalue;
            // document.getElementById("imageId").value = localStorage.getItem("image2JSON");
            // document.getElementById("descriptionId").value = localStorage.getItem("description2JSON");
            // document.getElementById("contactPersonNameId").value = localStorage.getItem("contactPersonName2JSON");
            // document.getElementById("contactPersonNumberId").value = localStorage.getItem("contactPersonNumber2JSON");
            editputStatements(editStatement);
            // localStorage.setItem('statements', JSON.stringify(statements));
            console.log(statements);
                
            // window.location.href = "";
            // window.location.replace("index.html");
        }
    
});

const editputStatements = (statementParam) => {
    // Storing data:
    myObj2 = { url: "http://localhost:3000/statements/value" };
    myJSON2 = JSON.stringify(myObj2);
    console.log(myJSON2)
    var res = myJSON2.replace(/value/g, valueid);
    console.log(res);
    
    // Replace name and store it.
    localStorage.setItem('urleditJSON2', res)
    console.log(localStorage.getItem('urleditJSON2'))
    const finalurl = localStorage.getItem("urleditJSON2");
    console.log(finalurl);
    const finalurl2 = JSON.parse(finalurl);
    console.log(finalurl2);
    const finalurl3 = finalurl2.url;
    console.log(finalurl3)
    // document.getElementById("title").value = finalurl3.title;
    // document.getElementById("imageId").value = finalurl3.image;
    // document.getElementById("descriptionId").value = finalurl3.description;
    // document.getElementById("contactPersonNameId").value = finalurl3.contactPersonName;
    // document.getElementById("contactPersonNumberId").value = finalurl3.contactPersonNumber;
    // store to local storage
    // mytitleObj = { value: mytitle };
    // mytitleJSON = JSON.stringify(mytitleObj);
    // localStorage.setItem("title2JSON", mytitleJSON);
    // // Retrieving data:
    // texttitle = localStorage.getItem("title2JSON");
    // obj = JSON.parse(texttitle);
    // console.log(obj.value);
    // console.log(document.getElementById("#title").value);
    // document.getElementById("#title").value = obj.value;
    $.ajax({
        method: "PUT",
        url: finalurl3,
        data: statementParam,       
    })
    .done(function (data) {
        console.log(data);
        // window.location.href = "";
        window.location.replace("index.html");
    });
}
