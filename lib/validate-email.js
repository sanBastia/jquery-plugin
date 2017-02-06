$('#button').click(function (e) {
  email_address = $('#email')
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
  if (email_regex.test(email_address.val())) {
    $('#email').addClass('correct')
  // ; e.preventDefault(); return false;  }
  }else {
    $('#email').addClass('wrong')
  }
})
