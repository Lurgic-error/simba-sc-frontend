<template>
    
    <div class="parallax">

    </div>

</template>

<script>
export default {
    name: 'Parallax',
    props:{}
}
</script>

<style lang="scss" scoped>

.parallax{
     /* The image used */
  background-image: url("../../../public/Images/stadiuml.jpg");

  /* Set a specific height */
  height: 400px;
  width: 100vw;  
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}
</style>