import { UseFormRegister } from 'react-hook-form'

import { FormValues } from '../../Form.types'

export interface TextInputProps {
  label: string
  name: keyof FormValues
  hasError?: boolean
}

export interface TextInputWithRegister extends TextInputProps {
  register: UseFormRegister<FormValues>
}

export interface TextInputRefProps {
  label: string
}
