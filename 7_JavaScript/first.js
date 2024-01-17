function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data =", dataId);
        getNextData();
    }, 2000);
}

// This is a callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5)
            })
        })
    })
});