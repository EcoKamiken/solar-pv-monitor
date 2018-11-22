const vm = new Vue({
  el: '#site-table',
  data: {
    keyword: '',
    sites: [
      {id: 0, name: 'BAa9c7SsSe', kana: 'BAa9c7SsSe', roma: 'BAa9c7SsSe', wattage: '627'},
{id: 1, name: 'WklNAr9QVM', kana: 'WklNAr9QVM', roma: 'WklNAr9QVM', wattage: '5'},
{id: 2, name: 'c55sTYTJkv', kana: 'c55sTYTJkv', roma: 'c55sTYTJkv', wattage: '512'},
{id: 3, name: 'mzw3pUTN3x', kana: 'mzw3pUTN3x', roma: 'mzw3pUTN3x', wattage: '184'},
{id: 4, name: 'tXCYt2JHyg', kana: 'tXCYt2JHyg', roma: 'tXCYt2JHyg', wattage: '496'},
{id: 5, name: 'dh0GTw4eCT', kana: 'dh0GTw4eCT', roma: 'dh0GTw4eCT', wattage: '827'},
{id: 6, name: '4JB6d2F21w', kana: '4JB6d2F21w', roma: '4JB6d2F21w', wattage: '923'},
{id: 7, name: '2LGiJ1XXPE', kana: '2LGiJ1XXPE', roma: '2LGiJ1XXPE', wattage: '74'},
{id: 8, name: 'QIGcwp5CFQ', kana: 'QIGcwp5CFQ', roma: 'QIGcwp5CFQ', wattage: '880'},
{id: 9, name: 'uDMcNqmpJD', kana: 'uDMcNqmpJD', roma: 'uDMcNqmpJD', wattage: '556'},
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