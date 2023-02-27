<template>
  <div :class="$style.container">
    <div :class="$style.singlepropimage">
      <img src="@/assets/img/products/f2.jpg" id="MainImg" alt="" />

      <div :class="$style.smallimggroup">
        <div :class="$style.smallimgcol">
          <img
            src="@/assets/img/products/f1.jpg"
            :class="$style.smallimg"
            alt=""
          />
        </div>

        <div :class="$style.smallimgcol">
          <img
            src="@/assets/img/products/f2.jpg"
            :class="$style.smallimg"
            alt=""
          />
        </div>

        <div :class="$style.smallimgcol">
          <img
            src="@/assets/img/products/f3.jpg"
            :class="$style.smallimg"
            alt=""
          />
        </div>

        <div :class="$style.smallimgcol">
          <img
            src="@/assets/img/products/f4.jpg"
            :class="$style.smallimg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div :class="$style.singleprodetails">
      <div onclick="window.location.href='shop.html';">
        <h6>Trở về trang chủ</h6>
      </div>

      <h4>Áo thời trang nam mùa hè</h4>
      <h2>139.000</h2>
      <select>
        <option>Chọn Size</option>
        <option>Xl</option>
        <option>L</option>
        <option>M</option>
        <option>S</option>
      </select>

      <input type="number" value="1" />
      <button :class="$style.normal">Thêm vào giỏ hàng</button>
      <h4>Mô tả sản phẩm</h4>
      <span
        >Thương hiệu thời trang dành riêng cho phụ nữ Việt Nam có thiết kế đa
        dạng, trẻ trung, giá thành hợp lý Từng sản phẩm của Sunfly đều được thổi
        hồn nét quyến rũ, tươi trẻ, tự tin, tràn đầy sức sống trên nền chất liệu
        vải rất đa dạng từ vải dệt kim Cotton + Spandex đến các chất liệu hot
        trend. Quy trình khép kín từ thiết kế – sản xuất – phân phối, được đầu
        tư một cách chuyên nghiệp và bài bản. Đạt tiêu chuẩn theo qui trình quản
        lý chất lượng theo tiêu chuẩn ISO. Đội ngũ nhân sự tại công ty luôn được
        tuyển chọn kỹ lưỡng đầu vào, có năng lực cao, tâm huyết, luôn nghiên
        cứu. Ttìm tòi các giải pháp, công nghệ mới để ứng dụng cải tiến sản
        phẩm. Vượt mọi thách thức để vươn tới những đỉnh cao, chân trời
        mới.</span
      >
    </div>
  </div>
  <div :class="$style.title">
    <h2>Những sản phẩm gợi ý</h2>
    <p>Những sản phẩm mới 2023</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Detail extends Vue {}
</script>

<style lang="scss" module>
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
      justify-content: space-between;

      & .smallimgcol {
        flex-basis: 24%;
        cursor: pointer;
      }
    }
  }
  & .singleprodetails {
    width: 50%;
    padding: 30px;
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
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
