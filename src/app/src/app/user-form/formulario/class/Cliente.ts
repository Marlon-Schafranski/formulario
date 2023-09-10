export class Cliente {
    private _nome!: string
    private _email!: string
    private _button: boolean = false
    
    constructor() {}

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }

    public get button(): boolean {
        return this._button
    }
    public set button(value: boolean) {
        this._button = value
    }
}
