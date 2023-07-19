/** @jsxImportSource @emotion/react */
import { SideMenuStyle } from "../styles/components";
import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <div css={SideMenuStyle}>
            <p>トップページ</p>
            <p>開室時間・場所</p>
            <p>対応可能な内容</p>
            <p>担当学生スタッフ</p>
            <p>お問い合わせ</p>

        </div>
    );
}

export default SideMenu;