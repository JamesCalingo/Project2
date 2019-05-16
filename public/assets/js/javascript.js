// Create user and add to database

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
    password: $('#InputPassword1')
      .val()
      .trim()
  };

  if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
    return swal({
      title: "You're missing something!",
      icon: 'error'
    });
  }

  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: userData
  })
    .then(function(userData) {
      console.log(userData);
      return swal({
        title: userData.message,
        icon: 'success'
      });
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

// find and display registry

// set value of product to "purchased: true"

// Add product

