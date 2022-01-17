let selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

//fetch checkbox data with atleast 2 check condition
function handleData()
{   
    var inputs = document.querySelectorAll('.food'); 
        let final='';
        let count=0;
        for (var i = 0; i < inputs.length; i++) { 
            if(inputs[i].checked == true){count++
            final+=inputs[i].value+','}
            else{continue;}
        } 
        if(count<2)
        {alert("Select atleast 2 items");
    return ' ';}
        else{
        return final.substring(0,final.length-1);}
}

//fetch radio button selection
function gender(){
  male=document.getElementById("male");
  female=document.getElementById("female");
  if(male.checked==true)
  return 'Male';
  else
  return 'Female';
}

function readFormData() {
  //create an empty object
  const formData = {};
  formData["firstname"] = document.getElementById("first-name").value;
  formData["lastname"] = document.getElementById("last-name").value;
  formData["address"] = document.getElementById("address").value;
  formData["pincode"] = document.getElementById("pincode").value;
  formData["gender"] = gender();
  formData["food"] = handleData();
  formData["state"] = document.getElementById("state").value;
  formData["country"] = document.getElementById("country").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("details_list")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.pincode;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.food;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.state;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.country;
}

//reset functionality should  be executed
function resetForm() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("food").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  selectedRow = null;
}




