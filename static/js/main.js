async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "XBGpvFkO8YBtGZ33acTN3Q==z7mQPMGSLsb06TDF"
        }
    })
    return response.json();
};

postData("https://api.api-ninjas.com/v1/recipe?query=couscous").then((data) => {
  console.log(data);
});