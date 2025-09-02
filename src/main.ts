import { Jugador } from './models/Jugador';
import { Equipo } from './models/Equipo';
import { Futbol } from './models/Futbol';
import { Basquet } from './models/Basquet';
import { Partido } from './models/Partido';
import { Deporte } from './models/Deporte';

console.log('='.repeat(60));
console.log('SISTEMA DE DEPORTES - DEMOSTRACIÓN COMPLETA');
console.log('='.repeat(60));


// 1. CREAR JUGADORES CON DIFERENTES DATOS

console.log('\n1. CREANDO JUGADORES');

const jugadoresFutbol = [
  new Jugador(1, 'Lionel Messi', 36, 'Delantero'),
  new Jugador(2, 'Cristiano Ronaldo', 38, 'Delantero'),
  new Jugador(3, 'Neymar Jr', 31, 'Extremo'),
  new Jugador(4, 'Kylian Mbappé', 24, 'Delantero'),
  new Jugador(5, 'Erling Haaland', 23, 'Delantero'),
  new Jugador(6, 'Kevin De Bruyne', 32, 'Mediocampista'),
  new Jugador(7, 'Virgil van Dijk', 32, 'Defensor'),
  new Jugador(8, 'Luka Modrić', 38, 'Mediocampista'),
  new Jugador(9, 'Robert Lewandowski', 35, 'Delantero'),
  new Jugador(10, 'Sadio Mané', 31, 'Extremo'),
  new Jugador(11, 'Thibaut Courtois', 31, 'Portero'),
  new Jugador(12, 'Sergio Ramos', 37, 'Defensor'),
];

const jugadoresBasquet = [
  new Jugador(13, 'LeBron James', 38, 'Alero'),
  new Jugador(14, 'Stephen Curry', 35, 'Base'),
  new Jugador(15, 'Kevin Durant', 34, 'Alero'),
  new Jugador(16, 'Giannis Antetokounmpo', 28, 'Ala-Pívot'),
  new Jugador(17, 'Luka Dončić', 24, 'Base'),
  new Jugador(18, 'Nikola Jokić', 28, 'Pívot'),
  new Jugador(19, 'Joel Embiid', 29, 'Pívot'),
];

console.log('Jugadores de fútbol creados:');
jugadoresFutbol.forEach(jugador => console.log(`  ${jugador.toString()}`));

console.log('\nJugadores de básquet creados:');
jugadoresBasquet.forEach(jugador => console.log(`  ${jugador.toString()}`));


// 2. CREAR EQUIPOS DE FÚTBOL Y BÁSQUET

console.log('\n\n2. CREANDO EQUIPOS');

const equipoFutbol1 = new Equipo('River Plate');
const equipoFutbol2 = new Equipo('Central Córdoba');
const equipoFutbolExcedido = new Equipo('Equipo Excedido'); // Para demostrar validación

for (let i = 0; i < 11; i++) {
  equipoFutbol1.agregarJugador(jugadoresFutbol[i]);
}

for (let i = 0; i < 11; i++) {
  equipoFutbol2.agregarJugador(jugadoresFutbol[i]);
}

for (let i = 0; i < 12; i++) {
  equipoFutbolExcedido.agregarJugador(jugadoresFutbol[i]);
}

console.log('Equipos de fútbol creados:');
console.log(`  ${equipoFutbol1.toString()}`);
console.log(`  ${equipoFutbol2.toString()}`);
console.log(`  ${equipoFutbolExcedido.toString()}`);


const equipoBasquet1 = new Equipo('Los Angeles Lakers');
const equipoBasquet2 = new Equipo('Golden State Warriors');
const equipoBasquetExcedido = new Equipo('Equipo Básquet Excedido'); // Para demostrar validación

for (let i = 0; i < 5; i++) {
  equipoBasquet1.agregarJugador(jugadoresBasquet[i]);
}

for (let i = 3; i < 5; i++) {
  equipoBasquet2.agregarJugador(jugadoresBasquet[i]);
}

for (let i = 0; i < 7; i++) {
  equipoBasquetExcedido.agregarJugador(jugadoresBasquet[i % jugadoresBasquet.length]);
}

console.log('\nEquipos de básquet creados:');
console.log(`  ${equipoBasquet1.toString()}`);
console.log(`  ${equipoBasquet2.toString()}`);
console.log(`  ${equipoBasquetExcedido.toString()}`);


// 3. CREAR INSTANCIAS DE DEPORTES

console.log('\n\n3. CREANDO DEPORTES');

const futbol = new Futbol();
const basquet = new Basquet();

console.log(`Deporte creado: ${futbol.nombre} (Máximo ${futbol.maxPorEquipo} jugadores por equipo)`);
console.log(`Deporte creado: ${basquet.nombre} (Máximo ${basquet.maxPorEquipo} jugadores por equipo)`);


// 4. VALIDAR CUPOS POR DEPORTE

console.log('\n\n4. VALIDACIÓN DE CUPOS POR DEPORTE');

console.log('\n--- Validación de equipos de fútbol ---');
console.log(`${equipoFutbol1.nombre} (${equipoFutbol1.cantidad} jugadores): ${futbol.validar(equipoFutbol1) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);
console.log(`${equipoFutbol2.nombre} (${equipoFutbol2.cantidad} jugadores): ${futbol.validar(equipoFutbol2) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);
console.log(`${equipoFutbolExcedido.nombre} (${equipoFutbolExcedido.cantidad} jugadores): ${futbol.validar(equipoFutbolExcedido) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);

console.log('\n--- Validación de equipos de básquet ---');
console.log(`${equipoBasquet1.nombre} (${equipoBasquet1.cantidad} jugadores): ${basquet.validar(equipoBasquet1) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);
console.log(`${equipoBasquet2.nombre} (${equipoBasquet2.cantidad} jugadores): ${basquet.validar(equipoBasquet2) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);
console.log(`${equipoBasquetExcedido.nombre} (${equipoBasquetExcedido.cantidad} jugadores): ${basquet.validar(equipoBasquetExcedido) ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);


// 5. DEMOSTRAR POLIMORFISMO CON VALIDAR()

console.log('\n\n5. DEMOSTRACIÓN DE POLIMORFISMO');

const deportes: Deporte[] = [futbol, basquet];
const equiposPrueba = [equipoFutbol1, equipoBasquet1, equipoFutbolExcedido, equipoBasquetExcedido];

console.log('Usando polimorfismo - mismo método validar() con comportamiento diferente:');
deportes.forEach(deporte => {
  console.log(`\n--- Validando con ${deporte.nombre} ---`);
  equiposPrueba.forEach(equipo => {
    const esValido = deporte.validar(equipo);
    console.log(`  ${equipo.nombre} (${equipo.cantidad} jugadores): ${esValido ? 'VÁLIDO ✓' : 'INVÁLIDO X'}`);
  });
});


// 6. CREAR Y JUGAR PARTIDOS

console.log('\n\n6. CREANDO Y JUGANDO PARTIDOS');

// Crear partidos válidos
const partidoFutbol = new Partido(1, equipoFutbol1, equipoFutbol2, futbol);
const partidoBasquet = new Partido(2, equipoBasquet1, equipoBasquet2, basquet);

console.log('\n--- Partidos creados ---');
console.log(partidoFutbol.toString());
console.log(partidoBasquet.toString());

// Jugar los partidos
console.log('\n--- Jugando partidos ---');
try {
  partidoFutbol.jugar();
  console.log('✓ Partido de fútbol jugado exitosamente');
} catch (error) {
  console.log(`X Error en partido de fútbol: ${error}`);
}

try {
  partidoBasquet.jugar();
  console.log('✓ Partido de básquet jugado exitosamente');
} catch (error) {
  console.log(`X Error en partido de básquet: ${error}`);
}


// 7. MOSTRAR RESULTADOS DE PARTIDOS

console.log('\n\n7. RESULTADOS DE PARTIDOS');

console.log('\n--- Resultados finales ---');
console.log(partidoFutbol.toString());
console.log(partidoBasquet.toString());


// 8. DEMOSTRAR VALIDACIÓN AUTOMÁTICA EN PARTIDOS

console.log('\n\n8. VALIDACIÓN AUTOMÁTICA EN PARTIDOS');

console.log('\nIntentando crear partido con equipo que excede el límite:');

try {
  const partidoInvalido = new Partido(3, equipoFutbolExcedido, equipoFutbol1, futbol);
  partidoInvalido.jugar();
  console.log('✓ Partido jugado (no debería llegar aquí)');
} catch (error) {
  console.log(`X Error esperado: ${error}`);
}

try {
  const partidoInvalidoBasquet = new Partido(4, equipoBasquetExcedido, equipoBasquet1, basquet);
  partidoInvalidoBasquet.jugar();
  console.log('✓ Partido jugado (no debería llegar aquí)');
} catch (error) {
  console.log(`X Error esperado: ${error}`);
}


// 9. MOSTRAR INTEGRANTES DE EQUIPOS

console.log('\n\n9. INTEGRANTES DE EQUIPOS');

console.log(`\n--- Integrantes de ${equipoFutbol1.nombre} ---`);
equipoFutbol1.listarIntegrantes().forEach(integrante => console.log(`  ${integrante}`));

console.log(`\n--- Integrantes de ${equipoBasquet1.nombre} ---`);
equipoBasquet1.listarIntegrantes().forEach(integrante => console.log(`  ${integrante}`));


// 10. RESUMEN FINAL

console.log('\n RESUMEN DE FUNCIONALIDADES DEMOSTRADAS');

console.log('- Creación de jugadores con diferentes datos');
console.log('- Creación de equipos de fútbol (máximo 11 jugadores)');
console.log('- Creación de equipos de básquet (máximo 5 jugadores)');
console.log('- Validación de cupos por deporte');
console.log('- Demostración de casos que exceden los cupos permitidos');
console.log('- Polimorfismo del método validar() según el tipo de deporte');
console.log('- Creación y simulación de partidos');
console.log('- Validación automática de equipos al jugar partidos');
console.log('- Mostrar resultados de partidos jugados');
console.log('- Uso de métodos toString() para presentar información');
console.log('- Manejo de errores y validaciones');