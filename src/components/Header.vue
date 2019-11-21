<template>
  <header class="header">
    <button class="header__btn" @click="setSortType('Default')">
      <span>Default Order</span>
    </button>
    <button class="header__btn" @click="setSortType('ID')">
      <span>Sort By Number</span>
    </button>
    <button class="header__btn" @click="setSortType('Name')">
      <span>Sort By Name</span>
    </button>
    <button class="header__btn">
      <span>Sort By Franchise</span>
    </button>
    <button class="header__btn">
      <span>Filter By Franchise</span>
    </button>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions(['setSortTypeState']),
    setSortType(sortType) {
      this.setSortTypeState(sortType)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 28px;
  flex-wrap: wrap;

  @media screen and (max-width: 769px) {
    height: auto;
  }

  &__btn {
    height: 100%;
    align-self: center;
    cursor: pointer;
    width: auto;
    min-width: 200px;
    outline: none;
    background-image: linear-gradient(to right, #e52521, #111);
    border: 2px solid #e7e7e7;
    transform: skew(30deg, 0deg);
    z-index: 100;
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;

    &:before {
      content: '';
      background-image: linear-gradient(to right, #111, #43b047);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -100;
    }

    &:hover:before {
      opacity: 1;
    }

    & > span {
      display: inline-block;
      transform: skew(-30deg, 0deg);
    }
  }
}
</style>
