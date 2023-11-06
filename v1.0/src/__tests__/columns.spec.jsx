import renderer from 'react-test-renderer'
import React from 'react'
import { shallow } from 'enzyme'
import Column from '../components/Column'

describe('<Column />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Column />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have the correct class name', () => {
    const component = shallow(<Column className="col-md-6" />)
    expect(component.find('div').hasClass('col-md-6')).toBe(true)
  })
})
