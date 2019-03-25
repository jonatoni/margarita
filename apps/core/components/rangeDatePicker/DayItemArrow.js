// @flow

import * as React from 'react';
import { Animated, Easing, View } from 'react-native';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +style?: StylePropType,
|};

type State = {|
  scale: Animated.Value,
|};

const scaleAnimationDuration =
  parseFloat(defaultTokens.durationSlow) * 2 * 1000;

const SHARED_ANIMATION_CONFIG = {
  duration: scaleAnimationDuration,
  useNativeDriver: true,
  easing: Easing.ease,
};

export default class DayItemArrow extends React.Component<Props, State> {
  static animating: boolean;
  state = {
    scale: new Animated.Value(0),
  };

  componentDidMount() {
    DayItemArrow.animating = true;
    this.handleAnimation();
  }

  componentWillUnmount() {
    DayItemArrow.animating = false;
  }

  handleAnimation() {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        ...SHARED_ANIMATION_CONFIG,
        toValue: 1.0,
      }),
      Animated.timing(this.state.scale, {
        ...SHARED_ANIMATION_CONFIG,
        toValue: 0,
      }),
    ]).start(() => {
      if (DayItemArrow.animating) {
        this.handleAnimation();
      }
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Animated.View
          style={[
            styles.easingArrow,
            {
              transform: [{ scale: this.state.scale }],
            },
          ]}
        />
        <View style={[styles.innerArrow]} />
      </View>
    );
  }
}

const innerArrowSize = 8;
const easingArrowSize = 20;
const innerArrowMargin = (easingArrowSize - innerArrowSize) / 2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    zIndex: -1,
  },
  easingArrow: {
    backgroundColor: margaritaTokens.backgroundDayItemEasingArrow,
    width: easingArrowSize,
    height: easingArrowSize,
    position: 'absolute',
  },
  innerArrow: {
    backgroundColor: margaritaTokens.borderColorCalendarItem,
    width: innerArrowSize,
    height: innerArrowSize,
    position: 'absolute',
    marginStart: innerArrowMargin,
    marginTop: innerArrowMargin,
  },
});
