# Asignatura Blockchain. Desarrollo de aplicaciones

##  Práctica 1. Crear un contrato inteligente llamado Asignatura para representar una asignatura de la carrera.

El profesor de la asignatura será el usuario que despliega el contrato.

El constructor tomará como parámetros el nombre de la asignatura, y el curso académico. Ambos son strings.

Deben existir métodos para poder consultar el nombre y el curso academico de la asignatura creada. Y también para acceder a la dirección del profesor.

Crear el método creaEvaluacion para crear una prueba de evaluacion de la asignatura. Por ejemplo, el primer parcial, o la práctica 3. Tomará como parámetros el nombre de la evaluación (string), la fecha de evaluación (uint) y los puntos que proporcionará a la nota final. Las evaluaciones se meterán en un array, y nos referiremos a ellas por su posición en el array.

Cree el método evaluacionesLength que devuelve el número de evaluaciones creadas.

Los alumnos pueden automatricularse con el metodo automatricula, que toma como parámetros el nombre y el email del alumno. Ambos son strings. Impedir que se pueda meter un nombre vacio.

El método matriculasLength devuelve el número de alumnos matriculados.

Las direcciones de los alumnos matriculados se guardarán en un array público llamado matriculas.

Crear el método quienSoy que devuelve el nombre y el email del alumno que invoca el método.

Crear un método que devuelva los datos del alumno (nombre y email) dada su dirección.

Crear el método califica para poner una nota a un alumno en una asignatura. Tiene 4 parámetros:

  - la dirección del alumno.

  - el índice de una evaluación (en el array de evaluaciones).

  - tipo de nota: 0 es NP, 1 es una nota normal, y 2 es MH. Crear un enumerado para el tipo.

  - un uint con la calificación (multipilicada por 100 porque no hay decimales).

Crear el método miNota que devuelve el tipo de nota (el enumerado anterior) y la calificación que ha sacado el alumno que invoca el método en la evaluación pasada como parámetro (el índice de la evaluación).

Crear el método calificaciones que devuelve la nota de una alumno en una evaluación. Toma como parámetros la dirección del alumno y el índice de la evaluación.

Crear un modificador, llamado soloProfesor, para que las funciones creaEvaluacion y califica solo pueda ejecutarlas el profesor.

Crear un modificador, llamado soloMatriculados, para que las funciones quienSoy y miNota solo pueda ejecutarlas un alumno matriculado.

Crear un modificador, llamado noMatriculados, para que la función automatricula solo pueda ejecutarla un alumno que no se ha matriculado aun.

> [Solución](https://github.com/Fer3suarez/BCDA/blob/master/asignatura.sol)


##  Practica 2 - Contador con Decremento y Reset

El objetivo de esta práctica es modificar el proyecto Truffle con el que se han creado la dapp que usa el contrato Contador. Hay que añadir dos funcionalidades nuevas para decrementar e inicializar el contador.

### Tarea 1
El Smart Contract a usar en este ejercicio debe ser una modificación del contrato Contador.sol visto en clase.

Debe modificarse añadiendo dos métodos nuevos:

- decr, que disminuye el valor actual del contador en una unidad.
- reset, que pone a 0 el valor actual del contador.

### Tarea 2
Desarrolle tests nuevos en javascript para probar las nuevas funcionalidades.

Los tests deben probar que los nuevos métodos del contador disminuyen su valor en una unidad o que lo ponen a cero cada vez que se ejecuten.

### Tarea 3
Modifique la dapp desarrollada para añadir dos botones nuevos para disminuir en uno y poner a cero el valor del contrato Contador desplegado.

El botón HTML usado para decremento debe tener "Decrementar" como título, y "cdecr" como valor del atributo id.

El botón HTML usado para reiniciar debe tener "Reset" como título, y "creset" como valor del atributo id.

Cree las funciones App.handleDecr() y App.handleReset() para manejar las pulsaciones sobre los nuevos botones. Estas funciones deber crear transacciones para invocar los métodos decr y reset del contrato Contador desplegado.

Use el servidor serve para servir la app desarrollada.

> [Solución](https://github.com/Fer3suarez/BCDA/tree/master/Pr%C3%A1ctica%202.%20Contador%20con%20decremento%20y%20reset)

#### Pasos para ejecutar el contador con Truffle, Ganache y Metamask:
Instalar truffle
```
npm install truffle 
```
Instalar ganache
```
Descargar ganache para Windows https://www.trufflesuite.com/ganach
```
Instalar los paquetes web3 y truffle-contract
```
npm install web3 truffle-contract
```
Compilar el contrato Contador.sol
```
npx truffle compile --all
```
Realizar las migraciones
```
npx truffle migrate --compile-all --reset
```
Lanzar servidor web serve
```
npx serve -S dapp
```
Abrir navegador Chrome con Metamask instalado e importar una cuenta de Ganache

##  Práctica 3 - Dapp Asignatura usando Drizzle.

En esta práctica hay que desarrollar una dapp para un contrato asignatura desplegado en una red Ethereum.

La práctica hay que hacerla usando una dapp que ya está parcialmente hecha: muestra todos los datos del contrato Asignatura, muestra las calificaciones del alumno conectado (se identifica por la dirección seleccionada en Metamask), y permite que el profesor ponga notas a los alumnos.

La dapp de partida está disponible en https://github.com/sanpago/P3_Asignatura_Drizzle.

Se pide ampliar la dapp proporcionada con las siguientes nuevas funcionalidades:

### Funcionalidad 1 (30%)
Crear un botón para que un alumno se pueda matricular.  La dirección seleccionada en Metamask identifica al alumno que se está matriculando.

### Funcionalidad 2 (30%)
Crear un formulario para que el profesor cree nuevas evaluaciones.

### Funcionalidad 3 (40%)
Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.

Deben implementarse por lo menos dos funcionalidades. 

> [Solución](https://github.com/Fer3suarez/BCDA/tree/master/P3_Asignatura_Drizzle)

### Ejecución de la aplicación

Clonar el repositorio

```
git clone htpps://github.com/Fer3suarez/BCDA
```

Moverse al directorio del proyecto

```
cd P3_Asignatura_Drizzle
```

Instalar las dependencias del proyecto

```
npm install
```

Abrir Ganache y crear un workspace apuntando al archivo truffle-config del proyecto


En el navegador, importar las cuentas de Ganache a Metamask


Compilar y migrar los contraros inteligentes

```
npx truffle migrate --compile-all --reset
```

Ejecutar el script rellenar.js para crear alumnos iniciales y un profesor

```
npx truffle exec .\scripts\rellenar.js
```

Moverse a la carpeta dapp

```
cd dapp
```

Instalar las dependencias de la aplicación descentralizada

```
npm install
```

Arrancar la aplicación

```
npm start
```
