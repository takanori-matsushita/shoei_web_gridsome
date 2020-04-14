<template>
  <Layout>
    <main class="main">
    <div class="main--width">
    <div class="job-menu">
      <div class="job-menu__title">
        <h2 class="title">JOB</h2>
        <p class="subtitle">昭栄美術の仕事紹介</p>
      </div>
      <div class="job-menu__tab">
        <ul class="joblists">
          <li class="joblists__item joblists__item--active">
            <a href="#" class="link">
              <g-image src="~/assets/images/account_icon.svg" class="link__icon" />
              <span class="link__title">営業職</span>
            </a>
          </li>
          <li class="joblists__item">
            <a href="#" class="link">
              <g-image src="~/assets/images/creative_icon.svg" class="link__icon" />
              <span class="link__title">クリエイティブ</span>
            </a>
          </li>
          <li class="joblists__item">
            <a href="#" class="link">
              <g-image src="~/assets/images/craft_icon.svg" class="link__icon" />
              <span class="link__title">製作</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="svgSmall svgSmall__job">
      <svg
        class="svgSmall__element"
        viewBox="115 0 230 100"
      >
        <use xlink:href="#bg-small"></use>
      </svg>
    </div>
    <article class="catch">
      <div class="catch__image">
        <g-image src="~/assets/images/job01.png" class="image" />
      </div>
      <div class="catch__heading">
        <div class="titleWrap">
          <div class="titleWrap__icon">
            <g-image src="~/assets/images/account_icon.svg" class="image" />
          </div>
          <h1 class="titleWrap__title">営業職</h1>
          <h2 class="titleWrap__subtitle">Account Executives</h2>
        </div>
        <div class="jobdescription">
          <p class="jobdescription__text">挑戦するお客様の<br>思いを受け止め、<br>チームの力で<br>目的達成へと導きます。</p>
        </div>
      </div>
    </article>
    <article class="jobTodo">
      <h1 class="jobTodo__title"><span class="jobTodo__title--bg">どんなことをするのか？</span></h1>
      <p class="jobTodo__description">昭栄美術の営業部が提案する商品は、造作物だけではなく、イベントや展示会などに携わるすべてのものです。会場やスペースの施工はもちろん、運営、ツール制作、コンテンツ制作（デジタルコンテンツや動画）など多岐に渡ります。<br>
        お客様のご要望をしっかりとヒアリングして、チームで力を合わせて課題解決に向けた取り組みを実施します。営業はそのプロジェクトのリーダー役として、様々な調整や確認を行い、成果へとつなげていきます。</p>
      <g-image src="~/assets/images/account_progress.png" class="jobTodo__progress" />
      <g-image src="~/assets/images/account_procedure.png" class="jobTodo__procedure" />
    </article>
      <article class="threePoints">
        <div class="svgSmall svgSmall__job svgSmall__job--02">
          <svg
            class="svgSmall__element svgSmall__element--reverse"
            viewBox="120 0 230 100"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
      <h1 class="threePoints__title"><span class="threePoints__title--bg">営業の仕事の3要素</span></h1>
      <div class="threePointsWrap">
        <div class="threePointsInner">
          <h2 class="threePointsInner__title">提案する</h2>
          <h3 class="threePointsInner__subtitle">ヒアリングからの<br>企画・提案</h3>
          <p class="threePointsInner__description">お客様の課題解決に向けた、徹底したヒアリング。ヒアリングした内容をもとに、プランナー、デザイナーとチームを組み、企画を練ります。チームで考えた企画の提案を担い、受注を決めるのも、やりがいの一つです。</p>
        </div>
        <div class="threePointsInner">
          <h2 class="threePointsInner__title">実現までのサポート</h2>
          <h3 class="threePointsInner__subtitle">製作・進行・<br>予算管理</h3>
          <p class="threePointsInner__description">制作進行も営業が中心となって進めます。全体像を把握し、コスト、スケジュール、クオリティなどのコントロールを行います。クリエイティブ部や製作部と密にコミュニケーションをとり、お客様のご要望に応えるための円滑な制作の進行を行います。</p>
        </div>
        <div class="threePointsInner">
          <h2 class="threePointsInner__title">現場管理と運用</h2>
          <h3 class="threePointsInner__subtitle">納品と<br>フィードバック回収</h3>
          <p class="threePointsInner__description">製作現場に立ち会うのも営業の仕事。 お客様のイメージとのギャップがないか、イベントの進行に問題がないか、お客様の望む効果が得られているかなどを確認します。また、成果や課題をお客様と共有し、次回に向けてのフィードバックを回収します。</p>
        </div>
      </div>
    </article>
      <article class="capable">
        <h1 class="capable__title"><span class="capable__title--bg">昭栄美術の営業だからできること</span></h1>
        <section class="capableWrap">
          <span class="capableWrap__number">01</span>
          <h1 class="capableWrap__title">製販一体の高いチームワーク。</h1>
          <p class="capableWrap__description">1つの案件に対し、現場まで営業部、クリエイティブ部、製作部と一丸となって進行していきます。 全社的にサポートすることができるのは「製販一体」の昭栄美術の強みです。 お客様が目的を達成するまで、徹底して寄り添うことができます。</p>
        </section>
        <section class="capableWrap">
          <span class="capableWrap__number">02</span>
          <h1 class="capableWrap__title">ベイスタ(自社工場)があることで、信頼できる商品を提案できる。</h1>
          <p class="capableWrap__description">「仕様確認」「検品」「検証」を繰り返すことで、お客様によりマッチしたものを提供することができます。場合によっては、事前の仮組みを行い、お客さまと完成イメージを共有することも可能です。 自信を持って提案ができ、カタチにするまで自社で責任を持って提供できることで、高い顧客満足を叶えています。</p>
        </section>
        <div class="svgSmall svgSmall__job">
          <svg
            class="svgSmall__element"
            viewBox="115 0 230 100"
          >
            <use xlink:href="#bg-small"></use>
          </svg>
        </div>
        <section class="capableWrap">
          <span class="capableWrap__number">03</span>
          <h1 class="capableWrap__title">お客様の目的達成に寄り添う。</h1>
          <p class="capableWrap__description">ヒアリング内容から目的と得たい効果を明確にし、自社内で企画から製作までを行うことで、柔軟な対応を可能にします。お客様の多様なニーズに応えられるだけでなく、信頼できるメンバーと協力しながら目的達成まで進行できるのも、昭栄美術ならではの強みです。</p>
        </section>
      </article>
    </div>
    <aside class="interview">
      <g-image src="~/assets/images/interview.png" class="interview__image" />
      <a href="#" class="interviewLink">
      <div class="interviewLink__Overlay">
          <div class="interviewOuter">
            <h1 class="interviewOuter__title">PEOPLE</h1>
            <p class="interviewOuter__subtitle">&rtrif;&nbsp;インタビューページへ</p>
          </div>
        </div>
      </a>
    </aside>
  </main>
  </Layout>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.main {
  margin: {
    top: rem(50);
  }
  &--width {
    max-width: 1170px;
    margin: auto;
    padding: 0 rem(20);
  }
  .job-menu {
    text-align: center;
    &__title {
      margin: {
        bottom: rem(50);
      }
      .title {
        margin: {
          bottom: rem(10);
        }
        font: {
          family: "Kohinoor Devanagari";
          size: rem(60);
          weight: bold;
        }
      }
      .subtitle {
        font: {
          size: rem(16);
        }
      }
    }
    &__tab {
      .joblists {
        display: flex;
        margin: {
          bottom: rem(50);
        }
        &__item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: col(4);
          font: {
            size: rem(24);
          }
          padding: rem(5) rem(18);
          border: {
            left: 2px solid $black;
          }
          &:last-child {
            border-right: 2px solid $black;
          }
          &--active {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              bottom: -10px;
              width: 100%;
              height: 3px;
              background-color: #3fa3ef;
            }
          }
          .link {
            display: flex;
            &__icon {
              height: 28px;
              margin: {
                right: rem(10);
              }
            }
            &__title {
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  .catch {
    position: relative;
    display: flex;
    align-items: center;
    padding: {
      bottom: rem(100);
    }
    &__image {
      width: col(6);
      padding: 0 rem(20);
      .image {
        width: 100%;
      }
    }
    &__heading {
      width: col(6);
      .titleWrap {
        margin: {
          bottom: rem(50);
        }
        text-align: center;
        &__icon {
          margin: {
            bottom: rem(10);
          }
          .image {
            width: 50px;
          }
        }
        &__title {
          font-size: rem(30);
          letter-spacing: 3px;
          margin: {
            bottom: rem(10);
          }
        }
        &__subtitle {
          font: {
            family: "Kohinoor Devanagari";
          }
        }
      }
      .jobdescription {
        text-align: center;
        &__text {
          display: inline-block;
          text-align: left;
          letter-spacing: 3px;
          line-height: 40px;
          font: {
            size: rem(30);
          }
        }
      }
    }
  }

  .jobTodo {
    padding: {
      bottom: rem(80);
    }
    &__title {
      background: url("~@/assets/images/jobtitle_bg.svg");
      margin: {
        bottom: rem(50);
      }
      text-align: center;
      font: {
        size: rem(24);
      }
      &--bg {
        background-color: $white;
        padding: 0 rem(30);
      }
    }
    &__description {
      text-align: justify;
      text-justify: inter-ideograph;
      line-height: rem(24);
      padding: {
        bottom: rem(20);
      }
    }
    &__progress {
      width: 100%;
      margin: {
        bottom: rem(50);
      }
    }
    &__procedure {
      width: 100%;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 40px;
      margin-top: rem(80);
      background: url("~@/assets/images/arrow.svg") no-repeat center;
    }
  }

  .threePoints {
    @extend .jobTodo;
    &__title {
      @extend .jobTodo__title;
      &--bg {
        @extend .jobTodo__title--bg;
      }
    }
    &Wrap {
      display: flex;
      .threePointsInner {
        width: col(4);
        border: 1px solid $black;
        margin: 0 rem(3);
        padding: rem(50) rem(20);
        &__title {
          text-align: center;
          font: {
            size: rem(24);
          }
          margin: {
            bottom: rem(20);
          }
          padding: {
            bottom: rem(5);
          }
          &:after {
            position: relative;
            bottom: -5px;
            content: "";
            display: block;
            width: 100%;
            height: 5px;
            background: $jobGreen;
          }
        }
        &__subtitle {
          margin: {
            bottom: rem(20);
          }
          font: {
            size: rem(18);
          }
        }
        &__description {
          line-height: rem(20);
          text-align: justify;
          text-justify: inter-ideograph;
        }
      }
    }
  }

  .capable {
    padding: {
      bottom: rem(200);
    }
    &__title {
      @extend .jobTodo__title;
      &--bg {
        @extend .jobTodo__title--bg;
      }
    }
    &Wrap {
      margin: {
        bottom: rem(50);
      }
      &:last-child {
        margin: {
          bottom: 0;
        }
      }
      &__number {
        text-align: center;
        display: block;
        margin: {
          bottom: rem(30);
        }
        font: {
          size: rem(40);
        }
        &:after {
          content: "";
          display: block;
          position: relative;
          left: 50%;
          bottom: -5px;
          transform: translateX(-50%);
          width: 40px;
          height: 5px;
          background: $jobGreen;
        }
      }
      &__title {
        text-align: center;
        margin: {
          bottom: rem(20);
        }
        font: {
          size: rem(20);
        }
      }
      &__description {
        line-height: rem(24);
      }
    }
  }
  .interview {
    position: relative;
    display: block;
    &__image {
      width: 100%;
    }

    &Link {
      &__Overlay {
        background-color: rgba($white, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        .interviewOuter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &__title {
            margin: {
              bottom: rem(20);
            }
            font: {
              size: rem(50);
            }
          }
          &__subtitle {
            font: {
              size: rem(24);
            }
          }
        }
      }
    }
  }
}
</style>