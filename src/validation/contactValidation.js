import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد."),
    photo: Yup.string()
        .url("آدرس  تصویر معتبر نیست")
        .required("تصویر مخاطب الزامی میباشد."),
    mobile: Yup.string()
        .required("شماره موبایل الزامی می باشد.")
        .matches(/^(09)\d{9}$/, 'شماره موبایل معتبر نیست'),
    email: Yup.string()
        .email("آدرس ایمیل معتبر نیست.")
        .required("آدرس ایمیل الزامی می باشد."),
    job: Yup.string().nullable(),
    group: Yup.string()
        .required("انتخاب گروه الزامی میباشد."),
});



