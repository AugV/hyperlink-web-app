<template>
<!-- eslint-disable max-len -->
<div>
  <NavigationBar
    :leftElement="leftNavElement"
  />
  <div class="about">
    <div class="header">Apie</div>
    <p>
       Jaunosios kartos menininkė Monika Radžiūnaitė šiuo metu yra Vilniaus dailės akademijos
      tapybos studijų magistrantė. Autorės kūrybai būdinga istorijos interpretacija, senosios tapybos
      elementų suaktualinimas ir kultūrinių nuorodų pasitelkimas tapant siužetus. Menininkės kūriniai
      remiasi nežinojimu, neišmanymu, kvailumu ar klaida. Tai yra kūrybinė strategija, kaip
      sąmoninga kvailumo būsena, išvaduojanti menininkę iš poreikio žinoti tikrąsias vaizdų reikšmes
      ar istorines jų prasmes, formavimosi aplinkybes. Apie savo kūrybą Radžiūnaitė sako:
      „Viduramžių negalime rekonstruoti, istoriją mes galime tik suaktualinti, pasitelkdami tai, kas
      išliko ir ką tyrinėtojai manė esant svarbiu. Tačiau pats atkūrimo procesas gali atskleisti tai, kas
      mums svarbu dabartyje ir kas dabartyje išliko amžina.“
    </p>

    <p>
      Dominuojanti Monikos Radžiūnaitės tapybos tema yra kvailybė kaip žmogiškasis fenomenas,
      atskleidžiamas per praeities epochų dailės pavyzdžius, simbolius ir ikonografiją, kurie dėl laiko
      perskyros transformavo savo kultūrinę prasmę. Tokiu būdu kyla sunkumai siekiant rekonstruoti
      vaizdų savalaikes reikšmes – daug kas pamiršta, nedokumentuota, o kartais ir nebeaktualu.
      Tačiau šiuolaikinės kūrybinės strategijos leidžia į suvokimą įtraukti reikšmių daugialypumą,
      kontekstualumą, kuris, veikdamas intertekstualiai kuria įvairialypiškas ir suaktualinimu
      persmelktas reikšmes, nepaisančias griežtos ikonografinės sistemos, būdingos klasikiniam
      menui. Dėl to, kiekviena praeities epocha nors ir atrodo svetima ir tolima, bet dabartyje
      susiformavusių mąstymo metodų paveikta, veikia kitu režimu, įgalinančiu kurti istorinę
      sinchroniją - būdą suaktualinti praeitį, ją adaptuojant dabarties reikmėms. Menininkės tapyboje
      naudojama istorinė ikonografija ir socialinės dailės istorijos adaptavimas yra autorės tyrinėjimų
      tema, atverianti laike išsitęsusias paraleles su šių laikų kultūra. Tai leidžia interpretuoti jos
      kūrybą atvira poetine forma, išlaikant ir kultūrinį tęstinumo dėmenį, bet leidžiantį jį aproprijuoti.
    </p>

    <div class="contacts">
      <div>
        +37069964846
      </div>

      <div>
        <a href="#" class="cryptedmail"
          data-name="mo.radziunaite"
          data-domain="gmail"
          data-tld="com"
          onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;">
          </a>
      </div>

      <div>
        <a href="https://www.galerijavartai.com/artists/28-monika-radziunaite/">
          Menininkę atstovaujanti galerija
        </a>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar.vue';

const leftNavElement = {name: 'Atgal', path: '/#'};

export default {
  name: 'About',
  components: {
    NavigationBar,
  },
  data: () => ({
    leftNavElement,
  }),
};
</script>

<style scoped>
  .about {
    text-align: justify;
    padding: 0px 8px 15px 8px;
    margin-left: 3%;
    margin-right: 3%;
  }

  .header {
    margin-top: 100px;
    text-align: left;
    font-size: 24pt;
    color:white;
  }

  .contacts {
    display: flex;
    flex-direction: column;
  }

  .contacts div {
    margin-top: 5px;
  }

  .cryptedmail:after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }
</style>
