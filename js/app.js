/////////////////
// INITIALIZE JS

$(document).ready(function() {

  /* ======== VARIABLES ======== */
  var usaValue = 0;
      japanValue = 0;
      chinaValue = 0;
      australiaValue = 0;
      brazilValue = 0;
      russiaValue = 0;
      ukValue = 0;
      totalTimeValue = 0;
      totalNumberOfDeaths = 0;


  /* ========= TIMERS ========= */
  setInterval(usacountUp, 170);
  setInterval(japancountUp, 1000);
  setInterval(chinacountUp, 333);
  setInterval(australiacountUp, 33);
  setInterval(brazilcountUp, 55);
  setInterval(russiacountUp, 222);
  setInterval(ukcountUp, 781.25);
  setInterval(totaltimecountUp, 1000);
  setInterval(calculateTotalDeaths, 1);

});

/* ========= COUNTRY TIMER FUNCTIONS ========= */
// Use global variable, change string to readable integer, push integer to the text     field in the DOM

/* ============= *\
        USA
\* ============= */
function usacountUp() {
  usaValue = parseInt($('#usacounter').find('.time').text(), 10);
  usaValue++;
  $('#usacounter').find('.time').text(usaValue);
}

/* ============= *\
       JAPAN
\* ============= */
function japancountUp() {
  japanValue = parseInt($('#japancounter').find('.time').text(), 10);
  japanValue++;
  $('#japancounter').find('.time').text(japanValue);
}

/* ============= *\
       CHINA
\* ============= */
function chinacountUp() {
  chinaValue = parseInt($('#chinacounter').find('.time').text(), 10);
  chinaValue++;
  $('#chinacounter').find('.time').text(chinaValue);
}

/* ============= *\
     AUSTRALIA
\* ============= */
function australiacountUp() {
  australiaValue = parseInt($('#australiacounter').find('.time').text(), 10);
  australiaValue++;
  $('#australiacounter').find('.time').text(australiaValue);
}

/* ============= *\
       BRAZIL
\* ============= */
function brazilcountUp() {
  brazilValue = parseInt($('#brazilcounter').find('.time').text(), 10);
  brazilValue++;
  $('#brazilcounter').find('.time').text(brazilValue);
}

/* ============= *\
       RUSSIA
\* ============= */
function russiacountUp() {
  russiaValue = parseInt($('#russiacounter').find('.time').text(), 10);
  russiaValue++;
  $('#russiacounter').find('.time').text(russiaValue);
}

/* ============= *\
        UK
\* ============= */
function ukcountUp() {
  ukValue = parseInt($('#ukcounter').find('.time').text(), 10);
  ukValue++;
  $('#ukcounter').find('.time').text(ukValue);
}

/* ============= *\
    TOTAL TIME
\* ============= */
function totaltimecountUp() {
  totalTimeValue = parseInt($('#totaltimecounter').find('.time').text(), 10);
  totalTimeValue++;
  $('#totaltimecounter').find('.time').text(totalTimeValue);
}

/* ============= *\
    TOTAL DEATHS
\* ============= */

function calculateTotalDeaths() {
  // Set up JSON, apply global variables to value keys. Then, add all the value keys together and set those as a variable. Parse that variable to a human-readable integer, and push it to the DOM.

  var deathData = [{
      name: "USA",
      value: usaValue
    },
    {
      name: "Japan",
      value: japanValue
    },
    {
      name: "China",
      value: chinaValue
    },
    {
      name: "Australia",
      value: australiaValue
    },
    {
      name: "Brazil",
      value: brazilValue
    },
    {
      name: "Russia",
      value: russiaValue
    },
    {
      name: "UK",
      value: ukValue
    },
  ]
  totalNumberOfDeaths = deathData.reduce(function(a, b) {
    return a + b.value;
  }, 0);

  parseInt($('#totalDeathsCounter').find('.time').text(), 10);
  $('#totalDeathsCounter').find('.time').text(totalNumberOfDeaths || 0);
  // Ensure 0 in case of NaN
}

// END JS
/////////////////
