<template>
  <div class="page_footer">
    <div class="page_main_footer">
      <div class="footer_container">
        <span>© copyright 2019,Pangya! IT@KMITL</span>
        <span>
          Designed By :
          <a style="color:#ffe000;" href="https://goo.gl/hCiQ5c" target="_blank"
            >Lachesisss</a
          >
          and Team All Rights Reserved
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/**
* Footer Page
**/
.page_footer {
  position: relative;
  width: 100%;
  height: 90px;
  line-height: 90px;
  margin-top: 200em;
  z-index: 2;
}
.page_main_footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(37, 96, 222, 1) 0%,
    rgba(121, 78, 222, 1) 100%
  );
}
.footer_container {
  width: 100%;
  height: 90px;
  padding-top: 2em;
  margin: 0 auto;
}
.footer_container span {
  text-align: center;
  line-height: 1.5em;
  display: block;
  font-family: "Tahoma", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
}
</style>
