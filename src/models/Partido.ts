import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido {
  private _id: number;
  private _local: Equipo;
  private _visitante: Equipo;
  private _deporte: Deporte;
  private _resultado?: Resultado;

  constructor(id: number, local: Equipo, visitante: Equipo, deporte: Deporte) {
    if (local.nombre === visitante.nombre) {
      throw new Error("Los equipos local y visitante no pueden ser el mismo");
    }
    this._id = id;
    this._local = local;
    this._visitante = visitante;
    this._deporte = deporte;
  }

  get id(): number {
    return this._id;
  }

  get local(): Equipo {
    return this._local;
  }

  get visitante(): Equipo {
    return this._visitante;
  }

  get deporte(): Deporte {
    return this._deporte;
  }

  get resultado(): Resultado | undefined {
    return this._resultado;
  }

  jugar(): void {
    if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
      throw new Error("Los equipos no cumplen con los requisitos del deporte");
    }
    const golesLocal = Math.floor(Math.random() * 6);
    const golesVisitante = Math.floor(Math.random() * 6);
    this._resultado = new Resultado(golesLocal, golesVisitante);
  }

  toString(): string {
    let str = `Partido ${this.id}: ${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre})`;
    if (this.resultado) {
      str += ` - ${this.resultado.toString()}`;
    }
    return str;
  }
}