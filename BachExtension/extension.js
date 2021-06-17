$("<div><button id='cheatSheetBtn'>Create Cheat Sheet</button></div>").insertBefore(".content")

$( "#cheatSheetBtn" ).click(cheatSheetGenerator);

var newDom = "<head></head><body><div style='width:8in; display:flex;flex-wrap:wrap;'>";

function cheatSheetGenerator() {
    var contestants = $(".contestant");

    contestants.each((index, c) => {
        var headshot = $(".headshot",c).attr('src');
        var name = $("p",c).text().trim();
        var selected = $(".selected",c).length > 0;

        newDom = newDom + `<div style="width:100px; text-align:center; padding-left:10px; padding-right:10px">
            <img style="object-fit:contain;width:100%;" src='` + headshot + `'>`

        if (selected){
            newDom = newDom + `<div style="font-size:20;font-weight:bold;">` + name +`</div>`
        } else {
            newDom = newDom + `<div style="font-size:20;">`+ name +`</div>`
        }
        
        newDom = newDom + `
            <div style="height:75px;"></div>
        </div>`
        
    });

    newDom = newDom + "</div></body>"

    window.open().document.write(newDom);

    return;
}