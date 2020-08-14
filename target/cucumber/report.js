$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Feature",
  "description": "",
  "id": "search-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2399128100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is successfully logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user opens the \"chrome\" browser and exe \"E:\\\\PerfectLearn primusbank\\\\primusBank\\\\src\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters the url \"http://primusbank.qedgetech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Admin\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on Login button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    },
    {
      "val": "E:\\\\PerfectLearn primusbank\\\\primusBank\\\\src\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe",
      "offset": 41
    }
  ],
  "location": "Login.brwserLaunch(String,String)"
});
formatter.result({
  "duration": 14215861200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://primusbank.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "Login.url(String)"
});
formatter.result({
  "duration": 2061406500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_username(String)"
});
formatter.result({
  "duration": 483967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_password(String)"
});
formatter.result({
  "duration": 401945300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1332504999,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search Functionality with valid data",
  "description": "",
  "id": "search-feature;search-functionality-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user click on branches",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user select \"INDIA\" as country",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user select \"MAHARASTRA\" as state",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user select \"MUMBAI\" as city",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Application shows search result for \"MUMBAI\" city",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.user_click_on_branches()"
});
formatter.result({
  "duration": 850623300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INDIA",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_country(String)"
});
formatter.result({
  "duration": 820494300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAHARASTRA",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_state(String)"
});
formatter.result({
  "duration": 309597201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 13
    }
  ],
  "location": "Search.user_select_as_city(String)"
});
formatter.result({
  "duration": 455246299,
  "status": "passed"
});
formatter.match({
  "location": "Search.user_click_on_Search_button()"
});
formatter.result({
  "duration": 459068700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 37
    }
  ],
  "location": "Search.application_shows_search_result_for_city(String)"
});
formatter.result({
  "duration": 133382500,
  "status": "passed"
});
formatter.after({
  "duration": 1111940100,
  "status": "passed"
});
});