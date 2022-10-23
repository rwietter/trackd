
class InvalidToken extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidToken";
  }

  get() { 
    return {
      response: {
        data: {
          ok: false,
          message: this.message,
          name: this.name
        }
      }
    }
  }
}

export { InvalidToken };