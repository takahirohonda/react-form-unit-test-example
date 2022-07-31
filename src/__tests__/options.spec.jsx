import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Options from '../components/Options'

const options = ['English', 'Spanish', 'German', 'French']
describe('<Options />', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Options options={options} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have the correct number of option tags', () => {
    const component = mount(<Options options={options} />)
    expect(component.find('option').length).toEqual(4)
  })

  it('should render the correct option names', () => {
    let languages = ''
    const expected = 'EnglishSpanishGermanFrench'
    const component = mount(<Options options={options} />)
    const optionArray = component.find('option')

    optionArray.forEach((item) => {
      languages += item.text()
    })
    expect(languages).toEqual(expected)
  })
})
