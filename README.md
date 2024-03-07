# VueFormulate

Vue Formulate es una librería que ofrece una forma sencilla de crear formularios y manejar validaciones en Vue.js@2. 

Es importante mencionar que para la versión de Vue@3 se tiene que hacer uso de la librería sucesora  a esta que es FormKit.

## Instalación

Después de crear tu proyecto es necesario ingresar el siguiente comando:

```sh
npm install "@braid/vue-formulate"
```

## Configuración Inicial

Después de haber instalado la librería es necesario agregar las siguientes líneas en el archivo _**main.js**_

```javascript
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);
```

## Uso

VueFormulate nos otorga componentes que debemos de utilizar para poder interactuar con la librería:

* FormulateForm : En vez de form o b-form
* FormulateInput : En vez de cualquier etiqueta de input usamos esta con el atributo **type=""** y seleccionando alguna de las opciones disponibles como: **text, email, date, number, range, file, url, password, checkbox, radio, submit**

```html
<FormulateForm>
    <FormulateInput
  type="text"
/>

<FormulateInput
  type="email"
/>

<FormulateInput
  type="date"
/>

<FormulateInput
  type="number"
/>

<FormulateInput
  type="range"
/>

<FormulateInput
  type="file"
/>

<FormulateInput
  type="url"
/>

<FormulateInput
  type="password"
/>

<FormulateInput
  type="checkbox"
/>

<FormulateInput
  type="radio"
/>

<FormulateInput
  type="submit"
/>

</FormulateForm>
```

Para poder validar los valores ingresados en estos diferentes tipos de inputs podemos hacer uso del atributo **validation=""** escogiendo una o más de las siguientes opciones:

* accepted
* after
* alpha
* alphanumeric
* bail
* before
* between
* confirm
* date
* email
* ends_with
* in
* matches
* max
* mime
* min
* not
* number
* optional
* required
* starts_with
* url

### Accepted
El valor debe de ser yes, 1, on, true. Útil si queremos validar si un checkbox está seleccionado o no. 

### After
Revisa si el valor ingresado para una fecha se encuentra después de el valor indicado. 

### Alpha
Revisa que el valor ingresado esté compuesto únicamente por carácteres del alfabeto.

### Alphanumeric
Revisa que el valor ingresado esté compuesto únicamente por carácteres alfanúmericos.

### Bail
Permite que los errores arrojados por las validaciones se muestren uno por uno y no todos a la vez. 

### Before
Revisa si el valor ingresado para una fecha se encuentra antes del valor indicado. 

### Between 
Revisa si el valor ingresado se encuentra dentro de un rango de valores indicados. Sirve para numeros, fechas o longitudes de String. 

### Confirm
Revisa si el valor ingresado es igual al valor de otro input indicado. 

### Date
Revisa si el valor ingresado coindide con el formato de fecha. Es posible indicar el formato que se prefiera por ejemplo date:MM/DD/YYYY

### Email
Revisa si el valor ingresado coincide con el formato de un email.

### Ends_with
Revisa si el valor ingresado termina con el valor indicado.

### In
Revisa si el valor ingresado coincide con el alguno de los valores indicados en un arreglo.

### Matches
Revisa si el valor ingresado coincide con alguno de los valores indicados o si coincide con el formato de un Regex indicado.

### Max
Revisa si el valor ingresado es menor al indicado, sirve tanto para numeros o longitudes de String o arreglos.

### Mime 
Revisa si el tipo de archivo elegido coincide con el o los tipos de archivos indicados. Por ejemplo mime:image/jpg

### Min
Revisa si el valor ingresado es mayor al indicado, sirve tanto para numeros o longitudes de String o arreglos.

### Not
Revisa que el valor ingresado no sea uno de los valores indicados. 

### Number
Revisa que el valor ingresado sea únicamente un numero.

### Optional
Opción que permite que el campo no se tome en cuenta si se encuentra vacío.

### Required
Opción que obliga a que el campo sea llenado y validado.

### Starts_with
Revisa que el valor ingresado empiece con el valor indicado.

### Url
Revisa si el valor ingresado coincide con el formato de una URL.

##

_Es importante mencionar que para ingresar más de una opción de validación se hace separándolas por medio de un_ **|** _y para agregar valores a las opciones se hace por medio de un_ **:**

```html
<FormulateInput
    type="text"
    validation="required"
/>
<FormulateInput
    type="text"
    validation="required|alpha"
/>
<FormulateInput
    type="date"
    validation="required|before:10/10/2025"
/>
```

##

Para poder ingresar mensajes de error personalizados para las validaciones es necesario hacer uso del atributo **:validation-messages="{}"** que recibe un objeto el cual se conforma de las **llaves**, que tienen que nombrarse igual que la opción de validación, y los **valores**, que contienen los mensajes de error personalizados para cada validación.

```html
<FormulateInput
    type="text"
    validation="required|alpha"
    :validation-messages="{required : 'Este campo es obligatorio' , alpha : 'Este campo solo puede contener letras'}"
/>
```

##

Si queremos que las validaciones de los inputs se hagan en vivo, es decir, sin necesidad de deseleccionar el input o de hacer un submit, es necesario usar el atributo **error-behavior:"live"**

```html
<FormulateInput
    type="text"
    validation="required|alpha"
    :validation-messages="{required : 'Este campo es obligatorio' , alpha : 'Este campo solo puede contener letras'}"
    error-behavior="live"
/>
```

##

Aparte de las validaciones que nos ofrece la librería es posible crear nuevas validaciones totalmente personalizadas, para esto se tiene que hacer uso del atributo **:validation-rules="{}"** en el que indicamos el nombre y el funcionamiento de la nueva validación. Ésta validación servirá únicamente para el input en el que  la creemos.

```html
<FormulateInput
  type="file"
  validation="mime:image/jpeg,image/png|validarTamanio"
  :validation-messages="{ mime: 'Solo puedes subir imágenes en formato jpeg o png', validarTamanio: 'La imagen no puede pesar más de 1MB'}"
  :validation-rules="{ validarTamanio: ({value}) => value.fileList[0].size < 1024 * 1024 }"
/>
```

En este ejemplo se creó una nueva validación para verificar el tamaño del archivo que se elige, teniendo en cuenta que el tamaño máximo permitido es de 1MB = 1024 * 1024. Además se creo un mensaje de error personalizado para la nueva validación, nótese que ambas llevan el mismo nombre.



