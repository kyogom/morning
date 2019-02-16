import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#dbdee0'
        },
    },
    typography: {
        useNextVariants: true
    },
    // shadows: Array(25).fill('none')
});

export default theme;