import "./Auth.scss";
import Logo from "../../assets/logo-one.png";
import Container from "./../../container/Container";

const Auth = () => {
  return (
    <Container>
      <section className="auth">
        <form className="auth-form">
          <img src={Logo} alt="title" />
          <div className="auth-form__box">
            <label htmlFor="phone">شماره تلفن را وارد کنید</label>
            <input type="text" id="phone" placeholder="شماره موبایل" />
          </div>
          <button className="auth-form__btn">ارسال کد</button>
        </form>
      </section>
    </Container>
  );
};

export default Auth;
