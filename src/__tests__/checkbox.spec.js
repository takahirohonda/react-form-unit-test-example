import renderer from 'react-test-renderer';
import CheckBox from '../components/Checkbox';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Checkbox />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<CheckBox />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have a single label tag', function() {
        const component = shallow(<CheckBox />);
        expect(component.find('label').length).toBe(1);
    });

    it('should have a single input tag', function(){
        const component = shallow(<CheckBox />);
        expect(component.find('input').length).toBe(1);
    })

    it('should have the correct checkbox label', function(){
        var label = "label";
        const component = shallow(<CheckBox label={label}/>);
        expect(component.find('label').text()).toEqual(label);
    });

    it('should call changeHandler once onChange', function(){
        const mockHandler = jest.fn();
        const component = shallow(<CheckBox handleChange={mockHandler}/>);
        const input = component.find('input').at(0);
        input.checked = true;
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);

    });
})