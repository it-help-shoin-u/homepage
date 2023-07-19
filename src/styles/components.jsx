import { css } from "@emotion/react";

export function HeaderStyle() {
    return css`
      background-color: #cf6573;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 20px;
      width: 100%;
      height: auto;
    `;
}

export function SideMenuStyle() {
    return css `
      float: left; 
      padding-left: 20px;
      width: auto;
      height: auto;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: medium;
      p {
        margin-top: 30px;
        margin-bottom: 30px;
      }
    `;
}

export function HomeStyle() {
    return css `
      width: auto;
      margin-left: 225px;
      padding-left: 20px;;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: large;
      border-left: 1px solid black;
    `;
}

export function FooterStyle() {
    return css`
      background-color: darkgray;
      clear: left; 
      padding-top: 5px;
      padding-bottom: 5px;
      width: 100%;
      text-align: center;
    `;
}