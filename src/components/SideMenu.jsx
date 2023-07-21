/** @jsxImportSource @emotion/react */
import { SideMenuStyle } from "../styles/components";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    const rootPath = "/homepage/";
    return (
        <div css={SideMenuStyle}>
            <p onClick={() => navigate(rootPath)}>トップページ</p>
            <p onClick={() => navigate(rootPath + "hours_place")}>開室時間・場所</p>
            <p onClick={() => navigate(rootPath + "details")}>対応可能な内容</p>
            <p onClick={() => navigate(rootPath + "people")}>担当学生スタッフ</p>
            <p onClick={() => navigate(rootPath + "contact")}>お問い合わせ</p>
        </div>
    );
}

export default SideMenu;