const { Console } = require("./console");

const console = new Console();
function getUrl(protocol, domain) {
    return (_path, _resource) => `${protocol}://${domain}/${_path}/${_resource}`;
}

getUrl = curry(getUrl);
getHttpUrl = getUrl(`http`, `www.usantecla.com`);
console.writeln(getHttpUrl(`manager-countries`, `index.php`));
console.writeln(getHttpUrl(`game-ticTacToe`, `NewGame.jsp`));