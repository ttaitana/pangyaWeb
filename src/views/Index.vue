<template>
  <div>
    <navigation />
    <div id="loadPage">
      <span></span>
    </div>
    <div id="particles-js"></div>
    <div class="wrapper">
      <div class="change"></div>
    </div>
    <div class="header_table">
      <table class="warpper-table">
        <tbody>
          <tr>
            <td
              height="840"
              colspan="4"
              background="images/eddga_studio_02.png"
            >
              <div class="header_img">
                <div class="header_logo"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td height="450"></td>
          </tr>
          <tr>
            <td
              class="announce_bg"
              height="52"
              colspan="4"
              background="images/eddga_studio_04.png"
            >
              <table width="1200" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="6" height="52"></td>
                  <td width="544" style="padding-top:0.5em;color:red">
                    <marquee
                      direction="left"
                      onMouseOver="this.stop()"
                      onMouseOut="this.start()"
                      scrollamount="5"
                      width="100%"
                    >
                      กำลังอยู่ในระหว่างการอัพเดทข่าวสาร
                      สามารถแก้ไขข้อความได้ที่ ไฟล์ home.php บรรทัด 110 กด
                      Ctrl+G (เฉพาะ Notepad++ เท่านั้น)
                    </marquee>
                  </td>
                  <td width="650"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              class="status_server_bg"
              height="118"
              colspan="4"
              background="images/eddga_studio_05.png"
            >
              <table
                width="1200"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="margin-top:1em"
              >
                <tr>
                  <td width="105"></td>
                  <td width="150" align="center">
                    <div class="box-status-on">ONLINE</div>
                  </td>
                  <td width="105"></td>
                  <td width="50"></td>
                  <td width="150" align="center">
                    <div class="box-status-player">6</div>
                  </td>
                  <td width="140"></td>
                  <td width="150" align="center">
                    <div class="box-status-account">2,504</div>
                  </td>
                  <td width="150"></td>
                  <td width="150" align="center">
                    <div class="box-status-charall">9,304</div>
                  </td>
                  <td width="50"></td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              class="slider_bg"
              colspan="4"
              valign="top"
              background="images/eddga_studio_08.png"
            >
              <table width="1200" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="18" height="380"></td>
                  <td width="826">
                    <!-- <iframe
                      src="slider/index.html"
                      frameborder="0"
                      scrolling="no"
                      allowtransparency="true"
                      width="826"
                      height="380"
                    ></iframe>-->
                    <slider />
                  </td>
                  <td width="19"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="289" height="75">
              <div data-aos="zoom-in-right">
                <a href="create_account.html" target="_blank">
                  <img
                    src="@/images/eddga_studio_10.png"
                    width="289"
                    height="75"
                    class="btn-center"
                  />
                </a>
              </div>
            </td>
            <td
              colspan="3"
              rowspan="5"
              align="center"
              style="padding-right:7px;padding-bottom:7px"
            >
              <!-- <iframe
                src="slider/index.html"
                frameborder="0"
                scrolling="no"
                allowtransparency="true"
                width="870"
                height="395"
              ></iframe>-->
              <table width="99%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="16" height="383"></td>
                  <td width="617" valign="top">
                    <div class="notice-list" style="margin-top:10px">
                      <ul class="list-unstyled">
                        <li
                          class="icon-notice"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          เซิฟเวอร์เปิดให้บริการพร้อมกันวันที่ 8 สิงหาคม 2562
                          เวลา 17.00 น ห้ามพลาด !
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-notice"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          Ragnarok HighClass แนว PvP GvG MvP ไม่ต้องเก็บเวล
                          ไม่ต้องหาของ เปลี่ยนอาชีพได้เลย
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-notice"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          VOTE เข้าเซิฟเวอร์ x10 ทุกวัน
                          มีจัดอันดับแจกแคชสำหรับผู้เล่นที่โหวต ติดอันดับ 1-3
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-notice"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          เซิฟเวอร์ใช้ระบบป้องกัน Gepard Shield 3.0
                          ตัวใหม่ล่าสุด + RCX Plugin (LGP) ไม่มี No-delay มองมุด
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-notice"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          GM ดูแลเซิฟเวอร์ตลอด ไม่ทิ้งเซิฟ ตอบไว
                          แก้ปัญหาต่างๆได้ทันที ติดต่อได้หลายช่องทาง ตลอดเวลา
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-event"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          บอสดรอป Cash 100% / Bonus Coin ทุกตัว
                          มีบอสใหม่ให้ล่ามากกว่า 30 ตัว ไม่มีกั๊ก
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-event"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          เติมเงิน x5 โอน x6 ของพ้อยราคาถูก
                          เติมเงินโอนมีแถมทุกรายการ
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-event"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          กิลด์วอร์ เวลา xx.xx - xx.xx แจกเงินสดทุกวัน
                          แจกจริงไม่มีบิน โอนทันทีหลังจบวอ
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-event"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          การ์ดที่ต้องใช้คุณสมบัติตี +9 ขึ้นไป ปรับเหลือ +7
                          เห็นผลทันที
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-update"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          เซิฟเวอร์มีจัดกิจกรรมแจก Cash / Poring Coin / ไม้บอส
                          ทุกวัน เวลา 19.30 น. ตีกล่องดรอป Cash ทุกชั่วโมง
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-update"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          ดาเมทสมดุล เล่นได้ทุกอาชีพ เก่งทุกอาชีพแน่นอน
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                        <li
                          class="icon-update"
                          data-aos="flip-up"
                          data-aos-duration="1000"
                        >
                          มีจัดอันดับแจก Cash ไม้บอสสำหรับ PvP MvP ทุกสัปดาห์
                          <p><i class="fas fa-clock"></i> 10-10-2018</p>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td width="16"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="75">
              <div data-aos="zoom-in-right">
                <a href="download.html" target="_blank">
                  <img
                    src="@/images/eddga_studio_12.png"
                    width="289"
                    height="75"
                    class="btn-center"
                  />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td height="75">
              <div data-aos="zoom-in-right">
                <a href="dashboard.html" target="_blank">
                  <img
                    src="@/images/eddga_studio_14.png"
                    width="289"
                    height="75"
                    class="btn-center"
                  />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td height="75">
              <div data-aos="zoom-in-right">
                <a href="vote_server.html" target="_blank">
                  <img
                    src="@/images/eddga_studio_18.png"
                    width="289"
                    height="75"
                    class="btn-center"
                  />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td height="75">
              <div data-aos="zoom-in-right">
                <a href="donate.html" target="_blank">
                  <img
                    src="@/images/eddga_studio_20.png"
                    width="289"
                    height="75"
                    class="btn-center"
                  />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td height="80" colspan="4" background="images/eddga-studio_06.png">
              <table width="1200" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="182">
                      <div data-aos="zoom-in-down" class="aos-init aos-animate">
                        <a href="#allnews" data-toggle="tab">
                          <img
                            src="@/images/btn_allnews_01.png"
                            width="170"
                            height="80"
                            class="btn_news"
                          />
                        </a>
                      </div>
                    </td>
                    <td width="298">
                      <div data-aos="zoom-in-down" class="aos-init aos-animate">
                        <a href="#event" data-toggle="tab">
                          <img
                            src="@/images/btn_allnews_02.png"
                            width="115"
                            height="80"
                            class="btn_news"
                          />
                        </a>
                      </div>
                    </td>
                    <td width="240">
                      <div data-aos="zoom-in-down" class="aos-init aos-animate">
                        <a href="#update" data-toggle="tab">
                          <img
                            src="@/images/btn_allnews_03.png"
                            width="135"
                            height="80"
                            class="btn_news"
                          />
                        </a>
                      </div>
                    </td>
                    <td width="240">
                      <div data-aos="zoom-in-down" class="aos-init aos-animate">
                        <a href="#promotion" data-toggle="tab">
                          <img
                            src="@/images/btn_allnews_04.png"
                            width="173"
                            height="80"
                            class="btn_news"
                          />
                        </a>
                      </div>
                    </td>
                    <td width="240">
                      <img
                        src="@/images/btn_allnews_05.png"
                        width="607"
                        height="80"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              height="672"
              colspan="4"
              valign="top"
              background="images/eddga-studio_07.png"
            >
              <div class="tab-content" style="margin-top:30px">
                <!-- Text Start Allnews -->
                <div role="tabpanel" class="tab-pane active" id="allnews">
                  <div class="allnews-row">
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="donatev10.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/donatev10-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Donate Volume 10</div>
                        <div class="allnews-text">
                          ร่วมบริจาคเซิฟเวอร์รับไอเทมสุดพิเศษได้แล้ววันนี้
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-10-22 15:00:00"
                            title="อังคาร,22 ตุลาคม 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="halloweenevent.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img
                                src="@/images/event/halloweenevent-web.png"
                              />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Halloween Event</div>
                        <div class="allnews-text">
                          กิจกรรมตามหานักล่าขุมทรัพย์
                          และรับหมวกแคชคอสตูมฟรีอีกเพียบ
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-10-22 15:00:00"
                            title="อังคาร,22 ตุลาคม 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="poweraccessory.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img
                                src="@/images/event/poweraccessory1-web.png"
                              />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          Increase Power Accessory
                        </div>
                        <div class="allnews-text">
                          เพิ่มพลังอัพเกรดคุณสมบัติชุดประดับให้ดูมีค่า
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-09-23 15:00:00"
                            title="จันทร์,23 กันยายน 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <!-- Table Event 2 -->
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="specialzone30-30.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img
                                src="@/images/event/specialzone30-30-web.png"
                              />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          Special Zone 30-30
                        </div>
                        <div class="allnews-text">
                          การแข่งขันวอโซนชิงความเป็นหนึ่งรางวัลรวมกว่า 3,000 บาท
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-10-16 15:00:00"
                            title="พุธ,16 ตุลาคม 2562 15.00"
                          ></time>
                          <span class="status-event bg-event">Event</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="mvprankingv3.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/mvprankingv3-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">MVP Ranking V.3</div>
                        <div class="allnews-text">
                          ตามล่าหาผู้กล้าท้าชนบอสหาสุดยอดนักล่าบอสรางวัลเพียบ
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-09-16 15:00:00"
                            title="จันทร์,16 กันยายน 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="newplayer.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/newplayer1-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          Welcome To Phoenix
                        </div>
                        <div class="allnews-text">
                          แจกของรางวัลผู้เล่นที่เข้ามาเล่นใหม่ฟรีทุกไอดี
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-09-16 15:00:00"
                            title="จันทร์,16 กันยายน 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text End Allnews -->

                <!-- Text Start Event -->
                <div role="tabpanel" class="tab-pane" id="event">
                  <div class="allnews-row">
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="sharetagfriend.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img
                                src="@/images/event/sharetagfriend-web.png"
                              />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          Like Share&Tag Friend
                        </div>
                        <div class="allnews-text">
                          กิจกรรมต้อนรับเปิดเซิฟเวอร์แจกรางวัลมูลค่ากว่า 3,000
                          บาท
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-07-02 18:50:00"
                            title="อังคาร,2 กรกฏาคม 2562 18.50"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="roulettev1.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/roulettev1-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Roulette Jackpot</div>
                        <div class="allnews-text">
                          ต้อนรับสุดสัปดาห์หรรษาไปกับรูเล็ตแจ๊คพอทแจกเงินรางวัลกว่า
                          5,000 บาท
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-07-19 12:00:00"
                            title="ศุกร์,19 กรกฏาคม 2562 12.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="royaljackpotv1.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img
                                src="@/images/event/royaljackpotv1-web.png"
                              />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Royal Jackpot V.1</div>
                        <div class="allnews-text">
                          พีระมิด 7 ชั้นแจกรางวัลเพียบ
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-07-25 12:00:00"
                            title="พฤหัสบดี,25 กรกฏาคม 2562 12.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="lvupreward.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/lvupreward-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          Level 99 แตกแจกรางวัล
                        </div>
                        <div class="allnews-text">
                          เพียงเก็บเวล99คนแรกทุกสายอาชีพรับเงินสด500บาทของรางวัลอื่นๆเพียบ
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-07-09 20:00:00"
                            title="อังคาร,9 กรกฏาคม 2562 20.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="preguildwar.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/preguildwar-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Pre GuildwAr</div>
                        <div class="allnews-text">
                          ทดสอบความพร้อมระบบกิลด์วอร์แจกรางวัลรวมกว่า 10,000 บาท
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-07-23 12:00:00"
                            title="อังคาร,23 กรกฏาคม 2562 12.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="diamondslotv1.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/diamondslotv1-web.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">Diamond Slot V.1</div>
                        <div class="allnews-text">
                          ไดมอนด์สล๊อตใหม่ ไฉไลไอเทมเพียบครั้งที่ 1
                        </div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2019-08-02 15:00:00"
                            title="ศุกร์,2 สิงหาคม 2562 15.00"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text End Event -->

                <!-- Text Start Update -->
                <div role="tabpanel" class="tab-pane" id="update">
                  <div class="allnews-row">
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-update">Update</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-event">Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text End Update -->

                <!-- Text Start Promotion -->
                <div role="tabpanel" class="tab-pane" id="promotion">
                  <div class="allnews-row">
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-update">Update</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-notice">Notice</span>
                        </div>
                      </div>
                    </div>
                    <div class="allnews-col" data-aos="zoom-in-up">
                      <div class="allnews-box">
                        <a href="view.html" target="_blank">
                          <div class="boximg-shine">
                            <figure>
                              <img src="@/images/event/phlogo11.png" />
                            </figure>
                          </div>
                        </a>
                        <div class="allnews-text-harder">
                          รอการแก้ไขข้อความ...
                        </div>
                        <div class="allnews-text">รายละเอียดข้อความกิจกรรม</div>
                        <div class="allnews-time">
                          <i class="far fa-clock"></i> โพสต์ล่าสุด :
                          <time
                            class="timeago"
                            datetime="2018-09-29 17:46:00"
                            title="เสาร์,29 กันยายน 2561 17.46"
                          ></time>
                          <span class="status-event bg-event">Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text End Promotion -->
              </div>
            </td>
          </tr>
          <tr>
            <td
              class="get_item_bg"
              height="88"
              background="images/eddga_studio_21-1.png"
            ></td>
            <td class="social_bg" background="images/eddga_studio_22.png"></td>
          </tr>
          <tr>
            <td
              class="vote_bg"
              height="277"
              background="images/eddga_studio_23.png"
            >
              <table width="289" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="vote_server.html" target="_blank">
                      <img
                        src="@/images/icon/btn_vote.png"
                        width="289"
                        height="92"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="share_facebook.html" target="_blank">
                      <img
                        src="@/images/icon/btn_share.png"
                        width="289"
                        height="91"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.facebook.com/groups/" target="_blank">
                      <img
                        src="@/images/icon/btn_group.png"
                        width="289"
                        height="94"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
            <td class="social_sub_bg" background="images/eddga_studio_24.png">
              <table width="289" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="https://line.me/th/" target="_blank">
                      <img
                        src="@/images/icon/btn_line.png"
                        width="289"
                        height="92"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/marketingAPAC/"
                      target="_blank"
                    >
                      <img
                        src="@/images/icon/btn_messages.png"
                        width="289"
                        height="91"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.facebook.com/groups/" target="_blank">
                      <img
                        src="@/images/icon/btn_group.png"
                        width="289"
                        height="94"
                        class="btn-center"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              class="leaderboard_bg"
              height="80"
              colspan="4"
              background="images/eddga_studio_25.png"
            ></td>
          </tr>
          <tr>
            <td height="388" colspan="4">
              <table width="1200" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td
                    width="289"
                    height="388"
                    class="leaderboard_sub_bg"
                    background="images/eddga_studio_26.png"
                    valign="top"
                  >
                    <div class="box-rank">
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                          <a
                            href="#ranking_vote"
                            aria-controls="ranking_vote"
                            role="tab"
                            data-toggle="tab"
                          >
                            <i class="far fa-folder-open"></i> Vote
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#ranking_share"
                            aria-controls="ranking_share"
                            role="tab"
                            data-toggle="tab"
                          >
                            <i class="far fa-folder-open"></i> Share
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane active"
                          id="ranking_vote"
                        >
                          <div class="rank-box" data-aos="zoom-in-up">
                            <table class="table-rank">
                              <thead>
                                <tr>
                                  <th width="19%" class="text-center">ลำดับ</th>
                                  <th width="56%" class="text-center">
                                    ไอดีเกมส์
                                  </th>
                                  <th width="25%" class="text-center">แต้ม</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center" colspan="3">
                                    <div class="show-reloadbox">
                                      <i
                                        class="fas fa-circle-notch fa-spin"
                                      ></i>
                                      ยังไม่มีการจัดอันดับ Ranking Vote
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          class="tab-pane"
                          id="ranking_share"
                        >
                          <div class="rank-box" data-aos="fade-up">
                            <table class="table-rank">
                              <thead>
                                <tr>
                                  <th width="19%" class="text-center">ลำดับ</th>
                                  <th width="56%" class="text-center">
                                    ไอดีเกมส์
                                  </th>
                                  <th width="25%" class="text-center">แต้ม</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center" colspan="3">
                                    <div class="show-reloadbox">
                                      <i
                                        class="fas fa-circle-notch fa-spin"
                                      ></i>
                                      ยังไม่มีการจัดอันดับ Ranking Share
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="guild_bg"
                    width="620"
                    background="images/eddga_studio_27.png"
                    valign="top"
                  >
                    <div class="box-guild">
                      <!-- <iframe
                        src="../system/guild/index.html"
                        frameborder="0"
                        scrolling="no"
                        allowtransparency="true"
                        width="600"
                        height="350"
                      ></iframe> -->
                    </div>
                  </td>
                  <td
                    class="top_bg"
                    width="290"
                    background="images/eddga_studio_28.png"
                    valign="top"
                  >
                    <div class="box-rank">
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                          <a
                            href="#ranking_mvp"
                            aria-controls="ranking_mvp"
                            role="tab"
                            data-toggle="tab"
                          >
                            <i class="far fa-folder-open"></i> MvP
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#ranking_pvp"
                            aria-controls="ranking_pvp"
                            role="tab"
                            data-toggle="tab"
                          >
                            <i class="far fa-folder-open"></i> PvP
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div role="tabpanel" class="tab-pane" id="ranking_pvp">
                          <div class="rank-box" data-aos="fade-up">
                            <table class="table-rank">
                              <thead>
                                <tr>
                                  <th width="19%" class="text-center">ลำดับ</th>
                                  <th width="56%" class="text-center">
                                    ชื่อตัวละคร
                                  </th>
                                  <th width="25%" class="text-center">แต้ม</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center">
                                    <div class="rank-number">1.</div>
                                  </td>
                                  <td class="text-center">
                                    <div class="rank-name"></div>
                                  </td>
                                  <td class="text-center">
                                    <div class="rank-point">
                                      <span class="counter">0</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          class="tab-pane active"
                          id="ranking_mvp"
                        >
                          <div class="rank-box" data-aos="fade-up">
                            <table class="table-rank">
                              <thead>
                                <tr>
                                  <th width="19%" class="text-center">ลำดับ</th>
                                  <th width="56%" class="text-center">
                                    ชื่อตัวละคร
                                  </th>
                                  <th width="25%" class="text-center">แต้ม</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center">
                                    <div class="rank-number">1.</div>
                                  </td>
                                  <td class="text-center">
                                    <div class="rank-name"></div>
                                  </td>
                                  <td class="text-center">
                                    <div class="rank-point">
                                      <span class="counter">0</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- <tr>
            <td
              height="360"
              colspan="4"
              background="images/eddga_studio_29.png"
            ></td>
          </tr> -->
          <tr>
            <td height="1"></td>
            <td width="44"></td>
            <td width="577"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cloud_header">
      <div class="cloud"></div>
    </div>
    <div class="sky_wave">
      <div class="clouds_one"></div>
      <div class="clouds_two"></div>
      <div class="clouds_three"></div>
    </div>
    <!-- ==================================================================== -->
    <div
      class="modal fade-scale"
      id="modal_welcome"
      role="dialog"
      aria-labelledby="modal_welcome"
    >
      <div class="modal-dialog modal-old" role="document">
        <div class="modal-content">
          <div class="modal-body2">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              data-toggle="tooltip"
              data-placement="left"
              title
              data-original-title="ปิดหน้าต่าง"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div>
              <img src="@/images/event/newmarket.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <pangya-footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Slider from "@/components/Slider";
import PangyaFooter from "@/components/PangyaFooter";

export default {
  components: {
    Navigation,
    Slider,
    PangyaFooter
  }
};
</script>

<style scoped src="@/assets/css/eddga-studio.css"></style>
