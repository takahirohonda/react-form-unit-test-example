import renderer from 'react-test-renderer'
import React from 'react'
import { shallow } from 'enzyme'
import CheckBox from '../components/Checkbox'

describe('<Checkbox />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<CheckBox />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a single label tag', () => {
    const component = shallow(<CheckBox />)
    expect(component.find('label').length).toBe(1)
  })

  it('should have a single input tag', () => {
    const component = shallow(<CheckBox />)
    expect(component.find('input').length).toBe(1)
  })

  it('should have the correct checkbox label', () => {
    const label = 'label'
    const component = shallow(<CheckBox label={label} />)
    expect(component.find('label').text()).toEqual(label)
  })

  it('should call changeHandler once onChange', () => {
    const mockHandler = jest.fn()
    const component = shallow(<CheckBox handleChange={mockHandler} />)
    const input = component.find('input').at(0)
    input.checked = true
    input.simulate('change')
    expect(mockHandler.mock.calls.length).toBe(1)
  })
})
