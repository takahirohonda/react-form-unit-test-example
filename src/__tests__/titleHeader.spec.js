import renderer from 'react-test-renderer';
import TitleHeader from '../components/TitleHeader';
import React from 'react';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<TitleHeader />', function(){

    it('should render correctly', function(){
        var title = "Hello World";
        const component = renderer.create(<TitleHeader title={title}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct title prop', function(){
        var title = "New Title";
        const component = mount(<TitleHeader title={title} />);
        expect(component.find('h1').text()).toEqual('New Title');
    });
})