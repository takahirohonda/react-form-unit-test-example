import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextInputHookForm } from './components/TextInput/TextInput'
import { FormValues } from './Form.types'
import { formValidationSchema } from './formValidationSchema'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formValidationSchema),
  })

  const onSubmit = useCallback((values: FormValues) => {
    console.log(`Form values: ${JSON.stringify(values)}`)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-16px">
        <div className="flex flex-col gap-2">
          <TextInputHookForm
            register={register}
            name="firstName"
            label="First Name"
            hasError={!!errors.firstName}
          />
          {errors.firstName && (
            <span className="text-red-500">First name is required.</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <TextInputHookForm
            register={register}
            name="lastName"
            label="Last Name"
            hasError={!!errors.lastName}
          />
          {errors.lastName && (
            <span className="text-red-500">Last name is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
