<template>
  <Layout>
    <div class="container">
      <video src="../../static/heroVideo.mp4" muted autoplay loop></video>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  }
}
</script>

<style>
  video {
    width: 70vw;
    height: 100vh;
    margin-left: -8em;
    margin-top: -2.78em;
  }
    @media screen and (max-width: 960px) {
    video {
      width: 100vw;
      height: 100vh;
    }
  }
</style>