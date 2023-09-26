// Dit bestand wordt per standaard/document opnieuw van de juiste waarden voorzien.
let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
//  nl_organisationName: "VNG",
  nl_organisationPublishURL: "https://gitdocumentatie.vng.nl/publicatie/",
  // Zie 'localizationStrings/nl' in 'organisation-config.js' voor de lijst met toegestane specificatie-statussen.
  specStatus: "IG",
  // Zie 'localizationStrings/nl' in 'organisation-config.js' voor de lijst met toegestane specificatie-types.
  specType: "IM",
  // Worden (nog) niet gebruikt bij VNG-R.
//  pubDomain: "api",

  shortName: "respec-ori",
  publishDate: "2023-07-21",
  publishVersion: "2.0.0α",
  
  previousVersion: "1.2.0",
  previousPublishDate: "2022-06-24",
  //previousMaturity: "WV",
  title: "SIM-Open Raads- en StatenInformatie",
  //content: {"Inleiding": "", "Scope": "", "SIM-ORI.html": ""},
  content: {"SIM-ORI.html": ""},
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
//          uri: "template.pdf",
//      },
//  ],
};
