export class NeverError extends Error {
  constructor(value: never) {
    super(`Unreacheble statement: ${value}`);
  }
}