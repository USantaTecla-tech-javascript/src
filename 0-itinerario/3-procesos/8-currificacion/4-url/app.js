const { Console } = require("./console");

const console = new Console();
console.writeln(`http://www.usantecla.com/game-ticTacToe/game/3/board`);
console.writeln(`http://www.usantecla.com/game-ticTacToe/game/0/board`);
console.writeln(`ftp://www.upm.com/manager-task/data.log`);
console.writeln(`ftp://www.urjc.com/manager-task/data.log`);
console.writeln();

function getUrl(protocol, domain, path, resource) {
    return `${protocol}://${domain}/${path}/${resource}`;
}
console.writeln(getUrl(`http`, `www.usantecla.com`, `game-ticTacToe`, `game/3/board`));
console.writeln(getUrl(`http`, `www.usantecla.com`, `game-ticTacToe`, `game/0/board`));
console.writeln(getUrl(`ftp`, `www.upm.com`, `manager-task`, `data.log`));
console.writeln(getUrl(`ftp`, `www.urjc.com`, `manager-task`, `data.log`));
console.writeln();

const getUrlCurry = protocol => domain => path => resource => 
    `${protocol}://${domain}/${path}/${resource}`;

const getGameTicTacToeUrl = getUrlCurry(`http`)(`www.usantecla.com`)(`game-ticTacToe`);
console.writeln(getGameTicTacToeUrl(`game/3/board`));
console.writeln(getGameTicTacToeUrl(`game/0/board`));
const getFtp = getUrlCurry(`ftp`);
let getManagerTaskUrl;
getManagerTaskUrl = getFtp(`www.upm.com`)(`manager-task`);
console.writeln(getManagerTaskUrl(`data.log`));
getManagerTaskUrl = getFtp(`www.urjc.com`)(`manager-task`);
console.writeln(getManagerTaskUrl(`data.log`));
console.writeln();
