import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import CardBest from '~/components/CardBest';
import CardHouse from '~/components/CardHouse';
import { useEffect, useState } from 'react';
import CardNew from '~/components/CardNew';
import SearchHome from './SearchHome';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function Home(props) {
    const [visible, setVisible] = useState(1);
    const [listNewestHome, setListNewestHome] = useState([]);
    const [listBestSellingHome, setListBestSellingHome] = useState([]);
    const [listMostViewedHome, setListMostViewedHome] = useState([]);
    const [listSuggestionHome, setListSuggestionHome] = useState([]);
    const toggleTab = (index) => {
        setVisible(index);
    };
    useEffect(() => {
        // get newest home
        fetch(`http://localhost:8080/api/v2/houses/newest`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setListNewestHome(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // get best selling home
        fetch(`http://localhost:8080/api/v2/houses/best_selling`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setListBestSellingHome(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // get most viewed
        fetch(`http://localhost:8080/api/v2/houses/most_viewed`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setListMostViewedHome(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // get suggestion
        fetch(`http://localhost:8080/api/v2/houses/suggestion `, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success === true) {
                    setListSuggestionHome(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        cssEase: 'linear',
    };

    return (
        // Image by <a href="">Freepik</a>
        <div className={cx('wrapper')}>
            <div className={cx('bg-banner', 'grid')}>
                <div className={cx('overlay')}></div>
                <div className={cx('', 'grid')}>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=1480&t=st=1671632076~exp=1671632676~hmac=d9fce10a933328e2812701f5038c514622a2d96ba94602e8a413c457ef6b6193"
                                alt="img-house"
                                className={cx('thumbnail-slide')}
                            />
                        </div>
                        <div>
                            <img
                                src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=1480&t=st=1671631837~exp=1671632437~hmac=f693badc28d86805f2f9541cadaa2edf48a38ccd4b2332c48ee9da7f5840a517"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://img.freepik.com/free-photo/full-shot-family-wearing-face-masks_23-2149272151.jpg?w=1380&t=st=1671632877~exp=1671633477~hmac=d417a6b07ddf760c2aeba8aecc55b25b6fd774dfc2ac6221f0d868bfef6062f4"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://img.freepik.com/free-photo/safari-casual-hipster-camping-off-morning_1253-1036.jpg?w=1380&t=st=1671632297~exp=1671632897~hmac=13c2829cbd78437a1cc032bc2de4cef1193e9d9090be599e02ee5bcd7dddf47b"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                        <div>
                            <img
                                src="https://img.freepik.com/free-photo/beautiful-girl-red-bikini-boat-koh-phi-phi-island-thailand_335224-1384.jpg?w=1380&t=st=1671632312~exp=1671632912~hmac=c95157856588409a1d267a235ce0b985759599d9405f17b72443ccb7d92c11f8"
                                className={cx('thumbnail-slide')}
                                alt="img-house"
                            />
                        </div>
                    </Slider>
                </div>
                {/* <img
                    src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=1480&t=st=1671632076~exp=1671632676~hmac=d9fce10a933328e2812701f5038c514622a2d96ba94602e8a413c457ef6b6193"
                    alt="home-banner"
                    className={cx('grid')}
                /> */}

                <SearchHome />
            </div>
            <div className={cx('location-best', 'grid', 'wide')}>
                <div className={cx('location-best__title')}>
                    <h1>Kh??m Ph?? ?????a ??i???m T???t Nh???t</h1>
                    <div className={cx('divide')}></div>
                    <p>
                        Nh???ng n??i c?? v??? ?????p t??? nhi??n nh?? b??i bi???n, khu ngh??? m??t ?????o nhi???t ?????i, c??ng vi??n qu???c gia, n??i,
                        th??nh ph??? v?? r???ng
                    </p>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            link={'/ListHouse/location/Th??nh ph??? H??? Ch?? Minh/1'}
                            bg="https://storage.googleapis.com/digital-platform/hinh_anh_landmark_81_cap_nhat_thong_tin_moi_nhat_tu_cdt_so_2_b2be622cf8/hinh_anh_landmark_81_cap_nhat_thong_tin_moi_nhat_tu_cdt_so_2_b2be622cf8.jpg"
                            title="H??? Ch?? Minh"
                            desc="Th??nh ph??? H??? Ch?? Minh - c??n ???????c g???i l?? S??i G??n - l?? th??nh ph??? l???n nh???t Vi???t Nam n???m b??n b??? s??ng S??i G??n. S??n bay T??n S??n Nh???t ch??? c??ch trung t??m th??nh ph??? kho???ng 15 ph??t ??i b???ng taxi kh??ch s???n g???n s??n bay T??n S??n Nh???t th?????ng ph???c v??? kh??ch l?? doanh nh??n, c??n kh??ch du l???ch th?? s??? t??m m???t ?????a ??i???m ph?? h???p cho vi???c tham quan c???a m??nh."
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            link={'/ListHouse/location/Th??nh ph??? H?? N???i/1'}
                            bg="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"
                            title="H?? N???i"
                            desc="H?? N???i l?? m???t trong nh???ng th??nh ph??? thanh l???ch nh???t ????ng Nam ??, ???????c k???t h???p h??i h??a gi???a n??t truy???n th???ng v?? s??? hi???n ?????i. Nh???ng qu??n c?? ph?? ??? ????y mang ????i ch??t h??nh d??ng c???a Paris; c??c lo???i bia v?? bia h??i n???i ?????a ???????c b??n ??? kh???p m???i n??i t??? c??c qu???y b??n h??ng rong hay trong c??c nh?? h??ng cao c???p, c??n xe m??y th?? nh?? m???t m?? cung xuy??n kh???p c??c con ph??? c???"
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            link={'/ListHouse/location/T???nh L??m ?????ng/1'}
                            bg="https://a.cdn-hotels.com/gdcs/production154/d1245/0a3c326f-cedf-4cf9-ada2-71f7517d0a09.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                            title="???? L???t"
                            desc="Nhi???t ????? trung b??nh 18???21??C, nhi???t ????? cao nh???t ch??a bao gi??? qu?? 30??C v?? th???p nh???t kh??ng d?????i 5??C. ???? L???t v???n l?? m???t th??nh ph??? du l???ch ???????c y??u th??ch nh???t ng??y nay, c?? th??? ??i b???ng xe bu??t t??? Nha Trang ho???c TP H??? Ch?? Minh t???i, m???t kho???ng n??m t???i b???y ti???ng ?????ng h???."
                        />
                    </div>
                    <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                        <CardBest
                            link={'/ListHouse/location/Phu%20Quoc/1'}
                            bg="http://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg"
                            title="Ph?? Qu???c"
                            desc="H??n ?????o ng??y c??ng thu h??t ???????c du kh??ch qu???c t???, nh??ng v???n gi??? l???i ???????c phong c???nh ?????c ????o c???a v??ng n??ng th??n Vi???t Nam. Ng??y nay nh???ng b??i bi???n ?????p nh???t ???? c?? c??c khu ngh??? d?????ng cao c???p ???????c x??y d???ng, du kh??ch c?? th??? thu?? xe m??y d??? d??ng ????? t??m m???t b??i bi???n hoang v???ng v?? xem m???t tr???i l???n tr??n V???nh Th??i Lan."
                        />
                    </div>
                    <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                        <CardBest
                            link={'/ListHouse/location/T???nh Kh??nh H??a/1'}
                            bg="https://vietnam.travel/sites/default/files/2021-05/Nha%20Trang%20Travel%20Guide%20Vietnam%20Tourism.jpg"
                            title="Nha Trang"
                            desc="Nha Trang kh??ng ch??? ????n thu???n l?? n??i ngh??? m??t m?? n?? ???? tr??? th??nh m???t ?????a ??i???m du l???ch n???i ti???ng l??m ?????p cho ng??nh du l???ch Vi???t Nam. V???i nh???ng b??i bi???n c??t tr???ng, di t??ch c??? v?? c???nh ????m ??m ?????m, ????y l?? m???t th??nh ph??? ven bi???n v???i c??c l???a ch???n phong ph?? ph?? h???p v???i t???t c??? du kh??ch. H??n th??? n???a, kh??ch s???n ??? Nha Trang r???t ??a d???ng v?? gi?? c??? l???i r???t ph???i ch??ng."
                        />
                    </div>
                </div>
            </div>

            <div className={cx('popular')}>
                <div className={cx('popular-title')}>
                    <h1>Kh??m ph?? th??m nh?? cho thu?? du l???ch</h1>
                    <div className={cx('divide')}></div>
                </div>
                <div className={cx('convenient')}>
                    <div className={cx('tabs')}>
                        <div className={cx({ 'tab-item': true, active: visible === 1 })} onClick={() => toggleTab(1)}>
                            M???i nh???t
                        </div>
                        <div className={cx({ 'tab-item': true, active: visible === 2 })} onClick={() => toggleTab(2)}>
                            ?????t nhi???u nh???t
                        </div>
                        <div className={cx({ 'tab-item': true, active: visible === 3 })} onClick={() => toggleTab(3)}>
                            Xem nhi???u nh???t
                        </div>
                        <div className={cx({ 'tab-item': true, active: visible === 4 })} onClick={() => toggleTab(4)}>
                            G???i ??
                        </div>
                    </div>
                    {visible === 1 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 1,
                                })}
                            >
                                {listNewestHome.map((e, i) => {
                                    return (
                                        <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                            <CardHouse
                                                folder_image={e?.folder_image}
                                                avatar={e?.avatar}
                                                idHouse={e._id}
                                                to={`/detail/${e.slug}`}
                                                status={e.status ? 'open' : 'close'}
                                                numberReview={e.number_review}
                                                title={e.name}
                                                location={`${e.address.city} ${e.address.district} ${e.address.number}`}
                                                desc={e.introduce}
                                                rate={e.rate}
                                                facilities={e.outstanding_facilities.map((e, i) => {
                                                    return e;
                                                })}
                                                price={e.price}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {visible === 2 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 2,
                                })}
                            >
                                {listBestSellingHome.map((e, i) => {
                                    let home = e.homes.home_id[0];
                                    console.log(home);
                                    return (
                                        <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                            <CardHouse
                                                folder_image={home?.folder_image}
                                                avatar={home.avatar}
                                                idHouse={home._id}
                                                to={`/detail/${home.slug}`}
                                                status={home.status ? 'open' : 'close'}
                                                numberReview={home.number_review}
                                                title={home.name}
                                                location={`${home.address.city} ${home.address.district} ${home.address.number}`}
                                                desc={home.introduce}
                                                rate={home.rate}
                                                facilities={e.homes.outstanding_facilities.map((e, i) => {
                                                    return e;
                                                })}
                                                price={home.price}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {visible === 3 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 3,
                                })}
                            >
                                {listMostViewedHome.map((e, i) => {
                                    return (
                                        <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                            <CardHouse
                                                folder_image={e?.folder_image}
                                                avatar={e.avatar}
                                                idHouse={e._id}
                                                to={`/detail/${e.slug}`}
                                                status={e.status ? 'open' : 'close'}
                                                numberReview={e.number_review}
                                                title={e.name}
                                                location={`${e.address.city} ${e.address.district} ${e.address.number}`}
                                                desc={e.introduce}
                                                rate={e.rate}
                                                facilities={e.outstanding_facilities.map((e, i) => {
                                                    return e;
                                                })}
                                                price={e.price}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {visible === 4 && (
                        <div className={cx('tab-content', 'grid', 'wide')}>
                            <div
                                className={cx({
                                    row: true,
                                    'tab-pane': true,
                                    active: visible === 4,
                                })}
                            >
                                {listSuggestionHome.map((e, i) => {
                                    let home = e.homes.home_id[0];
                                    return (
                                        <div key={i} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                            <CardHouse
                                                folder_image={home?.folder_image}
                                                avatar={home.avatar}
                                                idHouse={home._id}
                                                to={`/detail/${home.slug}`}
                                                status={home.status ? 'open' : 'close'}
                                                numberReview={home.number_review}
                                                title={home.name}
                                                location={`${home.address.city} ${home.address.district} ${home.address.number}`}
                                                desc={home.introduce}
                                                rate={home.rate}
                                                facilities={e.homes.outstanding_facilities.map((e, i) => {
                                                    return e;
                                                })}
                                                price={home.price}
                                            />
                                        </div>
                                    );
                                })}

                                {/* <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="???? l???t"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                                <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="???? l???t"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div>
                                <div className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <CardHouse
                                        to="/detail"
                                        img="https://townhub.kwst.net/images/all/28.jpg"
                                        status="close"
                                        title="???? l???t"
                                        location={'27th Brooklyn New York, USA'}
                                        desc="Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodalesSed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.."
                                        rate={4.7}
                                        facilities={[
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                key="1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                            //     />
                                            // </svg>,
                                            // <svg
                                            //     xmlns="http://www.w3.org/2000/svg"
                                            //     fill="none"
                                            //     viewBox="0 0 24 24"
                                            //     strokeWidth={1.5}
                                            //     stroke="currentColor"
                                            //     className="w-6 h-6"
                                            // >
                                            //     <path
                                            //         strokeLinecap="round"
                                            //         strokeLinejoin="round"
                                            //         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                            //     />
                                            // </svg>,
                                        ]}
                                        price={234.245}
                                    />
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* <div className={cx('ads')}>
                <div className={cx('banner-ads')}>
                    <img src="https://townhub.kwst.net/images/bg/11.jpg" alt="ads-banner" />
                    <div className={cx('content-ads')}>
                        <p>Aliquam erat volutpat interdum</p>
                        <h3>
                            Get ready to start your exciting journey. Our agency will lead you through the amazing
                            digital world
                        </h3>
                    </div>
                </div>
            </div> */}

            <div className={cx('location-new', 'grid')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                    <div className={cx('col')}>
                        <CardNew />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
