import React, { ComponentType } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { iconRegistry } from 'asset/icons';

export type IconTypes = keyof typeof iconRegistry;

export interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes | React.JSX.Element;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  imageStyle?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon image
   */
  svgStyle?: React.SVGProps<SVGSVGElement>;

  /**
   * Style overrides for the icon container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 */
export const Icon = (props: IconProps) => {
  const {
    icon,
    color,
    size,
    imageStyle: imageStyleOverride,
    svgStyle: svgStyleOverride,
    style: containerStyleOverride,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper = (isPressable ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >;

  const imageStyle: IconProps['imageStyle'] = [
    styles.imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    imageStyleOverride,
  ];

  const svgStyle: React.SVGProps<SVGSVGElement> = {
    ...(color !== undefined && { fill: color, color: color }),
    ...(size !== undefined && { width: size, height: size }),
    ...svgStyleOverride,
  };

  const getIconComponent = (icon: IconTypes | React.JSX.Element) => {
    if (typeof icon === 'string') {
      return (
        <Image
          testID="icon-image"
          style={imageStyle}
          source={iconRegistry[icon]}
        />
      );
    } else if (React.isValidElement(icon)) {
      return React.cloneElement(
        icon as React.ReactElement<
          React.SVGProps<SVGSVGElement> & { testID?: string }
        >,
        { ...svgStyle, testID: 'svg-icon' },
      );
    } else {
      return <></>;
    }
  };

  return (
    <Wrapper
      testID={isPressable ? 'icon-touchable' : 'icon-view'}
      {...WrapperProps}
      style={containerStyleOverride}>
      {getIconComponent(icon)}
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  imageStyleBase: {
    resizeMode: 'contain',
  } as ImageStyle,
});
