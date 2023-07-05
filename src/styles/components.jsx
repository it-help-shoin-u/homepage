import { css } from "@emotion/react";

export function HeaderStyle() {
    return css`
      width: auto;
      height: 50px;
      padding: 5px 20px;
      background-color: #cf6573;
    `;
}

export function FooterStyle() {
    return css`
      width: auto;
      height: 100px;
      margin-top: auto;
      margin-bottom: 0;
      background-color: darkgray;
    `;
}

export function BodyStyle() {
    return css `
      float: left;
      font-family: 'Noto Sans JP', sans-serif;
      background-color: blueviolet;
      margin-left: 200px;
    `;
}

export function SideMenuStyle() {
    return css `
      background-color: plum;
      width: 200px;
      height: auto;
    `;
}