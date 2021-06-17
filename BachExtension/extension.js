$("<div><button id='cheatSheetBtn' class='btn btn btn-primary'>Create Cheat Sheet</button></div>").insertBefore(".content")
$( "#cheatSheetBtn" ).click(cheatSheetGenerator);

function cheatSheetGenerator() {

    var header = $(".ceremony-header");
    var title = $("h2", header).text().trim();

    var date = $(".episode-date").text().trim();

    var newDom = "<head></head><body><div style='width:8in;'><div style='text-align:center'><h1>"+ title +" Cheat Sheet - "+ date +"</h1></div><div style='display:flex;flex-wrap:wrap;'>";
    var contestants = $(".contestant");

    contestants.each((index, c) => {
        var headshot = $(".headshot",c).attr('src');
        var name = $("p",c).text().trim();
        var selected = $(".selected",c).length > 0;

        newDom = newDom + `<div style="width:100px; text-align:center; padding-left:10px; padding-right:10px">
            <img style="object-fit:contain;width:100%;" src='` + headshot + `'>`

        if (selected){
            newDom = newDom + `<div style="font-size:22;font-weight:bold;">` + name +`</div>`
        } else {
            newDom = newDom + `<div style="font-size:20;">`+ name +`</div>`
        }
        
        newDom = newDom + `
            <div style="height:75px;"></div>
        </div>`
        
    });

    newDom = newDom + "</div></div></body>"

    window.open().document.write(newDom);

    return;
}