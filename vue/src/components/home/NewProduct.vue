<template>
  <div :class="$style.container">
    <h2>Sản phẩm mới</h2>
    <p>Những sản phẩm mới của nhà thiết kế</p>
    <div :class="$style.procontaniner">
      <div
        v-for="product in products"
        :class="$style.pro"
        :key="product._id"
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

  <div :class="$style.section">
    <div :class="$style.advertis"></div>
  </div>

  <div :class="$style.section1">
    <div :class="$style.feature">
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f1.png" alt="" />
        <h6>Giao hàng miễn phí</h6>
      </div>
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f2.png" alt="" />
        <h6 :class="$style.child2">Mua hàng trực tuyến</h6>
      </div>
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f3.png" alt="" />
        <h6 :class="$style.child3">Tiết kiệm</h6>
      </div>
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f4.png" alt="" />
        <h6 :class="$style.child4">Khuyến mãi</h6>
      </div>
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f5.png" alt="" />
        <h6 :class="$style.child5">Trao đổi mua bán</h6>
      </div>
      <div :class="$style.ferbox">
        <img src="@/assets/img/features/f6.png" alt="" />
        <h6 :class="$style.child6">Hỗ trợ 24/7</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { ProductImage } from "@/models/product-image";
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    products: { type: Object },
  },
})
export default class NewProduct extends Vue {
  products!: Product[];

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
  padding: 40px 80px;
  text-align: center;
  user-select: none;
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
    cursor: pointer;
  }
  & .pro {
    width: 23%;
    min-width: 250px;
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
.section {
  margin: 40px 0;
  & .advertis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(@/assets/img/banner/b1.jpg);
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
  }
}

.section1 {
  padding: 40px 80px;
  & .feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    & .ferbox {
      width: 180px;
      text-align: center;
      padding: 25px 15px;
      box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
      border: 1px solid #cce7d0;
      border-radius: 4px;
      margin: 15px 0;
      & img {
        width: 100%;
        margin-bottom: 10px;
      }
      & h6 {
        display: inline-block;
        padding: 9px 8px 6px 8px;
        line-height: 1;
        border-radius: 4px;
        color: #088178;
        background-color: #fddde4;
      }
      & .child2 {
        background-color: #cdebbc;
      }
      & .child3 {
        background-color: #d1e8f2;
      }
      & .child4 {
        background-color: #cdd4f8;
      }
      & .child5 {
        background-color: #f6dbf6;
      }
      & .child6 {
        background-color: #fff2e5;
      }
    }

    & :hover {
      box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
    }
  }
}
// .newsletter {
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   align-items: center;
//   background-image: url(@/assets/img/banner/b14.png);
//   background-repeat: no-repeat;
//   background-position: 20% 30%;
//   background-color: #041e42;
//   margin: 40px 0;
//   padding: 40px 80px;

//   & h4 {
//     font-size: 22px;
//     font-weight: 700;
//     color: #fff;
//   }
//   & p {
//     font-size: 22px;
//     font-weight: 700;
//     color: #818ea0;
//     margin-top: revert;
//   }
//   & p span {
//     color: #ffbd27;
//   }
// }
// .newsForm {
//   display: flex;
//   width: 40%;

//   & input {
//     height: 3.125rem;
//     padding: 0 1.25em;
//     font-size: 14px;
//     width: 100%;
//     border: 1px solid transparent;
//     border-radius: 4px;
//     outline: none;
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   & button {
//     background-color: #088178;
//     color: #fff;
//     white-space: nowrap;
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//     font-size: 14px;
//     font-weight: 600;
//     padding: 15px 30px;
//     border-radius: 4px;
//     cursor: pointer;
//     border: none;
//     outline: none;
//     transition: 0.2s;
//   }
// }
</style>
