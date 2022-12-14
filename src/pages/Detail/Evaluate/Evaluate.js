import classNames from 'classnames/bind';
import styles from './Evaluate.module.scss';
import EvaluateItem from './EvaluateItem';
import InfoEvaluate from './EvaluateItem/InfoEvaluate';

const cx = classNames.bind(styles);

function Evaluate({ children, ...props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('summary', 'row')}>
                <div className={cx('col', 'summary-item')}>
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
                    <p className={cx('total-star')}>{props.rates?.experience}</p>
                    <p className={cx('total-evaluate')}> {props.totalReview} đánh giá</p>
                </div>
            </div>
            <div className={cx('row', 'categories')}>
                <div className={cx('col', 'categories-item', 'l-6', 'm-6', 'c-6')}>
                    <InfoEvaluate
                        title="Giao tiếp"
                        value={(Number(props?.rates?.communication ? props?.rates?.communication : 0) / 5) * 100}
                        rate={props?.rates?.communication}
                    />
                </div>
                <div className={cx('col', 'categories-item', 'l-6', 'm-6', 'c-6')}>
                    <InfoEvaluate
                        title="Sạch sẽ"
                        value={(Number(props?.rates?.cleanliness ? props?.rates?.cleanliness : 0) / 5) * 100}
                        rate={props?.rates?.cleanliness}
                    />
                </div>
                <div className={cx('col', 'categories-item', 'l-6', 'm-6', 'c-6')}>
                    <InfoEvaluate
                        title="Chính xác"
                        value={(Number(props?.rates?.accurate ? props?.rates?.accurate : 0) / 5) * 100}
                        rate={props?.rates?.accurate}
                    />
                </div>
                <div className={cx('col', 'categories-item', 'l-6', 'm-6', 'c-6')}>
                    <InfoEvaluate
                        title="Vị trí"
                        value={(Number(props?.rates?.location ? props?.rates?.location : 0) / 5) * 100}
                        rate={props?.rates?.location}
                    />
                </div>
            </div>
            <div className={cx('row', 'evaluates')}>
                {props.dataReviews?.map((e, index) => (
                    <div className="col l-6 m-12 c-12" key={index}>
                        <EvaluateItem
                            avatar={
                                `https://a0.muscache.com/im/pictures/user/21618d46-0599-40ab-a27d-5b802d21dd8f.jpg?im_w=240` ||
                                e.user[0]?.avatar
                            }
                            name={e.user[0]?.username}
                            time={e.review[0]?.create_date}
                            content={e?.review?.public_review}
                        />
                    </div>
                ))}

                {children}
            </div>
        </div>
    );
}

export default Evaluate;
