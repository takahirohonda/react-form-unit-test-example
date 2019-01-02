import renderer from 'react-test-renderer';
import Column from '../components/Column';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Column />', function() {
    
    it('should render correctly', function() {
        const component = renderer.create(<Column/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct class name', function () {

        const component = shallow(<Column className="col-md-6" />);
        expect(component.find('div').hasClass('col-md-6')).toBe(true);
    })
})