import { object, string } from 'zod'

export const formValidationSchema = object({
  firstName: string().min(1),
  lastName: string().min(1),
})
