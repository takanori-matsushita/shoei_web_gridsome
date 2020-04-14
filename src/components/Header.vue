<template>
  <header id="header" :class="headerClass">
    <div class="header-wrap">
      <div class="navbar-order">
        <div class="header-entry">
          <a
            href="https://job.mynavi.jp/21/pc/search/corp70826/outline.html"
            target="_blank"
            rel="noopener"
            class="header-entry__button"
            >ENTRY</a
          >
        </div>
        <nav
          id="navbar"
          class="navbar"
          :class="{ 'navbar--status': windowY >= 5 && windowWidth < 991.98 }"
        >
          <h1 class="navbar__title">
            <g-link to="/">SHOEI RECRUITMENT</g-link>
          </h1>
          <a
            href="#"
            class="navbar-button"
            :class="{ 'active-nav': activeNav }"
            @click.prevent="navOpen"
          >
            <div class="navbar-link">
              <span class="navbar-link__line" v-for="item in 3"></span>
            </div>
          </a>
          <transition name="navMenu">
            <div class="navbar-wrap" v-show="navMenu || windowWidth > 991.98">
              <ul class="navbar-list">
                <li
                  class="navbar-list__item"
                  v-for="item in headerItem"
                  :key="item.title"
                >
                  <g-link :to="item.link" v-if="item.bool == true">{{
                    item.title
                  }}</g-link>
                  <a :href="item.link" v-else>{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </transition>
        </nav>
      </div>
    </div>
    <slot />
  </header>
</template>

<script>
export default {
  props: ["headerClass"],
  data() {
    return {
      headerItem: [
        { title: "ABOUT SHOEI", link: "https://www.shoei-bijutsu.co.jp/" },
        { title: "JOB", link: "/job/sales/", bool: true },
        {
          title: "PEOPLE",
          link: "https://www.shoei-bijutsu.co.jp/2021_graduates/people/sales/"
        },
        { title: "ENVIRONMENT", link: "https://www.shoei-bijutsu.co.jp/news/" },
        { title: "ARCHIVE", link: "https://www.shoei-bijutsu.co.jp/works" },
        { title: "COMPANY", link: "https://www.shoei-bijutsu.co.jp/company" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//animation settings
.navMenu {
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-to,
  &-leave {
    opacity: 1;
  }
  &-enter-active,
  &-leave-active {
    transition: 0.5s;
  }
}

.header {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  &--top {
    height: 100vh;
  }
  &-wrap {
    position: relative;
    max-width: 1150px;
    margin: 0 auto;
    @each $tablet in $tablets {
      @include media($tablet) {
        padding: 0 rem(20);
        padding: 0;
      }
    }
    &__catchcopy {
      float: right;
      width: 500px;
      margin: {
        top: 12.5%;
        right: rem(100);
      }
      @each $tablet in $tablets {
        @include media($tablet) {
          width: 270px;
          margin: {
            top: rem(200);
            right: 30px;
          }
        }
      }
    }
  }
  .navbar-order {
    @each $tablet in $tablets {
      @include media($tablet) {
        display: flex;
        flex-direction: column-reverse;
      }
    }
    .header-entry {
      margin-bottom: rem(15);
      @each $tablet in $tablets {
        @include media($tablet) {
          padding-top: rem(60);
        }
      }
      &:after {
        content: "";
        clear: both;
        display: block;
      }
      &__button {
        background-color: $black;
        padding: rem(5) rem(25);
        color: $white;
        line-height: 1.5rem;
        display: inline-block;
        float: right;
        letter-spacing: rem(1.5);
        @each $tablet in $tablets {
          @include media($tablet) {
            padding: rem(20) rem(15);
          }
        }
      }
    }
    .navbar {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      &--status {
        background-color: rgba($white, 0.8);
        transition: 0.5s;
      }
      @each $tablet in $tablets {
        @include media($tablet) {
          width: 100%;
          position: fixed;
          top: 0;
          padding: rem(20) rem(20);
          display: block;
          z-index: 1000;
        }
      }
      &__title {
        font-size: rem(18);
        height: 20px;
        @include media(pc) {
          font-size: rem(28);
        }
      }
      &-button {
        display: none;
        @each $tablet in $tablets {
          @include media($tablet) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 100%;
            z-index: 3;
            cursor: pointer;
          }
        }
        .navbar-link {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          &:hover {
            .navbar-link__line {
              &:first-child {
                transform: translateY(-13px);
              }
              &:last-child {
                transform: translateY(13px);
              }
            }
          }
          &__line {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            margin-left: rem(10);
            width: 30px;
            height: 2px;
            background-color: $black;
            transition: all 0.5s;
            &:first-child {
              transform: translateY(-10px);
              width: 50px;
            }
            &:nth-child(2) {
              width: 40px;
            }
            &:last-child {
              transform: translateY(10px);
              width: 30px;
            }
          }
        }
      }
      &-wrap {
        @each $tablet in $tablets {
          @include media($tablet) {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .navbar-list {
          display: flex;
          @each $tablet in $tablets {
            @include media($tablet) {
              display: block;
              position: fixed;
              top: 60px;
              width: 100%;
              height: calc(100vh - 60px);
              background-color: rgba($white, 0.8);
            }
          }
          &__item {
            padding: 15px;
            @each $tablet in $tablets {
              @include media($tablet) {
                padding: 30px;
                // border-bottom: 1px solid $black;
              }
            }
            a {
              @extend %navlist;
              &:after {
                @extend %navlistAfter;
              }
              &:hover {
                @extend %navlistHover;
                &:after {
                  @extend %navlistHoverAfter;
                }
              }
              @each $tablet in $tablets {
                @include media($tablet) {
                  color: $black;
                }
              }
            }
          }
        }
      }
    }
  }
  .scroll {
    writing-mode: vertical-rl;
    position: absolute;
    bottom: 10px;
    right: 0;
    border: {
      left: 1px solid $lightBlack;
      bottom: 1px solid $lightBlack;
    }
    padding: {
      top: rem(20);
      left: rem(3);
      bottom: rem(30);
    }
    transform: skewY(-45deg);
    @each $tablet in $tablets {
      @include media($tablet) {
        right: 30px;
      }
    }
    @each $tablet in $tablets {
      @include media($tablet) {
        display: none;
      }
    }
    &__text {
      transform: skewY(45deg);
      display: inline-block;
    }
  }
}
</style>
