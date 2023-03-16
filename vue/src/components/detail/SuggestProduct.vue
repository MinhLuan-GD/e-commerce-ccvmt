<template>
  <div :class="$style.container">
    <div :class="$style.procontaniner" onclick="window.location.href='detail';">
      <!-- List product -->

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f2.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f3.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f4.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f5.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f6.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f7.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f8.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span :class="$style.active">☆</span><span>☆</span><span>☆</span
            ><span>☆</span><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <!-- List product -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SuggestProduct extends Vue {}
</script>

<style lang="scss" module>
.container {
  padding: 10px 80px;
  text-align: center;

  & h2 {
    font-size: 46px;
    line-height: 54px;
    color: #222;
  }
  & p {
    font-size: 26px;
    color: #465b52;
    margin: 15px 0 20px 0;
  }
  & .procontaniner {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
  }
  & .pro {
    width: 23%;
    min-width: n250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 2px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;
    &:hover {
      transform: scale(1.05) translateY(-10px);
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.1);
    }
    & img {
      width: 100%;
      border-radius: 20px;
    }
    & .des {
      text-align: start;
      padding: 10px 0;
      & span {
        color: #606063;
        font-size: 12px;
      }
      & h5 {
        padding-top: 7px;
        color: #1a1a1a;
        font-size: 14px;
      }
      & .rating {
        unicode-bidi: bidi-override;
        direction: rtl;
        text-align: end;
        & > span {
          display: inline-block;
          position: relative;
          width: 1.1em;
          font-size: 20px;
        }
        & > span.active,
        & > span.active ~ span {
          color: transparent;
        }
        & > span.active:before,
        & > span.active ~ span:before {
          content: "\2605";
          position: absolute;
          left: 0;
          color: #000;
        }
      }

      & h4 {
        padding-top: 7px;
        font-size: 15px;
        font-weight: 700;
        color: #088178;
      }
    }
    & .cart {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50px;
      background-color: #e8f6ea;
      font-weight: 500;
      color: #088178;
      border: 1px solid #cce7d0;
      position: absolute;
      bottom: 20px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
