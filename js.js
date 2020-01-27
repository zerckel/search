let app = new Vue({
  el: '#app',
  data: {
    search: '',
    users: {},
    filter: {}
  },
  mounted: function () {
    let vm = this
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
              vm.users = data
              vm.filter = data
            })
  },
  watch: {
    search: function () {
      this.filter = this.users.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})