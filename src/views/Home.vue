<template>
  <div class="home">
    <div id="Holder10">
    <div id="Holder11">
      <div id="Holder12">
        <h1>The Fastest Cakes In Town</h1>
        <img src="../assets/HomeCake.png" id="kuk1">
        <img src="../assets/HomeCake.png" id="kuk2">
      </div>
      </div>
    </div>
    <!-- TODO: add double-image thing with text and button to go to /cakes/ -->
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
#Holder10{
  height: 100vh;
}
#Holder11{
  position: relative;
  width: 100%;
  top: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#Holder12{
  width: 75%;
  height: 65vh;
}
#kuk2{
  position: relative;
  top: -51%;
  right: -31%;

}
  .home h1{
    font-size: 81px;
    width: 35%;
    left: 15%;
    margin: 0;
    margin-top: 5%;
    position: absolute;
    z-index: 2;
    text-shadow: -3px 2px 4px rgba(66, 66, 66, 0.25);
    text-shadow: -1px 0 #424242, 0 1px #424242, 1px 0 #424242, 0 -1px #424242;
  }
</style>
