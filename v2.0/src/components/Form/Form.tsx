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
        <TextInputHookForm
          register={register}
          name="firstName"
          label="First Name"
        />
        {errors.firstName && <p>First name is required.</p>}
        <TextInputHookForm
          register={register}
          name="lastName"
          label="Last Name"
        />
        {errors.lastName && <p>Last name is required</p>}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
