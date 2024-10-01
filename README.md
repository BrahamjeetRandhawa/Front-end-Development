# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Braham Singh (vervangen door jouw naam)

  #### Je startniveau:
  Red
  hier je startniveau (kies uit zwart, rood óf blauw)

  #### Je focus:
  Surface plane
  hier je focus (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp

  #### Screenshot(s) van de eerste pagina (small screen): 
  De wereld verfrissen en het verschil maken | Coca-Cola NL 
  <img src="readme-images/Home_pagina_Coca-Cola.JPG" width="430px" alt="Coca-Cola pagina. Informatie over de frisdrank">

  #### Screenshot(s) van de tweede pagina (small screen):
  Fanta - Fruitaroma's en ingrediënten | Coca-Cola NL  
  <img src="readme-images/Fanta_pagina_Coca-Cola.JPG" width="430px" alt="Fanta pagina. Informatie over de soorten fanta smaken.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  <strong>Content</strong>

  Het gebruik van makkelijke taal en de structuur van de website is goed te begrijpen.

  De linkjes en labels zijn goed te onderscheiden van elkaar op de pagina. 

  <strong>Global code</strong>

  De HTML van de pagina is niet goed gevalideert, omdat de id's niet uniek zijn gebruikt. Daarnaast valt het mij op dat er op deze pagina erg veel div's worden gebruikt. Er is geen enkel gedeelte van de pagina dat anders wordt beschreven dan met een div en een class erin.
  
  De lang atribute is in de pagina verwerkt.

  Elke pagina heeft een unieke titel. De titel eindigt echter wel met Coca-cola, wat weer goed bij de structuur past. Zo is de pagina goed te herkennen en toch nog uniek.

  De viewport zoom is niet ingeschakelt op de pagina.

  <strong>Keyboard</strong>

  Als je op tab klikt dan is er duidelijk te zien waar ik met de tab ben.

  De focus bij het klikken op tab is goed aangegeven in de style van de pagina. In dit geval is de style zwart.

  <strong>Mobile and touch</strong>

  De website is roteerbaar en goed te gebruiken bij rotatie. Wel zijn sommige elementen wat groter aangegeven.

  Horizontaal scrollen zit niet verwerkt in de pagina, waardoor je niet verder kunt scrollen dan de breedte van de pagina.

  De button en links kunnen makkelijk worden geopend ongeacht de grote van de website.

  De ruimte tussen elementen bij elk formaat is goed te zien. De ruimte wordt wel een stuk kleiner op een steeds kleiner scherm, maar dat is ook wel een beetje logische, aangezien je niet veel ruimte meer hebt om de elementen kwijt te kunnen.

  <strong>Headings</strong>

  Heading element is hier gebruikt om de pagina content te introduceren.

  De h1 element wordt niet vakker dan 1 keer op een pagina gebruikt. Inplaats hiervan wordt er gebruik gemaakt van de h2 element om de heading van de content te introduceren.

  De heading is op een logische volgorde neergezet op de pagina.

  De heading levels worden niet overgeslagen. Het gaat van h2 naar p. En zo verder.

  <strong>List</strong>

  De ol, ul, dl elementen worden niet toegepast op de website. Op de website wordt er alleen maar gebruik gemaakt van div met daarin classes. De soorten merken onder aan de pagina (boven de footer) kan bijvoorbeeld in een ul gezet worden in plaats van een div.

  <strong>images</strong>

  De images op de pagina hebben een alt atribute, waarin een korte beschrijving van de image staat.

  De decorative images hebben geen null atribute. Er zitten geen decorative images op de website.

  De alt description geeft geen bescrijving over wat er op de tekst in de plaatjes staat.

  <strong>Media (Video and Audio)</strong>

  Ik heb geen video of audio elementen op de website zitten.

  <strong>Controls</strong>

  De "a" element wordt hier gebruikt om aan te geven dat een element een linkje is.

  De linkjes zijn goed te herkennen op de website. Doordat ze bijvoorbeeld in een box zitten.

  De :focus state is goed te herkennen, omdat de elementen die dan in de focus zitten een zwarte rand krijgen.

  De knoppen die op de website zitten hebben een button element. (Een button is een element die aangeeft dat er een interactie op de zelfde pagina gebeurt.).

  Er is een skip link op de website. Dit geeft aan dat er een gedeelt van de pagina aan het begin overgeslagen wordt. De skip link is goed te herkennen, doordat als je aan het begin op tab klikt dan zie je bovenaan de pagina een melding met dat het een skip link is en dat je dus nog een keer moet klikken om naar de content toe te kunnen gaan.

  De linkjes openen niet in een nieuwe pagina. Als je op een link klikt dan wordt dat op dezelfde pagina geopend en geen nieuwe aangemaakt.

  <strong>Appearance</strong>

  De donkere en lichte modus wordt niet ondersteunt op de pagina. De pagina verandert helemaal niks.

  De hoge contrast modus op de website wordt wel ondersteunt door de website.

  Het verhogen van de text size verandert niks met de website de website behoud zijn text en wordt niet groter. Wel wordt het scherm zelf groter, maar dit is achteraf te verkleinen door in de inspector de zoom van het scherm wat te verkleinen.

  Niet alleen kleur geeft aan wat voor informatie er op de website te vinden is. Ook de text geeft veel informatie over de website. Wel geven de plaatjes meer context over de website dan de text alleen.

  <strong>Animation</strong>

  De animatie is bij sommige delen mooi en netjes op het scherm te zien, maar sommige zijn best wel in een flash gedaan. Zo gaat de carousel mooi van de ene naar de volgende slide. Maar de menubar opent direct met een flash.

  De website reduceerd de animaties niet nadat ik de reduced motion van de desktop aan heb gezet. De animatie snelheid blijft hetzelfde.

  <strong>Color contrast</strong>

  Contrast voor alle normal-sized text is goed te onderscheiden van de achtergrond en dus goed te lezen.

  Contrast voor alle larged-sized text is ook goed te onderscheiden van de achtergrond en dus ook goed te lezen.

  De iconen zijn net als hierboven ook goed te lezen vanwege het goede contrast verschil tussen voorgrond en achtergrond.

  De overlappende tekst over de afbeeldingen is ook goed te lezen en te begrijpen.

  De custom selection colors is ook goed te zien.

  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/Homepagina_breakdown_schets.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/Dynamische_deel_breakdown_schets.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  Fanta pagina breakdown schets
  <img src="readme-images/Breakdown_schets_fanta.png" width="375px" alt="breakdown de tweede pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  De code ging goed om na te maken. Daarentegen had ik wel wat last van het verkrijgen van sommige images. En het recht zetten van de images.
  
  <img src="readme-images/Screenshot_code_week_1.png" width="375px" alt="breakdown van nog een dynamisch deel">


  ### Agenda voor meeting
  samen met je groepje opstellen

| Thomas     | Braham         | Aya    | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe maken we vormen? Met vector of images?  | Hoe zit een Carroussel in elkaar?             | Kloppen onze breakdownschetsen?    | Wat is de beste manier om een video te embedden?    |
  | Hoe maak je een progressiebalk bij een carroussel? | Hoe maak je een hamburgermenu met animatie zonder images te gebruiken? | Waar precies moet je div gebruiken en waar een class? | Is onze HTML zo oké & correct? |






  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: Vermijd de div. Meer articles, sections of ul gebruiken inplaats van de div.
  - punt 2: Gebruik figure om captions toe te voegen aan plaatjes.
  - nog een punt: Minimaal 5 Surface plane elementen toevoegen aan de website.
  - ...Punt 3: Carousel hoeft niet infinite te werken op de pagina, zolang het maar van de ene naar de volgende plaatje kan gaan.
  Punt 4: Maak het niet te moeilijk houd het zo dicht mogelijk bij de echte website.
  Punt 5: Gebruik zoveel mogelijk selectoren en geen classes.
  Punt 6: Aria atributen kunnen gebruikt worden ter ondersteuning voor screenreaders. Niet gebruiken als er al een element in zit die het al duidelijk aan geeft. Zoals bij een img met een alt text. Dan hoeft dat niet.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


| Thomas      | Braham          | Aya    | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe zorg ik dat mijn header van kleur verandert, als ik voorbij een bepaald punt op mijn pagina ben?  | Hoe krijg ik de pijl van de details element aan de andere kant van de summary?    | hoe zorg ik dat een deel van de header vast blijven tijdnes het scrollen (position: fixed en sticky niet gewerkt)  | en dan ik dat    |
  | Is het echt verkeerd om dingen te positionen met paddings en margins?            | Moest je nou je hele main een class geven, of per element?              | Mijn elementen schuiven naar rechts toe en ik weet niet waar ik een fout heb staan in de code. Alles staat scheef hellup!!!!          | ...              |



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: Je kunt de ::marker element gebruiken om de pijl aan te spreken in de details tab.
  - punt 2: het positioneren op het scherm met margin en padding is goed om te doen. Let wel op met welke waarde je dat doet. Als je het met percentage doet dan schaalt het nog mee met de pagina, maar als je px of em gebruikt dan blijft het op 1 plek vast zitten.
  - nog een punt: Je hebt ergens een de elementen verkeerd aangesproken check dit.
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  Elke knop op de pagina is identiek en heeft zijn eigen naam. De knoppen zijn goed te vinden op de pagina. De HTML is goed gekeurd door de checker. Ik heb beide pagina's gecheckt. Ook heb ik de CSS gecheckt en kwam ik erachter dat er wat fouten in zitten die te maken hebben met de translate van een element. Er zit een lang atribuut in de HTML namelijk NL. Elke pagina heeft een unieke titel. De viewport zoom is niet dissabled. De focus stijl met de tab is goed te zien. En het matcht de stijl van de pagina. De website kan worden gedraaid, maar het ziet er minder goed uit. Wel is het nog te gebruiken. Horizontaal scrollen hier weggehaald. De knoppen kunnen gemakkelijk open gemaakt worden. Er is genoeg ruimte tussen objecten op de pagina. Er is maximaal 1 h1 op de pagina aanwezig. Heading levels worden niet overgeslagen. list content heeft op de pagina allemaal een ul, ol of dl element. Elke img heeft een alt text die ingevuld is. De images hebben niet allemaal de text erop als de alt text. Ik heb er geen media in staan die afgespeeld kan worden. a element wordt gebruikt voor linkjes op de pagina. De button element wordt gebruikt voor de button. dark en light mode kan worden gebruikt op de pagina door de hele OS in het donker te zetten. De animaties zijn rustig en duidelijk. De contrast op de pagina is goed te onderscheiden.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


| Thomas      | Braham         | Aya   | Joy        |
  | ---            | ---                | ---          | ---              |
  | Hoe kan ik het best die gradients doen van de afbeeldingen?  | Moet de carousel direct overeen komen met hoe de website er daadwerkelijk uitziet?             | en ik dit    | Wat vind je van het plan voor de rest van mijn werk?    |
  | Wat is de beste manier om vormen te maken? Met SVG, of met Border Radius? | Hoe los ik alle problemen met rescalability op? | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: De carousel hoeft niet sprekend te lijken op de carousel op de officiele website. Wel moet het als een carousel werken dus het moet kunnen scrollen
  - punt 2: Met svg kun je makkelijker vormen maken en gebruiken op de website.
  - nog een punt: Je moet percentage of vh, vw gebruiken om de scalability te verbeteren.
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik heb geleerd om een hamburger menu te maken die werkt en op het scherm tevoorschijn komt. Ook heb ik dit kunnen animeren. Hier ben ik erg blij mee.
  

  <img src="readme-images/Hamburger_menu.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Het is mij niet gelukt om de carousel goed te maken zoals ik het had gewild. Wel kun je door de carousel heen gaan met scroll animatie. Het is mij niet gelukt om dit te koppelen met de knoppen eronder. Ook heb ik een plaatje niet goed erin kunnen krijgen, omdat het plaatje in landscape is genomen, en de content van het plaatje aan de rechter kant staat.

  <img src="readme-images/Readme_carousel.png" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...
  
  1.  https://icones.js.org/collection/all?s=cross+menu&icon=fluent-emoji-high-contrast:cross-mark
  2.  https://www.svgrepo.com/svg/532540/location-pin-alt-1?edit=true
  3.  https://icones.js.org/collection/all?s=arrow+down&icon=solar:alt-arrow-down-linear
  4.  https://icones.js.org/collection/all?s=twitter&icon=fa6-brands:x-twitter
	5.  https://www.svgrepo.com/svg/521711/instagram?edit=true
	6.  https://www.svgrepo.com/svg/513089/youtube-168?edit=true
	7.  https://www.svgrepo.com/svg/512120/facebook-176?edit=true
	8.  https://www.svgrepo.com/svg/512419/linkedin-161?edit=true  
  9.  De plaatjes heb ik van de website zelf gehaald.
  10. https://icones.js.org/collection/all?s=menu&icon=ic:round-menu
  11.  https://stackoverflow.com/questions/38213329/how-to-add-css3-transition-with-html5-details-summary-tag-reveal





</details>