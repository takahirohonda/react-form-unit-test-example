import { Form } from './components/Form/Form'
import { Header } from './components/Header'

export const App = () => (
  <div className="container mx-auto">
    <div className="mx-16px">
      <Header />
      <div className="md:max-w-md">
        <Form />
      </div>
    </div>
  </div>
)
