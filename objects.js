class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgramacionBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTMLCSS = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLCSS = new Course({
  name: "Curso Practico de HTML y CSS",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgramacionBasica,
    cursoDefinitivoHTMLCSS,
    cursoPracticoHTMLCSS,
    "Curso de Responsive Design",
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgramacionBasica,
    "Curso Básico de Python",
    "Curso de Introducción a la Terminal y Línea de Comandos",
    "Curso de Git y Github Avanzado",
  ],
});

const escuelaVideojuegos = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [
    cursoProgramacionBasica,
    "Curso Introducción a la Producción de Videojuegos",
    "Curso Unreal Engine",
    "Curso de Unity 3D",
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const sumi = new Student({
  name: "Sumi",
  username: "pachi",
  email: "pachi@gmail.com",
  twitter: "@pachi",
  learningPaths: [escuelaWeb, escuelaVideojuegos],
});
