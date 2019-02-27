(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"uke-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uke-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Uke 2")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Timer")]),e._v(" "),n("p",[e._v("Denne uken: 42")])]),e._v(" "),n("h2",{attrs:{id:"fredag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fredag","aria-hidden":"true"}},[e._v("#")]),e._v(" Fredag")]),e._v(" "),n("p",[e._v("Arbeidsuken er over og helgen kan snart begynne!\nIdag har jeg jobbet videre med gårdagens utløpsdato-oppgave. Dagen har for det meste gått til å sette opp serversiden slik at den kan ta imot HTTP-requests, for å bruke "),n("strong",[n("em",[e._v("Postman")])]),e._v(" for å sjekke at responsen kommer tilbake i riktig format og at ingenting går gale.\nVidere har jeg lagt til valgfri datostempling av "),n("em",[e._v("features")]),e._v(" man legger til fra brukerkrensesnittet (ja jeg har klart å rote meg tilbake på klientsiden). Jeg har og endret koden på serversiden slik at alle "),n("em",[e._v("features")]),e._v(" som er utgått på dato ikke sendes fra server i det heletatt, men fortsatt ligger i databasen. Dette gjør at programmet ikke tar unødvendig mye tid å laste og det er enkelt å hente frem historikk.")]),e._v(" "),n("h2",{attrs:{id:"torsdag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#torsdag","aria-hidden":"true"}},[e._v("#")]),e._v(" Torsdag")]),e._v(" "),n("p",[e._v('Idag har jeg lagt til en debugger for mocha og chai i VS code, for å finne ut hva som går gale i koden min og etter mye frem og tilbake mellom linjene fant jeg ut av det. Nå fungerer "IF" kommandoen helt knirkefritt (hvertfall etter hva jeg har klart å teste). Jeg var egentlig nokså ferdig med den opprinnelige oppgaven nå, men det har kommet et par ekstra ønskelige funksjoner på bordet.')]),e._v(" "),n("p",[e._v("De nye funskjonene jeg skal implementere er å legge til mulighet for utløpsdato på forskjellige "),n("em",[e._v("features")]),e._v(". Dette vil brukes ved tidsbegrensede arrangement, som f.eks VM eller OL. I tillegg ønsket de en måte å søke på forskjellige "),n("em",[e._v("features")]),e._v(", slik at det blir enklere å finne fram etterhvert som det blir lagt inn mer og mer i databasen.")]),e._v(" "),n("p",[e._v("Jeg begynte såvidt på implementasjonen av utløpsdato i dag, ved å legge til en kollonne av typen "),n("strong",[e._v("TIMESTAMPTZ")]),e._v(" i databasen. Den fungerer direkte med Javascript sine Date objekter som igjen er kompatibel med sammenlignings operatørene: "),n("strong",[e._v("<")]),e._v(" og "),n("strong",[e._v(">")]),e._v(". Dette gjør det svært enkelt å teste om en gitt dato er passert.")]),e._v(" "),n("h2",{attrs:{id:"onsdag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onsdag","aria-hidden":"true"}},[e._v("#")]),e._v(" Onsdag")]),e._v(" "),n("p",[e._v('Idag var Henrik tilbake, så jeg har brukt litt tid på å ta ham gjennom det jeg har gjort på front-end delen.\nEllers har jeg jobbet masse med "IF" kommandoen til config\'en, men da jeg viste frem arbeidet fikk jeg beskjed om at jeg hadde tolket problemstillingen feil. Så da skrotet jeg det meste av arbeidet og begynte på nytt. Etter en stund var jeg nokså fornøyd og skulle begynne å teste, men testene stemmer ikke helt overens med det jeg forventet, da de alltid viser godkjent, selv når de absolutt ikke skal. Jeg mistenker at dette kan være grunnet mindre forståelse for Node.js sin module.exports funksjon fra min side, så det blir hjemmelekse for meg å sette meg inn i dette.')]),e._v(" "),n("p",[e._v("I håp om å unngå tilsvarende senere vil jeg nok bruke store deler av morgendagen på å sette meg inn i Node.js og Express.js. Dette er og svært relevant for bacheloroppgaven min så der har jeg litt ekstra motivasjon.")]),e._v(" "),n("h2",{attrs:{id:"tirsdag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tirsdag","aria-hidden":"true"}},[e._v("#")]),e._v(" Tirsdag")]),e._v(" "),n("p",[e._v("Denne uken er visst noe forskjøvet, da mandagen kom på tirsdag.\nIdag forsov jeg meg litt, så jeg skyntet meg ut og mistet bybanen akkurat og måtte vente i vel 8 min på neste. Jeg fikk meg en god plass og satt meg godt til rette. Så etter et par stopp får vi beskjed om at det er teknisk feil på bybanen og alle må av og vente på neste. Heldigvis var det nå mange som ventet på den neste vognen, som også var ganske full. Så turen endte opp med å stå som sild i tønne med tjukk boblejakke på. 😒")]),e._v(" "),n("p",[e._v('Ellers har dagen vært noe dramatisk på Scout. Midt i lunsjen kom det en løpende og skrek ut "CODE RED! ALT ER NEDE!" og alle hoppet opp å kom seg tilbake på plass for å finne problemene og restarte serverne. De har satt opp en raspberry pie til å overvåke alle serverne de har og vise status på en skjerm midt i det åpne landskapet hvor alle utviklerne sitter, og alt lyste rødt. Jeg fikk inntrykk av å være med i en episode av tv-serien "Silicon Valley". Heldigvis gikk det ikke lange tiden før alt var oppe igjen.')]),e._v(" "),n("p",[e._v("Idag har jeg skrevet ferdig sql-spørringen fra server, som oppdaterer alle endringer gjort fra klienten i en engang, og den fungerer knirkefritt.\nJeg har og gått i dybden og analysert flyten i programmet for å få ordentlig oversikt over hvordan konfigurasjonen fra databasen blir håndtert på serveren. Jeg begynner å bli klar for å skrive logikken bak if'statementene.")]),e._v(" "),n("h2",{attrs:{id:"mandag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mandag","aria-hidden":"true"}},[e._v("#")]),e._v(" Mandag")]),e._v(" "),n("p",[e._v("Idag har jeg hatt en god dag. Jeg har fått skrotet mye unødvendig og dårlig kode, og erstattet det med korte og lettleselige funksjoner.\nPå klient-siden får jeg nå sendt alle endringer i ett flott og lett håndterlig json objekt. På serversiden har jeg begynt å lage en sql spørring (query) for å oppdaterer alle endringer i en engang, istedenfor å ha det i en løkke (noe som kan bli svært tidkrevende om mange endringer blir gjort).")]),e._v(" "),n("p",[e._v('Jeg har og begynt å skrive tester for "If" statementene Scout ønsker i config-databasen sin. Disse skal igrunn fungere på samme vis som en "if" statement i alle språk, men den skal skrives i json.\nMulige implementasjoner:')]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// AND-case")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// $ - signaliserer et uttrykk som skal evalueres")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Her ligger betingelsene i samme json objekt.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Dette indikerer at alle betingelsene må være")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// oppfylt for at uttrykket skal evaluere "then" klausulen,')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// ellers evalueres "else" klausulen.')]),e._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Dette eksempelet vil gi kr 20.000,- i spendinglimit")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// til 30% av brukerne, og kr 10.000,- til resten")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myFeature"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$Spendinglimit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"if"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"role"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// IF has role user")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"percentage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// AND is within 30% of all users")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"then"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"else"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Her ligger betingelsene i en tabell (Array) i et json objekt.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Dette indikerer at minst ett av betingelsene må være")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// oppfylt for at uttrykket skal evaluere "then" klausulen,')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// ellers evalueres "else" klausulen.')]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Dette eksempelet vil gi kr 20.000,- i spendinglimit")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// til alle admin-brukere og 20% av brukerne")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// og kr 10.000,- til resten")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myFeature"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$Spendinglimit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"if"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"role"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// IF has role admin")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"percentage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// OR is within 20% of all users")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"then"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"else"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);