/** @jsxImportSource @emotion/react */
import { SideMenuStyle } from "../styles/components";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    return (
        <div css={SideMenuStyle}>
            <p onClick={() => navigate("/")}>トップページ</p>
            <p onClick={() => navigate("hours_place")}>開室時間・場所</p>
            <p onClick={() => navigate("details")}>対応可能な内容</p>
            <p onClick={() => navigate("people")}>担当学生スタッフ</p>
            <p onClick={() => navigate("contact")}>お問い合わせ</p>
        </div>
    );
}

export default SideMenu;