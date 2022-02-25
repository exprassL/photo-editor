<template>
  <div class="outer">
    <div class="loading">
      <span>Loading</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
div.outer {
  margin: 0;
  padding: 0;
  background: rgb(245 241 241 / 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "montserrat", sans-serif;
  z-index: 999;
}
.loading {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid rgb(231, 76, 60);
  position: relative;
  animation: a1 2s linear infinite;
}

.loading::before,
.loading::after {
  content: "";
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: -10px;
  box-sizing: border-box;
  border-radius: 50%;
}
.loading::before {
  border-top: 10px solid #e67322;
  transform: rotate(120deg);
}
.loading::after {
  border-top: 10px solid #3498db;
  transform: rotate(240deg);
}
.loading span {
  position: absolute;
  width: 100px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  animation: a2 2s linear infinite;
}
@keyframes a1 {
  to {
    transform: rotate(360deg);
  }
}
@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>