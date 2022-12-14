import EvaluateItem from '../EvaluateItem';
import classNames from 'classnames/bind';
import styles from './ModalEvaluate.module.scss';
import InfoEvaluate from '../EvaluateItem/InfoEvaluate';

const cx = classNames.bind(styles);
function ModalEvaluate({ children, ...props }) {
    return (
        <div className={cx('modal-evaluate')}>
            {children}
            <div className={cx('row', 'modal-header')}>
                <div className={cx('col', 'l-4', 'm-12', 'c-12', 'modal-header__title')}>
                    <svg
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
                    <h2 className={cx('total-star')}>{props.rates?.experience}</h2>
                    <h2 className={cx('total-evaluate')}> {props.totalReview} đánh giá</h2>
                </div>
                <div className={cx('col', 'l-8', 'm-12', 'c-12', 'modal-header__search')}>
                    <input type="text" placeholder="Tìm kiếm đánh giá" />
                </div>
            </div>
            <div className={cx('row', 'modal-body')}>
                <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <InfoEvaluate
                                title="Giao tiếp"
                                value={(props?.rates?.communication / 5) * 100}
                                rate={props?.rates?.communication}
                            />{' '}
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <InfoEvaluate
                                title="Sạch sẽ"
                                value={(props?.rates?.cleanliness / 5) * 100}
                                rate={props?.rates?.cleanliness}
                            />{' '}
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <InfoEvaluate
                                title="Chính xác"
                                value={(props?.rates?.accurate / 5) * 100}
                                rate={props?.rates?.accurate}
                            />{' '}
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <InfoEvaluate
                                title="Vị trí"
                                value={(props?.rates?.location / 5) * 100}
                                rate={props?.rates?.location}
                            />{' '}
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                    <div className={cx('row', 'list-evaluate')}>
                        {props.dataReviews?.map((e, index) => (
                            <div className="col l-12 m-12 c-12" key={index}>
                                <EvaluateItem
                                    avatar={
                                        `https://a0.muscache.com/im/pictures/user/21618d46-0599-40ab-a27d-5b802d21dd8f.jpg?im_w=240` ||
                                        e.user[0]?.avatar
                                    }
                                    name={e.user[0]?.username}
                                    time={e.review[0]?.create_date}
                                    content={e.review?.public_review}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEvaluate;
