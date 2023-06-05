import Header from "../components/header/header";
import CategoryChip from "../components/chip/dark-category-chip";
import List from "../components/list/list";
import StarterBanner from "../components/banner/start/banner";
import PagePaddings from "../components/global/paddings";
import styles from '../styles/screens/index/index.module.css';
import TitleStartText from "../components/text/title-start-text";
import HomeCategory from "../components/category/home-category";
import Head from "next/head";
import PlatformFeatures from "../components/screens/index/features";
import PopularFandomsTapes from "../components/tape/popular-fandoms-tapes";
import RegistrationCard from "../components/card/registration/registration-card";
import PostCard from "../components/card/content/post-card";
import SponsoredContentCard from "../components/card/sponsored/sponsored-content-card";

export default function Index() {
    let arr = ["test1", "test2"]; 
    let posts = [
        ["test1", "test1", ""], 
        ["test2", "test2", ""], 
        ["test3", "test3", ""]
    ]

    return (
        <div className={styles.index}>
            <Head>
                <title>Домашняя страница</title>
            </Head>
            <div className={styles.top}>
                <PagePaddings>
                    <Header />
                </PagePaddings>
                <div className={styles.top_banner}>
                    <div className={styles.box}>
                        <List>
                            {arr.map((chip) => (
                                <CategoryChip key={chip} name={chip} link={""} isDark={true}></CategoryChip>
                            ))}
                        </List>
                        <TitleStartText 
                            blockText1={"Все лучшие "}
                            fandom={"Фандомы "}
                            blockText2={"собраны в одном "}
                            position={"месте"}
                        />
                        <StarterBanner
                            mainImageUrl={"https://avatars.mds.yandex.net/i?id=0109ae2876067e32ef205f25457ed09956130341-4628472-images-thumbs&n=13"}
                            topCenterUrl={"https://avatars.mds.yandex.net/i?id=413db1778305483496ea58c312fbe96aef644734-9065710-images-thumbs&n=13"}
                            leftMiddleUrl={"https://avatars.mds.yandex.net/i?id=2eeb1786c8610bb11b7c6c64671cd2d03ab8278c-8455861-images-thumbs&n=13"}
                            rightMiddleUrl={"https://avatars.mds.yandex.net/i?id=c148ef797ba98f92d896cc0f64ee9858107f45ad-9056011-images-thumbs&n=13"}
                            bottomCenterUrl={"https://avatars.mds.yandex.net/i?id=bc4bbc07b0b510b4597dd9e4dc148fa921871edf-9222875-images-thumbs&n=13"}
                            bottomRightTopUrl={"https://avatars.mds.yandex.net/i?id=b7b2c03a5dce7faa96030a15f4999647f178d703-8500949-images-thumbs&n=13"}
                        />
                    </div>
                </div>
            </div>
            <PagePaddings>
                <HomeCategory 
                    categoryName={"Про FandomSpot"}
                    mainTitle={"что мы делаем"}
                    type="row"
                    showButton={true}
                    buttonText={"Начать поиск"}>
                     <PlatformFeatures/>
                </HomeCategory>
            </PagePaddings>
            <div className={styles.best_fandoms}>
                <HomeCategory 
                    categoryName={"Лучшие из FandomSpot"}
                    mainTitle={"Популярные фандомы"}
                    type="column"
                    showButton={true}
                    buttonText={"Найти свой фандом"}
                />
                <PopularFandomsTapes />
            </div>
            <RegistrationCard />
            <PagePaddings>
                <HomeCategory
                    categoryName={"Новое в сообщетсве "}
                    mainTitle={"Популярные публикации"}
                    type="row"
                    showButton={false}
                >
                    <div className={styles.popular_posts}>
                        <List>
                            {arr.map((chip) => (
                                <CategoryChip key={chip} name={chip} link={""} isDark={false}></CategoryChip>
                            ))}
                        </List>
                        <List>
                            {posts.map((post) => (
                                <PostCard key={post[0]} title={post[0]} description={post[1]} iconUrl={post[2]} />
                            ))}
                        </List>
                    </div>
                </HomeCategory>
            </PagePaddings>
            <SponsoredContentCard />
        </div>
    );
}