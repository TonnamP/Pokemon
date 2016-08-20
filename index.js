new Vue({
    el: '#app',
    data: {
        msg: 'Pokemon Ranger',
        list: []
    },
    methods:{
      getApi: function()
      {
        var url = 'http://www.pokesnipers.com/api/v1/pokemon.json'
        var that = this
        this.$http.get(url).then(function(res){
          console.log(res.data.results);
          this.list =  res.data.results
        })
      }
    },
    ready: function()
    {
      //alert('Pokemon')
      this.getApi()
      var that = this
      // setInterval(function () { that.getApi()}, 10000)
    }
})
console.log(app)
