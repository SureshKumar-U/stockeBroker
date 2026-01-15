export class AppError extends Error {
  status: number;
  constructor(message: string, statusCode = 500) {
    super(message);
    this.status = statusCode;
  }
}
