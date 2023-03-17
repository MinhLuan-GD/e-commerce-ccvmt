<template>
  <div v-if="!$route.query.id || !productFound" :class="$style.notfound">
    <span>Không tìm thấy sản phẩm</span>
  </div>
  <div v-else :class="$style.container">
    <div :class="$style.singlepropimage">
      <img :src="getMainImageUrl(mainImage)" id="MainImg" alt="" />

      <div :class="$style.smallimggroup">
        <div
          v-for="img in product.images"
          :class="$style.smallimgcol"
          :key="img.imageUrl"
          @click="() => changeMainImage(img.imageUrl)"
        >
          <img
            :src="getSmallImageUrl(img.imageUrl)"
            :class="img.isMain ? $style.active : ''"
            alt=""
          />
        </div>
      </div>
    </div>

    <div :class="$style.singleprodetails">
      <h4>{{ product.title }}</h4>
      <h2>{{ product.price }}</h2>
      <select>
        <option>Chọn Size</option>
        <option>Xl</option>
        <option>L</option>
        <option>M</option>
        <option>S</option>
      </select>
      <input v-model="quantity" type="number" />
      <button :class="$style.normal" @click="() => setCart()">
        Thêm vào giỏ hàng
      </button>
      <h4>Mô tả sản phẩm</h4>
      <pre>{{ description }}</pre>
    </div>
  </div>
  <div :class="$style.title">
    <h2>Những sản phẩm gợi ý</h2>
    <p>Những sản phẩm mới 2023</p>
  </div>
</template>

<script lang="ts">
import { getProduct } from "@/api/product";
import { Product } from "@/models/product";
import store from "@/store";
import { Vue } from "vue-class-component";

export default class Detail extends Vue {
  product: Product = new Product();
  description: string | Document = "";
  mainImage = "";
  productFound = true;
  quantity = 1;

  created() {
    const id = this.$route.query.id as string;
    if (id) {
      getProduct(id)
        .then((res) => {
          this.mainImage = res.data.images.filter((i) => i.isMain)[0].imageUrl;
          this.product = res.data;
          this.description = new DOMParser().parseFromString(
            res.data.description,
            "text/html"
          ).body.textContent as string;
        })
        .catch((_err) => {
          this.productFound = false;
        });
    }
  }

  setCart() {
    const cartItem = {
      product: this.product,
      quantity: this.quantity,
    };
    store.dispatch("pushToCart", cartItem);
    alert(`Đã thêm ${this.quantity} ${this.product.title} vào giỏ hàng`);
  }

  getMainImageUrl(url: string): string {
    if (!url) return "";
    return `${process.env.VUE_APP_THUMBOR_URL}500x500/products/images/${url}`;
  }

  getSmallImageUrl(url: string): string {
    if (!url) return "";
    return `${process.env.VUE_APP_THUMBOR_URL}100x100/products/images/${url}`;
  }

  changeMainImage(img: string) {
    this.mainImage = img;
    for (let i = 0; i < this.product.images.length; i++) {
      if (this.product.images[i].imageUrl == img) {
        this.product.images[i].isMain = true;
      } else {
        this.product.images[i].isMain = false;
      }
    }
  }
}
</script>

<style lang="scss" module>
.notfound {
  text-align: center;
  margin-top: 50px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 60px;
    font-weight: 600;
    color: #000;
  }
}
.container {
  display: flex;
  margin-top: 20px;
  padding: 40px 80px;

  & .singlepropimage {
    width: 40%;
    margin-right: 50px;
    & img {
      width: 100%;
    }

    & .smallimggroup {
      display: flex;
      justify-content: flex-start;

      & .smallimgcol {
        flex-basis: 24%;
        margin-right: 5px;
        cursor: pointer;
        & .active {
          border: 2px solid #ef3636;
        }
      }

      & .smallimgcol:last-child {
        margin-right: 0;
      }
    }
  }
  & .singleprodetails {
    width: 50%;
    padding: 30px;
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
    & pre {
      font-family: inherit;
      white-space: pre-wrap;
      font-size: 16px;
      color: #000;
    }
    & h6 {
      font-weight: 700;
      font-size: 12px;
      color: #ef3636;
    }
    & h2 {
      font-size: 26px;

      line-height: 54px;
      color: #222;
    }
  }
  & .singleprodetails h4 {
    padding: 40px 0 20px 0;
  }
  & .singleprodetails h2 {
    font-size: 26px;
  }
  & .singleprodetails select {
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
  & .singleprodetails input {
    width: 50px;
    height: 47px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;
  }
  & .singleprodetails input:focus {
    outline: none;
  }

  & .singleprodetails button {
    background: #088178;
    color: #fff;
  }

  & .normal {
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
  & h4 {
    padding: 40px 0 20px 0;
    font-size: 24px;
  }

  & .singleprodetails span {
    line-height: 25px;
  }
}

.title {
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
}
</style>
