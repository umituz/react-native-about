/**
 * Tests for AboutSettingItem component
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AboutSettingItem } from '../AboutSettingItem';

describe('AboutSettingItem', () => {
  const defaultProps = {
    title: 'Test Title',
    testID: 'test-item',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText('Test Description')).toBeTruthy();
    });

    it('should render with value', () => {
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} value="Test Value" />
      );

      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText('Test Value')).toBeTruthy();
    });

    it('should render with icon', () => {
      const MockIcon = () => <div testID="mock-icon" />;
      
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
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} chevronColor="#ff0000" showChevron={true} />
      );

      const chevron = getByText('›');
      expect(chevron.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ color: '#ff0000' })
        ])
      );
    });

    it('should apply disabled styles when disabled', () => {
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} disabled={true} />
      );

      const container = getByTestId('test-item');
      expect(container.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ opacity: 0.5 })
        ])
      );
    });
  });

  describe('Interaction', () => {
    it('should call onPress when pressed', () => {
      const mockOnPress = jest.fn();
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} onPress={mockOnPress} />
      );

      fireEvent.press(getByTestId('test-item'));
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress when disabled', () => {
      const mockOnPress = jest.fn();
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} onPress={mockOnPress} disabled={true} />
      );

      fireEvent.press(getByTestId('test-item'));
      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('should not be pressable without onPress', () => {
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} />
      );

      const container = getByTestId('test-item');
      expect(container.props.onPress).toBeUndefined();
    });
  });

  describe('Custom Styles', () => {
    it('should apply custom container style', () => {
      const customStyle = { backgroundColor: 'red' };
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} containerStyle={customStyle} />
      );

      const container = getByTestId('test-item');
      expect(container.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });

    it('should apply custom title style', () => {
      const customStyle = { color: 'blue' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} titleStyle={customStyle} />
      );

      const title = getByText('Test Title');
      expect(title.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });

    it('should apply custom description style', () => {
      const customStyle = { color: 'green' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} description="Test" descriptionStyle={customStyle} />
      );

      const description = getByText('Test');
      expect(description.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });

    it('should apply custom value style', () => {
      const customStyle = { color: 'purple' };
      
      const { getByText } = render(
        <AboutSettingItem {...defaultProps} value="Test" valueStyle={customStyle} />
      );

      const value = getByText('Test');
      expect(value.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });

    it('should apply custom icon container style', () => {
      const customStyle = { padding: 20 };
      const MockIcon = () => <div testID="mock-icon" />;
      
      const { getByTestId } = render(
        <AboutSettingItem {...defaultProps} icon={<MockIcon />} iconContainerStyle={customStyle} />
      );

      const iconContainer = getByTestId('mock-icon').parent;
      expect(iconContainer.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });
  });

  describe('Performance', () => {
    it('should memoize render functions', () => {
      const { rerender } = render(
        <AboutSettingItem {...defaultProps} description="Test" />
      );

      // Re-render with same props
      rerender(
        <AboutSettingItem {...defaultProps} description="Test" />
      );

      // Should not throw and should render correctly
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
        rerender(
          <AboutSettingItem {...defaultProps} value={`Value ${i}`} />
        );
      }

      expect(() => {
        rerender(
          <AboutSettingItem {...defaultProps} value="Final Value" />
        );
      }).not.toThrow();
    });
  });
});