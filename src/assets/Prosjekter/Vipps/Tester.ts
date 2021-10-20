import Funn from "../Funn";
import Test from "../Test";

const DagensDonasjonsvanerStudenter = new Funn(
  "Studenter",
  'Studenter gir penger "her og der", ettersom hvor mye penger de anser som ansvarlig å bruke på veldedighet., Mennesker over 40 år med stødig økonomi gir gjerne en fast sum i måneden (eller året). Studenter gir til organisasjon som har muligheter til å støtte enkeltsaker, typisk Greenpeace sine fadderordninger. Hovedårsaken til dette er at siden de har dårlig råd – relativt til andre grupper som har svart i denne undersøkelsen – er de opptatt av at pengene er enkle å ettergå.'
);

const DagensDonasjonsvanerAndre = new Funn(
  "Andre",
  "De fleste andre gir til godt etablerte og velkjente organisasjoner, men akkurat grunnene til at de gir varierer veldig fra person til person. Noen (8%) gir utelukkende for skattefradraget man får etter å ha donert over 500 kroner i året."
);

const DagensDonasjonsvanerAlle = new Funn(
  "Alle",
  "Felles for alle er at de hater mail de anser som spam, men hva som anses for å være spam er veldig forskjellig fra enkeltperson til enkeltperson. Sosiale medier fungerer helt greit, men få oppsøker informasjon til organisasjonene der (ca. 30%). SMS føles for en del brukere (ca. 20%) som et steg for langt, spesielt om de ikke har eksplisitt bedt om det. Mange (47% av alle) ønsker rett og slett ikke å følge med."
);

const DagensDonasjonsvaner = new Test(
  "Folks donasjonsvaner i dag",
  "Spørreundersøkelse",
  [
    DagensDonasjonsvanerStudenter,
    DagensDonasjonsvanerAndre,
    DagensDonasjonsvanerAlle,
  ]
);

const DagensMarkedTeknologi = new Funn(
  "Teknologien",
  "Folk sliter med å administrere avtalene de har inngått, noe som fører til at de kvier seg for å inngå nye avtaler. De opplever at det er veldig stor variajon mellom organisasjonene i oppdateringer, avtalevilkår og -informasjon, tekniske løsninger og så videre. Det er rett og slett vanskelig å navigere markedet for de aller fleste."
);

const DagensMarkedMarkedet = new Funn(
  "Markedet",
  "Markedet endrer seg så ofte at det blir en kostnadspåkjennelse. Særlig fikk vi høre om hvordan Facebookdonasjoner var en kortvarig trend mange trodde skulle vare over lengre tid. Dette gjorde at de la om store deler av organisasjonen til å utnytte Facebookplattformen, og senere mistet store donasjonsmengder. I den sammenheng har mange gått over til å bruke Vipps som eneste kilde til inntekt nå, fordi de håper det er en stødig plattform i årene som kommer. Kvaliteten på kontaktinformasjon fra brukere varierer veldig fra plattform til plattform. Dette gjør det vanskelig å nå ut til potensielle avtaleinngåere etter de har donert et engangsbeløp."
);

const DagensMarked = new Test("Donasjonsmarkedet i dag", "Intervju", [
  DagensMarkedTeknologi,
  DagensMarkedMarkedet,
]);

const FerdigPrototypeSluttbrukere = new Funn(
  "Sluttbrukerne",
  "Brukerne syns løsningen fungerte veldig godt. Spesielt fornøyd var de med å kunne få oppdateringer fra organisasjonene gjennom Vippsappen."
);

const FerdigPrototypeOrganisasjonene = new Funn(
  "Organisasjonene",
  "Organisasjonene var bare veldig glad for å vite at Vipps så på veldedighet som et av de viktige bruksområdene sine."
);

const FerdigPrototypeVipps = new Funn(
  "Vipps",
  "Vipps ga mange hjerter og tomler opp på MS Teams, og Rune selv sa han gjerne skulle satt det ut på markedet “allerede i morgen”"
);

const FerdigPrototype = new Test("Fullført prototype", "Intervju", [
  FerdigPrototypeSluttbrukere,
  FerdigPrototypeOrganisasjonene,
  FerdigPrototypeVipps,
]);

export const Tester = [DagensDonasjonsvaner, DagensMarked, FerdigPrototype];
