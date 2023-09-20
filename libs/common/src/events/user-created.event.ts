export class UserCreatedEvent {
    constructor(
        public readonly login: string,
        public readonly password: string
    ) {}

    toString() {
        return JSON.stringify({
            login: this.login,
            password: this.password
        })
    }
}