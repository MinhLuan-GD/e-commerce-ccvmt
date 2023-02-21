<template>
  <div :class="$style.container">
    <div :class="$style.col">
      <img :class="$style.logo" src="@/assets/img/logo1.png" alt="" />
      <h4>Liên hệ</h4>
      <p><strong>Địa chỉ: </strong> Xa lội Hà Nội, Quận 9, Tp.HCM</p>
      <p><strong>Số điện thoại: </strong> +01 2222 568/ (+91) 34 678 2356</p>
      <p><strong>Thời gian: </strong> 09:00 - 22:00</p>
      <div :class="$style.follow">
        <h4>Theo dõi chúng tôi</h4>
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-pinterest-p"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    <div :class="$style.col">
      <h4>Về thông tin chúng tôi</h4>
      <a href="#">Thông tin về shop</a>
      <a href="#">Thông tin giao hàng</a>
      <a href="#">Chính sách đổi trả</a>
      <a href="#">Chính sách bảo hành</a>
      <a href="#">Chăm sóc khách hàng</a>
    </div>

    <div :class="$style.col">
      <h4>Tài khoản</h4>
      <a href="#">Đăng nhập</a>
      <a href="#">Xem giỏ hàng </a>
      <a href="#">Danh sách yêu thích</a>
      <a href="#">Theo dõi đơn hàng</a>
      <a href="#">Liên hệ cửa hàng</a>
    </div>

    <div :class="$style.install">
      <h4>Cài đặt ứng dụng</h4>
      <p href="#">App Store hoặc Google Play</p>
      <div class="row">
        <img src="@/assets/img/pay/app.jpg" alt="" />
        <img src="@/assets/img/pay/play.jpg" alt="" />
      </div>
      <p>Bảo mật thanh toán</p>
      <img src="@/assets/img/pay/pay.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & .col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  & .logo {
    margin-bottom: 30px;
    height: 90px;
    width: 170px;
    object-fit: cover;
  }
  & h4 {
    font-size: 14px;
    padding-bottom: 20px;
  }
  & p {
    font-size: 13px;
    margin: 0 0 8px 0;
  }
  & a {
    font-size: 13px;
    text-decoration: none;
    color: #222;
    margin-bottom: 10px;
  }
  & .follow i {
    color: #465b52;
    padding-right: 4px;
    cursor: pointer;
  }
  & .install .row img {
    border: 1px solid #088178;
    border-radius: 6px;
  }
  & .install img {
    margin: 10px 0 15px 0;
  }
  & .follow i:hover,
  a:hover {
    color: #088178;
  }
}
</style>
