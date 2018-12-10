import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
})

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Button label="test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});
