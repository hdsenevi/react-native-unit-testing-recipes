import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

let mockOpenURL = jest.fn();
jest.mock('Linking', () => ({
    openURL: mockOpenURL,
}));

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Button label="test label" primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Button label="test label" primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });

    describe('Interaction', () => {
        describe('onPressHandler', () => {
            const mockOnPress = jest.fn();
            let instance;

            beforeEach(() => {
                instance = shallow(<Button 
                    label="test label" 
                    onPress={mockOnPress}
                    url="https://www.test.com"
                />).instance();
                jest.clearAllMocks();
            });

            it('should call onPress', () => {
                instance.onPressHandler();
                expect(mockOnPress).toHaveBeenCalled();
                expect(mockOnPress).toHaveBeenCalledTimes(1);
            });
            
            it('should call openURL if url is provided', () => {
                instance.onPressHandler();
                expect(mockOpenURL).toHaveBeenCalled();
                expect(mockOpenURL).toHaveBeenCalledTimes(1);
                expect(mockOpenURL).toHaveBeenCalledWith("https://www.test.com");
            });

            it('should not call openURL if url is nor provided', () => {
                const innerInstance = shallow(<Button label="test label" onPress={mockOnPress} />).instance();
                innerInstance.onPressHandler();
                expect(mockOpenURL).not.toHaveBeenCalled();
            });
        });
    });
});
