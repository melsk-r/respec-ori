// Dit bestand wordt per standaard/document opnieuw van de juiste waarden voorzien.
let respecConfig = {
  otherLinks: [
    {
      key: "Implementatie voorbeelden",
      data: [
        {
          value: "Gecko",
          href: "https://bugzilla.mozilla.org/show_bug.cgi?id=xxxx",
        },
        {
          value: "Blink",
          href: "https://code.google.com/p/chromium/issues/detail?id=xxx",
        },
      ],
    },
  ],
  subjectPrefix: "[SIM-ORI v.2.0.0]",
//  noTOC: true,
//  maxTocLevel: 3,
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
//  nl_organisationName: "VNG",
  nl_organisationPublishURL: "https://gitdocumentatie.vng.nl/publicatie/",
  // Zie 'localizationStrings/nl' in 'organisation-config.js' voor de lijst met toegestane specificatie-statussen.
  specStatus: "IO",
  // Zie 'localizationStrings/nl' in 'organisation-config.js' voor de lijst met toegestane specificatie-types.
  specType: "IM",
  // Worden (nog) niet gebruikt bij VNG-R.
//  pubDomain: "api",

  shortName: "respec-ori",
  publishDate: "2023-07-21",
  modificationDate: "2023-08-23",
  publishVersion: "2.0.0α",
  
  previousVersion: "1.2.0",
  previousPublishDate: "2022-06-24",
  //previousMaturity: "WV",
  title: "SIM-Open Raads- en StatenInformatie",
  content: {"SIM-ORI": ""},
  content2: {"Inleiding": "informative", "Scope": "informative", "SIM-ORI": ""},
  // Hier wordt de variabele 'prevVersion' die gedefinieerd is in de 'organisation-config.js' overruled.
  // prevVersion: ["nl_organisationPublishURL", "previous", "/", "shortName"],
  
  editors:
    [
      {
        name: "Henri Korver",
        company: "VNG-Realisatie",
        companyURL: "https://www.vng.nl",
      }
    ],
  authors:
    [
      {
        name: "Johan Boer",
        company: "VNG-Realisatie",
        companyURL: "https://www.vng.nl",
      }
    ],
  github: "https://github.com/melsk-r/respec-ori",

  // Create PDF and link to file in header (optional):
//  alternateFormats: [
//      {
//          label: "pdf",
//          uri: "ORI.pdf",
//      },
//      {
//          label: "xdoc",
//          uri: "ORI.xdoc",
//      },
//  ],
//    localBiblio: {
//      "ORICODE2": {
//        "href": "https://www.unicode.org/versions/latest/",
//        "publisher": "Unicode Consortium",
//        "title": "The Unicode Standard",
//        "etAl": true
//      },
//    },
};
