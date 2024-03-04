<script>
export default {
  data () {
    return {
      formValues: {}
    }
  },
  methods: {
  }
}
</script>

<template>
  <div >

  <b-container style="display:flex; justify-content:center; margin-top:50px">
    
    <FormulateForm
    class="login-form"
    v-model="formValues"
  >
    <h2 class="form-title">Vue Formulate</h2>
    <p>
      Vue Formulate es una librería que ofrece una forma sencilla de crear formularios y manejar validaciones
      en Vue.js@2. 
    </p>
    <p>
      Es importante mencionar que para la versión de Vue@3 se tiene que hacer uso de la librería sucesora 
      a esta que es FormKit.
    </p>
    <p>
      Ejemplos de uso:
    </p>
    <FormulateInput
      name="nombre"
      type="text"
      label="Nombre"
      placeholder="Tu nombre"
      validation="required|alpha"
      :validation-messages="{ required: 'Por favor ingresa tu nombre', alpha: 'El nombre solo puede contener letras'}"
      error-behavior="live"
    />
    <FormulateInput
      name="email"
      type="email"
      label="Email "
      placeholder="Tu email"
      validation="required|email"
      :validation-messages="{ required: 'Por favor ingresa tu correo', email: 'Por favor ingresa un correo válido' }"
      error-behavior="live"
    />

    <FormulateInput
  type="text"
  name="fecha_favorita"
  label="¿Cúal es tu fecha favorita?"
  placeholder="Tu fecha favorita"
  validation="date:DD/MM/YYYY"
  :validation-messages="{ date: 'Por favor ingresa una fecha válida con el formato DD/MM/YYYY' }"
  error-behavior="live"
  />
   
    <div class="double-wide">
      <FormulateInput
      name="edad"
      type="number"
      label="Edad"
      placeholder="Tu edad"
      validation="required|number|min:18"
      :validation-messages="{ required: 'Por favor ingresa tu edad', number: 'La edad debe ser un número entero', min: 'Debes ser mayor de edad' }"
      error-behavior="live"/>
      <FormulateInput
        name="fecha_nacimiento"
        type="date"
        label="Fecha de nacimiento"
        placeholder="Tu fecha de nacimiento"
        :validation="`required|before:${new Date().toISOString().split('T')[0]}`"
        :validation-messages="{ required: 'Por favor ingresa tu fecha de nacimiento' , before: 'La fecha de nacimiento no puede ser mayor a la fecha actual'}"
        error-behavior="live"
      />


    </div>

    <FormulateInput
  type="range"
  min="1"
  max="120"
  name="edad2"
  label="¿Cuántos años tienes?"
  validation="required|between:10,18,value"
  :validation-messages="{ required: 'Por favor ingresa tu edad', between: 'La edad debe estar entre 10 y 18 años'}"
  :show-value="true"
  :value="1"
  error-behavior="live"
/>

    <FormulateInput
      name="curp"
      type="text"
      label="CURP"
      placeholder="Tu CURP"
      validation="required|alphanumeric|min:18|max:18"
      :validation-messages="{ required: 'Por favor ingresa tu CURP', alphanumeric: 'El CURP solo puede contener letras y números', min: 'El CURP debe tener 18 caracteres', max: 'El CURP debe tener 18 caracteres' }"
      error-behavior="live"
    />

    <div class="double-wide">
      <FormulateInput
        name="rima_toalla"
        type="text"
        label="¿Qué rima con toalla?"
        placeholder="Tu respuesta"
        validation="required|ends_with:alla"
        :validation-messages="{ required: 'Por favor ingresa tu respuesta', ends_with: 'La respuesta debe terminar con  alla ' }"
        error-behavior="live"
      />
      <FormulateInput
        name="hashtag"
        type="text"
        label="¿Cual es tu hashtag favorito?"
        placeholder="Tu hashtag"
        validation="required|starts_with:#"
        :validation-messages="{ required: 'Por favor ingresa tu hashtag', starts_with: 'El hashtag debe empezar con #' }"
        error-behavior="live"
      />
    </div>

    <FormulateInput
    type="select"
    :options="{chocolate: 'Chocolate', vainilla: 'Vainilla', amarillo : 'Amarillo' }"
    name="sabor"
    label="¿Cual es tu sabor de helado favorito?"
    placeholder="Selecciona un sabor de helado"
    validation="in:chocolate,vainilla"
    :validation-messages="{ in: 'Selecciona un sabor de helado válido' }"
    error-behavior="live"
    />

    <FormulateInput
  type="text"
  name="lenguaje"
  placeholder="Tu lenguaje favorito"
  label="¿Cual es tu lenguaje de programación favorito?"
  validation="matches:java,python,php,js,go,c,typescript,javascript,kotlin,swift"
  :validation-messages="{ matches: 'El lenguaje de programación no es válido' }"
  error-behavior="live"
/>

<FormulateInput
  type="checkbox"
  name="animales"
  :options="{
    perro: 'Perro',
    gato: 'Gato',
    pez: 'Pez',
    pajaro: 'Pájaro',
    tortuga: 'Tortuga',
    hamster: 'Hamster',
    conejo: 'Conejo',
  }"
  label="Selecciona hasta 3 animales"
  validation="max:3"
  :validation-messages="{ max: 'Solo puedes seleccionar hasta 3 animales' }"
  error-behavior="live"
/>

<FormulateInput
  type="file"
  name="imagen"
  label="Por favor sube una imagen"
  validation="mime:image/jpeg,image/png|validarTamanio"
  :validation-messages="{ mime: 'Solo puedes subir imágenes en formato jpeg o png', validarTamanio: 'La imagen no puede pesar más de 1MB'}"
  :validation-rules="{ validarTamanio: ({value}) => value.fileList[0].size < 1024 * 1024 }"


/>

<FormulateInput
  type="url"
  name="url"
  label="¿Cual es tu sitio web favorito?"
  validation="url"
  :validation-messages="{ url: 'Por favor ingresa una URL válida' }"
  error-behavior="live"
/>


    <div class="double-wide">
      <FormulateInput
        name="password"
        type="password"
        label="Contraseña"
        placeholder="Tu contraseña"
        validation="required|min:8|max:20|matches:/[0-9]/|alphanumeric"
        :validation-messages="{ required: 'Por favor ingresa tu contraseña',  min: 'La contraseña debe tener al menos 8 caracteres', max: 'La contraseña no puede tener más de 20 caracteres', matches: 'La contraseña debe contener al menos un número', alphanumeric: 'La contraseña solo puede contener letras y números'}"
        error-behavior="live"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Confirma tu contraseña"
        placeholder="Confirmar contraseña"
        validation="required|confirm"
        validation-name="Confirmation"
        :validation-messages="{ required: 'Por favor confirma tu contraseña', confirm: 'Las contraseñas no coinciden',}"
      />
    </div>
    


    <FormulateInput
      type="radio"
      :options="{true: 'Si', false: 'No'}"
      name="mail_notifications"
      label="¿Quieres recibir notificaciones por correo?"
      validation="required"
      :validation-messages="{ required: 'Por favor selecciona una opción' }"
      error-behavior="live"
    />


    <FormulateInput
      name="terms"
      type="checkbox"
      label="Acepto los términos y condiciones"
      validation="accepted"
      :validation-messages="{ accepted: 'Debes aceptar los términos y condiciones' }"
      error-behavior="live"/>


    <FormulateInput
      type="submit"
      label="Registrar"
    />
    <pre
      class="code"
      v-text="formValues"
    />
  </FormulateForm>

  </b-container>


  </div>
</template>

<style scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: .5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>
