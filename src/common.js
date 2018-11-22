const vm = new Vue({
  el: '#sites',
  data: {
    keyword: '',
    sites: [
      {name: '上里建設', id: 0},
      {name: '金久保', id: 1}
    ]
  },
  computed: {
    filteredSites: function() {
      let sites = []
      for(let i in this.sites) {
        let site = this.sites[i]
        if(sites.name.indexOf(this.keyword) !== -1) {
          sites.push(site)
        }
      }
      return sites
    }
  }
})