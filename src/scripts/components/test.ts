export class Test {
    private _alert: string;

    constructor() {
        this._alert = 'test';

        this.init();
    }

    private init() {
        window.alert(this._alert);
    }
}
