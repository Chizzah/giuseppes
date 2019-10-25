<template>
    <GmapMap
    ref="mapRef"
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
    >
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    />
    </GmapMap>
</template>

<script>
export default {
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: -26.196381, lng: 28.092854})
    })
  }
}
</script>

<style>

</style>