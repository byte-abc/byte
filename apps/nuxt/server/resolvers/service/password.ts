import bcrypt from 'bcrypt'
import {passwordHashSaltRounds} from './env'
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, passwordHashSaltRounds())
}

export const comparePassword = async (password: string) => {
  const hash = await bcrypt.hash(password, passwordHashSaltRounds())
  return bcrypt.compare(password, hash)
}
