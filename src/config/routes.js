const routes = {
    home: '/',
    contact: '/contact',
    detail: '/detail/:slug',
    signup: '/signup',
    signup_owner: '/signup-owner',

    signin: '/signin',
    forgot_password: '/forgot-password',
    listHouse: '/listHouse/location/:slug/:currentPagination',
    new_password: '/new-password/:id/:token',
    payment:
        '/payment/:id&numberOfAdults=:nad&numberOfChildren=:ncd&numberOfInfants=:nif&checkin=:dayin&checkout=:dayout',
    payment_success: '/payment/success',
    search: 'search/:location',
    // profile page
    profile: '/profile',
    history_booking: '/history-booking',
    email_nofication: '/email-nofication',
    payment_detail: '/payment-detail',
    personal_detail: '/personal-detail',
    preference: '/preference',
    security: '/security',
    review: '/review/:oid/:hid',
    get_review: '/get_review',
    // profile host
    profile_host: '/profile-host',
    statistical: '/statistical',
    house_list: '/house-list',
    rent_history: '/rent-history',
    host_manage: '/host-manage',
    host_new: '/host-new',
    host_renting: '/host-renting',
    confirm_success: 'confirm-success',
    confirm_fail: 'confirm-fail',
    // 404
    not_found: '*',
    // cart
    cart: '/cart',
};
export default routes;
