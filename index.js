
var siteName = document.getElementById("sname")
var siteUrl = document.getElementById("surl")

var productlist = []

if (localStorage.getItem("Url") != null) {
   productlist = JSON.parse(localStorage.getItem("Url"));
   display();
   console.log(productlist);
}


function addurl(){

    var Urls = {

        siteName:siteName.value,
        siteUrl:siteUrl.value
        
        };
 productlist.push(Urls)       
console.log(productlist);


localStorage.setItem("Url",JSON.stringify(productlist))
display();
clerInputs()


}
function clerInputs() {
  
}

function display(){

 var cartona = ``
 for (var i = 0 ; i < productlist.length ;  i++) {
   cartona += `<tbody>
<tr>
<td>${i}</td>
<td>${productlist[i].siteName}</td>
<td><a href="${productlist[i].siteUrl}" class="btn btn-success">visit</a></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>

</tr>
</tbody>`

    
 }
 document.getElementById("tableData").innerHTML = cartona;

}


function deleteProduct(index) {

  productlist.splice(index,1);
  localStorage.setItem("Url", JSON.stringify(productlist));
  display()
}


function validation () {
  var regex = /^[a-zA-Z]\w{2,15}$/

  var test = siteName.value
  if (regex.test(test)) {

    siteName.classList.add("is-valid")
    siteName.classList.remove("is-invalid")
  }else{
    siteName.classList.add("is-invalid")
    siteName.classList.remove("is-valid")

  }

  
}
function validationURL() {
  var regex = /^(http|https).{5,20}$/
  var testU = siteUrl.value;
  if (regex.test(testU)) {

    siteUrl.classList.add("is-valid")
    siteUrl.classList.remove("is-invalid")
  }else{

    siteUrl.classList.add("is-invalid")
    siteUrl.classList.remove("is-valid")
  }
  
}







