import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Row from '../components/Row'

describe('<Row />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Row />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have <div> with row class', () => {
    const component = mount(<Row />)
    expect(component.find('div').hasClass('row')).toBe(true)
  })
})
