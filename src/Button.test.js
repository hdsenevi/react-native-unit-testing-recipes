import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

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
            it('should call onPress', () => {
                // Arrange
                const mockOnPress = jest.fn();      // 1. mock function
                const component = shallow(<Button 
                    label= "test label" 
                    onPress={mockOnPress}           // 2. passing in mock function as props
                />);
                const instance = component.instance();  // 3. getting an instance of component

                // Act
                instance.onPressHandler();          // 4. manually triggering onPressHandler()

                // Assert
                expect(mockOnPress).toHaveBeenCalled();
                expect(mockOnPress).toHaveBeenCalledTimes(1);   // 5. checking return values
            });
        });
    });
});
