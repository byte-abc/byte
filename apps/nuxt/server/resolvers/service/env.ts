const DEFAULT_PASSWORD_HASH_SALT_ROUNDS = 10
export const passwordHashSaltRounds = () =>
  Number(process.env.PASSWORD_HASH_SALT_ROUNDS) || DEFAULT_PASSWORD_HASH_SALT_ROUNDS
export const jwtSecret = () => process.env.JWT_SECRET || 'secret'
