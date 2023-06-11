const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      arrMusic: [],
      activeIndex: 0,
      moreinfoShow: false,
    };
  },
  methods: {
    requestData() {
      axios
        .get("http://localhost:8888/-php-proj/php-dischi-json/data.php")
        .then((response) => (this.arrMusic = response.data));
    },
    changeIndex(index) {
      this.activeIndex = index;
      console.log("activeIndex: " + this.activeIndex);

      this.moreinfoShow = true;
      console.log("moreInfo show: " + this.moreinfoShow);
    },
  },
  created() {
    this.requestData();
  },
}).mount("#app");
