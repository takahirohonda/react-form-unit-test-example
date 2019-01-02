import renderer from 'react-test-renderer';
import Row from '../components/Row';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Row />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<Row/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have <div> with row class', function(){
        const component = mount(<Row />);
        expect(component.find('div').hasClass('row')).toBe(true);
    });
})