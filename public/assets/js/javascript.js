// Create user and add to database

$("#createUser").on("click", function(event){
  event.preventDefault();
    const checkValues = [];
    $("[name=Radios]").each((i, element) => {
      if ($(element).is(":checked")) {
        checkValues.push($(element).val());
        console.log(checkValues);
      }
    });
  const newUser = {
    firstName: $("#firstNameInput").val().trim(),
    lastName: $("#lastNameInput").val().trim(),
    email: $("#emailInput").val().trim(),
    password: $("#inputPassword1").val().trim(),
    registryName: $("#registryName").val().trim(),
    registryType: checkValues[0]
    }
    // If ANY part of newUser is empty, warn user to fill in that part
    if(!newUser.firstName||!newUser.lastName){
      alert("Fill in all fields please!")
    }
    else{
    console.log(newUser)

    $("#firstNameInput").val(null);
    $("#lastNameInput").val(null);
    $("#emailInput").val(null);
   $("#inputPassword1").val(null);
   $("#inputPassword2").val(null);
    $("#registryName").val(null);
  window.location.href = "./success"  
  }
  })

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
  })
  // Go to registry page - there's probably a way to make each registry its own page...

// set value of product to "purchased: true"

// Add product

