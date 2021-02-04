Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { judul: '', penulis:'', tahun: '' }
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.penulis = "";
            this.data.tahun = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        infoBuku: {}
    },
    methods: {
        getData: function (value) {
            this.infoBuku = {
                judul : value.judul,
                penulis : value.penulis,
                tahun : value.tahun

            }
        }
    }
})
