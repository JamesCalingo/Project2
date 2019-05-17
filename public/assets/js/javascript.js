// Create user and add to database
console.log("TEST")
$("#createUser").on("submit", function(event){
  event.preventDefault();
  const userData = {
    firstName: $('#firstNameInput')
      .val()
      .trim(),
    lastName: $('#lastNameInput')
      .val()
      .trim(),
    email: $('#emailInput')
      .val()
      .trim(),
    password: $('#inputPassword1')
      .val()
      .trim(),
  };

  if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
    return swal({
      title: "You left a field blank. Please fill in all fields.",
      icon: 'error'
    });
  }

  $.ajax({
    url: '/api/users/register',
    method: 'POST',
    data: userData
  })
    .then(function(userData) {
      console.log(userData);
      return swal({
        title: "You're in! You should receive a confirmation email shortly, but for now, let's get to your registry!",
        icon: 'success'
      });
      window.location.href = "./add"
    })
    
    // .then(function() {
    //   // custom bootstrap method
    //   $('#createuser').tab('hide');
    //   $('#login').tab('show');
    // })
    .catch(err => {
      console.log(err);
      return swal({
        title: err.responseJSON.message,
        icon: 'error'
      });
    });
})

$("#login-btn").on("submit", function(event){
event.preventDefault();

const userData = {
  email: $('#exampleInputEmail1')
    .val()
    .trim(),
  password: $('#exampleInputPassword1')
    .val()
    .trim(),
};

if (!userData.email || !userData.password) {
  return swal({
    title: "You're missing something!",
    icon: 'error'
  });
}

$.ajax({
  url: '/api/users/login',
  method: 'POST',
  data: userData
})
  .then(function(accessToken) {
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    getUserProfile();
  })

   .catch(err => {
    console.log(err);
    return swal({
      title: err.responseJSON.error,
      icon: 'error'
    });
  });
});

function getUserProfile() {
  const token = localStorage.getItem('accessToken');

  $.ajax({
    url: '/api/users',
    method: 'get',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(userData => {
      console.log(userData);
    })
    .catch(err => {
      console.log(err);
    });

}

// find and display registry
$("#findRegistry").on("click", function(event){
  event.preventDefault();
  var registry = $("#registryLookup").val().trim();
  // API lookup the registry
  if(!registry){
    alert("We couldn't find that registry. Make sure it's spelled correctly and exactly as it was given to you, then try again.")
  }
    else{
      window.location.href = "./dummy"
    }
  });


  // Go to registry page - there's probably a way to make each registry its own page...

  $("#showProducts").on("click", function(event){
    event.preventDefault();
    $("#registryHeader").html("Here are the items currently in this registry:")
    var registry = $("<ul>")
    registry.addClass("unstyled")
    $.ajax({
      url: "/api/users",
      method: "GET"
    }).then(function(data){
    for(var i = 0; i < data.length; i++){
    var regItem = $("<li>");
    regItem.dataAttribute("purchased", false);
    var purchasedBtn = $("<button>");
    purchasedBtn.addClass("btn btn-primary purchaseBtn");
    purchasedBtn.text("Claim this item")
    regItem.append(purchasedBtn)
    registry.append(regItem)
    }
    $("#registryList").append(registry)
  })
  })

$(document).on("click", ".purchasedBtn", function(event){
  event.preventDefault();
  return swal({
    title: "Item confirmed. Thank You!",
    icon: "success"
  });
  purchasedBtn.addClass("disabled")
  // Set the item's data-attribute to "true"; disable the button somehow/move it to bottom of list if possible
})
// set value of product to "purchased: true"

// Login to registry
$("#login").on("submit", function(event){
  event.preventDefault();
  var user = {
    userName: $("#userName").val()
  }
})

// Add product
$("#addProduct").on("click", function (event){
  event.preventDefault();
  var newProduct = {product: $("#product").val().trim(),
  price: $("#price").val().trim()
}
if(!newProduct.product || !newProduct.price){
  return swal({
    title: "You're missing something!",
    icon: 'error'
  });
}
else{
  $.ajax({
    url: "api/products",
    method: "POST",
    data: newProduct
  }).then(function(newProduct){
    console.log(newProduct);
    
  })
}
})
