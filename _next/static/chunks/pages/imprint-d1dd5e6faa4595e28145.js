_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{K2iV:function(e,n,t){"use strict";var i=t("nKUr"),r=t("h4VS"),s=t("apO0"),a=t("q1tI"),o=t("BIX1"),u=t.n(o);function c(){var e=Object(r.a)(["common:imprint.contact-inquiries"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["common:imprint.title"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["common:imprint.enable-js"]);return d=function(){return e},e}n.a=function(){var e=u()().t,n=Object(a.useState)(Object(i.jsx)("span",{className:"italic text-red-400",children:e(d())})),t=n[0],r=n[1];return Object(a.useEffect)((function(){r(Object(i.jsx)("a",{className:"text-blue-namib",href:"mailto:namib@informatik.uni-bremen.de",children:"namib@informatik.uni-bremen.de"}))}),[]),Object(i.jsx)(s.a,{childrenInScreenVH:Object(i.jsxs)("section",{children:[Object(i.jsx)("h1",{className:"mb-8 md:mb-16 max-w-4xl xl:max-w-7xl",children:e(l())}),Object(i.jsxs)("p",{className:"font-medium text-xl md:text-3xl leading-snug md:leading-snug mb-6",children:[e(c())," ",t]}),Object(i.jsxs)("p",{className:"font-medium text-xl md:text-3xl mb-16 leading-snug md:leading-snug",children:["Universit\xe4t Bremen ",Object(i.jsx)("br",{}),"Fachbereich 03 Informatik ",Object(i.jsx)("br",{}),"AG Rechnernetze ",Object(i.jsx)("br",{}),"Postfach 330 440 ",Object(i.jsx)("br",{}),"28334 Bremen"]})]})})}},i6YM:function(e){e.exports=JSON.parse('{"hero":{"title":"Wir haben das Ziel, die Sicherheit und Interoperabilit\xe4t von Ger\xe4ten im <0>Internet of Things (IoT)</0> zu verbessern.","subtitle":"Ein Master-Projekt an der Universit\xe4t Bremen."},"section-two":{"title":"Software, welche IoT-Sicherheit zug\xe4nglicher macht","subtitle":"Hierf\xfcr haben wir uns insbesondere mit zwei Standards f\xfcr die \\"Selbstbeschreibung\\" von IoT-Ger\xe4ten besch\xe4ftigt.","list":{"0":"\xdcber eine <0>Manufacturer Usage Description</0> (MUD) k\xf6nnen Ger\xe4te angeben, welche Kommunikationsbefugnisse sie ben\xf6tigen, was f\xfcr die automatische Konfiguration von Firewalls und andere Sicherheitsmechanismen dienen kann.","1":"Durch diese Ma\xdfnahmen kann unerw\xfcnschtes sowie sch\xe4dliches Verhalten von IoT-Ger\xe4ten unterbunden werden.","2":"F\xfcr die Umsetzung von <0>MUD</0> haben wir passende Komponenten entwickelt, die einerseits die Konfiguration \xfcbernehmen, aber auch die manuelle Ger\xe4teverwaltung \xfcber ein Frontend erlauben.","3":"Mittels unseres \\"Legacy-Services\\" k\xf6nnen \xe4ltere Ger\xe4te ohne MUD-Unterst\xfctzung ber\xfccksichtigt werden."}},"section-three":{"title":"Was ist mit der Interoperabilit\xe4t?","description":"F\xfcr die Verbesserung der Interoperabilit\xe4t haben wir uns vor allem mit den <0>Thing Descriptions</0> (TDs) des <1>Web of Things</1>-Standards auseinandergesetzt, die als standardisierte Schnittstellenbeschreibungen die Interaktion zwischen Ger\xe4ten erleichtern und herstellerunabh\xe4ngig gestalten sollen."},"section-four":{"title":"Das Hotel-Szenario als Proof of Concept","description":"Ein Gast besucht ein Hotel und m\xf6chte in diesem Hotel auf dort bereitgestellte IoT-Ger\xe4te zugreifen. Hierf\xfcr bekommt dieser beim Einchecken Zugangsdaten f\xfcr den Autorisierungsserver des Hotels, meldet sich dort mit z.B. seinem Handy an und kann anschlie\xdfend auf die IoT-Ger\xe4te im gebuchten Zimmer zugreifen. Der Zugang ist dabei beschr\xe4nkt auf Ger\xe4te in diesem Zimmer, reduziert auf bestimmte Funktionen und endet, sobald der Gast auscheckt."},"components":{"title":"Welche Gruppen und Komponenten geh\xf6ren zu NAMIB?","hotels":{"title":"HOTELS","description":"Die HOTELS-Gruppe (Hosts Offering Things and Enforcing Local Security) hat sich vornehmlich mit der sicheren und interoperablen Nutzung von IoT-Ger\xe4ten besch\xe4ftigt. Das Ganze wird auf Basis der <0>ACE-OAuth-</0>, <1>CoRE Resource Directory-</1> und der <2>Web of Things</2>-Standards umgesetzt. Gleichzeitig m\xf6chten wir im Rahmen des Szenarios auch betrachten, wie neue Ger\xe4te zu dieser Infrastruktur hinzugef\xfcgt werden k\xf6nnen.","description2":"Hierf\xfcr befassen wir uns unter anderem auch mit dem k\xfcrzlich ver\xf6ffentlichten Standard EAP-NOOB (<0>RFC 9140</0>) f\xfcr die Einbindung von Ger\xe4ten in drahtlose Netze mithilfe von Out-of-Band-Nachrichten und erarbeiten dabei unter anderem eine Abwandlung des dort verwendeten Grundprinzips in der Form von <1>EAP-UTE</1>.","authorization":{"title":"Authorisierungsserver","dcaf-rs":"ACE-OAuth-Implementierung (Datenmodell mit CBOR-/COSE-Integration) in Rust.","canephora":"ACE-OAuth-Implementierung (Autorisierungsserver) in Rust.","tinydtls-rs":"Bindings zu tinydtls in Rust.","libcoap-rs":"Bindings zu libcoap in Rust."},"client":{"title":"Gastclient","description":"Mobile App in Flutter, k\xfcmmert sich um die Kommunikation mit den IoT-Ger\xe4ten, dem Resource Directory und dem Autorisierungsserver.","dart_dcaf":"ACE-OAuth-Implementierung in Dart.","dart_tinydtls":"Bindings zu tinydtls in Dart.","dart_wot":"Web Of Things Implementierung in Dart."}},"reverse":{"title":"Reverse Engineering","description":"Die Reverse Engineering Gruppe befasst sich gr\xf6\xdftenteils mit der Handhabung von IoT-Ger\xe4ten, f\xfcr die keine (offizielle) MUD-Spezifikation existiert. Dazu ist geplant, Interessierten eine Toolbox an die Hand zu geben, mit der MUD-Spezifikationen f\xfcr IoT-Ger\xe4te erstellt und ver\xf6ffentlicht werden k\xf6nnen. Als weitere Sicherheitsma\xdfnahme entwickeln wir ein System auf Basis maschinellem Lernens um Anomalien von IoT-Ger\xe4ten zu erkennen.","mudsights":{"title":"MUDsights","description":"Applikation f\xfcr Hotelmitarbeiter zur Verwaltung und Analyse der IoT-Ger\xe4te in den G\xe4stezimmern. Darunter die M\xf6glichkeit Ger\xe4te zu quarant\xe4nisieren sowie die Anzeige von Anomalien.","toolbox":"Erweiterung, mit der MUD-Dateien f\xfcr Ger\xe4te im lokalen Netzwerk bearbeitet und automatisiert erstellt werden k\xf6nnen."},"shai":{"title":"shai","description":"Machine Learning basierte Klassifikatoren zur Analyse des Netzverkehres und zur Detektion von anomalen Verhalten der IoT Ger\xe4te.","netimg":"Sammlung an generierten PNG-Bildern aus dem CSE-CIC-IDS2018 Datensatz zum Trainieren von Bildklassifikatoren."},"ldr":{"title":"Legacy Device Recognition","description":"Coming soon\u2122"}},"subnet":{"title":"Subnet Enforcing","description":"Subnet-Enforcing besch\xe4ftigt sich mit der Umsetzung von (MUD-)Policies insbesondere im lokalen Kontext. In diesem Rahmen verwalten wir die daf\xfcr zentralen (MUD-bezogenen) Komponenten von NAMIB: Controller und Enforcer.","controller":{"title":"Controller","description":"MUD-Manager","description2":"generiert Firewall-Regeln aus MUDs"},"enforcer":{"title":"Enforcer","description":"Dienst auf einem OpenWRT-Router","description2":"wendet generierte Firewall-Regeln (durch nftnl) auf nf_tables an"},"muddles":{"title":"muddles","description":"Setzt einen MUD Language Server prototypisch in Rust (mit tower-lsp) um. Dieser unterst\xfctzt beispielsweise die Vervollst\xe4ndigung von Policy-Namen und Warnungen bei Benutzung von YANG-ACL-Features, die MUD nicht unterst\xfctzt."}}},"cta":{"title":"Klingt Interessant?","button-label":{"bachelor":"Zum digitalen Bachelor Projekttag","master":"Zum Master Projekttag (soon\u2122)"}},"imprint":{"title":"Impressum","contact-inquiries":"Kontaktanfragen an","enable-js":"Aktivieren Sie JavaScript, um die E-Mail Adresse anzuzeigen"},"projekttag":{"bachelor-title":"Bachelor Projekttag","master-title":"Master Projekttag (soon\u2122)","redirecting":"Umleitung...","no-js-click-here":"Klicken Sie hier, wenn Sie JavaScript deaktiviert haben:"}}')},jNNC:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/imprint",function(){return t("waM6")}])},waM6:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var i=t("rePB"),r=t("nKUr"),s=t("MA9B"),a=t.n(s),o=(t("q1tI"),t("K2iV")),u=t("i6YM");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={common:u};function m(e){return Object(r.jsx)(a.a,{lang:"de",namespaces:d,internals:{defaultLanguage:"de",isStaticMode:!0},false:!0,children:Object(r.jsx)(o.a,l({},e))})}m=Object.assign(m,l({},o.a)),o.a&&o.a.getInitialProps&&(m.getInitialProps=function(e){return o.a.getInitialProps(l(l({},e),{},{lang:"de"}))})}},[["jNNC",0,2,1,3]]]);