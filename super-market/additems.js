/*items add function*/
function add(){
    let pnameIs = document.getElementById("pname").value;
    let priceIs = document.getElementById("price").value;
    let usebyIs = document.getElementById("useby").value;
    let uniqueId = Math.floor(100000 + Math.random() * 999999);

    if (pnameIs == ""|| priceIs== "" || usebyIs =="") {
        alert("Please fill all the fields");
        return;
    }
    let Item = {
        id:uniqueId,
        pname:pnameIs,
        price:priceIs,
        useby:usebyIs,
    };
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(Item);
    localStorage.setItem("data", JSON.stringify(data));
    alert("product added");
}

/* to show the list items */
function listitems() {
    let users = JSON.parse(localStorage.getItem("data"));
  
    let itemsUI = "";
    itemsUI += `
    <table  border=1 id="products">
    <tr>
    <th>S.No</th>
    <th>Item Id</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Actions</th>
    </tr>`;
    users.map((Item, index) => {
      itemsUI += "<tr>";
      itemsUI += "<td>" + index + "</td>";
      itemsUI += "<td>" + Item.id + "</td>";
      itemsUI += "<td>" + Item.pname + "</td>";
      itemsUI += "<td>" + Item.price + "</td>";

      itemsUI +="<td><button onclick='editItem(" + Item.id +")'>Edit</button> | <button onclick='deleteItem(" + Item.id +")'>Delete</button></td>";
      itemsUI += "</tr>";
    });
    itemsUI += `</table>`;
    document.getElementById("itemsList").innerHTML = itemsUI;
}

/* edit user details */
function editItem(ItemId) {
    let listOfitems = JSON.parse(localStorage.getItem("data"));
    let singleitem = listOfitems.find((data) => data.id === ItemId);
    var itemIs = JSON.stringify(singleitem);
    localStorage.setItem("actionItem", itemIs);
    window.location = "edititem.html?save=true";
}

function updateProduct() {
    const updateproductname = document.getElementById("pname").value;
    const updateprice = document.getElementById("price").value;
  
    let actionItem = JSON.parse(localStorage.getItem("actionItem"));
  
    let listItems = JSON.parse(localStorage.getItem("data"));
  
    let user = listItems.find((items) => items.id === actionItem.id);
    user.pname = updateproductname;
    user.price = updateprice;
  
    localStorage.setItem("data", JSON.stringify(listItems));
    localStorage.removeItem("actionItem");
    window.location = "itemsdatalist.html";
}
function deleteItem(uid) {
    let listitemsindb = JSON.parse(localStorage.getItem("data"));
    let remains = listitemsindb.filter((data) => data.id !== uid);
    localStorage.setItem("data", JSON.stringify(remains));
    window.location = "itemsdatalist.html";
  }
  
 