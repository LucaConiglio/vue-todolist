const { createApp } = Vue;




createApp({
  data () {
    return {
      

      lista : [
      {
        done : false,
        categoria : "lavoro",
        testo : "ricordare come si fa i v-for"
      },
      {
        done : false,
        categoria : "scuola",
        testo : "leggere il libro su Vue.js"
      },
      {
        done : false,
        categoria : "spesa",
        testo : "comprare la pasta"
      },
      {
        done : false,
        categoria : "shopping",
        testo : "comprare uno schermo"
      },
    ],
    newTask : {
      categoria : "",
      testo: ""
    },


};
  },
  methods : {

    onFormSubmit () {
      this.lista.push({
        done : false,
        categoria: this.newTask.categoria,
        testo: this.newTask.testo
      });
      this.newTask.categoria = "";
      this.newTask.testo = "";

    },
    onDeleteTask (indexfordelete) {
      const confirmed = confirm("Sicuro di voler cancellare il task?");

      if (confirmed) {
        this.lista.splice(indexfordelete, 1);
      }
      

    },

  },
  mounted () {

    console.log(this.done);
  }
}).mount("#app")