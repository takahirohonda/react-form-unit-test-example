import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Container from '../components/Container'

describe('<Container />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have <div> with container class', () => {
    const component = mount(<Container />)
    expect(component.find('div').hasClass('container')).toBe(true)
  })
})
