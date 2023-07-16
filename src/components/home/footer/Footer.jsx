import { Link } from "react-router-dom";
import "./Footer.scss";
import enamad from "../../../assets/enamad.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-container__details">
          <div className="footer-container__details-title">
            ضمانت <span>سبز لرن</span> برای کلیه محصولات آموزشی
          </div>
          <p>
            وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در
            فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود
            که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل
            قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز
            آکادمی آموزش برنامه نویسی <span>سبز لرن</span> به عنوان یک آکادمی
            خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در
            اون رو نداره و باید از فیلترینگ های خاص آکادمی <span>سبز لرن</span>{" "}
            رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با
            دانشجو بسیار مهمه! ما در آکادمی <span>سبز لرن</span> تضمین پشتیبانی
            خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت{" "}
            <span>سبز لرن</span> حتی برای پشتیبانی دوره های رایگان شون هم مثل
            آموزش جاوا اسکریپت هزینه دریافت میکنند و متعهد هستند که هوای کاربر
            های عزیز رو داشته باشند
          </p>
        </div>
        <div className="footer-container__items">
          <div className="footer-container__items-line">
            <Link to="/products" class="footer-content__items-link">
              فروشگاه
            </Link>
            <Link to="/auth" class="footer-content__items-link">
              حساب کاربری
            </Link>
            <Link to="/" class="footer-content__items-link">
              درباره ما
            </Link>
            <Link to="/" class="footer-content__items-link">
              تدریس
            </Link>
          </div>
          <div className="footer-container__items-line">
            <Link to="/" class="footer-content__items-link">
              مقالات
            </Link>
            <Link to="/" class="footer-content__items-link">
              قوانین و مقررات
            </Link>
            <Link
              to="/products/e845e45b-5b56-41fd-b51f-ff9e4e44892b"
              class="footer-content__items-link"
            >
              آموزش جاوا اسکریپت
            </Link>
            <Link
              to="/products/8453455a-7a47-477d-8d8b-baf799e7db76"
              class="footer-content__items-link"
            >
              آموزش گیت
            </Link>
          </div>
          <div className="footer-container__items-line">
            <h6>ساعات کاری:</h6>
            <p>
              شنبه تا چهارشنبه 8 صبح تا 18 عصر
              <br />
              پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر
            </p>
          </div>
          <div className="footer-container__items-line">
            <h6> ارتباط با ما:</h6>
            <p>
              ایمیل : sabzlearn@gmail.com
              <br />
              شماره تماس : 09334008385
            </p>
          </div>
          <div className="footer-container__items-line">
            <img src={enamad} alt="" />
          </div>
        </div>
        <p className="footer-container__copy">
          © کلیه حقوق برای <span>سبز لرن</span> محفوظ است ۱۴۰۱
        </p>
      </div>
    </footer>
  );
};

export default Footer;
