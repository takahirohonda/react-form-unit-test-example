interface TextInputProps {
  label: string
  name: string
}

export const TextInput = ({ label, name }: TextInputProps) => (
  <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} />
  </div>
)
