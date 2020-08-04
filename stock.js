// API KEY
// AIOFXIT69F29K1ID

// function stockSearch() {
//   let stockName = $("#stockInput").val();

//   let queryURL =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
//     stockName +
//     "&apikey=AIOFXIT69F29K1ID";

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     $(`<p>${response["Meta Data"]["2. Symbol"]}</p>`).appendTo("#stockInfo");
//     $(
//       `<p>${response["Time Series (Daily)"][todayDate]["1. open"]}</p>`
//     ).appendTo("#stockInfo");
//   });
// }

// $("#stockInputBtn").on("click", function () {
//   event.preventDefault();
//   stockSearch();
// });

//--------- TODAYS DATE --------------------
let today = new Date();

let dd = today.getDate() - 1;
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
// console.log(mm);
let todayDate = yyyy + "-" + "0" + mm + "-" + "0" + dd;
// console.log(todayDate);
// ---------------------------------------------------------

// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=AIOFXIT69F29K1ID

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=AIOFXIT69F29K1ID

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=AIOFXIT69F29K1ID

function searchSymbol() {
  event.preventDefault();
  let searchSymbol = $("#stockInput").val();

  let queryURL =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
    searchSymbol +
    "&apikey=AIOFXIT69F29K1ID";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response.bestMatches);
    for (let i = 0; i < response.bestMatches.length; i++) {
      let stockBestMatches = response.bestMatches[i];
      $(
        `<p class="stockListItems" data-symbol="${stockBestMatches["1. symbol"]}">${stockBestMatches["2. name"]}</p>`
      ).appendTo("#stockInfo");
    }
    //   $(`<p>${response["Meta Data"]["2. Symbol"]}</p>`).appendTo("#stockInfo");
  });
}

$("#stockInputBtn").on("click", searchSymbol);

$("#stockInfo").on("click", ".stockListItems", function () {
  let stockSelected = $(this).attr("data-symbol").toLowerCase();

  let queryURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    stockSelected +
    "&apikey=AIOFXIT69F29K1ID";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(`<p>${response["Meta Data"]["2. Symbol"]}</p>`).appendTo("#stockInfo");
    $(
      `<p>Open: $${parseInt(
        response["Time Series (Daily)"][todayDate]["1. open"]
      ).toFixed(2)}</p>
      <p>High: $${parseInt(
        response["Time Series (Daily)"][todayDate]["2. high"]
      ).toFixed(2)}</p>
      <p>Low: $${parseInt(
        response["Time Series (Daily)"][todayDate]["3. low"]
      ).toFixed(2)}</p>
      <p>Previous Close: $${parseInt(
        response["Time Series (Daily)"][todayDate]["4. close"]
      ).toFixed(2)}</p>
      <p>Volume: $${parseInt(
        response["Time Series (Daily)"][todayDate]["5. volume"]
      ).toFixed()}</p>`
    ).appendTo("#stockInfo");
  });
});

// function companyOverview() {
//   let query =
//     "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" +
//     IBM +
//     "&apikey=AIOFXIT69F29K1ID";

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {});
// }
