<template>
  <div class="Footer">
    <div id="Holder111">
      <div id="Holder112">
        <div id="LogoHolder">
          <img src="../assets/LogoSmall.png" id="LogoSML" />
          <p id="p3">Copyright© 2021 Blueberry Cream. All rights reserved</p>
        </div>
        <div id="SocialsHolder">
          <h3>Socials</h3>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Facebook</a>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Instagram</a>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">TikTok</a>
        </div>
        <div id="LegalHolder">
          <h3>Legal</h3>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Terms of Service</a>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Privacy Policy</a>
        </div>
        <div id="ContactHolder">
          <h3>Contact</h3>
          <a
            href="mailto:contact@blueberrycream.com?subject=EN SNORKRÅKA I MIN TÅRTA IGEN!!!%20&body=Hej det är jag, Ullabritta igen. Nu har det hänt ÄNNU EN GÅNG. Jag såg den där Carlos snyta sig i sin hand och sedan gnugga in den i min judekaka eller vad den heter medans han INTENSIVE stirrar mig rakt i mina ögon. Nej fyfan, vad har det blivit av dagens ungar? När jag var liten så brukade vi stena såna där små luffare, hans mor borde svalt honom. Nu när jag sitter på toa och skiter så tarmen går sönder medan jag skriver det här mailet vill jag att ni ska veta att jag ALDRIG, och jag menar ALDRIG kommer. handla på blueberrycream igen (så länge ni inte har bulla cake på halva priset, den var fanimig det godaste jag smakat). Tack och hej"
            >Mail: contact@blueberrycream.com</a
          >
          <a href="273-6700">Telephone: +1 (310) 273-6700</a>
        </div>
        <div id="ThanksHolder">
          <img src="../assets/ThankYou.png" id="Thx" />
          <p2>From the Blueberry Cream team</p2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
h3 {
  font-size: 23px;
  color: #fff3e1;
}
a {
  font-size: 16px;
  margin: 0;
  text-decoration: none;
  color: #fff3e1;
}
a:hover {
  text-decoration: underline;
}
#Holder111 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 21vh;
  width: 100%;
  bottom: 0px;
  background: #5c8ba0;
  margin-top: 3%;
}
#Holder112 {
  position: relative;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: row;
}
#LogoHolder {
  width: 30%;
  display: flex;
  flex-direction: column;
}
#SocialsHolder {
  width: 9%;
  display: flex;
  flex-direction: column;
}
#LegalHolder {
  width: 11%;
  display: flex;
  flex-direction: column;
}
#ContactHolder {
  width: 25%;
  display: flex;
  flex-direction: column;
}
#ThanksHolder {
  width: 25%;
  display: flex;
  flex-direction: column;
}
#Thx {
  width: 70%;
  margin-top: 5%;
}
p2 {
  font-size: 17;
}
#LogoSML {
  margin-top: 3%;
  margin-bottom: 10%;
  width: 80%;
}
#p3 {
  font-size: 13px;
  color: #bebebe;
}
</style>
