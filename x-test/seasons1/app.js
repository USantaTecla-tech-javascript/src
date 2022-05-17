const { Console } = require('console-mpds');
const console = new Console();

const day = console.readNumber('Escriba un día (1-30):');
const month = console.readNumber('Escriba un mes (1-12):');
const year = console.readNumber('Escriba un año (1-...):');

const DAYS_PER_MONTH = 30;
const DAYS_PER_YEAR = 12 * DAYS_PER_MONTH;
const MONTHS_PER_SEASON = 3;
const DAYS_PER_SEASON = MONTHS_PER_SEASON * DAYS_PER_MONTH;
const OFFSET_DAYS = 21 + 2 * DAYS_PER_MONTH;

const dayOfYear = DAYS_PER_MONTH * (month - 1) + day;
let dayOfSolarYear = dayOfYear - OFFSET_DAYS + 1;
if (dayOfSolarYear < 1) {
  dayOfSolarYear = dayOfYear - OFFSET_DAYS + DAYS_PER_YEAR;
}

let iPeriods = (dayOfSolarYear - dayOfSolarYear % DAYS_PER_MONTH) / DAYS_PER_MONTH;
let iSeasons = ((dayOfSolarYear - 1) - (dayOfSolarYear - 1) % DAYS_PER_SEASON) / DAYS_PER_SEASON;

const PERIODS = ["a primeros", "a mediados", "a finales"];
const SEASONS = ["primavera", "verano", "otoño", "invierno"];
console.writeln(`El día ${day} del ${month} de ${year} cae ${PERIODS[iPeriods % MONTHS_PER_SEASON]} de ${SEASONS[iSeasons]}.`);

// Considerar todos los meses de 30 días
// Las estaciones comienzan: invierno el 21/12; primavera el 21/3; verano el 21/6; otoño el 21/9
// Considerar: "a primeros" los 30 primeros días de la estación; "a mediados" los siguientes 30 días de la estación; "a finales" los últimos 30 días de la estación

// Escriba un día (1-30):  29
// Escriba un mes (1-12):  1
// Escriba un año (1-...):  2022
// El día 29 del 1 de 2022 cae a mediados de invierno.