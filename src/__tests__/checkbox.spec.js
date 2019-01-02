import renderer from 'react-test-renderer';
import CheckBox from '../components/Checkbox';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Checkbox />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<CheckBox />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct checkbox label', function(){
        var label = "label";
        const component = mount(<CheckBox label={label}/>);
        expect(component.find('label').text()).toEqual(label);
    });
})