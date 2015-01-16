//write a program that can encrypt texts with an alphabetical caesar cipher.
//This cipher can ignore numbers, symbols, and whitespace.

module Utility {
    export function IsRepeat(): boolean {
        return confirm("Repeat?");
    }

    export class Constants {
        public static get CIPHER_KEY(): number { return 1; }
        public static get STRING_NO_VALUE(): string { return ""; }
    }
}

interface Failable {
    hasOperationFailed: boolean;
}

interface Encoder extends Failable {
    encode(msg: string): string;
}

class CeaserCipher implements Encoder {
    private validChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private cipherLen: number = this.validChars.length;
    private cipherKey: number;

    public hasOperationFailed: boolean;

    constructor(cipherKey: number) {
        this.cipherKey = cipherKey;
        this.hasOperationFailed = false;
    }

    private cleanUpInput(msg: string): string {
        msg = msg.replace(" ", "");
        msg = msg.toUpperCase();
        return msg;
    }

    private isValid(msg: string): boolean {
        if (msg.trim() == "")
            return false;

        var isAllLetters: boolean = /[A-Z]/.test(msg);

        if (!isAllLetters)
            return false;

        return true;
    }

    private encodeChar(char: string): string {
        var index = this.validChars.indexOf(char);
        var newIndex = (index + this.cipherKey) % this.cipherLen;
        return this.validChars[newIndex];
    }

    public encode(msg: string): string {
        msg = this.cleanUpInput(msg);

        if (!this.isValid(msg)) {
            this.hasOperationFailed = true;
            return Utility.Constants.STRING_NO_VALUE;
        }

        var result: string = "";

        for (var i: number = 0; i < msg.length; i++) {
            result += this.encodeChar(msg[i]);
        }

        return result;
    }
}

function PromptToEncodeAndDisplayResults(): void {
    var msg = prompt("Message to encode");

    var myEncoder: Encoder, result: string;
    myEncoder = new CeaserCipher(Utility.Constants.CIPHER_KEY);
    result = myEncoder.encode(msg);

    if (myEncoder.hasOperationFailed)
        alert("Invalid input!")
    else
        alert(result);
}

window.onload = () => {
    do {
        PromptToEncodeAndDisplayResults();
    }
    while (Utility.IsRepeat());
};