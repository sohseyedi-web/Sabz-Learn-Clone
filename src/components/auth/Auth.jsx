import "./Auth.scss";
import Logo from "../../assets/logo-one.png";
import Container from "./../../container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Auth = () => {
  const [active, setActive] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <section className="auth">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="title" />
          {/* hanlder active or not active form */}
          <div className="auth-form__navigation">
            <span
              onClick={() => setActive(true)}
              className={
                active
                  ? "auth-form__navigation-item active"
                  : "auth-form__navigation-item"
              }
            >
              ورود
            </span>
            <span
              onClick={() => setActive(false)}
              className={
                active
                  ? "auth-form__navigation-item "
                  : "auth-form__navigation-item active"
              }
            >
              ثبت نام
            </span>
          </div>
          {active ? (
            <>
              {/* login form */}

              <div className="auth-form__box">
                <label htmlFor="phone">شماره تلفن را وارد کنید</label>
                <input
                  type="text"
                  placeholder="شماره موبایل"
                  {...register("phone", {
                    required: true,
                    maxLength: {
                      value: 11,
                      message: "شماره تلفن طولانی است",
                    },
                    minLength: {
                      value: 11,
                      message: "شماره تلفن کوتاه است است",
                    },
                  })}
                />
              </div>
              <button
                className={
                  isValid ? "auth-form__btn" : "auth-form__btn btn-not"
                }
                disabled={!isDirty || !isValid}
              >
                ارسال کد
              </button>
            </>
          ) : (
            <>
              {/* register form */}

              <div className="auth-form__box">
                <label htmlFor="name">نام خود را وارد کنید</label>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "نام شما کوتاه است",
                    },
                  })}
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="auth-form__box">
                <label htmlFor="phone">شماره تلفن را وارد کنید</label>
                <input
                  type="text"
                  placeholder="شماره موبایل"
                  {...register("phone", {
                    required: true,
                    maxLength: {
                      value: 11,
                      message: "شماره تلفن طولانی است",
                    },
                    minLength: {
                      value: 11,
                      message: "شماره تلفن کوتاه است است",
                    },
                  })}
                />
              </div>
              <button
                className={
                  isValid ? "auth-form__btn" : "auth-form__btn btn-not"
                }
                disabled={!isDirty || !isValid}
              >
                ارسال کد
              </button>
            </>
          )}
        </form>
      </section>
    </Container>
  );
};

export default Auth;
