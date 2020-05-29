<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>
<script>
  import mapboxgl from 'mapbox-gl'
  export default {
    props: {
      mapWidth: {
        type: String
      },
      mapHeight: {
        type: String
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      // 初始化
      init () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdiYXJyeTgyNSIsImEiOiJja2FxbXFlNXAwYXdnMnRucmpuaXY2aXVwIn0.p3j8W5bJKAJa0BeCaGxW8g'
        const map = new mapboxgl.Map({
          container: this.$refs.basicMapbox,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [113.7623, 34.7712],
          zoom: 16
        })

        var marker = new mapboxgl.Marker({
          draggable: true
        })
          .setLngLat([113.7623, 34.7712])//添加marker的初始化点
          .addTo(map);//在哪个地图中添加
        // marker.remove(); 移除marker
        //事件
        function onDragEnd() {
          var lngLat = marker.getLngLat();
          coordinates.style.display = "block";
          coordinates.innerHTML =
            "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
        }

        marker.on("dragstart", onDragEnd);//鼠标移动结束
        marker.on("drag", onDragEnd);//鼠标移动中
        marker.on("dragend", onDragEnd);//鼠标移动开始

      }
    },
    computed: {
      mapSize () {
        let styleObj = {
          width: this.mapWidth,
          height: this.mapHeight
        }
        return styleObj
      }
    }
  }
</script>
<style>
  @import '../../../node_modules/mapbox-gl/src/css/mapbox-gl.css';
</style>
