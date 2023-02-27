<template>
  <div :class="$style.container">
    <h1 class="shopee-search-result-header">
      <span :class="$style.shopeesearch">
        Kết quả tìm kiếm cho từ khoá
        <span :class="$style.shopeesearchresult">"ao"</span>
      </span>
    </h1>
    <div :class="$style.sortbar">
      <div :class="$style.title">Sắp xếp theo</div>
      <div :class="$style.lienquan">Liên quan</div>
      <div :class="$style.moinhat">Mới nhất</div>
      <div :class="$style.dropdown">
        <div :class="$style.gia">Giá</div>
        <div :class="$style.dropdowncontent">
          <p>Giá: Thấp đến cao</p>
          <p>Giá: Cao đến thấp</p>
        </div>
      </div>

      <div :class="$style.dropdown">
        <div :class="$style.gia">Mục lục</div>
        <div :class="$style.dropdowncontent">
          <p>Áo thun</p>
          <p>Giày dép</p>
          <p>Phụ kiện</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Search extends Vue {}
</script>

<style lang="scss" module>
.container {
  padding: 40px 290px;
  text-align: center;
  & .shopeesearch {
    margin: 10px;
    padding: 10px 20px;
  }
  & .shopeesearchresult {
    color: #ee4d2d;
  }

  .sortbar {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    background-color: #e7e7e7;
    justify-content: center;
    margin: 10px;
  }

  .title,
  .lienquan,
  .moinhat,
  .gia {
    padding: 10px;
    margin: 0px 5px;
  }

  .lienquan {
    background-color: #ee4d2d;
    color: white;
  }

  .moinhat {
    background-color: white;
  }

  .gia {
    background-color: white;
    width: 200px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdowncontent {
    display: none;
    font-size: 10px;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  .dropdowncontent p {
    font-size: 16px;
    cursor: default;
    padding: 4px 21px;
  }
  .dropdowncontent p:hover {
    background-color: #f2f3f4;
  }
  .dropdown:hover .dropdowncontent {
    display: block;
    font-size: 10px;
  }
}
</style>
