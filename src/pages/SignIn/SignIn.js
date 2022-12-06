import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './SignIn.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '~/redux/authenticationSlide';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Vui lòng nhập đầy đủ'),
            password: Yup.string().required('Vui lòng nhập đầy đủ'),
        }),
        onSubmit: (values) => {
            (async () => {
                dispatch(loginStart());
                await fetch(`http://localhost:8080/api/v1/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        username: values?.username,
                        password: values?.password,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        setDataLogin(result);
                        if (result.status === true) {
                            dispatch(loginSuccess(result));
                            navigate('/personal-detail');
                        } else {
                            dispatch(loginFailure());
                        }
                        return result;
                    })
                    .catch((err) => {
                        dispatch(loginFailure());
                    });
            })();
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('', 'form-login')}>
                <div className={cx('header')}>
                    <img src="https://townhub.kwst.net/images/logo3.png" alt="logo" />
                    <h3>Chào mừng bạn đến với hệ thống đăng nhập</h3>
                </div>

                <form className={cx('body')} onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {dataLogin?.status === false && <p className={cx('warning')}>{dataLogin?.msg}</p>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="username">Tên đăng nhập*</label>
                        <input
                            name="username"
                            id="username"
                            type="text"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && <p className={cx('alert-message')}>{formik.errors.username}</p>}
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu *</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && <p className={cx('alert-message')}>{formik.errors.password}</p>}
                    </div>
                    <Button large type="submit">
                        Đăng Nhập
                    </Button>
                    <div className={cx('function')}>
                        <NavLink to="/signup">Tạo tài khoản</NavLink>
                        <NavLink to="/forgot-password" className={cx('forgot-password')}>
                            Quên mật khẩu?
                        </NavLink>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                            <p className={cx('login-orther-text')}>Hoặc tiếp tục với</p>
                        </div>
                    </div>
                    <div className={cx('login-social')}>
                        <Button className={cx('btn-social', 'facebook')}>Facebook</Button>
                        <Button className={cx('btn-social', 'google')}>Google</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
