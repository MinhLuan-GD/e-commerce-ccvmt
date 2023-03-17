<template>
  <div :class="$style.container">
    <h2>Giao dịch siêu giá trị tại MST</h2>
    <p>MST <span> giảm giá </span>giảm tận sản phẩm tới <span>70%!</span></p>
  </div>
  <div :class="$style.container2">
    <div :class="$style.procontaniner">
      <div
        v-for="product in $store.state.products"
        :key="product._id"
        :class="$style.pro"
        @click="() => $router.push(`/detail?id=${product._id}`)"
      >
        <img :src="productImage(product)" alt="product-image" />
        <div :class="$style.des">
          <span>Thương hiệu Adidas</span>
          <h5>{{ product.title }}</h5>
          <div :class="$style.rating">
            <span :class="product.rating == 5 ? $style.active : ''">☆</span
            ><span :class="product.rating == 4 ? $style.active : ''">☆</span
            ><span :class="product.rating == 3 ? $style.active : ''">☆</span
            ><span :class="product.rating == 2 ? $style.active : ''">☆</span
            ><span :class="product.rating == 1 ? $style.active : ''">☆</span>
          </div>
          <h4>{{ product.price }}đ</h4>
        </div>
        <div :class="$style.cart" @click.stop="() => setCart(product)">
          <img src="@/assets/img/cart.png" alt="" />
        </div>
      </div>
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
import { Product } from "@/models/product";
import { ProductImage } from "@/models/product-image";
import store from "@/store";
import { Vue } from "vue-class-component";

export default class Conten extends Vue {
  productImage(product: Product): string {
    const img = product.images.find((img) => img.isMain) as ProductImage;
    return `${process.env.VUE_APP_THUMBOR_URL}300x300/products/images/${img.imageUrl}`;
  }

  setCart(product: Product) {
    store.dispatch("pushToCart", { product, quantity: 1 });
    alert(`Đã thêm ${product.title} vào giỏ hàng`);
  }
}
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
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding-top: 20px;
  }
  & .pro {
    width: 90%;
    min-width: 250px;
    max-width: 400px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 10px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
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
