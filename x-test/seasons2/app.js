const { Console } = require("console-mpds");
const console = new Console();

const day = console.readNumber("Escriba un día (1-30): ");
const month = console.readNumber("Escriba un mes (1-12): ") - 1;
const year = console.readNumber("Escriba un año (1-...): ");

const DAYS_IN_SEASON_STAGE = 30;
const DAYS_IN_MONTH = 30;
const DAYS_IN_SEASON = 3 * DAYS_IN_MONTH;
const DAYS_IN_YEAR = DAYS_IN_MONTH * 12;
const SEASON_START_DAY = 21;
const DAYS_OFFSET = DAYS_IN_YEAR - (2 * DAYS_IN_MONTH + SEASON_START_DAY);

const dayOfYear = (month * DAYS_IN_MONTH + day + DAYS_OFFSET) % DAYS_IN_YEAR;

const season = dayOfYear / DAYS_IN_SEASON;
const seasonIndex = season - (season % 1);

const seasonStage = (dayOfYear % DAYS_IN_SEASON) / DAYS_IN_SEASON_STAGE;
const seasonStageIndex = seasonStage - (seasonStage % 1);

const SEASONS = ["primavera", "verano", "otoño", "invierno"];
const SEASON_STAGES = ["principios", "mediados", "finales"];
console.writeln(`El día ${day} del ${month + 1} de ${year} \
cae a ${SEASON_STAGES[seasonStageIndex]} de ${SEASONS[seasonIndex]}.`);