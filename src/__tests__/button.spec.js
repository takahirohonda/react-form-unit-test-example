import renderer from 'react-test-renderer';
import Button from '../components/Button';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Button />', function () {

    it('Should render correctly', function () {
        const component = renderer.create(<Button />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have single <a> when href prop exists', function () {
        const component = shallow(<Button href="check.com"/>);
        expect(component.find('a').length).toBe(1);
    });

    it('Should have single <button> when href prop exists', function () {
        const component = shallow(<Button />);
        expect(component.find('button').length).toBe(1);
    });

})