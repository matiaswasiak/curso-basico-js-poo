class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: "Matias",
    });
    comment.publicar();
  }
}

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Malito de Programación Basica") {
      console.error("Web... no");
    } else {
      this._name = newName;
    }
  }
}

const cursoProgramacionBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

const cursoDefinitivoHTMLCSS = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLCSS = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const sumi = new FreeStudent({
  name: "Sumi",
  username: "pachi",
  email: "pachi@gmail.com",
  twitter: "@pachi",
  learningPaths: [escuelaWeb, escuelaVideojuegos],
});

const mati = new ExpertStudent({
  name: "Matias",
  username: "mati",
  email: "matiaswasiak@gmail.com",
  instagram: "@matiaswasiak_",
  learningPaths: [escuelaWeb, escuelaData],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "freddier@gmail.com",
  instagram: "@freddiervega",
});
