new Vue({
    el: '#app',
    data: {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, puedes hacer una solicitud HTTP o enviar los datos por correo electrónico
        console.log(this.formData);
        // Reiniciar el formulario después de enviarlo
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  });