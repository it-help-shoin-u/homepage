/** @jsxImportSource @emotion/react */
import { HeaderStyle } from "../styles/components";
import { HeaderTitleFont } from "../styles/fonts";

function Header() {

    return (
        <div css={HeaderStyle}>
            <p css={HeaderTitleFont}>松蔭大学 ITサポートデスク</p>
        </div>
    );
}

export default Header;