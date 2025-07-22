/** ------ Eventos ------ */

import { EventEmitter } from "events";

const myEmetter = new EventEmitter();

function greetHandler(name) {
  console.log(`Olá ${name}!`);
}

function goodbyeHandler(name) {
  console.log(`Tchau ${name}!`);
}

// Registro de emissores de eventos
myEmetter.on("greet", greetHandler);
myEmetter.on("goodbye", goodbyeHandler);

// Enviar eventos
myEmetter.emit("greet", "Felipe");
myEmetter.emit("goodbye", "Felipe");

// Erros
myEmetter.on("error", (err) => {
  console.log(`Ùm erro inesperado aconteceu: ${err}`);
});

// Simular o erro
myEmetter.emit("error", new Error("Deu ruim"));
