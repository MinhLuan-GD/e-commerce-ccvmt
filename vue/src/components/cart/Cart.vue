<template>
  <div :class="$style.container">
    <h2>Giỏ hàng của bạn</h2>
    <p>Hãy nhập mã giảm giá để được nhiều ưu đãi giảm 70%</p>
  </div>
  <div :class="$style.emptyCart" v-if="$store.state.cart.length === 0">
    Giỏ hàng của bạn đang trống&nbsp;
    <span @click="() => $router.push('/')">quay lại shop</span>
  </div>
  <div v-else :class="$style.cart">
    <table width="100%">
      <thead>
        <tr>
          <td>Xóa sản phẩm</td>
          <td>Hình ảnh</td>
          <td>Tên sản phẩm</td>
          <td>Giá sản phẩm</td>
          <td>Số lượng</td>
          <td>Giá tiền</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.state.cart" :key="item.product._id">
          <td>
            <img
              @click="() => deleteCartItem(item.product._id)"
              src="@/assets/img/icon/cancel.png"
              alt="delete"
            />
          </td>
          <td>
            <img :src="productImage(item.product)" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>{{ item.product.price }}đ</td>
          <td><input type="number" v-model="item.quantity" /></td>
          <td>{{ item.product.price * item.quantity }}đ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div :class="$style.thead">
    <thead>
      <tr></tr>
    </thead>
  </div>

  <div v-if="$store.state.cart.length !== 0" :class="$style.cartadd">
    <div :class="$style.coupon">
      <table>
        <h3>Mã giảm giá</h3>
        <div>
          <input
            type="text"
            placeholder="Hãy nhập mã giảm giá để được giá ưu đãi "
          />
          <button :class="$style.normal">Áp dụng</button>
        </div>
      </table>
    </div>

    <div :class="$style.subtotal">
      <h3>Thanh toán</h3>
      <table>
        <tr>
          <td>Tổng tiền</td>
          <td>{{ toStringCost(total()) }}</td>
        </tr>
        <tr>
          <td>Mã giảm giá</td>
          <td>0.0</td>
        </tr>

        <tr>
          <td>Giao hàng</td>
          <td>Miễn phí</td>
        </tr>
        <tr>
          <td>
            <strong>
              <p>Tổng tiền</p>
            </strong>
          </td>
          <td>
            <strong>
              <p>{{ toStringCost(total()) }}</p>
            </strong>
          </td>
        </tr>
      </table>
      <button @click="order" :class="$style.normal">Đặt hàng</button>
    </div>
  </div>
</template>

<script lang="ts">
import { createOrder } from "@/api/order";
import { Order } from "@/models/order";
import { Product } from "@/models/product";
import { ProductImage } from "@/models/product-image";
import store from "@/store";
import { Vue } from "vue-class-component";

export default class Cart extends Vue {
  productImage(product: Product): string {
    const img = product.images.find((img) => img.isMain) as ProductImage;
    return `${process.env.VUE_APP_THUMBOR_URL}300x300/products/images/${img.imageUrl}`;
  }

  deleteCartItem(id: string) {
    store.dispatch("popFromCart", id);
  }

  total() {
    return this.$store.state.cart.reduce(
      (v, i) => v + i.product.price * i.quantity,
      0
    );
  }

  toStringCost(cost: number) {
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  }

  order() {
    const user = store.state.user;
    if (user && user.address) {
      const newOrder: Order = {
        cart: store.state.cart.map((item) => {
          return {
            image: item.product.images.filter((img) => img.isMain)[0].imageUrl,
            price: item.product.price,
            productId: item.product._id,
            title: item.product.title,
            quantity: item.quantity,
          };
        }),
        userId: user._id,
        shippingAddress: user.address,
      };
      createOrder(newOrder)
        .then(() => {
          store.dispatch("clearCart");
          this.$router.push("/");
        })
        .catch(() => {
          alert("Đặt hàng thất bại");
        });
    }
  }
}
</script>

<style lang="scss" module>
.container {
  background-image: url("@/assets/img/banner/banner.png");
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
    margin: 10px;
  }
  & p {
    color: #ef3636;
    font-size: 21px;
    font-weight: 700;
    font-style: italic;
  }
}
.emptyCart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 300px;
  & span {
    color: #ef3636;
    font-style: italic;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.cart {
  overflow: auto;
  padding: 40px 80px;

  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    & td:not(:nth-child(3)) {
      text-align: center;
    }
    & td:nth-child(1) {
      width: 100px;
      padding: 10px;
      & img {
        width: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & td:nth-child(2) {
      width: 200px;
      & img {
        width: 60%;
      }
    }
    & td:nth-child(3) {
      width: 560px;
      word-wrap: break-word;
    }
    & td:nth-child(5) input {
      width: 70px;
      padding: 10px 5px 10px 15px;
      &:hover {
        border: 1px solid #ef3636;
      }
    }
    & thead {
      border: 1px solid #e2e9e1;
      border-left: none;
      border-right: none;
    }
    & thead td {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 13px;
      padding: 18px 0;
    }
  }
}

.thead {
  border: 3px solid #e2e9e1;
  border-left: none;
  border-right: none;
  margin: 10px;
}

.cartadd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 80px;

  & .coupon {
    width: 50%;
    margin-bottom: 30px;
  }

  & h3,
  & h3 {
    padding-bottom: 15px;
  }
  & input {
    padding: 10px 20px;
    outline: none;
    font-size: 12px;
    width: 270px;
    margin-right: 10px;
    border: 1px solid #e2e9e1;
  }
  & button,
  & button {
    background-color: #088178;
    color: #fff;
    padding: 12px 20px;

    border-radius: 10px;
  }
  & .subtotal {
    width: 50%;
    margin-bottom: 30px;
    border: 1px solid #e2e9e1;
    padding: 30px;
    border-radius: 15px;

    & table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }
    & .totolred {
      color: red;
    }
    & table td {
      width: 50%;
      border: 1px solid #e2e9e1;
      padding: 10px;
      font-size: 13px;
    }
    & table td p {
      font-size: 13px;
      color: red;
    }
  }
}
</style>
