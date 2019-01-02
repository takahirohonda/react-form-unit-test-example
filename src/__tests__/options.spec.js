import renderer from 'react-test-renderer';
import Options from '../components/options';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

const options = ['English', 'Spanish', 'German', 'French'];
describe('<Options />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<Options options={options}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct number of option tags', function(){
        const component = mount(<Options options={options} />);
        expect(component.find('option').length).toEqual(4);
    });

    it('should render the correct option names', function() {
        let languages = '';
        const expected = 'EnglishSpanishGermanFrench';
        const component = mount(<Options options={options} />);
        let optionArray = component.find('option');

        optionArray.forEach((item) => {
            languages += item.text();
        })
        expect(languages).toEqual(expected);
    });
})