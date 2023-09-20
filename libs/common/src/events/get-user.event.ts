export class GetUserEvent {
    constructor(
        public readonly login: string
    ) {}

    toString() {
        JSON.stringify({login: this.login})
    }
}