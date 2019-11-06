//add the nav bar to the page here
$(function () {
    $("#nav-placeholder").load("./nav");
});


function getUser() {
    const uname = document.getElementById('un').value
    const pw = document.getElementById('pw').value
    callGet('http://localhost:3000/user', uname, pw)
}

async function callGet(url, uname, pw) {
    try {
        url += `?username=${uname}&password=${pw}`
        console.log(url)
        let myPromise = await fetch(url);
        let myResponse = await myPromise.json();
        document.getElementById('inside').innerHTML = JSON.stringify(myResponse);
        //window.location.href = 'http://localhost:3000/blogposts'
    } catch (error) {
        console.log(error)
    }
}



function postUser() {
    const uname = document.getElementById('un').value
    const pw = document.getElementById('pw').value
    callPost('http://localhost:3000/user', uname, pw)
}


async function callPost(url, uname, pw) {
    try {
        params = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                username: uname,
                password: pw
            }),
            method: "POST"
        }
        let myPromise = await fetch(url, params)
        let myResponse = await myPromise.json();
        document.getElementById('inside').innerHTML = JSON.stringify(myResponse);
    } catch (error) {
        console.log(error)
    }
}

async function callPromiseAwait(url) {
    try {
        let myPromise = await fetch(url);
        let myResponse = await myPromise.json();

        document.getElementById('inside').innerHTML = myResponse;
    } catch (error) {
        console.log(error)
    }

}



function printHello(data) {
    console.log("hello")
}

function display(result) {
    console.log(result);

    nest(result, 0);
    var keyArr = Object.keys(result);

    function spaceBehind(numSpaces) {
        var str = "";
        for (let i = 0; i < numSpaces * 2; i++) {
            str += "&nbsp;"
        }
        return str;
    }



    function loopThru(el, myObj, nestingLevel) {
        //  debugger
        if (Array.isArray(el) && el.length === 0) {
            return;
        }
        if (!Array.isArray(el)) {
            if ((typeof myObj[el] === "object") && !Array.isArray(el)) {
                nestingLevel++;
                nest(myObj[el], nestingLevel);
            }
            else {
                document.getElementById('doc-text').innerHTML += spaceBehind(nestingLevel) + myObj[el] + '</br>';
            }
            return;
        }
        else if (el.length === 1) {
            return loopThru(el[0], myObj, nestingLevel);
        }
        else {
            loopThru(el[0], myObj, nestingLevel);
            return loopThru(el.slice(1, el.length), myObj, nestingLevel);
        }
    }

    function nest(obj, nestingLevel) {
        newArr = Object.keys(obj);
        loopThru(newArr, obj, nestingLevel);
        return;
    }
}


function callPromise(url) {
    let myPromise = fetch(url);
    myPromise.then(response => response.json()).then(display);
    console.log(myPromise);
    //response.json() appears to return a new promise. see below
    // console.log(myPromise);
    //let test = myPromise.then(response => response.json());
    //console.log(test)
}

async function callPromiseAwait(url) {
    let myPromise = await fetch(url);
    let myResponse = await myPromise.json();
    display(myResponse);
    //same as below
    // console.log(myPromise.json().then(display));
}

function getRequest(url) {
    $.getJSON(url, function (result) {
        display(result);
    })
}