import type { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
  private _nombre: string;
  private _jugadores: Jugador[] = [];

  constructor(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }

  agregarJugador(jugador: Jugador): void {
    this._jugadores.push(jugador);
  }

  listarIntegrantes(): string[] {
    return this._jugadores.map((j) => j.toString());
  }

  toString(): string {
    return `Equipo: ${this._nombre} (Integrantes: ${this.cantidad})`;
  }

  get cantidad(): number {
    return this._jugadores.length;
  }
}
