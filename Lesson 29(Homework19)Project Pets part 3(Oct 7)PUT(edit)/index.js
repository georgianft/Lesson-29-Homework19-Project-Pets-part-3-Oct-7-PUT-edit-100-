const petList = document.querySelector('.pet-list');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
// const statement1 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
// const statement2 = new Statement('იყიდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
// const statement3 = new Statement('იყიდება თეთრი კნუტი, 3 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
// const statement4 = new Statement('იყიდება თეთრი კნუტი, 3 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
// const statementsArr = [statement1, statement2, statement3, statement4];
const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString) || [];
console.log(statementsAsString);
console.log(statementsAsArray);

let statements = [];



const getStatements = () => {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/statements",
      })
        .done(function( data ) {
            statements = data;
            appendAllStatements(data);
        });
}

getStatements();

// const deleteStatement = (id) => {
//     const finalid = localStorage.getItem("idvalueJSON");
//     console.log(finalid);
//     const finalid2 = JSON.parse(finalid);
//     console.log(finalid2);
//     var res = myJSON.replace(/value/g, valueid);
//     console.log(res);
//     $.ajax({
//         method: "DELETE",
//         url: `http://localhost:3000/statements/${id}`,
//     })
//     .done(function (data) {
//         statements =data;
//         alert('statement has been deleted')
//         console.log(data);
//         getStatements();
//     });
// }

// indexfinal = statementsAsArray
// index nomeri
// Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text) || [];
    

console.log(obj.currentpos);
// storing data2update
var myObj2, myJSON2, text2, obj2;
    myJSON2 = JSON.stringify(obj.currentpos);
    localStorage.setItem("testJSON2", myJSON2);

// Retrieving data:
// text2 = localStorage.getItem("testJSON2");
// obj2 = JSON.parse(text2) || [];
// console.log(parseFloat(text2));
// console.log(obj.currentpos);
// const highestoldindex = [obj.currentpos];
// console.log(highestoldindex[0]);

// yvela index chamonatvali
const carieliMasivi = [];

// for (let index = 0; index <= highestoldindex; index++) {
//     carieliMasivi.push(index);
// };

// const indexebiyvela = carieliMasivi.filter((element) => {
//     return element >= 0;
// });
// console.log(indexebiyvela)
// document.getElementById("demo").innerHTML = indexebiyvela;


const appendStatement = (statement) => {
    
    const statementTemplate = `
    <div class="statement">
        <p class="statement-title">${statement.title}</p>
        <img class="statement-img" src=${statement.image} alt="">
        <p class="description">${statement.description}</p>
        <p class="author-info">ავტორის სახელი: ${statement.contactPersonName}</p>
        <p class="author-info">საკონტაქტო ნომერი: ${statement.contactPersonNumber}</p>
        <p class="author-info">მისამართი: ${statement.address}</p>
        <p class="author-info">შინაური ცხოველი: ${statement.pet}</p>
        <p class="author-info">ფასი: ${statement.price}</p>
        <button type="button" class="Remove-btn" id="${statement.id}" onClick="reply_click(event)">Remove Statement</button>
        <button type="button" class="editbtn" id="${statement.id}" onClick="myFunction(this)">Edit Statement</button>
        
    </div>`;

    
    // localStorage.setItem("title2JSON", statement.title);
    // localStorage.setItem("image2JSON", statement.image);
    // localStorage.setItem("description2JSON", statement.description);
    // localStorage.setItem("contactPersonName2JSON", statement.contactPersonName);
    // localStorage.setItem("contactPersonNumber2JSON", statement.contactPersonNumber);

    
    

    petList.innerHTML += statementTemplate;
}



const appendAllStatements = (statements) => {
    petList.innerHTML = '';
    console.log(statements)
    for (const statement of statements) {
        appendStatement(statement);
    }
}

searchBtn.addEventListener('click', () => {
    petList.innerHTML = '';
    if (searchInput.value === '') {
        appendAllStatements(statements);
        return;
    }
    const filteredArr = statements.filter((statement) => {
        // if (statement.title === searchInput.value) {
        //     return true;
        // } else {
        //     return false;
        // }
        return statement.title.includes(searchInput.value);
    });
    appendAllStatements(filteredArr);
});

// appendAllStatements(statementsAsArray);

console.log(statementsAsArray)
console.log(statementsAsArray.length)

const currentPosition = statementsAsArray.length


// remove button
// const removeBtn = document.querySelector('.Remove-btn');


// const removedfromarray = () => {
function reply_click(e) {
    console.log(e.target.id);
    // store value to local storage
    const idvalue = e.target.id
    myObj = { value: idvalue };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("idvalueJSON", myJSON);
    // onclick=window.location.replace("editput.html")
    // Retrieving data:
    text = localStorage.getItem("idvalueJSON");
    obj = JSON.parse(text);
    console.log(obj);
    const valueid = parseFloat(obj.value);
    console.log(valueid);
// document.getElementById("wamogebuliId").innerHTML = valueid;
    
    // delete statement ajax
    const deleteStatement = (id) => {
        console.log(id);
        // Storing data:
    myObj2 = { url: "http://localhost:3000/statements/value" };
    myJSON2 = JSON.stringify(myObj2);
    console.log(myJSON2)
    var res = myJSON2.replace(/value/g, valueid);
    console.log(res);
    
    // Replace name and store it.
    localStorage.setItem('idValueJSON', res)
    console.log(localStorage.getItem('idValueJSON'))
    const finalurl = localStorage.getItem("idValueJSON");
    console.log(finalurl);
    const finalurl2 = JSON.parse(finalurl);
    console.log(finalurl2);
    const finalurl3 = finalurl2.url;
    console.log(finalurl3)

        $.ajax({
            method: "DELETE",
            url: finalurl3,
        })
        .done(function (data) {
            statements =data;
            alert('statement has been deleted')
            console.log(data);
            getStatements();
        });
    }
    deleteStatement();

}

function myFunction(clickedElement) {
    console.log(clickedElement.id);//I was clicked
    const idvalue2 = parseFloat(clickedElement.id);
    myObj = { value: idvalue2 };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("idvalue2JSON", myJSON);
    // onclick=window.location.replace("editput.html")
    // Retrieving data:
    text = localStorage.getItem("idvalue2JSON");
    obj = JSON.parse(text);
    console.log(obj);
    const valueid2 = parseFloat(obj.value);
    console.log(valueid2);

    function doSomething() {
        // Storing data:
        myObj2 = { url: "http://localhost:3000/statements/value" };
        myJSON2 = JSON.stringify(myObj2);
        console.log(myJSON2)
        var res = myJSON2.replace(/value/g, valueid2);
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
        $.getJSON(finalurl3, function (statements) {
            var mytitle = statements.title;
            var myimage = statements.image;
            var mydescription = statements.description;
            var mycontactPersonName = statements.contactPersonName;
            var mycontactPersonNumber = statements.contactPersonNumber;
            var myaddress = statements.address;
            var mypet = statements.pet;
            var myprice = statements.price;
            console.log(mytitle);
            console.log(myimage);
            console.log(mydescription);
            console.log(mycontactPersonName);
            console.log(mycontactPersonNumber);
            console.log(myaddress);
            console.log(mypet);
            console.log(myprice);
            
        // document.getElementById("titleId").value = mytitle;
        // document.getElementById("imageId").value = myimage;
        // document.getElementById("descriptionId").value = mydescription;
        // document.getElementById("contactPersonNameId").value = mycontactPersonName;
        // document.getElementById("contactPersonNumberId").value = mycontactPersonNumber;

        
        
        localStorage.setItem("title2JSON", mytitle);
        localStorage.setItem("image2JSON", myimage);
        localStorage.setItem("description2JSON", mydescription);
        localStorage.setItem("contactPersonName2JSON", mycontactPersonName);
        localStorage.setItem("contactPersonNumber2JSON", mycontactPersonNumber);
        localStorage.setItem("address2JSON", myaddress);
        localStorage.setItem("pet2JSON", mypet);
        localStorage.setItem("price2JSON", myprice);

        // const titleAsString = localStorage.getItem("title2JSON");
        // const titleAsArray = parseFloat(titleAsString)[0];
        // console.log(titleAsString);
        // console.log(titleAsArray);
            });
            // $.getJSON(finalurl3)
            // .done(function(statements) {
            //     console.log(statements);
            // });
            
            
        
    }
    doSomething();
    

    // document.getElementById("title").value = JSON.parse(localStorage.getItem("title2JSON"));
    // document.getElementById("imageId").value = JSON.parse(localStorage.getItem("image2JSON"));
    // document.getElementById("descriptionId").value = JSON.parse(localStorage.getItem("description2JSON"));
    // document.getElementById("contactPersonNameId").value = JSON.parse(localStorage.getItem("contactPersonName2JSON"));
    // document.getElementById("contactPersonNumberId").value = JSON.parse(localStorage.getItem("contactPersonNumber2JSON"));

    window.location.replace("editput.html");
        
}