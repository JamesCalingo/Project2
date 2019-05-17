$("#showProducts").on("click", function(event){
  event.preventDefault();
  
  $("#registryHeader").html("Here are the items currently in this registry:")
  var registry = $("<ul>")
  registry.addClass("unstyled")
var testArray = ["a", "b", "c", "D"]
  for(var i = 0; i < testArray.length; i++){
  var regItem = $("<li>").html(testArray[i]);
  // regItem.dataAttr("purchased", false);
  var purchasedBtn = $("<button>");
  purchasedBtn.addClass("btn btn-warning purchasedBtn ml-3");
  purchasedBtn.text("Claim this item")
  regItem.append(purchasedBtn)
  registry.append(regItem)
  }
  $("#registryList").html(registry)
})

$(document).on("click", ".purchasedBtn", function(event){
event.preventDefault();
console.log("BOOM")
// return swal({
//   title: "Item confirmed. Thank You!",
//   icon: "success"
// });
alert("HI!")
$(".purchasedBtn").addClass("disabled").text("Claimed")
// Set the item's data-attribute to "true"; disable the button somehow/move it to bottom of list if possible
})
// set value of product to "purchased: true" (via AJAX)