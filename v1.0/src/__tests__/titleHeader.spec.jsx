import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import TitleHeader from '../components/TitleHeader'

describe('<TitleHeader />', () => {
  it('should render correctly', () => {
    const title = 'Hello World'
    const component = renderer.create(<TitleHeader title={title} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have the correct title prop', () => {
    const title = 'New Title'
    const component = mount(<TitleHeader title={title} />)
    expect(component.find('h1').text()).toEqual('New Title')
  })
})
