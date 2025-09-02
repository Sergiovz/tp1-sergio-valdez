export class Resultado {
  private _golesLocal: number;
  private _golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this._golesLocal = golesLocal;
    this._golesVisitante = golesVisitante;
  }

  get golesLocal(): number {
    return this._golesLocal;
  }

  get golesVisitante(): number {
    return this._golesVisitante;
  }

  toString(): string {
    return `Local: ${this.golesLocal} - Visitante: ${this.golesVisitante}`;
  }
}