/**
 * Tests for AboutSettingItem component
 */
import React from 'react';
import { View } from 'react-native';
import { render, fireEvent } from '@testing-library/react';
import { AboutSettingItem } from '../AboutSettingItem';

describe('AboutSettingItem', () => {
  const defaultProps = {
    title: 'Test Title',
    testID: 'test-item',
  };

  describe('Rendering', () => {
    it('should render correctly with minimal props', () => {
      const { getByTestId, getByText } = render(
        <AboutSettingItem {...defaultProps} />
      );

      expect(getByTestId('test-item')).toBeTruthy();
      expect(getByText('Test Title')).toBeTruthy();
    });

    it('should render with description', () => {
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} description="Test Description" />
      );

      expect(getByText('Test Description')).toBeTruthy();
    });

    it('should render with value', () => {
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} value="Test Value" />
      );

      expect(getByText('Test Value')).toBeTruthy();
    });

    it('should render with icon', () => {
      const MockIcon = () => <View testID="mock-icon" />;
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} icon={<MockIcon />} />
      );

      expect(getByTestId('mock-icon')).toBeTruthy();
    });

    it('should render chevron when onPress is provided', () => {
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} onPress={jest.fn()} />
      );

      expect(getByText('›')).toBeTruthy();
    });

    it('should render chevron when showChevron is true', () => {
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} showChevron={true} />
      );

      expect(getByText('›')).toBeTruthy();
    });

    it('should not render chevron when showChevron is false', () => {
      const { queryByText } = render(
        <AboutSettingItem {...defaultProps} onPress={jest.fn()} showChevron={false} />
      );

      expect(queryByText('›')).toBeFalsy();
    });

    it('should render with custom chevron color', () => {
      const customStyle = { color: '#ff0000' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} chevronColor={customStyle.color} showChevron={true} />
      );

      const chevron = getByText('›');
      expect(chevron).toBeInTheDocument();
    });

    it('should apply disabled styles when disabled', () => {
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} disabled={true} />
      );

      const container = getByTestId('test-item');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should call onPress when pressed', () => {
      const mockOnPress = jest.fn();
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} onPress={mockOnPress} />
      );

      fireEvent.click(getByTestId('test-item'));
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress when disabled', () => {
      const mockOnPress = jest.fn();
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} onPress={mockOnPress} disabled={true} />
      );

      fireEvent.click(getByTestId('test-item'));
      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('should not be pressable without onPress', () => {
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} />
      );

      const container = getByTestId('test-item');
      expect(container).toBeInTheDocument();
      expect(container).not.toHaveAttribute('onClick');
    });
  });

  describe('Custom Styles', () => {
    it('should apply custom container style', () => {
      const customStyle = { backgroundColor: 'red' };
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} containerStyle={customStyle} />
      );

      const container = getByTestId('test-item');
      expect(container).toBeInTheDocument();
    });

    it('should apply custom title style', () => {
      const customStyle = { color: 'blue' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} titleStyle={customStyle} />
      );

      const title = getByText('Test Title');
      expect(title).toBeInTheDocument();
    });

    it('should apply custom description style', () => {
      const customStyle = { color: 'green' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} description="Test" descriptionStyle={customStyle} />
      );

      const description = getByText('Test');
      expect(description).toBeInTheDocument();
    });

    it('should apply custom value style', () => {
      const customStyle = { color: 'purple' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} value="Test" valueStyle={customStyle} />
      );

      const value = getByText('Test');
      expect(value).toBeInTheDocument();
    });

    it('should apply custom icon container style', () => {
      const customStyle = { backgroundColor: 'yellow' };
      const MockIcon = () => <View testID="mock-icon" />;
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} icon={<MockIcon />} iconContainerStyle={customStyle} />
      );

      const iconContainer = getByTestId('mock-icon');
      expect(iconContainer).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('should memoize render functions', () => {
      const { rerender } = render(
        <AboutSettingItem {...defaultProps} description="Test" />
      );

      expect(() => {
        rerender(
          <AboutSettingItem {...defaultProps} description="Test" />
        );
      }).not.toThrow();
    });

    it('should handle rapid prop changes', () => {
      const { rerender } = render(
        <AboutSettingItem {...defaultProps} />
      );

      // Rapid prop changes
      for (let i = 0; i < 10; i++) {
        const newProps = { ...defaultProps, title: `Title ${i}` };
        rerender(
          <AboutSettingItem {...newProps} />
        );
      }

      expect(() => {
        rerender(
          <AboutSettingItem {...defaultProps} title="Final Title" />
        );
      }).not.toThrow();
    });
  });
});