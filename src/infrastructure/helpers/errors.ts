export class ServerError extends Error {
    constructor(stack?: string) {
        super('Error en el servidor');
        this.name = 'ServerError'
        this.stack = stack
    }
}

export class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized Error');
        this.name = 'UnauthorizedError'
    }
}

export class EmailInUseError extends Error {
    constructor() {
        super('El email ya esta en uso');
        this.name = 'EmailInUseError'
    }
}
