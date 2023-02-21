<template>
  <div :class="$style.container">
    <h2>Sản phẩm nổi bật</h2>
    <p>Những sản phẩm mới được thiết kế cho mùa hè</p>
    <div
      :class="$style.procontaniner"
      onclick="window.location.href='sproduct.html';"
    >
      <!-- List product -->

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
          </div>
          <h4>$78</h4>
        </div>
        <div :class="$style.cart">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>

      <div :class="$style.pro">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>Cartoon áo thun</h5>
          <div :class="$style.rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span
            ><span>☆</span>
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
  <div :class="$style.setion">
    <div :class="$style.banner">
      <h4>Sale độc quyền tại MST</h4>
      <h2>Cập nhật <span>giảm 70% </span>- Tất cả áo thun và phụ kiện</h2>
      <button :class="$style.normal">Mua sắm nhiều hơn</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class RatingProduct extends Vue {}
</script>

<style lang="scss" module>
.container {
  padding: 40px 80px;
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
    transition: 0.5s ease;
    position: relative;

    & :hover {
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
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
      }
      & .rating > span:hover:before,
      & .rating > span:hover ~ span:before {
        content: "\2605";
        position: absolute;
        left: 0;
        color: gold;
      }
      & .rating > span {
        display: inline-block;
        position: relative;
        width: 1.1em;
        font-size: 20px;
      }
      & .rating > span:hover,
      & .rating > span:hover ~ span {
        color: transparent;
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
      & img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.setion {
  margin: 40px 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Spartan", sans-serif;
  & .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("@/assets/img/banner/b2.jpg");
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
    & h4 {
      color: #fff;
      font-size: 16px;
    }
    & h2 {
      color: #fff;
      font-size: 16px;
      padding: 10px 0;
    }
    & h2 span {
      color: #ef3636;
    }
    & button:hover {
      background: #088178;
      color: #fff;
    }
    & button.normal {
      font-size: 14px;
      font-weight: 600;
      padding: 15px 30px;
      color: #000;
      background-color: #fff;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      outline: none;
      transition: 0.2s;
    }
  }
}
</style>
