async function WritePortfolion(){
    let path = "./Data/portfolio.json";
    let result = await fetch(path);
    let data = await result.json();

    let htmlText = "";
    data.items.forEach(item => {
        let tags = "";
        item.tags.forEach(tag => {
            tags += tag +", ";
        });

        let description = "";
        item.description.forEach(text => {
            description += 
            '<p>' + text + '</p>\n';
        });

        htmlText = 
        '<div class="portfolio-item">\n' + 
            '<div class="portfolio-item-image">' + 
                '<img src="' + item.mediaUrl[0] + '" class="item-image">\n'+
            '</div>\n' +
            '<div class="portfolio-item-text">' + 
                '<h1>' + item.title + '</h1>\n' +
                '<p><b><i>' + tags + '</p></b></i>\n' + 
                 description
            '</div>\n'+
        '</div>\n';
        document.getElementsByClassName("portfolio-body")[0].innerHTML += htmlText;
        
    });
    console.log(htmlText);
}
WritePortfolion();
