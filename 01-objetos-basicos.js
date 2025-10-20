// 1. Crear un objeto literal
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid",
    esEstudiante: false
};
// 2. Acceder a las propiedades del objeto
console.log("Nombre:", persona.nombre); //"Carlos  "
console.log("Edad:", persona.edad); //30 (notación de corchetes)

// 3. Modificar propiedades 
persona.edad = 31;
console.log(persona.edad); //31

// 4. añadir nuevas propiedades
persona.profesion = "Ingeniero";
console.log(persona.profesion); //"Ingeniero"

// 5.Objetos pueden contener arrays
let estudiante = {
    nombre: "Laura",
    cursos: ["Matemáticas", "Historia", "Arte"]
};
console.log(estudiante.Materias[0]); //"Matemáticas" 