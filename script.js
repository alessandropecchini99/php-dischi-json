const { createApp } = Vue;

createApp({
  data() {
    return {
      arrMusic: [],
      server: "http://localhost:8888/-php-proj/php-dischi-json/data.php",
      showDisc: null,
    };
  },
  methods: {
    hideInfo() {
      this.showDisc = null;
    },
    showInfo(index) {
      axios
        .get(this.server, {
          // server.php?disc=2
          params: {
            disc: index,
          },
        })
        .then((response) => (this.showDisc = response.data));
    },
  },
  created() {
    axios.get(this.server).then((response) => (this.arrMusic = response.data));
  },
}).mount("#app");
