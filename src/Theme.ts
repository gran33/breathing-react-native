import {ThemeManager, Colors, Typography} from 'react-native-ui-lib';

export function loadTheme() {
  Colors.loadColors({
    primaryColor: '#098b7b',
    secondaryColor: '#969cab',
    backgroundColor: '#f7f7f7',
  });

  Typography.loadTypographies({
    title: {fontSize: 42, fontWeight: '500'},
    titleSmall: {fontSize: 20, fontWeight: '500'},
    subTitle: {fontSize: 28, fontWeight: '500'},
    body: {fontSize: 17, fontWeight: '500'},
    bodySmall: {fontSize: 12, fontWeight: '400'},
    bodyMedium: {fontSize: 20, fontWeight: '400'},
  });

  ThemeManager.setComponentTheme('Card', {
    containerStyle: {
      shadowColor: Colors.primaryColor
    }
  });

  ThemeManager.setComponentTheme('Text', {
    color: Colors.primaryColor,
  });

  ThemeManager.setComponentTheme('Button', {
    backgroundColor: Colors.primaryColor,
  });

  ThemeManager.setComponentTheme('Switch', props => {
    return {
      onColor: Colors.primaryColor,
      offColor: Colors.secondaryColor,
      width: 51,
      height: 28,
      thumbSize: 20,
      thumbStyle: props.value ? {right: 3} : {left: 3}
    };
  });

  ThemeManager.setComponentTheme('TextField', {
    floatingPlaceholder: true,
    underlineColor: {focus: Colors.primaryColor},
    floatingPlaceholderColor: Colors.primaryColor,
    color: Colors.primaryColor,
    style: {fontWeight: '500'}
  });
}
