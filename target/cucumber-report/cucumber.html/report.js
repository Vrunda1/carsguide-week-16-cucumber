$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchfunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - All",
        "$50,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "NSW - All",
        "$60,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$40,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Vitara",
        "NT - South",
        "$45,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7779493700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 103813800,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2219016300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1480197100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 190574500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 328095800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectModel(String)"
});
formatter.result({
  "duration": 342230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 269209200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 265368600,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4787305500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 73506200,
  "status": "passed"
});
formatter.after({
  "duration": 1352199200,
  "status": "passed"
});
formatter.before({
  "duration": 6019141900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Wrangler\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2163246900,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2016280800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 48981700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 302379800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectModel(String)"
});
formatter.result({
  "duration": 273923800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 312154600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 306268800,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4037451900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 20236000,
  "status": "passed"
});
formatter.after({
  "duration": 1402843600,
  "status": "passed"
});
formatter.before({
  "duration": 4264504500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2141283000,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 575033900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 118563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 388155000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectModel(String)"
});
formatter.result({
  "duration": 274525100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 331709500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 310764300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3051950900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 37436100,
  "status": "passed"
});
formatter.after({
  "duration": 1280261400,
  "status": "passed"
});
formatter.before({
  "duration": 5472060500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Golf\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2159508900,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1668186900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 73466900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 299687300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectModel(String)"
});
formatter.result({
  "duration": 276723900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 277932200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 305473400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3443641000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 96713000,
  "status": "passed"
});
formatter.after({
  "duration": 1446430100,
  "status": "passed"
});
formatter.before({
  "duration": 5483570900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Vitara\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NT - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2180259200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1923004400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 52816500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 297102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vitara",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectModel(String)"
});
formatter.result({
  "duration": 292858100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 260295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 247348300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2908583500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 83397500,
  "status": "passed"
});
formatter.after({
  "duration": 1260883100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"\u003cmodel\u003e\" from used cars",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - All",
        "$50,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "NSW - All",
        "$60,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Tesla",
        "Model S",
        "Any Location",
        "$80,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Mitsubishi",
        "Outlander",
        "NT - All",
        "$90,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6387911000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"City\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2158346700,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1811413900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 98145800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 290817200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 310256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 272860100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 254331000,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2161317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 52451800,
  "status": "passed"
});
formatter.after({
  "duration": 1269483000,
  "status": "passed"
});
formatter.before({
  "duration": 6566308500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Wrangler\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2138534300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1610393700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 119794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 312477200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 298608300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 302783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 272228700,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3273407000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 260886200,
  "status": "passed"
});
formatter.after({
  "duration": 1408633500,
  "status": "passed"
});
formatter.before({
  "duration": 6457491700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Tesla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Model S\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Tesla\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2178944400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 759639300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 200562600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 395195500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Model S",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 482894500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 105211000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 285877800,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2876550700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 119979000,
  "status": "passed"
});
formatter.after({
  "duration": 1346016800,
  "status": "passed"
});
formatter.before({
  "duration": 6313239100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Outlander\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Mitsubishi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2146429200,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1291680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 81532200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 319676000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outlander",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 313190300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 290454100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 257885800,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4011799500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 79795800,
  "status": "passed"
});
formatter.after({
  "duration": 2002040800,
  "status": "passed"
});
formatter.before({
  "duration": 4294089600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Golf\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2207124000,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1877615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 114739400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 337033200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 255861400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 297507900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 303268100,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4835943300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 48791800,
  "status": "passed"
});
formatter.after({
  "duration": 1378442400,
  "status": "passed"
});
});