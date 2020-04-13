<template>
  <Layout>
    <main class="main main--top">
      <section id="description" class="description">
        <div class="description-textbox fade">
          <p class="description-textbox__text">
            新しい価値を世の中に届けようと、<br
              class="sp-only"
            />挑戦している人がいる。
          </p>
          <p class="description-textbox__text">
            そんな挑戦者に寄り添いながら、<br />
            胸を張ってビジネスができる機会を、<br
              class="sp-only"
            />私たちはつくりたい。
          </p>
          <p class="description-textbox__text">
            リアルな場で大切なのは、心まで動かすこと。<br />
            届けたいのは、情報ではなく、人の想いです。<br />
            声が届き、想いが届き、初めて心で握手ができる。<br />
            そうやって、新しいビジネスは生まれます。
          </p>
        </div>
        <div class="description-textbox fade">
          <p class="description-textbox__text">
            クライアントに心を傾け、自らの手と頭を惜しみなく使う。<br />
            コミュニケーションを想像し、<br />
            無限のイメージを有限のスペースに表現する。<br />
            心を動かすようなデザインで世界観をつくり、<br />
            新しい体験を生み出していく。
          </p>
          <p class="description-textbox__text">
            私たち全員で紡いだ仕事が、<br />
            その姿を留めているのは一瞬かもしれません。<br />
            けれど、ビジネスの一生はそこから始まります。
          </p>
        </div>
        <div class="svgSmall" v-if="windowWidth > 991.98">
          <svg
            class="svgSmall__element svgSmall__element--pc"
            viewBox="95 0 230 100"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
        <div class="description-textbox fade">
          <p class="description-textbox__text">
            それは、一人の人生を変えるかもしれない。<br />
            そして、世の中の当たり前を変えるかもしれない。<br />
            やがて、国境を越え、世界を変えるかもしれない。
          </p>
          <p class="description-textbox__text">
            私たちの仕事の原点には、<br
              class="sp-only"
            />いつだって人の想いと意志があります。<br />
            だから、一つひとつの仕事に意味や意図を込め、<br
              class="sp-only"
            />その想いに応えていく。<br />
            つくっているのは、意志ある物語の、はじまりです。
          </p>
          <p
            class="description-textbox__text description-textbox__text--large fade"
          >
            つくろう、はじまりを。<br />昭栄美術
          </p>
        </div>
        <div class="svgSmall" v-if="windowWidth < 991.98">
          <svg
            class="svgSmall__element svgSmall__element--sp"
            viewBox="95 0 230 100"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
      </section>
      <section id="about" class="about">
        <h2 class="about-title fade">ABOUT SHOEI</h2>
        <!-- <h2 class="about-title fade"><g-image src="~/assets/images/about.svg" alt="about shoei" class="about-title__image">
        </h2> -->
        <h3 class="about__subtitle fade">昭栄美術とは</h3>
        <p class="about__description fade">
          空間創造を通じ、人のつながりから、<br
            class="sp-only"
          />新たな価値を生み出します。
        </p>
        <div class="about-point">
          <a href="/mission" class="about-point__link fade">
            <div class="about-point-overlay">
              <h4 class="about-point-overlay__title">ミッション/ビジョン</h4>
              <g-image
                src="~/assets/images/about_mission.png"
                class="about-point-overlay__image"
              />
            </div>
          </a>
          <a href="/message" class="about-point__link fade">
            <div class="about-point-overlay">
              <h4 class="about-point-overlay__title">メッセージ</h4>
              <g-image
                src="~/assets/images/about_message.png"
                class="about-point-overlay__image"
              />
            </div>
          </a>
          <a href="/appeal" class="about-point__link fade">
            <div class="about-point-overlay">
              <h4 class="about-point-overlay__title">昭栄美術の強み</h4>
              <g-image
                src="~/assets/images/about_appeal.png"
                class="about-point-overlay__image"
              />
            </div>
          </a>
        </div>
        <div class="svgSmall svgSmall--02">
          <svg
            class="svgSmall__element svgSmall__element--pc02"
            viewBox="95 0 230 100"
            v-if="windowWidth > 991.98"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
          <svg
            class="svgSmall__element svgSmall__element--sp02"
            viewBox="55 0 230 100"
            v-if="windowWidth < 991.98"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
      </section>
      <section id="job" class="job">
        <h2 class="job-title fade">JOB</h2>
        <!-- <h2 class="job-title fade"><g-image src="~/assets/images/job.svg" alt="job" class="job-title__image"></h2> -->
        <h3 class="job__subtitle fade">昭栄美術の仕事紹介</h3>
        <p class="job__description fade">
          空間創造領域において、企画から製作までを<br
            class="sp-only"
          />ワンストップで行いながら、<br />
          お客様との共創を通じて、<br
            class="sp-only"
          />新しいビジネスのはじまりをつくります。
        </p>
        <div class="job-image fade">
          <g-image src="~/assets/images/job_main.png" class="job-image__item" />
          <!-- <g-image src="~/assets/images/job_main_layer01.png"
            class="job-image__item job-image__item--position job-image__item--animation01">
          <g-image src="~/assets/images/job_main_layer02.png"
            class="job-image__item job-image__item--position job-image__item--animation02">
          <g-image src="~/assets/images/job_main_layer03.png"
            class="job-image__item job-image__item--position job-image__item--animation03">
          <g-image src="~/assets/images/job_main_layer04.png"
            class="job-image__item job-image__item--position job-image__item--animation04">
          <g-image src="~/assets/images/job_main_layer05.png"
            class="job-image__item job-image__item--position job-image__item--animation05">
          <g-image src="~/assets/images/job_main_layer06.png"
            class="job-image__item job-image__item--position job-image__item--animation06"> -->
        </div>
        <div class="svgSmall">
          <svg
            class="svgSmall__element svgSmall__element--03"
            viewBox="120 0 230 100"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
        <div class="job-dept">
          <div class="job-dept-image fade">
            <g-image
              src="~/assets/images/job01.png"
              class="job-dept-image__item fade"
            />
            <!-- <g-image src="~/assets/images/account_bg.png" class="job-dept-image__item">
            <g-image src="~/assets/images/account_01.png" class="job-dept-image__item job-dept-image__item--01">
            <g-image src="~/assets/images/account_02.png" class="job-dept-image__item job-dept-image__item--02"> -->
          </div>
          <div class="job-dept-box">
            <div class="title-heading title-heading--job01 fade">
              <span
                class="title-heading__icon title-heading__icon--job01"
              ></span>
              <div class="title-box">
                <h3 class="title-box__title">営業職</h3>
                <span class="title-box__subtitle"
                  >Account Executives
                  <!--<g-image src="~/assets/images/account.svg">--></span
                >
              </div>
            </div>
            <div class="job-dept-box__wrap">
              <h4 class="job-dept-box__exserpt fade">
                まだこの世にない<br />コミュニケーションを想像する。
              </h4>
              <p class="job-dept-box__description fade">
                営業職の仕事は、コミュニケーションを想像し、ビジネスを成功へと導くこと。クライアントの想いを汲みながら、展示会やイベントをはじめとする
                リアルな場
                でのコミュニケーション“”を設計。クリエイティブ職や製作職、パートナーとも連携をとり、チームの中心となってビジネスの現場づくりを推し進めます。また、コミュニケーション全体の設計を担い、お客様の目的達成に最もふさわしいソリューションを提案することも営業職の役割です。
              </p>
              <a
                href="job/sales.html"
                class="job-dept-box__more job-dept-box__more--job01 fade"
                >more</a
              >
            </div>
          </div>
        </div>
        <div class="job-dept job-dept--reverse">
          <div class="job-dept-image">
            <g-image
              src="~/assets/images/job02.png"
              class="job-dept-image__item job-dept-image__item--reverse fade"
            />
            <!-- <g-image src="~/assets/images/creative_bg.png" class="job-dept-image__item fade">
            <g-image src="~/assets/images/creative_01.png" class="job-dept-image__item job-dept-image__item--06 fade">
            <g-image src="~/assets/images/creative_02.png" class="job-dept-image__item job-dept-image__item--05 fade"> -->
          </div>
          <div class="job-dept-box">
            <div
              class="title-heading title-heading--job02 fade"
              :class="{ 'title-heading--right': windowWidth >= 991.98 }"
            >
              <span
                class="title-heading__icon title-heading__icon--job02"
              ></span>
              <div class="title-box">
                <h3 class="title-box__title">クリエイティブ</h3>
                <span class="title-box__subtitle"
                  >Creative
                  <!--<g-image src="~/assets/images/creative.svg">--></span
                >
              </div>
            </div>
            <div
              class="job-dept-box__wrap"
              :class="{ 'job-dept-box--text-right': windowWidth >= 991.98 }"
            >
              <h4 class="job-dept-box__exserpt fade">
                無限の世界観を、<br />有限の空間で再現する。
              </h4>
              <p class="job-dept-box__description fade">
                クライアントが持つビジネスの世界観を掴み、ストーリーのある空間を設計・デザインする。それがクリエイティブ職の仕事です。営業職が描いたコミュニケーション戦略を元に、デザインや表現のベースとなるコンセプトを作成。最も伝わりやすい表現に落とし込みながら、ビジネスの可能性を限られたスペースで再現し、お客様の目的達成により効果的な空間を導きだします。
              </p>
              <a
                href="https://www.shoei-bijutsu.co.jp/2021_graduates/job/creative/"
                class="job-dept-box__more job-dept-box__more--job02 fade"
                >more</a
              >
            </div>
          </div>
        </div>
        <div class="job-dept job-dept--last-margin">
          <div class="svgSmall">
            <svg
              class="svgSmall__element svgSmall__element--04"
              viewBox="55 0 230 100"
              v-if="windowWidth < 991.98"
            >
              <use xlink:href="#bg-small"></use>
            </svg>
          </div>
          <div class="job-dept-image">
            <g-image
              src="~/assets/images/job03.png"
              class="job-dept-image__item fade"
            />
            <!-- <g-image src="~/assets/images/craft_bg.png" class="job-dept-image__item fade">
            <g-image src="~/assets/images/craft_01.png" class="job-dept-image__item job-dept-image__item--03 fade">
            <g-image src="~/assets/images/craft_02.png" class="job-dept-image__item job-dept-image__item--04 fade"> -->
          </div>
          <div class="job-dept-box">
            <div class="title-heading title-heading--job03 fade">
              <span
                class="title-heading__icon title-heading__icon--job03"
              ></span>
              <div class="title-box">
                <h3 class="title-box__title">製作</h3>
                <span class="title-box__subtitle"
                  >Craft
                  <!--<g-image src="~/assets/images/craft.svg">--></span
                >
              </div>
            </div>
            <div class="job-dept-box__wrap">
              <h4 class="job-dept-box__exserpt fade">
                コミュニケーション戦略を、<br />リアルな体験に変える。
              </h4>
              <p class="job-dept-box__description fade">
                クリエイティブ職が描いた2次元の図面を、3次元へと変えることが、製作職の仕事。訪れる人の動線や気持ちの変化までを意識し、未だ世の中にないビジネスのストーリーをカタチにします。アイデアを具現化する細部へのこだわりをもって、お客様の目的の達成に貢献します。したがって、たった一つのパーツ選びにさえ妥協することはありません。また、空間はカタチにすることで初めて、多くの人々の記憶に残すことができます。丁寧に具現化していくことで、ビジネスや人のつながりが世の中に生まれ、新たな価値を創造する起点となります。
              </p>
              <a
                href="https://www.shoei-bijutsu.co.jp/2021_graduates/job/craft/"
                class="job-dept-box__more job-dept-box__more--job03 fade"
                >more</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "top"
  }
};
</script>

<style lang="scss">
.main {
  padding-bottom: rem(50);
  &--top {
    padding-top: rem(150);
  }
}
.description {
  padding-bottom: rem(200);
  position: relative;
  &-textbox {
    max-width: 1150px;
    margin: 0 auto {
      bottom: 6rem;
    }
    &:nth-child(2) {
      padding-left: rem(144);
    }
    &:last-child {
      padding-left: rem(288);
    }
    &__text {
      margin-bottom: 2rem;
      line-height: 2rem;
      font-family: $mincho;
      font-size: rem(10);
      @include media(pc) {
        font-size: 1rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &--large {
        font-size: rem(24);
        line-height: rem(40);
        padding-top: rem(70);
        @include media(pc) {
          font-size: rem(42);
          line-height: rem(70);
        }
      }
    }
    @each $tablet in $tablets {
      @include media($tablet) {
        width: 90%;
        &:nth-child(2) {
          padding-left: 0;
        }
        &:last-child {
          padding-left: 0;
        }
      }
    }
  }
}
.about {
  @extend .description;
  text-align: center;
  &-title {
    font-family: "Kohinoor Devanagari";
    font-weight: bold;
    font-size: rem(42);
    @include media(pc) {
      font-size: rem(80);
    }
    margin: 0 auto {
      bottom: rem(40);
    }
    &__image {
      max-height: 180px;
      @each $tablet in $tablets {
        @include media($tablet) {
          max-height: 120px;
        }
      }
    }
  }
  &__subtitle {
    position: relative;
    font-size: rem(24);
    margin-bottom: rem(55);
    &::before {
      content: "";
      position: absolute;
      bottom: -30px;
      display: inline-block;
      width: 32px;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
      background-color: $black;
    }
  }
  &__description {
    font-size: rem(16);
    margin-bottom: rem(100);
    letter-spacing: rem(1);
    @include media(xs) {
      // font-size: rem(10);
      margin-bottom: rem(50);
      letter-spacing: 0;
    }
  }
  &-point {
    width: 100%;
    display: flex;
    @include media(xs) {
      display: block;
    }
    &__link {
      width: col(4);
      display: block;
      @include media(xs) {
        width: col(12);
      }
    }
    &-overlay {
      position: relative;
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(#96b4de, 0.5);
      }
      &__title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $white;
        font-size: rem(28);
        white-space: nowrap;
        @include media(md) {
          font-size: rem(24);
        }
        @include media(sm) {
          font-size: rem(20);
        }
        // @include media(xs) {
        //   font-size: rem(18);
        // }
      }
      &__image {
        width: 100%;
        @include media(xs) {
          height: 30vh;
          object-fit: cover;
          object-position: 50% 0;
        }
      }
    }
  }
}
.job {
  @extend .description;
  &-title {
    @extend .about-title;
    text-align: center;
    &__image {
      @extend .about-title__image;
    }
  }
  &__subtitle {
    @extend .about__subtitle;
    text-align: center;
  }
  &__description {
    @extend .about__description;
    line-height: 3rem;
    text-align: center;
    @include media(xs) {
      // font-size: rem(10);
      line-height: 1.5rem;
    }
  }
  &-image {
    overflow: hidden;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: rem(100);
    &__item {
      max-width: 100%;
      &--position {
        position: absolute;
        top: 0;
        left: 0;
      }
      @for $i from 1 through 6 {
        &--animation0#{$i} {
          animation: jobAnime0#{$i} 2s linear 0s infinite;
        }
      }
      @for $i from 1 through 6 {
        @keyframes jobAnime0#{$i} {
          0% {
            @if $i == 1 {
              top: 0;
              left: 0;
            } @else if $i == 2 {
              top: 0;
              left: 30px;
            } @else if $i == 3 {
              top: 0;
              left: 0;
            } @else if $i == 4 {
              top: 0;
              left: 0;
            } @else if $i == 5 {
              transform: rotate(5deg);
              // top: 0;
              // left: 0;
            } @else if $i == 6 {
              top: -30px;
              left: -10px;
            }
          }
          50% {
            @if $i == 1 {
              top: -30px;
              left: 20px;
            } @else if $i == 2 {
              left: 0;
            } @else if $i == 3 {
              top: 30px;
              left: -30px;
            } @else if $i == 4 {
              top: -20px;
              left: 30px;
            } @else if $i == 5 {
              transform: rotate(0);
              // top: 0;
              // left: 0;
            } @else if $i == 6 {
              top: 0;
              left: 0;
            }
          }
          100% {
            @if $i == 1 {
              left: 0;
            } @else if $i == 2 {
              left: 30px;
            } @else if $i == 3 {
              top: 0;
              left: 0;
            } @else if $i == 4 {
              top: 0;
              left: 0;
            } @else if $i == 5 {
              transform: rotate(5deg);
              // top: 0;
              // left: 0;
            } @else if $i == 6 {
              top: -30px;
              left: -10px;
            }
          }
        }
      }
    }
  }

  &-dept {
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-bottom: rem(100);
    @each $tablet in $tablets {
      @include media($tablet) {
        display: block;
      }
    }
    &:--last-margin {
      padding-bottom: rem(175);
    }
    &--reverse {
      flex-direction: row-reverse;
    }
    &-image {
      position: relative;
      width: col(6);
      @each $tablet in $tablets {
        @include media($tablet) {
          width: 100%;
          padding: 0 rem(50);
        }
      }
      &__item {
        padding-left: 0;
        width: 100%;
        @include media(pc) {
          padding-left: rem(50);
        }
        @for $i from 1 through 6 {
          &--0#{$i} {
            @extend %positionAbsolute;
            animation: jobAnime0#{$i} 2s linear 0s infinite;
          }
        }
        &--reverse {
          @include media(pc) {
            padding: {
              left: 0;
              right: rem(50);
            }
          }
        }
      }
    }
    &-box {
      width: col(6);
      @each $tablet in $tablets {
        @include media($tablet) {
          width: 100%;
        }
      }
      &--text-right {
        display: inline-block;
        float: right;
      }
      .title-heading {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: rem(20);
        @each $tablet in $tablets {
          @include media($tablet) {
            padding-left: rem(30);
          }
        }
        &--job01 {
          &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #00a670, #fff037);
          }
        }
        &--job02 {
          &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #f1a46b, #e30012);
          }
        }
        &--job03 {
          &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #c4e5f7, #e1007f);
          }
        }
        &--right {
          justify-content: flex-end;
        }
        &__icon {
          display: block;
          width: 60px;
          margin-right: rem(20);
          background-repeat: no-repeat;
          @each $tablet in $tablets {
            @include media($tablet) {
              width: 30px;
              background-size: 30px;
            }
          }
          &--job01 {
            background-image: url(~@/assets/images/account_icon.svg);
          }
          &--job02 {
            background-image: url(~@/assets/images/creative_icon.svg);
          }
          &--job03 {
            background-image: url(~@/assets/images/craft_icon.svg);
          }
        }
        .title-box {
          text-align: left;
          margin-bottom: rem(30);
          &__title {
            margin-bottom: rem(20);
            font: {
              family: $gothic;
              size: rem(38);
            }
            @include media(xs) {
              font-size: rem(24);
            }
            letter-spacing: rem(5);
          }
          &__subtitle {
            font: {
              family: "Kohinoor Devanagari";
              size: rem(18);
            }
            @include media(pc) {
              font-size: rem(22);
            }
            // img {
            //   height: 60px;
            // }
          }
        }
      }
      &__wrap {
        @each $tablet in $tablets {
          @include media($tablet) {
            padding-left: rem(30);
          }
        }
      }
      &__exserpt {
        font: {
          family: $mincho;
          size: rem(16);
          weight: bold;
        }
        margin-bottom: rem(20);
        line-height: rem(30);
        @include media(pc) {
          letter-spacing: rem(5);
          line-height: rem(50);
          font-size: rem(22);
        }
      }
      &__description {
        font: {
          family: $gothic;
        }
        width: 500px;
        line-height: rem(30);
        margin-bottom: rem(30);
        @each $tablet in $tablets {
          @include media($tablet) {
            width: 100%;
            padding-right: rem(30);
          }
        }
      }
      &__more {
        position: relative;
        padding: rem(15) rem(20) rem(15) rem(180);
        font-weight: bold;
        color: $white;
        display: inline-block;
        @include media(xs) {
          padding: rem(15) rem(20) rem(15) rem(120);
        }
        &:before {
          content: "";
          position: absolute;
          left: 0;
          width: 48px;
          height: 10px;
          transform: skewX(60deg);
          border: {
            right: 2px solid $white;
            bottom: 1px solid $white;
          }
          margin-left: -8px;
          transition: all 0.5s;
        }
        &:hover {
          &:before {
            @extend .job-dept-box__more:before;
            width: 80px;
          }
        }
        &--job01 {
          background: linear-gradient(to right, #00a670, #fff037);
        }
        &--job02 {
          background: linear-gradient(to right, #f1a46b, #e30012);
        }
        &--job03 {
          background: linear-gradient(to right, #c4e5f7, #e1007f);
        }
      }
    }
  }
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
}
</style>
