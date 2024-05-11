$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      var formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val()
      };
  
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: formData,
        dataType: 'json',
        encode: true
      })
      .done(function(data) {
        console.log(data); // Handle response here
        alert('Email Sent Successfully!');
      })
      .fail(function(data) {
        // Handle errors here
        alert('Error Sending Email');
      });
    });
  });
  