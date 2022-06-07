window.addEventListener('DOMContentLoaded', function (event) {
  var form_register = document.querySelector('#form-register')
  form_register.addEventListener('submit', function (event) {
    

    var canSubmit = true
    var input_name = document.querySelector('#input_name')

    if (input_name.value == '') {
      document.querySelector('#name_container .input-error').innerHTML =
        'El Nombre es obligario'
      canSubmit = false
    } else {
      if (input_name.value.length < 5) {
        document.querySelector('#name_container .input-error').innerHTML =
          'El nombre debe tener almenos 5 caracteres'
        canSubmit = false
      } else {
        document.querySelector('#name_container .input-error').innerHTML = ''
      }
    }

    //
    var input_cedula = document.querySelector('#input_cedula')

    if (isNaN(input_cedula.value, false)) {
      document.querySelector('#cedula_container .input-error').innerHTML =
        'No pertenece a una cedula'
      canSubmit = false
    } else {
      document.querySelector('#cedula_container .input-error').innerHTML = ''
    }
    //
    var input_last_name = document.querySelector('#input_last_name')

    if (input_last_name.value.length < 4) {
      document.querySelector('#last_name_container .input-error').innerHTML =
        'El apellido debe tener 4 caracteres'
      canSubmit = false
    } else {
      document.querySelector('#last_name_container .input-error').innerHTML = ''
    }

    var input_user_name = document.querySelector('#input_user_name')

    if (input_user_name.value == '') {
      document.querySelector('#user_name_container .input-error').innerHTML =
        'El nomber de usuario es obligatorio'
      canSubmit = false
    } else {
      document.querySelector('#user_name_container .input-error').innerHTML = ''
    }

    var input_email = document.querySelector('#input_email')

    if (input_email.value == '') {
      document.querySelector('#email_container .input-error').innerHTML =
        'El correo esta mal'
      canSubmit = false
    } else {
      var ingreso1 = input_email.value.indexOf('@')
      var ingreso2 = input_email.value.indexOf('.')

      if (ingreso1 < 0 || ingreso2 < 0) {
        document.querySelector('#email_container  .input-error').innerHTML =
          'El correo esta mal'
        canSubmit = false
      } else {
        document.querySelector('#email_container .input-error').innerHTML = ''
      }
    }

    // var input_date = document.querySelector('#input_date');

    // if(input_date.value==""){
    //     document.querySelector('#date_container  .input-error').innerHTML='La fecha de pago es obligatorio';
    //     canSubmit = false;
    // }else{
    //     var currentDate= new Date();
    //     currentDate.setTime(Date.parse(input_date.value));
    //     if(new Date().getTime() > currentDate.getTime()){
    //         document.querySelector('#date_container  .input-error' ).innerHTML ='La fecha de pago debe ser diferente';
    //         canSubmit = false;
    //     }else{
    //         document.querySelector('#date_container .input-error').innerHTML='';
    //     }
    // }

    if (!canSubmit) {
      event.preventDefault()
    }
  })
})
