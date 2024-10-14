// types/Theme.ts
import { AuthModalConfig } from './types';

export type Theme = AuthModalConfig['theming'] & {
  fontFamily: string;
  borderRadius: string;
  boxShadow: string;
  // colors: {
  //   primary: string;
  //   secondary: string;
  //   accent: string;
  //   background: string;
  //   backgroundSecondary: string;
  //   text: string;
  //   textSecondary: string;
  //   success: string;
  //   error: string;
  //   warning: string;
  //   info: string;
  // };
  // typography: {
  //   fontFamily: string;
  //   fontSizes: {
  //     xs: string;
  //     sm: string;
  //     md: string;
  //     lg: string;
  //     xl: string;
  //     '2xl': string;
  //     '3xl': string;
  //   };
  //   fontWeights: {
  //     light: number;
  //     normal: number;
  //     medium: number;
  //     semibold: number;
  //     bold: number;
  //   };
  //   lineHeights: {
  //     tight: string;
  //     normal: string;
  //     relaxed: string;
  //   };
  // };
  // spacing: {
  //   xs: string;
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  // };
  // borderRadius: {
  //   none: string;
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   full: string;
  // };
  // boxShadow: {
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  // };
  // transitions: {
  //   fast: string;
  //   normal: string;
  //   slow: string;
  // };

  // // Component-specific theming
  // components: {
  //   // Layout Components
  //   container: {
  //     maxWidth: string;
  //     padding: string;
  //   };
  //   grid: {
  //     gap: string;
  //   };
  //   stack: {
  //     spacing: string;
  //   };

  //   // Typography
  //   heading: {
  //     fontWeight: number;
  //     lineHeight: string;
  //     marginBottom: string;
  //   };
  //   paragraph: {
  //     marginBottom: string;
  //   };
  //   link: {
  //     color: string;
  //     hoverColor: string;
  //   };

  //   // Form Elements
  //   input: {
  //     height: string;
  //     padding: string;
  //     borderColor: string;
  //     focusBorderColor: string;
  //     errorBorderColor: string;
  //     placeholderColor: string;
  //   };
  //   select: {
  //     height: string;
  //     padding: string;
  //   };
  //   checkbox: {
  //     size: string;
  //     borderColor: string;
  //     checkedColor: string;
  //   };
  //   radio: {
  //     size: string;
  //     borderColor: string;
  //     checkedColor: string;
  //   };
  //   switch: {
  //     width: string;
  //     height: string;
  //     toggleSize: string;
  //     onColor: string;
  //     offColor: string;
  //   };
  //   slider: {
  //     trackHeight: string;
  //     thumbSize: string;
  //     thumbColor: string;
  //   };
  //   datePicker: {
  //     width: string;
  //   };
  //   timePicker: {
  //     width: string;
  //   };
  //   fileUpload: {
  //     borderColor: string;
  //     hoverBorderColor: string;
  //   };

  //   // Buttons and Actions
  //   button: {
  //     height: string;
  //     padding: string;
  //     fontWeight: number;
  //     primaryBg: string;
  //     primaryText: string;
  //     secondaryBg: string;
  //     secondaryText: string;
  //     tertiaryBg: string;
  //     tertiaryText: string;
  //   };
  //   iconButton: {
  //     size: string;
  //   };
  //   buttonGroup: {
  //     spacing: string;
  //   };

  //   // Navigation
  //   navbar: {
  //     height: string;
  //     backgroundColor: string;
  //   };
  //   sidebar: {
  //     width: string;
  //     backgroundColor: string;
  //   };
  //   tabs: {
  //     borderColor: string;
  //     activeBorderColor: string;
  //   };
  //   breadcrumbs: {
  //     separator: string;
  //     separatorColor: string;
  //   };
  //   pagination: {
  //     activeColor: string;
  //     hoverColor: string;
  //   };
  //   menu: {
  //     backgroundColor: string;
  //     hoverBackgroundColor: string;
  //   };
  //   dropdown: {
  //     backgroundColor: string;
  //     borderColor: string;
  //   };

  //   // Data Display
  //   table: {
  //     borderColor: string;
  //     headerBackgroundColor: string;
  //     rowHoverBackgroundColor: string;
  //   };
  //   card: {
  //     backgroundColor: string;
  //     borderColor: string;
  //   };
  //   avatar: {
  //     sizes: {
  //       sm: string;
  //       md: string;
  //       lg: string;
  //     };
  //   };
  //   badge: {
  //     fontSize: string;
  //     padding: string;
  //   };
  //   tag: {
  //     backgroundColor: string;
  //     color: string;
  //   };
  //   tooltip: {
  //     backgroundColor: string;
  //     textColor: string;
  //   };
  //   progressBar: {
  //     height: string;
  //     backgroundColor: string;
  //     fillColor: string;
  //   };
  //   skeleton: {
  //     backgroundColor: string;
  //     highlightColor: string;
  //   };

  //   // Feedback and Alerts
  //   alert: {
  //     padding: string;
  //     borderRadius: string;
  //   };
  //   toast: {
  //     width: string;
  //   };
  //   modal: {
  //     backdropColor: string;
  //     backgroundColor: string;
  //     padding: string;
  //   };
  //   drawer: {
  //     width: string;
  //     backgroundColor: string;
  //   };
  //   popover: {
  //     backgroundColor: string;
  //     borderColor: string;
  //   };
  //   snackbar: {
  //     backgroundColor: string;
  //     textColor: string;
  //   };
  //   spinner: {
  //     size: string;
  //     color: string;
  //   };

  //   // Web3 Specific Components
  //   walletConnectButton: {
  //     backgroundColor: string;
  //     textColor: string;
  //   };
  //   addressDisplay: {
  //     backgroundColor: string;
  //     color: string;
  //   };
  //   tokenBalance: {
  //     fontSize: string;
  //   };
  //   transactionStatus: {
  //     pendingColor: string;
  //     successColor: string;
  //     failureColor: string;
  //   };
  //   networkSelector: {
  //     backgroundColor: string;
  //     activeBackgroundColor: string;
  //   };
  //   gasPriceIndicator: {
  //     lowColor: string;
  //     mediumColor: string;
  //     highColor: string;
  //   };
  //   nftDisplay: {
  //     backgroundColor: string;
  //   };

  //   // Animations and Transitions
  //   animation: {
  //     duration: string;
  //     easing: string;
  //   };

  //   // Utility Components
  //   accordion: {
  //     borderColor: string;
  //   };
  //   divider: {
  //     color: string;
  //     thickness: string;
  //   };
  //   scrollArea: {
  //     thumbColor: string;
  //     trackColor: string;
  //   };

  //   // Charts and Data Visualization
  //   chart: {
  //     backgroundColor: string;
  //     axisColor: string;
  //     gridColor: string;
  //     tooltipBackgroundColor: string;
  //     tooltipTextColor: string;
  //   };

  //   // Miscellaneous
  //   carousel: {
  //     indicatorColor: string;
  //     activeIndicatorColor: string;
  //   };
  //   stepper: {
  //     activeColor: string;
  //     completedColor: string;
  //     inactiveColor: string;
  //   };
  //   timeline: {
  //     lineColor: string;
  //     dotColor: string;
  //   };

  //   // Accessibility
  //   focusRing: {
  //     color: string;
  //     width: string;
  //   };
  // };
};
