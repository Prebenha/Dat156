(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"uke-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uke-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Uke 2")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Timer")]),t._v(" "),n("p",[t._v("Denne uken: 26")]),t._v(" "),n("p",[t._v("Totalt: 68")])]),t._v(" "),n("h2",{attrs:{id:"onsdag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onsdag","aria-hidden":"true"}},[t._v("#")]),t._v(" Onsdag")]),t._v(" "),n("p",[t._v('Idag var Henrik tilbake, så jeg har brukt litt tid på å ta ham gjennom det jeg har gjort på front-end delen.\nEllers har jeg jobbet masse med "IF" kommandoen til config\'en, men da jeg viste frem arbeidet fikk jeg beskjed om at jeg hadde tolket problemstillingen feil. Så da skrotet jeg det meste av arbeidet og begynte på nytt. Etter en stund var jeg nokså fornøyd og skulle begynne å teste, men testene stemmer ikke helt overens med det jeg forventet, da de alltid viser godkjent, selv når de absolutt ikke skal. Jeg mistenker at dette kan være grunnet mindre forståelse for Node.js sin module.exports funksjon fra min side, så det blir hjemmelekse for meg å sette meg inn i dette.')]),t._v(" "),n("p",[t._v("I håp om å unngå tilsvarende senere vil jeg nok bruke store deler av morgendagen på å sette meg inn i Node.js og Express.js. Dette er og svært relevant for bacheloroppgaven min så der har jeg litt ekstra motivasjon.")]),t._v(" "),n("h2",{attrs:{id:"tirsdag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tirsdag","aria-hidden":"true"}},[t._v("#")]),t._v(" Tirsdag")]),t._v(" "),n("p",[t._v("Denne uken er visst noe forskjøvet, da mandagen kom på tirsdag.\nIdag forsov jeg meg litt, så jeg skyntet meg ut og mistet bybanen akkurat og måtte vente i vel 8 min på neste. Jeg fikk meg en god plass og satt meg godt til rette. Så etter et par stopp får vi beskjed om at det er teknisk feil på bybanen og alle må av og vente på neste. Heldigvis var det nå mange som ventet på den neste vognen, som også var ganske full. Så turen endte opp med å stå som sild i tønne med tjukk boblejakke på. 😒")]),t._v(" "),n("p",[t._v('Ellers har dagen vært noe dramatisk på Scout. Midt i lunsjen kom det en løpende og skrek ut "CODE RED! ALT ER NEDE!" og alle hoppet opp å kom seg tilbake på plass for å finne problemene og restarte serverne. De har satt opp en raspberry pie til å overvåke alle serverne de har og vise status på en skjerm midt i det åpne landskapet hvor alle utviklerne sitter, og alt lyste rødt. Jeg fikk inntrykk av å være med i en episode av tv-serien "Silicon Valley". Heldigvis gikk det ikke lange tiden før alt var oppe igjen.')]),t._v(" "),n("p",[t._v("Idag har jeg skrevet ferdig sql-spørringen fra server, som oppdaterer alle endringer gjort fra klienten i en engang, og den fungerer knirkefritt.\nJeg har og gått i dybden og analysert flyten i programmet for å få ordentlig oversikt over hvordan konfigurasjonen fra databasen blir håndtert på serveren. Jeg begynner å bli klar for å skrive logikken bak if'statementene.")]),t._v(" "),n("h2",{attrs:{id:"mandag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mandag","aria-hidden":"true"}},[t._v("#")]),t._v(" Mandag")]),t._v(" "),n("p",[t._v("Idag har jeg hatt en god dag. Jeg har fått skrotet mye unødvendig og dårlig kode, og erstattet det med korte og lettleselige funksjoner.\nPå klient-siden får jeg nå sendt alle endringer i ett flott og lett håndterlig json objekt. På serversiden har jeg begynt å lage en sql spørring (query) for å oppdaterer alle endringer i en engang, istedenfor å ha det i en løkke (noe som kan bli svært tidkrevende om mange endringer blir gjort).")]),t._v(" "),n("p",[t._v('Jeg har og begynt å skrive tester for "If" statementene Scout ønsker i config-databasen sin. Disse skal igrunn fungere på samme vis som en "if" statement i alle språk, men den skal skrives i json.\nMulige implementasjoner:')]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AND-case")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $ - signaliserer et uttrykk som skal evalueres")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Her ligger betingelsene i samme json objekt. ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dette indikerer at alle betingelsene må være ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// oppfylt for at uttrykket skal evaluere "then" klausulen,')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ellers evalueres "else" klausulen.')]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dette eksempelet vil gi kr 20.000,- i spendinglimit")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// til 30% av brukerne, og kr 10.000,- til resten")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFeature"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$Spendinglimit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IF has role user")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"percentage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AND is within 30% of all users")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"then"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"else"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Her ligger betingelsene i en tabell (Array) i et json objekt. ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dette indikerer at minst ett av betingelsene må være ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// oppfylt for at uttrykket skal evaluere "then" klausulen,')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ellers evalueres "else" klausulen.')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dette eksempelet vil gi kr 20.000,- i spendinglimit")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// til alle admin-brukere og 20% av brukerne ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// og kr 10.000,- til resten")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFeature"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$Spendinglimit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"if"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IF has role admin")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"percentage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OR is within 20% of all users")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"then"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"else"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.default=a.exports}}]);