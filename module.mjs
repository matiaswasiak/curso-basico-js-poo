import { PlatziClass } from "./objects.js";

try {
  const clase67 = new PlatziClass({
    name: "Clase 67",
    videoID: "id67",
  });

  clase67.reproducir();
  clase67.pausar();
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
}
