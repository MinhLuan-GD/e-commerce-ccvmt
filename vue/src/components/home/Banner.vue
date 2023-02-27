<template>
  <div :class="$style.container">
    <div :class="$style.hero">
      <h4>Trang thương mại cao cấp</h4>
      <h2>Giao dịch siêu giá trị tại MST</h2>
      <h1>Tất cả các sản phẩm thương hiệu</h1>
      <p>Nhiều mã giảm giá và giảm tận sản phẩm tới 70%!</p>
      <button>Mua sắm</button>
    </div>

    <div :class="$style.bannerlogo">
      <img src="@/assets/img/logo4.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Banner extends Vue {}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: row;
  background-color: #e3e6f3;
  height: 640px;

  & .hero {
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 10% right 10;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & h4 {
      font-size: 24px;
      color: #222;
      padding-bottom: 15px;
    }
    & h2 {
      font-size: 36px;
      line-height: 54px;
      color: #222;
    }

    & h1 {
      color: #088178;
      font-size: 43px;
      line-height: 66px;
    }
    & p {
      font-size: 26px;
      color: #465b52;
      margin: 15px 0 20px 0;
    }
    & button {
      background-image: url("@/assets/img/button.png");
      background-color: transparent;
      color: #088178;
      border: 0;
      padding: 14px 80px 14px 65px;
      background-repeat: no-repeat;
      cursor: pointer;
      font-weight: 700;
      font-size: 15px;
    }
  }
  & .bannerlogo {
    height: 85vh;
    background-size: cover;
    background-position: top 10% right 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
