import renderer from 'react-test-renderer'
import React from 'react'
import { shallow } from 'enzyme'
import Button from '../components/Button'

describe('<Button />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Button />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should have single <a> when href prop exists', () => {
    const component = shallow(<Button href="check.com" />)
    expect(component.find('a').length).toBe(1)
  })

  it('Should have single <button> when href prop exists', () => {
    const component = shallow(<Button />)
    expect(component.find('button').length).toBe(1)
  })
})
