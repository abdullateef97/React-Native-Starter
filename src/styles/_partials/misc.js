import {colors} from './setup'

export const pt = (amount) => { return {paddingTop: amount}; }
export const pb = (amount) => { return {paddingBottom: amount}; }
export const pl = (amount) => { return {paddingLeft: amount}; }
export const pr = (amount) => { return {paddingRight: amount}; }
export const pv = (amount) => { return {paddingVertical: amount}; }
export const ph = (amount) => { return {paddingHorizontal: amount}; }

export const mt = (amount) => { return {marginTop: amount}; }
export const mb = (amount) => { return {marginBottom: amount}; }
export const ml = (amount) => { return {marginLeft: amount}; }
export const mr = (amount) => { return {marginRight: amount}; }
export const mv = (amount) => { return {marginVertical: amount}; }
export const mh = (amount) => { return {marginHorizontal: amount}; }

export const misc = StyleSheet.create({
    flexContainer : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center'
    },

    // text alignment
    textCenter: { textAlign: 'center' },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right' },
    textJustify: { textAlign: 'justify' },

    // font weight
    ultraThin: { fontWeight: '100' },
    thin: { fontWeight: '200' },
    light: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    book: { fontWeight: '500' },
    bold: { fontWeight: '600' },
    bolder: { fontWeight: '700' },
    boldest: { fontWeight: '900' },

    // header fonts
    h1: { fontSize: 32 },
    h2: { fontSize: 24 },
    h3: { fontSize: 18 },
    h4: { fontSize: 16 },
    h5: { fontSize: 13 },
    h6: { fontSize: 10 },

        // text color
        bgPrimary: { backgroundColor: colors.primary },
        bgPrimaryLight: { backgroundColor: colors.primaryLight },
        bgWhite: { backgroundColor: colors.white },
        bgLight: { backgroundColor: colors.light },
        bgGray: { backgroundColor: colors.gray },
        bgDark: { backgroundColor: colors.dark },
        bgDanger: { backgroundColor: colors.danger },
        bgSuccess: { backgroundColor: colors.success },
    
        // text color
        textPrimary: { color: colors.primary },
        textPrimaryLight: { color: colors.primaryLight },
        textWhite: { color: colors.white },
        textLight: { color: colors.light },
        textGray: { color: colors.gray },
        textDark: { color: colors.dark },
        textDanger: { color: colors.danger },
        textSuccess: { color: colors.success },
    
        // border color
        borderPrimary: { borderWidth: 1, borderColor: colors.primary },
        borderPrimaryLight: { borderWidth: 1, borderColor: colors.primaryLight },
        borderWhite: { borderWidth: 1, borderColor: colors.white },
        borderLight: { borderWidth: 1, borderColor: colors.light },
        borderGray: { borderWidth: 1, borderColor: colors.gray },
        borderDark: { borderWidth: 1, borderColor: colors.dark },
        borderDanger: { borderWidth: 1, borderColor: colors.danger },
        borderSuccess: { borderWidth: 1, borderColor: colors.success },
})