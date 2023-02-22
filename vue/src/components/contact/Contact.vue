<template>
  <div :class="$style.container">
    <h2>Xin chào khách hàng của MST</h2>
    <p>Hãy để lại lời nhắn chúng tôi rất muốn nghe ý kiến của bạn</p>
  </div>

  <div :class="$style.contactdetails">
    <div :class="$style.details">
      <h2>Hãy ghé thăm của hàng của chúng tôi</h2>
      <h3>Thông tin về cửa hàng</h3>
      <div>
        <li>
          <i class="fal fa-map"></i>
          <p>469 Dien Bien Phu</p>
        </li>

        <li>
          <i class="fal fa-envelope"></i>
          <p>mst@gmail.com</p>
        </li>

        <li>
          <i class="fal fa-phone-alt"></i>
          <p>098 200 4578</p>
        </li>

        <li>
          <i class="fal fa-clock"></i>
          <p>Thứ 2- Chủ nhật: 9:00 - 22:00</p>
        </li>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Contact extends Vue {}
</script>

<style lang="scss" module>
.container {
  background-image: url(@/assets/img/banner/b19.jpg);
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;
}
</style>
