import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

    ${reset}
    a{
        text-decoration : none;
        color : inherit;
    }

    *{
        box-sizing : border-box;
    }

    @font-face {
        font-family: "Glory-Bold";
        src: url("./font/Glory-Bold.ttf");
    }

    @font-face {
        font-family: "Glory-ExtraLight";
        src: url("./font/Glory-ExtraLight.ttf") format('woff');
    }

    @font-face {
        font-family: "Glory-Regular";
        src: url("./font/Glory-Regular.ttf") format('woff');
    }

    body {
        font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
        font-size : 14px;
        background-color : rgba(20,20,20,1);
        color : white;
        padding-top: 50px ;
        overflow-x : hidden;
        }
`;

export default GlobalStyles;
