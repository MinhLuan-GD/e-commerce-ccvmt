<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <div id="changeSideBtn" :class="$style.btn">
        <button @click="showSignup">SIGN UP</button>
        <button @click="showLogin">LOG IN</button>
      </div>
      <!-- SingUp -->
      <form ref="formSignup" :class="$style.signUp">
        <div :class="$style.formGroup">
          <input
            type="email"
            placeholder="Email"
            autocomplete="off"
            v-model="signupModel.email"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            placeholder="Mật khẩu"
            autocomplete="off"
            v-model="signupModel.password"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            autocomplete="off"
            v-model="confirmPassword"
          />
        </div>
        <div :class="$style.formGroup">
          <button @click="handleSignup" type="button" :class="$style.btn2">
            Đăng ký
          </button>
        </div>
      </form>

      <!------ Login Form -------- -->
      <form ref="formLogin" :class="$style.login">
        <div :class="$style.formGroup">
          <input
            type="email"
            placeholder="Email"
            autocomplete="off"
            v-model="loginModel.email"
          />
        </div>
        <div :class="$style.formGroup">
          <input
            type="password"
            placeholder="Mật khẩu"
            autocomplete="off"
            v-model="loginModel.password"
          />
        </div>
        <div :class="$style.formGroup">
          <button @click="handleLogin" type="button" :class="$style.btn2">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { login, signup } from "@/api/user";
import { SignModel } from "@/models/sign";
import { ref } from "vue";
import { Vue } from "vue-class-component";
import store from "@/store";

export default class Login extends Vue {
  formLogin = ref() as unknown as HTMLFormElement;
  formSignup = ref() as unknown as HTMLFormElement;
  loginModel = new SignModel();
  signupModel = new SignModel();
  confirmPassword = "";

  mounted() {
    const btn = document.getElementById("changeSideBtn")
      ?.children[0] as HTMLButtonElement;
    btn.style.borderBottom = "2px solid rgb(91, 243, 131)";
  }

  showLogin() {
    this.formSignup.style.display = "none";
    this.formLogin.style.display = "block";
    const change = document.getElementById("changeSideBtn");
    const btn1 = change?.children[0] as HTMLButtonElement;
    const btn2 = change?.children[1] as HTMLButtonElement;
    btn1.style.borderBottom = "2px solid transparent";
    btn2.style.borderBottom = "2px solid rgb(91, 243, 131)";
  }

  showSignup() {
    this.formLogin.style.display = "none";
    this.formSignup.style.display = "block";
    const change = document.getElementById("changeSideBtn");
    const btn1 = change?.children[0] as HTMLButtonElement;
    const btn2 = change?.children[1] as HTMLButtonElement;
    btn1.style.borderBottom = "2px solid rgb(91, 243, 131)";
    btn2.style.borderBottom = "2px solid transparent";
  }

  handleLogin() {
    login(this.loginModel).then((res) => {
      if (res.status === 201) {
        alert("Đăng nhập thành công");
        store.dispatch("setUser", res.data);
        this.$router.push("/");
      } else {
        alert("Đăng nhập thất bại");
      }
    });
  }

  handleSignup() {
    if (this.signupModel.password !== this.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    signup(this.signupModel).then((res) => {
      if (res.status === 201) {
        alert("Đăng ký thành công, vui lòng đăng nhập");
        this.showLogin();
      } else {
        alert("Đăng ký thất bại");
      }
    });
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
    padding: 30px 0;
  }
  & .btn button {
    padding: 3px;
    margin: 30px 0px 40px 30px;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    color: aliceblue;
    cursor: pointer;
    font-size: 18px;
    font-weight: 550;
    &:hover {
      border-bottom: 2px solid rgb(91, 243, 131);
    }
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
    font-size: 17px;
    font-weight: bold;
    background-color: transparent;
    color: white;
    outline: none;
    &:focus {
      border-bottom: 2px solid rgb(91, 243, 131);
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.753);
    }
  }

  & .btn2 {
    padding: 10px;
    width: 150px;
    border-radius: 20px;
    background-color: rgb(10, 136, 43);
    border-style: none;
    color: white;
    font-weight: 600;
    margin-top: 40px;
    &:hover {
      background-color: rgba(10, 136, 43, 0.5);
    }
  }

  /* hide signup form */
  & .login {
    display: none;
  }
}
</style>
