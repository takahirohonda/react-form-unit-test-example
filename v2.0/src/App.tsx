import { Form } from './components/Form/Form'
import { Header } from './components/Header'

export const App = () => (
  <div className="container mx-auto mt-8">
    {/* gap not working  */}
    <div className="mx-16px flex flex-col gap-8">
      <Header />
      <div className="md:max-w-md">
        <Form />
      </div>
    </div>
  </div>
)
