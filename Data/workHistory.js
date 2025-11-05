

async function WriteWorkHistory(){
    let path = "./Data/workHistory.json";
    let result = await fetch(path);
    let data = await result.json();

    let htmlText = "";
    data.items.forEach(element => {
        htmlText += 
        "<b>" + element.Position + "</b>\n" + 
        "<p>" + element.Company + "</p>\n" + 
        "<p>" + element.Date + "</p>\n";

        htmlText += '<ul style="list-style-type:disc;">';
        element.Details.forEach(detail => {
            htmlText += "<li>" + detail + "</li>";
        });
        htmlText += "</ul>";
        htmlText += "<br>";
    });
    document.getElementById("history").innerHTML = htmlText;
}

WriteWorkHistory();