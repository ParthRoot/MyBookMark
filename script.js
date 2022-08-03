console.log("Hello");

let bookMarksObj = [];

//add bookMark Details
addInfo = () => {
    let webSiteName = document.getElementById("website-name").value;
    let webSiteUrl = document.getElementById("website-url").value;

    let bookMarks = localStorage.getItem("bookMarks");

    if (bookMarks == null) {
        bookMarksObj = [];
    } else {
        bookMarksObj = JSON.parse(bookMarks);
        console.log(bookMarksObj);
    }

    let myObj = {
        webSiteName: webSiteName,
        webSiteUrl: webSiteUrl,
    };

    bookMarksObj.push(myObj);

    localStorage.setItem("bookMarks", JSON.stringify(bookMarksObj));
    webSiteName.value = "";
    webSiteUrl.value = "";

    showBookMark(bookMarksObj);
};

//display BookMark
showBookMark = (bookMarksObj) => {
    console.log("Show Notes");
    let bookMarks = localStorage.getItem("bookMarks");

    if (bookMarks == null) {
        bookMarksObj = [];
    } else {
        bookMarksObj = JSON.parse(bookMarks);
    }

    let html = "";

    bookMarksObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.webSiteName}</h5>
                    <p class="card-text">${element.webSiteUrl}</p>
                    <button id="${index}"onclick="deleteBookMark(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });

    let bookMarkElm = document.getElementById("bookMarks");
    if (bookMarksObj.length != 0) {
        bookMarkElm.innerHTML = html;
    } else {
        bookMarkElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
};

showBookMark(bookMarksObj);

// delete bookmarks
deleteBookMark = (index) => {
    let bookMarks = localStorage.getItem("bookMarks");
    if (bookMarks == null) {
        bookMarksObj = [];
    } else {
        bookMarksObj = JSON.parse(bookMarks);
    }

    bookMarksObj.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarksObj));
    showBookMark(bookMarksObj);
};