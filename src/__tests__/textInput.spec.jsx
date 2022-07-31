import renderer from 'react-test-renderer'
import React from 'react'
import { shallow } from 'enzyme'
import TextInput from '../components/TextInput'

describe('<TextInput />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<TextInput />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should have <div> with correct class name', () => {
    const component = shallow(<TextInput />)
    expect(component.find('div').hasClass('form-group')).toBe(true)
  })

  it('Should have <label> with default label title', () => {
    const component = shallow(<TextInput />)
    expect(component.find('label').text()).toEqual('Text Input')
  })

  it('Should call changeHandler onChange on input', () => {
    const mockHandler = jest.fn()
    const component = shallow(<TextInput handleChange={mockHandler} />)
    const input = component.find('input')
    input.simulate('change')
    expect(mockHandler.mock.calls.length).toBe(1)
  })
})
