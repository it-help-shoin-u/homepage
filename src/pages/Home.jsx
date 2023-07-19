import { HomeStyle } from "../styles/components";

function Home() {
    return (
        <div css={HomeStyle}>
            <p>松蔭大学 ITサポートデスクでは、</p>
            <ul>
                <li>パソコントラブルが起きてしまった！</li>
                <li>IT機器の使い方がわからない…！</li>
                <li>松蔭大学メールアカウントの設定方法がわからない！</li>
            </ul>
            <p>などのIT全般に関するご相談を承っております。</p>

            <p>「開室時間・場所」をご確認の上、お気軽にご相談ください。</p>
            <p>来室の都合が合わない場合は「お問い合わせ」にて、メールでも承っております。</p>
            <p>（対応は受付時間内とさせていただきます。）</p>
        </div>
    )
}

export default Home;