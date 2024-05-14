function itemslist() {
    let productinput=document.getElementById("product").value;
    let quantityinput=document.getElementById("quantity").value;
    let priceinput=document.getElementById("price").value;
    let uniqueId= Math.floor(100000 +Math.random() *999999);

    if(productinput==""||quantityinput==""||priceinput==""){
        alert("fill all the feilds");
        return;
    }

    let data= {
        id: uniqueId,
        product: productinput,
        quantity:quantityinput,
        price: priceinput,                               
    };
    let items=JSON.parse(localStorage.getItem("items"))||[];
    items.push(data);
    localStorage.setItem("items",JSON.stringify(items));
     alert("data entered successfully");
}

function usersdatalist(){
    let users=JSON.parse(localStorage.getItem("items"));
    let list="";
    list +=`<table border=1 class="bgcolur">
    <tr >
    <th>s.no</th>
    <th>User id</th>
    <th>product</th>
    <th>price</th>
    <th>quntity</th>
    <th>Actions</th>
    </tr>`;
    users.map((data,index) => {
       list +="<tr>";
       list +="<td>"+ index +"</td>";
       list +="<td>"+ data.id +"</td>";
       list +="<td>"+ data.product +"</td>";
       list +="<td>"+ data.price +"</td>";
       list +="<td>"+ data.quantity +"</td>";
       list +="<td><button onclick='editvalue("+data.id+")'>Edit</button>|<button onclick='deletevalue("+data.id+")'>delete</button></td>";
       list +="</tr>";
    });
  list += `</table>`;
  document.getElementById("listusers").innerHTML=list;
}

function editvalue(dataid){
    let userslistis=JSON.parse(localStorage.getItem("items"));
    let singleuser=userslistis.find((data)=>data.id===dataid);
    let editinput=JSON.stringify(singleuser);
    localStorage.setItem("result",editinput);
    window.location="editlist.html?save=true";
}

function updatedate(){
    let productis=document.getElementById("product").value;
    let priceis=document.getElementById("price").value;
    let result=JSON.parse(localStorage.getItem("result"));
    let userslist=JSON.parse(localStorage.getItem("items"));
    let data=userslist.find((data)=>data.id==result.id);
    data.product=productis;
    data.price=priceis;
    localStorage.setItem("items",JSON.stringify(userslist));
    localStorage.removeItem("result");
    window.location="userslist.html";
}

function deletevalue(dataid){
    let resultdelete=JSON.parse(localStorage.getItem("items"));
    let remains=resultdelete.filter((data)=>data.id!==dataid);
    localStorage.setItem("items",JSON.stringify(remains));
    window.location="userslist.html";
}



