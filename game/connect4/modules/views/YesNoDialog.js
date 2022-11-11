import { console } from '../utils/console.js';

export class YesNoDialog {

    static #AFFIRMATIVE = `y`;
    static #NEGATIVE = `n`;
    static #SUFFIX = `? (` +
        YesNoDialog.#AFFIRMATIVE + `/` +
        YesNoDialog.#NEGATIVE + `): `;
    static #MESSAGE = `The value must be ${YesNoDialog.#AFFIRMATIVE} or ${YesNoDialog.#NEGATIVE}`;
    #answer;

    read(message) {
        let ok;
        do {
            console.write(message);
            this.#answer = console.readString(YesNoDialog.#SUFFIX);
            ok = this.isAffirmative() || this.isNegative();
            if (!ok) {
                console.writeln(YesNoDialog.#MESSAGE);
            }
        } while (!ok);
    }

    isAffirmative() {
        return this.getAnswer() === YesNoDialog.#AFFIRMATIVE;
    }

    isNegative() {
        return this.getAnswer() === YesNoDialog.#NEGATIVE;
    }

    getAnswer() {
        return this.#answer.toLowerCase()[0];
    }
}
