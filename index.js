const searchButton = document.getElementById("searchBtn");
const countryName = document.getElementById("inputField");

searchButton.addEventListener("click", () => {
  let country = countryName.value;
  let country_url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  console.log(country_url);

  fetch(country_url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].name.common);
      // console.log(data[0].continents[0]);
      // console.log(data[0].area);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
      // console.log(data[0].flags.svg);
      // console.log(Object.values(data[0].languages)[0]);

      if (countryName.value.length > 0) {
        result.innerHTML = `<img src = "${data[0].flags.svg}"  class="flag-img">
      <h1 class="country_name">${data[0].name.common}<h1/>

      <div class="wrapper"> 
        <div class="data-wrapper"> 
          <h4>Capital:<h4/>
          <span>${data[0].capital[0]}<span/>
        <div/>
      <div/>

      <div class="wrapper"> 
        <div class="data-wrapper"> 
          <h4>Total area:<h4/>
          <span>${data[0].area}<span/>
        <div/>
      <div/>


      <div class="wrapper"> 
        <div class="data-wrapper"> 
          <h4>Continent:<h4/>
          <span>${data[0].continents[0]}<span/>
        <div/>
      <div/>
      <div class="wrapper"> 
      <div class="data-wrapper"> 
        <h4>Language:<h4/>
        <span>${Object.values(data[0].languages)[0]}<span/>
      <div/>
    <div/>


      <div class="wrapper"> 
        <div class="data-wrapper"> 
          <h4>Currencies:<h4/>
          <span>${
            Object.keys(data[0].currencies)[0] +
            "-" +
            data[0].currencies[Object.keys(data[0].currencies)].name +
            "-" +
            data[0].currencies[Object.keys(data[0].currencies)].symbol
          }<span/>
        <div/>
      <div/>
      `;
      } else {
        if (countryName.value.length < 0) {
          result.classList.add("empty");
        }
        countryName.classList.add("error");
        setTimeout(() => {
          countryName.classList.remove("error");
        }, 1000);
      }
    });
});
