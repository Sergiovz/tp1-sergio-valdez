import { Partido } from "./Partido";

export class Torneo {
  private _id: number;
  private _nombre: string;
  private _partidos: Partido[] = [];

  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  programarPartido(partido: Partido): void {
    // Validación: verificar que no haya un partido con el mismo id
    if (this._partidos.some(p => p.id === partido.id)) {
      throw new Error(`Ya existe un partido con el id ${partido.id}`);
    }
    this._partidos.push(partido);
  }

  listarPartidos(): Partido[] {
    return [...this._partidos]; // Devolver una copia para evitar modificaciones externas
  }

  buscarPartido(id: number): Partido | undefined {
    return this._partidos.find(p => p.id === id);
  }
}