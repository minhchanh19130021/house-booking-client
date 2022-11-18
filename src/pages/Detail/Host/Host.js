import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Host.module.scss';

const cx = classNames.bind(styles);
function Host() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('owner-header')}>
                <div className={cx('owner-header__right')}>
                    <img
                        src="https://a0.muscache.com/im/pictures/user/f7c841b6-f142-4f01-b598-17394d82e3b1.jpg?im_w=240"
                        alt="owner-header-avatar"
                    />
                </div>
                <div className={cx('owner-header__left')}>
                    <h3>Chủ nhà House Of Reservations</h3>
                    <p>Đã tham gia vào tháng 6 năm 2016</p>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('owner-title', 'col', 'l-6')}>
                    <div className={cx('owner-title__item')}>
                        <svg
                            className={cx('owner-title__icon-star')}
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}
                        >
                            <path
                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                fillRule="evenodd"
                            />
                        </svg>
                        <span>2.681 đánh giá</span>
                    </div>
                    <div className={cx('owner-title__item')}>
                        <svg
                            className={cx('owner-title__icon-protect')}
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}
                        >
                            <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z" />
                        </svg>
                        <span>Đã xác minh danh tính</span>
                    </div>
                    <div className={cx('owner-desc')}>
                        <p>
                            House of Booking chuyên xử lý các yêu cầu đặt phòng cho du lịch. Chúng tôi có sẵn 18 giờ mỗi
                            ngày để trả lời các câu hỏi của bạn trong thời gian sớm nhất.
                        </p>
                        <p>
                            Chúng tôi liên lạc trực tiếp với người quản lý/chủ sở hữu địa điểm mà chúng tôi đang hỗ trợ.
                            Chúng tôi cũng sẽ sẵn sàng hỗ trợ qua Airbnb trong thời gian bạn ở để được trợ giúp thêm.
                        </p>
                        <p>
                            Chúng tôi có nhân viên tại chỗ sẽ là chủ nhà địa phương của bạn. Sau khi đặt phòng của bạn
                            được xác nhận, bạn sẽ nhận được số điện thoại, vì vậy bạn có thể liên hệ trực tiếp với họ.
                        </p>
                    </div>
                </div>
                <div className={cx('col', 'owner-feedback', 'l-6')}>
                    <p>Tỉ lệ phản hồi: 100%</p>
                    <p>Thời gian phản hồi: trong vòng một giờ</p>
                    <Button className={cx('btn-contact')} outline large>
                        Liên hệ với chủ nhà
                    </Button>
                    <div className={cx('owner-alert')}>
                        <svg
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: 'block',
                                height: '24px',
                                width: '24px',
                                fill: 'rgb(227, 28, 95)',
                                stroke: 'currentcolor',
                            }}
                        >
                            <g>
                                <g stroke="none">
                                    <path
                                        d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                                        fillOpacity=".2"
                                    />
                                    <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z" />
                                </g>
                                <path
                                    d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                                    fill="none"
                                    strokeWidth={2}
                                />
                            </g>
                        </svg>
                        <p>
                            Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền hoặc liên lạc bên ngoài
                            trang web hoặc ứng dụng Airbnb.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Host;