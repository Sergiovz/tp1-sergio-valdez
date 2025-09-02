import type { Equipo } from "./Equipo";

export abstract class Deporte {
  nombre: string;
  maxPorEquipo: number;
  abstract validar(equipo: Equipo): boolean;

  constructor(nombre: string, maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }
}
