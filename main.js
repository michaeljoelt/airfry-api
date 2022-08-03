let apiData

/* on window load */
window.onload = () => {
    getApiData();
}

function getApiData() {
    fetch("https://airfry-api.herokuapp.com/api")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            //printTest("On window load, get spell list", JSON.stringify(data, null, 4))
            apiData = data
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

console.log("main.js got the data!")
console.log(JSON.stringify(apiData, null, 2))

function getCategoryData() {
    // fetch("https://airfry-api.herokuapp.com/api")
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //         //printTest("On window load, get spell list", JSON.stringify(data, null, 4))

    //         data.results.forEach(spell => {
    //             // console.log(spell.name)
    //             spellList.push((spell.name).replace("'", "&#39;"))
    //         });
    //         //console.log(spellList)
    //         /* initiate autocomplete */
    //         autocomplete(document.getElementById("myInput"), spellList);
    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });
}

function getTypeData() {

}