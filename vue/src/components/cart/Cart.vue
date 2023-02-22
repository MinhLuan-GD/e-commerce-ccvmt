<template>
  <div :class="$style.container">
    <h2>Giỏ hàng của bạn</h2>
    <p>Hãy nhập mã giảm giá để được nhiều ưu đãi giảm 70%</p>
  </div>
  <div :class="$style.cart">
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
        <tr>
          <td>
            <img src="@/assets/img/icon/cancel.png" alt="search" />
          </td>
          <td><img src="@/assets/img/products/f2.jpg" alt="" /></td>
          <td>Áo thun</td>
          <td>139.000</td>
          <td><input type="number" value="1" /></td>
          <td>130.000</td>
        </tr>

        <tr>
          <td>
            <img src="@/assets/img/icon/cancel.png" alt="search" />
          </td>
          <td><img src="@/assets/img/products/f3.jpg" alt="" /></td>
          <td>Áo thun</td>
          <td>139.000</td>
          <td><input type="number" value="1" /></td>
          <td>130.000</td>
        </tr>

        <tr>
          <td>
            <img src="@/assets/img/icon/cancel.png" alt="search" />
          </td>
          <td><img src="@/assets/img/products/f4.jpg" alt="" /></td>
          <td>Áo thun</td>
          <td>139.000</td>
          <td><input type="number" value="1" /></td>
          <td>130.000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div :class="$style.thead">
    <thead>
      <tr></tr>
    </thead>
  </div>

  <div :class="$style.cartadd">
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
          <td>335.000</td>
        </tr>
        <tr>
          <td>Mã giảm giá</td>
          <td>35.000</td>
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
              <p>355.000</p>
            </strong>
          </td>
        </tr>
      </table>
      <button :class="$style.normal">Đặt hàng</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Cart extends Vue {}
</script>

<style lang="scss" module>
.container {
  background-image: url(@/assets/img/banner/banner.png);
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
.cart {
  overflow: auto;
  padding: 40px 80px;

  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    white-space: nowrap;

    img {
      width: 50%;
      font-weight: 600px;
    }

    & td:nth-child(1) {
      width: 100px;
      text-align: center;
      padding: 10px;
    }
    & td:nth-child(2) {
      width: 250px;
      text-align: center;
    }
    &e td:nth-child(3) {
      width: 250px;
      text-align: center;
    }
    & td:nth-child(4) {
      width: 250px;
      text-align: center;
    }

    & td:nth-child(5) {
      width: 250px;
      text-align: center;
    }
    & td:nth-child(6) {
      width: 200px;
      text-align: center;
    }
    & td:nth-child(5) input {
      width: 70px;
      padding: 10px 5px 10px 15px;
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
    width: 60%;
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
