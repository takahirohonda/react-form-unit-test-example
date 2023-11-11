import { forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'

import {
  TextInputProps,
  TextInputRefProps,
  TextInputWithRegister,
} from './TextInput.types'

export const TextInput = ({ label, name }: TextInputProps) => (
  <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} />
  </div>
)

export const TextInputHookForm = ({
  name,
  label,
  register,
}: TextInputWithRegister) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-blue-800">
      {label}
    </label>
    <input
      {...register(name)}
      id={name}
      className="border border-gray-300 rounded"
    />
  </div>
)

// https://react-hook-form.com/get-started use React.forwardRef example. This doesn't work.
export const TextInputWithRef = forwardRef<
  HTMLInputElement,
  TextInputRefProps & ReturnType<UseFormRegister<TextInputRefProps>>
>(({ label }, ref) => (
  <div className="flex flex-col">
    <label htmlFor={label}>{label}</label>
    <input id={label} ref={ref} />
  </div>
))
