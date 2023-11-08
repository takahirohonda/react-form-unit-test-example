import { TextInput } from './components/TextInput'

export const Form = () => {
  return (
    <form>
      <div className="flex flex-col gap-16px">
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
