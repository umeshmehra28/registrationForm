var form = `<div>
  <div class="form-group">
    <label for="name">First Name</label>
    <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter Your First Name">
  </div>
  <div class="form-group mt-3">
    <label for="name">Last Name</label>
    <input type="text" class="form-control" id="lname" placeholder="Enter Your Last Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
  </div>
  <div class="form-group mt-3">
    <label for="phone">Contact</label>
    <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter Your Contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
   
  </div>
  <button type="submit" class="btn btn-success mt-3" onclick="save()">Submit</button>
</div>`;

function table() {
  let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">First Name</th>
      <th class="col-3">Last Name</th>
      <th class="col-3">Email</th>
      <th class="col-3">Contact</th>
      <th class="col-2">Edit</th>
      <th class="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < details.length; i++) {
    table =
      table +
      `<tr>
      <td>${i + 1}</td>
      <td>${details[i].fname}</td>
      <td>${details[i].lname}</td>
      <td>${details[i].email}</td>
      <td>${details[i].phone}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
  }
  table =
    table +
    `</tbody>
    </table>`;
  document.getElementById("table").innerHTML = table;
}
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData() {
  let Data = localStorage.getItem("details");
  if (Data) {
    details = JSON.parse(Data);
  } else {
    setData();
  }
}
function setData() {
  localStorage.setItem("details", JSON.stringify(details));
}
function save() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  if (fname.value == 0) {
    alert("first name is Empty");
    return;
  }
  if (lname.value == 0) {
    alert("last name is Empty");
    return;
  }
  if (email.value == 0) {
    alert("email is Empty");
    return;
  }
  if (phone.value == 0) {
    alert("phone is Empty");
    return;
  }
  let data = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    phone: phone.value,
  };
  details.push(data);
  setData();

  // console.log(details)
  // console.log(email.value)
  table();
  fname.value = "";
  lname.value = "";
  email.value = "";
  phone.value = "";
}
function deleteData(index) {
  details.splice(index, 1);
  setData();
  table();

  // console.log('delete work')
  // console.log(details)
}

function edit(index) {
  let editForm = `<div>
  <div class="form-group">
    <label for="name">Update First Name</label>
    <input type="text" value="${details[index].fname}" class="form-control" id="newfName" aria-describedby="emailHelp" placeholder="Update Your First Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Update Last Name</label>
    <input type="email" value="${details[index].lname}" class="form-control" id="newlname" placeholder="Update Your Last Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Update Your Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <div class="form-group mt-3">
    <label for="email">Update Your Contact</label>
    <input type="tel" value="${details[index].phone}" class="form-control" id="newphone" placeholder="Update Your Contact">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
  document.getElementById("form").innerHTML = editForm;
  // console.log('edit work');
}
function update(index) {
  let newfName = document.getElementById("newfName");
  let newlname = document.getElementById("newlname");
  let newEmail = document.getElementById("newEmail");
  let newphone = document.getElementById("newphone");

  details[index] = {
    fname: newfName.value,
    lname: newlname.value,
    email: newEmail.value,
    phone: newphone.value,
  };
  setData();
  table();
  document.getElementById("form").innerHTML = form;
  // console.log('update work')
  // console.log(details)
}
