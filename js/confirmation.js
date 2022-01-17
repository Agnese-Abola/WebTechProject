$(function () {
    // Fetch GET parameters from url
    let queryDict = {}
    location.search.substr(1).split("&").forEach(function (item) {
        queryDict[item.split("=")[0]] = item.split("=")[1]
    })

    console.log(queryDict);
});
