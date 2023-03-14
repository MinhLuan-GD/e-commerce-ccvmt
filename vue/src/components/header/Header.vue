<template>
  <div :class="$style.container">
    <div :class="$style.logo" onclick="window.location.href = '/';">
      <img src="@/assets/img/logo1.png" alt="logo" />
    </div>
    <div :class="$style.navbar">
      <input type="text" placeholder=" Nhập sản phẩm cần tìm" />
      <div
        @click="(e) => $router.replace('/search')"
        :class="$style['search-icon']"
      >
        <img src="@/assets/img/icon/search.png" alt="search" />
      </div>
      <div
        @click="(e) => $router.replace('/')"
        :class="
          activity === 'home'
            ? `${$style.item} ${$style.activate}`
            : $style.item
        "
      >
        Home
      </div>

      <div
        @click="(e) => $router.replace('/shop')"
        :class="
          activity === 'shop'
            ? `${$style.item} ${$style.dropdown} ${$style.activate}`
            : `${$style.item} ${$style.dropdown}`
        "
      >
        Shop
        <div :class="$style.content">
          <p>Áo thun</p>
          <p>Giày dép</p>
          <p>Phụ kiện</p>
        </div>
      </div>

      <div
        @click="(e) => $router.replace('/contact')"
        :class="
          activity === 'contact'
            ? `${$style.item} ${$style.activate}`
            : $style.item
        "
      >
        Contact
      </div>
      <div @click="(e) => $router.replace('/cart')" :class="$style.item">
        <img src="@/assets/img/bag.png" alt="bag" />
      </div>
      <div @click="(e) => $router.replace('/login')" :class="$style.item">
        <img
          src="@/assets/img/user.png"
          width="25px"
          height="25px"
          alt="user"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    activity: String,
  },
})
export default class Header extends Vue {
  activity!: string;
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background: #e3e6f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  & .logo {
    cursor: pointer;
    & img {
      width: 170px;
      height: 70px;
      object-fit: cover;
    }
  }
  & .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0;
    position: relative;
    & .search-icon {
      position: absolute;
      left: 264px;
      top: 10px;
      cursor: pointer;
      & img {
        width: 20px;
        height: 20px;
      }
    }
    & .activate {
      color: #088178;
      &::after {
        content: "";
        width: 30%;
        height: 2px;
        background: #088178;
        position: absolute;
        bottom: -4px;
        left: 20px;
      }
    }
    & .dropdown {
      position: relative;
      display: inline-block;
      & .content {
        display: none;
        left: -16px;
        font-size: 10px;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 120px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        z-index: 1;
        & p {
          font-size: 16px;
          cursor: default;
          padding: 5px 10px;
          margin: 5px 0;
          &:hover {
            background-color: #f2f3f4;
          }
        }
      }
      &:hover .content {
        display: block;
        font-size: 10px;
      }
    }
    & .item {
      padding: 0 20px;
      position: relative;
      cursor: pointer;
      & img {
        width: 20px;
        height: 20px;
      }
      &:hover::after {
        content: "";
        width: 30%;
        height: 2px;
        background: #088178;
        position: absolute;
        bottom: -4px;
        left: 20px;
      }
    }
    & input {
      height: 40px;
      width: 300px;
      border-radius: 50px;
      padding: 0 15px;
    }
  }
}
</style>
