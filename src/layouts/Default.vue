<template>
  <div>
    <SvgComponent></SvgComponent>
    <Header headerClass="header" />
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
