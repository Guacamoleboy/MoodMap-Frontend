// Pathing
// _______
// src/components/index/information/data/information-data.js

// ----------------------------------------------------------------------------------------
// OBS:
// DENNE COMPONENT ER LAVET AF AI FOR AT KUNNE NÅ I MÅL
// 
// Det er justeret til at mig selv, og sikret at det følger resten af sidens koncept og opsætning.
// ----------------------------------------------------------------------------------------

export const informationIntro = {
  eyebrow: 'Om MoodMap',
  heading: 'Medicinske data,',
  headingEm: 'der mødes med virkeligheden',
  subheading:
    'Vi bygger broen mellem kliniker og patient — sikker datadeling, overholdelse af lovgivning og et brugervenligt interface til begge sider.',
}

export const informationCards = [
  {
    id: 'clinicians',
    icon: 'fa-user-md',
    label: 'Klinikere',
    heading: 'Klinisk overblik — altid opdateret',
    body: 'Læger og sundhedspersonale får adgang til patientdata i realtid. Færre opkald, hurtigere beslutninger og fuld historik ét sted.',
  },
  {
    id: 'patients',
    icon: 'fa-file-text-o',
    label: 'Patienter',
    heading: 'Din journal — i din hånd',
    body: 'Patienter kan følge egne forløb, se ordinationer og kommunikere sikkert med behandlere direkte via platformen.',
  },
  {
    id: 'data',
    icon: 'fa-shield',
    label: 'Data & Sikkerhed',
    heading: 'GDPR-compliant fra grunden',
    body: 'Alle data krypteres end-to-end og opbevares på godkendte servere inden for EU. Fuld sporbarhed og audit-log som standard.',
  },
]