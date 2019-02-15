import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#F8F9FA'
        },
    },
    typography: {
        useNextVariants: true
    },
    // shadows: Array(25).fill('none')
});

export default theme;