export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowY: window.pageYOffset,
      windowHeight: window.innerHeight,
      fadeConts: [],
      fadeContsRect: [],
      fadeContsTop: [],
      remainder: 200,
      activeNav: false,
      navMenu: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.calcWindowWidth);
    window.addEventListener("resize", this.calcWindowHeight);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.fadeElements);
    this.fadeConts = document.querySelectorAll(".fade");
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calcWindowWidth);
    window.removeEventListener("resize", this.calcWindowHeight);
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.fadeElements);
  },
  methods: {
    calcWindowWidth: function() {
      this.windowWidth = window.innerWidth;
    },
    calcWindowHeight: function() {
      this.windowHeight = window.innerHeight;
    },
    fadeElements: function() {
      for (var i = 0; i < this.fadeConts.length; i++) {
        this.fadeContsRect.push(this.fadeConts[i].getBoundingClientRect());
      }
      for (var i = 0; i < this.fadeContsRect.length; i++) {
        this.fadeContsTop.push(this.fadeContsRect[i].top + this.windowY);
      }
    },
    handleScroll: function() {
      this.windowY = window.pageYOffset;
      for (var i = 0; i < this.fadeConts.length; i++) {
        // 要素が画面の下端にかかったら
        if (
          this.windowY >
          this.fadeContsTop[i] - this.windowHeight + this.remainder
        ) {
          // .showを付与
          this.fadeConts[i].classList.add("show");
        } else {
          // 逆に.showを削除
          this.fadeConts[i].classList.remove("show");
        }
      }
    },
    navOpen: function() {
      this.isActiveNav = !this.isActiveNav;
      this.navMenu = !this.navMenu;
    }
  }
};
