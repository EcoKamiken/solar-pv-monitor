const vm = new Vue({
  el: '#site-table',
  data: {
    keyword: '',
    sites: [
      {id: 0, name: '上里建設', kana: 'かみさとけんせつ', roma: 'kamisatokensetsu', wattage: 1000},
      {id: 1, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
      {id: 2, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
      {id: 3, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
      {id: 4, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
      {id: 5, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
      {id: 6, name: '金久保', kana: 'かなくぼ', roma: 'kanakubo', wattage: 1000},
    ]
  },
  computed: {
    filteredSites: function() {
      var sites = []
      for(var i in this.sites) {
        var site = this.sites[i]
        if(site.name.indexOf(this.keyword) !== -1 ||
        site.kana.indexOf(this.keyword) !== -1 ||
        site.roma.indexOf(this.keyword) !== -1) {
          sites.push(site)
        }
      }
      return sites
    }
  }
})