import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Jumbotron from '../components/Jumbotron'

describe('<Jumbotron />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Jumbotron />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have <div> with container class', () => {
    const component = mount(<Jumbotron />)
    expect(component.find('div').hasClass('jumbotron')).toBe(true)
  })
})
