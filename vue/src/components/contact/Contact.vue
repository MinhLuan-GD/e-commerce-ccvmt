<template>
  <div :class="$style.container">
    <h2>Xin chào khách hàng của MST</h2>
    <p>Hãy để lại lời nhắn chúng tôi rất muốn nghe ý kiến của bạn</p>
  </div>

  <div :class="$style.contactdetails">
    <div :class="$style.details">
      <h2>Hãy ghé thăm của hàng của chúng tôi</h2>
      <h3>Thông tin về cửa hàng</h3>
      <div>
        <li>
          <img src="@/assets/img/icon/location.png" alt="" />
          <p>469 Dien Bien Phu</p>
        </li>

        <li>
          <img src="@/assets/img/icon/email.png" alt="" />
          <p>mst@gmail.com</p>
        </li>

        <li>
          <img src="@/assets/img/icon/phonepng.png" alt="" />
          <p>098 200 4578</p>
        </li>

        <li>
          <img src="@/assets/img/icon/clock.png" alt="" />
          <p>Thứ 2- Chủ nhật: 9:00 - 22:00</p>
        </li>
      </div>
    </div>
    <div :class="$style.map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1265614720305!2d106.71445589999999!3d10.801617500000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVFAuSENNIC0gSFVURUNI!5e0!3m2!1svi!2s!4v1676385449583!5m2!1svi!2s"
        width="600"
        height="450"
        style="border: 0"
        loading="lazy"
      ></iframe>
    </div>
  </div>

  <div :class="$style.formdetails">
    <form action="">
      <h2>Hãy gửi tin nhắn đến MST</h2>
      <input type="text" placeholder="Tên của bạn" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Số điện thoại" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Nhận xét đến cửa hàng"
      ></textarea>
      <button>Gửi nhận xét</button>
    </form>

    <div :class="$style.people">
      <div>
        <img src="@/assets/img/people/1.png" alt="" />
        <p>
          <span>Chin </span>Nhà thiết kế <br />
          Số điện thoại :088 300 5660 <br />
          Email: chin@gmail.com
        </p>
      </div>

      <div>
        <img src="@/assets/img/people/1.png" alt="" />
        <p>
          <span>Chin </span>Nhà thiết kế <br />
          Số điện thoại :088 300 5660 <br />
          Email: chin@gmail.com
        </p>
      </div>

      <div>
        <img src="@/assets/img/people/1.png" alt="" />
        <p>
          <span>Chin </span>Nhà thiết kế <br />
          Số điện thoại :088 300 5660 <br />
          Email: chin@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Contact extends Vue {}
</script>

<style lang="scss" module>
.container {
  background-image: url(@/assets/img/banner/b19.jpg);
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;

  & h2 {
    color: #000;
    font-style: italic;
    font-size: 46px;
    line-height: 54px;
  }
  & p {
    color: #dcef36;
    font-size: 21px;
    font-weight: 700;
    font-style: italic;
    margin: 15px 0 20px 0;
  }
}

.contactdetails {
  padding: 40px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-size: 26px;
    line-height: 35px;
    padding: 20px 0;
  }

  & .details {
    width: 40%;

    & form h2 {
      font-size: 26px;
      line-height: 35px;
      padding: 20px 0;
    }
    & h3 {
      font-size: 16px;
      padding-bottom: 15px;
      color: #088178;
    }
    & li {
      list-style: none;
      display: flex;
      padding: 10px 0;
    }
    & li i {
      font-size: 14px;
      padding-right: 22px;
    }
    & img {
      width: 30px;
      height: 20px;
      -o-object-fit: cover;
      object-fit: contain;
      margin-right: 14px;
    }
    & li p {
      margin: 0;
      font-size: 14px;
    }
  }

  & .map {
    width: 55%;
    height: 400px;
    & iframe {
      width: 100%;
      height: 100%;
    }
  }
}

.formdetails {
  display: flex;
  justify-content: space-between;
  margin: 30px;
  padding: 80px;
  border: 1px solid #e1e1e1;
  & form {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & h2 {
      font-size: 26px;
      line-height: 35px;
      padding: 20px 0;
    }
  }
  & form input,
  & form textarea {
    width: 100%;
    padding: 12px 15px;
    outline: none;
    margin-bottom: 20px;
    border: 1px solid #e1e1e1;
  }
  & form button {
    background-color: #088178;
    color: #fff;
    height: 50px;
    width: 50%;
    font-size: 24px;
  }
  & .people div {
    padding-bottom: 25px;
    display: flex;
    align-items: flex-start;
  }
  & .people div img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    margin-right: 15px;
  }
  & .people p {
    margin: 0;
    font-size: 13px;
    line-height: 25px;
  }
}
</style>
