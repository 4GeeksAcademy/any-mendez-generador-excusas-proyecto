/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const excusaElement = document.getElementById("excusa");
  const quien = ["El perro", "Mi abuela", "El cartero", "Mi mascota"];
  const accion = ["comio", "mojo", "aplasto", "rompio"];
  const objeto = ["mi tarea", "mi telefono", "el carro"];
  const cuando = [
    "antes de clases",
    "cuando yo estaba durmiendo",
    "mientras estaba haciendo ejercicio",
    "durante el almuerzo",
    "mientras estaba rezando"
  ];

  function GenerandoExcusas() {
    const aleatorioQuien = quien[Math.floor(Math.random() * quien.length)];
    const aleatorioAccion = accion[Math.floor(Math.random() * accion.length)];
    const aleatorioObjeto = objeto[Math.floor(Math.random() * objeto.length)];
    const aleatorioCuando = cuando[Math.floor(Math.random() * cuando.length)];

    const excusa =
      aleatorioQuien +
      " " +
      aleatorioAccion +
      " " +
      aleatorioObjeto +
      " " +
      aleatorioCuando +
      ".";
    return excusa;
  }
  excusaElement.textContent = GenerandoExcusas();
};
