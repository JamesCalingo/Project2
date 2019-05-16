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
      url: '/api/users/register',
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
  
  $("#login-btn").on("submit", function(event){
  event.preventDefault();
  
  const userData = {
    email: $('#exampleInputEmail1')
      .val()
      .trim(),
    password: $('#exampleInputPassword1')
      .val()
      .trim()
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
  // set value of product to "purchased: true"
  // Add product