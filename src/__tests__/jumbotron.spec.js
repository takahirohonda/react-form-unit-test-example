import renderer from 'react-test-renderer';
import Jumbotron from '../components/Jumbotron';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Jumbotron />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<Jumbotron/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have <div> with container class', function(){
        const component = mount(<Jumbotron />);
        expect(component.find('div').hasClass('jumbotron')).toBe(true);
    });
})