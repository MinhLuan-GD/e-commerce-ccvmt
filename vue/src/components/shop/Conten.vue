<template>
  <div :class="$style.container">
    <h2>Giao dịch siêu giá trị tại MST</h2>
    <p>MST <span> giảm giá </span>giảm tận sản phẩm tới <span>70%!</span></p>
  </div>
  <div :class="$style.container2">
    <div :class="$style.procontaniner" onclick="window.location.href='detail';">
      <div :class="$style.pro">
        <img src="@/assets/img/products/n2.jpg" alt="" />
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
        <img src="@/assets/img/products/f3.jpg" alt="" />
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
        <img src="@/assets/img/products/n2.jpg" alt="" />
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
        <img src="@/assets/img/products/n3.jpg" alt="" />
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
        <img src="@/assets/img/products/n4.jpg" alt="" />
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
        <img src="@/assets/img/products/n5.jpg" alt="" />
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
        <img src="@/assets/img/products/n6.jpg" alt="" />
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
        <img src="@/assets/img/products/n7.jpg" alt="" />
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

      <!-- New Product -->
    </div>
  </div>
  <div :class="$style.setion">
    <div :class="$style.pagination">
      <a href="#" :class="$style.spacer">1</a>
      <a href="#" :class="$style.spacer">2</a>

      <div :class="`${$style['search-icon']} ${$style.spacer}`">
        <img src="@/assets/img/arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Conten extends Vue {}
</script>

<style lang="scss" module>
.container {
  background-image: url("@/assets/img/banner/b1.jpg");
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;
  & h2 {
    font-size: 46px;
    line-height: 54px;
    color: #fff;
  }
  & p {
    font-size: 46px;
    line-height: 54px;
    color: #fff;
  }
  & span {
    color: #ef3636;
  }
}
.container2 {
  padding: 40px 80px;
  text-align: center;

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
  padding: 40px 80px;
  margin: 10px;

  .pagination {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    & .spacer {
      margin-left: 2px;
      margin-right: 2px;
    }

    & a {
      text-decoration: none;
      background-color: #088178;
      padding: 15px 20px;
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
    }

    .search-icon {
      padding: 12px 15px;
      background-color: #088178;
      border-radius: 5px;
      & img {
        font-size: 16px;
        height: 20px;
      }
    }
  }
}
</style>
