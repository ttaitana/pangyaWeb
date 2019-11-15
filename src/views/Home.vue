<template>
  <div class="home">
    <div id="particles-js"></div>
    <div id="preloader"></div>
    <table
      width="1200"
      border="0"
      align="center"
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <td
          class="enter_site_02"
          height="300"
          colspan="5"
          background="images/enter_site_02.png"
        >
          <div class="header_img">
            <div class="header_logo"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td
          height="276"
          colspan="5"
          background="images/enter_site_041.png"
          class="enter_site_041__c animated flash slows"
        ></td>
      </tr>
      <tr>
        <td
          class="enter_site_05__c"
          height="204"
          colspan="5"
          background="images/enter_site_05.png"
        >
          <!-- <table width="1200" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="153" height="120"></td>
              <td width="175" align="center">
                <div class="timer" id="days"></div>
              </td>
              <td width="67"></td>
              <td width="175" align="center">
                <div class="timer" id="hours"></div>
              </td>
              <td width="67"></td>
              <td width="175" align="center">
                <div class="timer" id="minutes"></div>
              </td>
              <td width="66"></td>
              <td width="175" align="center">
                <div class="timer" id="seconds"></div>
              </td>
              <td width="147"></td>
            </tr>
          </table> -->
        </td>
      </tr>
      <tr>
        <td
          class="enter_site_06"
          height="45"
          colspan="5"
          background="images/enter_site_06.png"
        ></td>
      </tr>
      <tr>
        <td width="147" height="100">
          <img src="@/images/enter_site_07.png" width="140" height="100" />
        </td>
        <td width="275">
          <a href="/create_account" class="popupRegister_open"
            ><img
              src="@/images/enter_site_08.png"
              width="275"
              height="100"
              class="btn-left"
          /></a>
        </td>
        <td width="350">
          <a href="/main"
            ><img
              src="@/images/enter_site_09.png"
              width="350"
              height="100"
              class="button-main"
              id="close_page"
          /></a>
        </td>
        <td width="285">
          <a href="javascript:void(0)" class="popupVote_open"
            ><img
              src="@/images/enter_site_10.png"
              width="285"
              height="100"
              class="btn-left"
          /></a>
        </td>
        <td width="143">
          <img src="@/images/enter_site_11.png" width="150" height="100" />
        </td>
      </tr>
      <tr>
        <td
          class="enter_site_12"
          height="275"
          colspan="5"
          background="images/enter_site_12.png"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Mitr:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=thai");
body::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #fff;
}
body::-webkit-scrollbar-track {
  background-color: #fff;
}
body::-webkit-scrollbar-thumb {
  background: #eee;
}

.home {
  background: url(../images/bg_enter.jpg) no-repeat center top;
  background-color: #1a3367;
  margin: 0;
  padding: 0;
}
.header_img {
  width: 1200px;
  height: 0;
  position: absolute;
  z-index: 3;
}
.header_img > div {
  position: absolute;
}
.header_logo {
  background: url(../images/icon/logo_body.png);
  width: 508px;
  height: 278px;
  position: absolute;
  z-index: 5;
  top: 24em;
  left: 24em;
  -webkit-animation: 4s logo infinite linear;
  -moz-animation: 4s logo infinite linear;
  animation: 4s logo infinite linear;
}
@-webkit-keyframes logo {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  10%,
  50% {
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
    -webkit-transform-origin: 80% 100%;
    transform-origin: 80% 100%;
  }
  30%,
  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
    -webkit-transform-origin: 20% 100%;
    transform-origin: 20% 100%;
  }
}
@keyframes logo {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  10%,
  50% {
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
    -webkit-transform-origin: 80% 100%;
    transform-origin: 80% 100%;
  }
  30%,
  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
    -webkit-transform-origin: 20% 100%;
    transform-origin: 20% 100%;
  }
}
/* Prelaoder */

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #1a3367;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #f2f2f2;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 800px;
  top: 0px;
  background-image: url("");
  background-repeat: repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 4;
  pointer-events: none;
}
.slows {
  animation-duration: 10s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}
.timer {
  font-family: "Mitr";
  font-size: 80px;
  font-weight: 600;
  display: inline-block;
  vertical-align: top;
  color: #2b2b2b;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.3);
  margin-top: -20px;
}
.swal2-modal .swal2-title {
  font-family: "Mitr";
  font-weight: 300;
  color: red;
}
.box_popup {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  padding: 15px;
  transform: scale(0.8);
  min-height: 300px;
}
.popup_visible .boxpopup {
  transform: scale(1);
}
.box_popup .in_popup {
  font-size: 16px;
  width: 500px;
  min-height: 500px;
}
.box_popup .in_close {
  text-align: center;
}
.box_popup .in_close button {
  background-color: #fff;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  padding: 5px 24px;
  text-decoration: none;
  outline: 0 !important;
}
.box_popup .in_close button:hover {
  background-color: #e9e9e9;
}
.box_popup .in_close button:active {
  position: relative;
  top: 1px;
}
/* .fb_box {
  display: block;
  position: fixed;
  width: 194px;
  bottom: 18em;
  right: 0;
  z-index: 10000;
}
.fb_row {
  position: relative;
  width: 100%;
  height: 0;
}
.btn_body {
  position: absolute;
  width: 70px;
  height: 237px;
  padding-bottom: 0px;
  background-image: url(images/fbgrup.png);
  right: 0;
  bottom: 65px;
  z-index: 3;
  border-radius: 15px 0px 0px 15px;
} */
@media (max-width: 1170px) {
  body,
  html {
    width: 1200px;
  }
}
.enter_site_02 {
  background-image: url(../images/enter_site_02.png);
}
.enter_site_041 {
  background-image: url(../images/enter_site_041.png);
}
.enter_site_05 {
  background-image: url(../images/enter_site_05.png);
}
.enter_site_06 {
  background-image: url(../images/enter_site_06.png);
}
.enter_site_12 {
  background-image: url(../images/enter_site_12.png);
}
</style>
<style scoped src="@/assets/css/semantic.min.css"></style>
<style scoped src="@/assets/css/sweetalert2.min.css"></style>
