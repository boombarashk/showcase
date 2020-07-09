import { createGlobalStyle } from 'styled-components';
import SegoeUIRegularTTF from './SegoeUIRegular/SegoeUIRegular.ttf'
import SegoeUIRegularEOT from './SegoeUIRegular/SegoeUIRegular.eot'
import SegoeUIRegularWOFF from './SegoeUIRegular/SegoeUIRegular.woff'
import SegoeUITTF from './SegoeUI.ttf'
import SegoeUIEOT from './SegoeUI.eot'
import SegoeUIWOFF from './SegoeUI.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'SegoeUIRegular';
        src: local('SegoeUIRegular'), local('SegoeUIRegular'),
        url(${SegoeUIRegularEOT})
        url('${SegoeUIRegularEOT}?#iefix') format('embedded-opentype'),
        url(${SegoeUIRegularTTF}) format('truetype'),
        url(${SegoeUIRegularWOFF}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'), local('SegoeUI'),
        url(${SegoeUIEOT})
        url('${SegoeUIEOT}?#iefix') format('embedded-opentype'),
        url(${SegoeUITTF}) format('truetype'),
        url(${SegoeUIWOFF}) format('woff');
        font-weight: 300;
        font-style: normal;
    }`
