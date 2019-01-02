import renderer from 'react-test-renderer';
import MultiSelect from '../components/MultiSelect';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig';

describe('<MultiSelect />', function(){

    it('Should render correctly', function() {

        const component = renderer.create(<MultiSelect />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

    it('Should have the correct label', function() {

        const component = shallow(<MultiSelect label="hello world"/>);
        expect(component.find('label').text()).toEqual('hello world');

    })

    it('Should have one <select>', function() {

        const component = shallow(<MultiSelect />);
        expect(component.find('select').length).toBe(1);

    })

})