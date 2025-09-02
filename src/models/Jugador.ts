export class Jugador {
  private _id: number;
  private _nombre: string;
  private _edad: number;
  private _posicion?: string;

  constructor(id: number, nombre: string, edad: number, posicion?: string) {
    this._id = id;
    this._nombre = nombre;
    this._edad = edad;
    this._posicion = posicion;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get edad(): number {
    return this._edad;
  }

  get posicion(): string | undefined {
    return this._posicion;
  }

  toString(): string {
    return `Jugador [ID: ${this._id}, Nombre: ${this._nombre}, Edad: ${
      this._edad
    }${this._posicion ? ", Posición: " + this._posicion : ""}]`;
  }
}
