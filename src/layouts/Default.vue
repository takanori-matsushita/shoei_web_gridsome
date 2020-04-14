<template>
  <div>
    <SvgComponent></SvgComponent>
    <header id="header" class="header header--top">
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
              <a href="index.html">SHOEI RECRUITMENT</a>
            </h1>
            <a
              href="#"
              class="navbar-button"
              :class="{ 'active-nav': activeNav }"
              @click.prevent="navOpen"
            >
              <div class="navbar-link">
                <span class="navbar-link__line"></span>
                <span class="navbar-link__line"></span>
                <span class="navbar-link__line"></span>
              </div>
            </a>
            <transition name="navMenu">
              <div class="navbar-wrap" v-show="navMenu || windowWidth > 991.98">
                <ul class="navbar-list">
                  <li class="navbar-list__item">
                    <a href="https://www.shoei-bijutsu.co.jp/">ABOUT SHOEI</a>
                  </li>
                  <li class="navbar-list__item">
                    <a href="job/sales.html">JOB</a>
                  </li>
                  <li class="navbar-list__item">
                    <a
                      href="https://www.shoei-bijutsu.co.jp/2021_graduates/people/sales/"
                      >PEOPLE</a
                    >
                  </li>
                  <li class="navbar-list__item">
                    <a href="https://www.shoei-bijutsu.co.jp/news/"
                      >ENVIRONMENT</a
                    >
                  </li>
                  <li class="navbar-list__item">
                    <a href="https://www.shoei-bijutsu.co.jp/works">ARCHIVE</a>
                  </li>
                  <li class="navbar-list__item">
                    <a
                      href="https://www.shoei-bijutsu.co.jp/company"
                      target="_blank"
                      rel="noopener"
                      >COMPANY</a
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </nav>
        </div>
      </div>
    </header>
    <slot />
    <footer id="footer" class="footer">
      <div class="footer-entry">
        <p class="footer-entry__word fade">挑戦するあなたを待っています！</p>
        <div class="svgFooter">
          <svg viewBox="0 -100 2000 1230" class="svgFooter--footer">
            <use xlink:href="#bg-large" />
          </svg>
        </div>
        <div class="footer-entry-inner">
          <a
            href="https://footer.mynavi.jp/21/pc/search/corp70826/outline.html"
            target="_blank"
            rel="noopener"
            class="footer-entry-inner__button fade"
            >ENTRY</a
          >
        </div>
      </div>
      <div class="footer-inner">
        <a href="index.html">
          <g-image
            src="~/assets/images/footer_logo.svg"
            class="footer-inner__image"
          />
        </a>
      </div>
      <nav class="footer-navbar">
        <ul class="footer-navbar-list">
          <li class="footer-navbar-list__item">
            <a href="https://www.shoei-bijutsu.co.jp/">ABOUT SHOEI</a>
          </li>
          <li class="footer-navbar-list__item">
            <a href="job/sales.html">JOB</a>
          </li>
          <li class="footer-navbar-list__item">
            <a
              href="https://www.shoei-bijutsu.co.jp/2021_graduates/people/sales/"
              >PEOPLE</a
            >
          </li>
          <li class="footer-navbar-list__item">
            <a href="https://www.shoei-bijutsu.co.jp/news/">ENVIRONMENT</a>
          </li>
          <li class="footer-navbar-list__item">
            <a href="https://www.shoei-bijutsu.co.jp/works">ARCHIVE</a>
          </li>
          <li class="footer-navbar-list__item">
            <a
              href="https://www.shoei-bijutsu.co.jp/company"
              target="_blank"
              rel="noopener"
              >COMPANY</a
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SvgComponent from "~/components/Svg.vue";

export default {
  components: {
    SvgComponent: SvgComponent
  }
};
</script>

<style lang="scss">
//web font import
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: $baseFontSize + px;
}

body {
  font-family: "Noto Sans JP";
}

a {
  text-decoration: none;
  color: $lightBlack;
}

.sp-only {
  display: block;
  @include media(pc) {
    display: none;
  }
}

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

.fade {
  opacity: 0;
  transition: 1s;
  transform: translateY(50px);
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}

.position-outside {
  position: absolute;
  left: -9999px;
}

.header {
  font-family: Helvetica, Arial, sans-serif;
  // height: 100vh;
  margin: 0 auto;
  &-wrap {
    // height: 100vh;
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

.footer {
  &-entry {
    margin-bottom: rem(75);
    text-align: center;
    &__word {
      margin-bottom: rem(30);
      font-size: rem(16);
      @include media(pc) {
        font-size: rem(20);
      }
    }
    &-inner {
      margin: 0 auto;
      max-width: 1000px;
      &__button {
        display: block;
        padding: rem(30) 0;
        color: $white;
        position: relative;
        font: {
          weight: bold;
          size: rem(20);
        }
        z-index: 0;
        line-height: rem(30);
        overflow: hidden;
        &:before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          transition: 0.5s;
          background: linear-gradient(to right, #c4e5f7, #e1007f);
        }
        &:after {
          content: "";
          width: calc(100% + 90px);
          height: 200%;
          position: absolute;
          z-index: -2;
          top: -100%;
          left: calc(-100% - 90px);
          transition: all 0.5s;
          transform: skewX(-45deg);
          background: linear-gradient(to left, #c4e5f7, #e1007f);
        }
        &:hover:after {
          top: 0;
          left: -90px;
          z-index: -1;
        }
        @each $tablet in $tablets {
          @include media($tablet) {
            width: 95%;
            margin: auto;
          }
        }
      }
    }
  }
  &-inner {
    max-width: 250px;
    margin: auto {
      bottom: rem(200);
    }
    @include media(pc) {
      max-width: 500px;
    }
  }
  &-navbar {
    margin-bottom: rem(100);
    border-top: 3px solid #013476;
    &-list {
      display: flex;
      justify-content: center;
      &__item {
        margin: 0 15px;
        margin-top: rem(50);
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
        }
      }
    }
    display: none;
    @include media(pc) {
      display: block;
    }
  }
}
</style>
