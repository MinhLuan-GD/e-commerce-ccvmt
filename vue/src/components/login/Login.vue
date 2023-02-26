<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <div :class="$style.btn">
        <button @click="showSignup" :class="$style.signUpBtn" id="signUpbt">
          SIGN UP
        </button>
        <button @click="showLogin" :class="$style.loginBtn" id="loginbt">
          LOG IN
        </button>
      </div>
      <!-- SingUp -->
      <form ref="formSignup" :class="$style.signUp" action="" method="get">
        <div :class="$style.formGroup">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            autocomplete="off"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            id="password"
            placeholder="Mật khẩu"
            required
            autocomplete="off"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            required
            autocomplete="off"
          />
        </div>
        <div :class="$style.checkBox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span :class="$style.text">Bạn đồng ý</span>
        </div>
        <div :class="$style.formGroup">
          <button type="button" :class="$style.btn2">Đăng ký</button>
        </div>
      </form>

      <!------ Login Form -------- -->
      <form ref="formLogin" :class="$style.login" action="" method="get">
        <div :class="$style.formGroup">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            autocomplete="off"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            id="password"
            placeholder="Mật khẩu"
            required
            autocomplete="off"
          />
        </div>
        <div :class="$style.checkBox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span :class="$style.text">Nhớ cho lần sau</span>
        </div>
        <div :class="$style.formGroup">
          <button type="button" :class="$style.btn2">Đăng nhập</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class Login extends Vue {
  formLogin = ref() as unknown as HTMLFormElement;
  formSignup = ref() as unknown as HTMLFormElement;

  showLogin() {
    this.formSignup.style.display = "none";
    this.formLogin.style.display = "block";
  }

  showSignup() {
    this.formLogin.style.display = "none";
    this.formSignup.style.display = "block";
  }
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  align-items: center !important;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("@/assets/img/banner/b10.jpg");
  background-size: cover;
  background-attachment: fixed;
  & form {
    width: 350px;
    height: 450px;
    background-color: rgba(39, 40, 41, 0.137);
    box-shadow: 0 5px 30px black;
  }
  & .btn button {
    padding: 3px;
    margin: 30px 0px 40px 30px;
    border-style: none;
    background-color: transparent;
    color: re;
    font-size: 18px;
    font-weight: 550;
  }
  & .formGroup {
    display: flex;
    justify-content: center;
  }
  & .formGroup input {
    border: none;
    width: 80%;
    border-bottom: 2px solid white;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
    color: white;
  }
  & input:focus {
    outline: none !important;
    border-bottom: 2px solid rgb(91, 243, 131);
    font-size: 17px;
    font-weight: bold;
    color: white;
  }
  & ::placeholder {
    color: white;
  }
  & .checkBox {
    display: flex;
    justify-content: center;
    margin: 16px !important;
    & span {
      color: red;
      margin-left: 11px;
    }
  }

  & .checkbox {
    margin-right: 10px;
    height: 15px;
    width: 15px;
  }
  & text {
    color: rgba(255, 0, 0, 0.682);
    font-size: 13px;
  }
  & .btn2 {
    padding: 10px;
    width: 150px;
    border-radius: 20px;
    background-color: rgb(10, 136, 43);
    border-style: none;
    color: white;
    font-weight: 600;
  }
  & .btn2:hover {
    background-color: rgba(10, 136, 43, 0.5);
  }
  & .btn button:hover {
    border-bottom: 2px solid rgb(91, 243, 131);
  }

  /* hide signup form */
  & .login {
    display: none;
  }

  /* Login form code */
  & .login .checkBox {
    margin-top: 30px !important;
    & span {
      color: red;
      margin-left: 11px;
    }
  }
}
</style>
