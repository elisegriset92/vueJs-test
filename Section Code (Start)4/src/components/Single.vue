<template>
<div class="col-sm-6 col-md-4 col-lg-3">
 <div class="panel panel-default">
<div class="panel-body quote">
  <p>hello single quote vue </p>
  <slot></slot>

</div>
 </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
.panel-body {
  font-family: 'Arizona', cursive;
  font-size: 24px;
  color: aqua;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: red;
}
</style>


