const CTLPrinter = require('./CTLPrinter.js');


let goodNews = [
    {
        headline: "Former Prime Minister found guilty of religious crime.",
        text: "AGHORA finds solid evidence to allow the arrest of Marendra Nodi.",
        index: "A"
    }, {
        headline: "India signs bilateral trade agreement with Pakistan",
        text: "The PM thanks AGHORA and hence the people of India for generating right!",
        index: "A"
    }, {
        headline: "Flood preparations prove vital",
        text: "Peoples decision to allow AGHORA to establish flood safety procedures find use.",
        index: "A"
    }
];
let tempGN = goodNews;
let gn1 = tempGN[0];
let gn2 = tempGN[1];
let gn3 = tempGN[2];


var today = new Date();
var day = today.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var month = monthNames[today.getMonth()];
var date = day + ' ' + month;


let printSketch = function () {

    const printerName = 'Star_TSP143';
    const options = {
        size: [204, 567],
        width: 204.0,      //204.0
        height: 567.0,     //567.0
        margins: ({
            bottom: 20,
            left: 15,
            right: 15,
            top: 20
        }),
        font: ('./resources/cascadia.ttf'),
        fontSize: 10,
        align: 'justify'
    };
    const printer = new CTLPrinter(printerName, options);


    console.log("Printing");
    printer.printCustom((doc, width, height, string = 'hey') => {


        doc.registerFont('h1', __dirname + '/resources/fonts/cascadia.ttf');
        const h1 = 10;
        doc.registerFont('p', __dirname + '/resources/fonts/FiraMono-Bold.ttf');
        const p = 10;

// Title
        doc.font('h1')
            .fontSize(14)
            .text('THE INDIAN DAILY', {
                align: 'center'
            })
            .moveDown(0.25);
        doc.font('p')
            .fontSize(7)
            .text(date + ' 2034   /   New Delhi', {
                align: 'center'
            })
            .moveDown(2);

// News Item 01
        doc.font('h1')
            .fontSize(h1)
            .text(gn1.headline)
            .moveDown(0.5);
        doc.font('p')
            .fontSize(p)
            .text(gn1.text, {
                align: 'justify'
            })
            .moveDown(1.5);

// News Item 02
        doc.font('h1')
            .fontSize(h1)
            .text(gn2.headline)
            .moveDown(0.5);
        doc.font('p')
            .fontSize(p)
            .text(gn2.text, {
                align: 'justify'
            })
            .moveDown(1.5);

// News Item 03
        doc.font('h1')
            .fontSize(h1)
            .text(gn3.headline)
            .moveDown(0.5);
        doc.font('p')
            .fontSize(p)
            .text(gn3.text, {
                align: 'justify'
            })
            .moveDown();

// Line
        doc.moveTo(15, 320)
            .lineTo(189, 320)
            .lineWidth(0.5)
            .dash(3, {space: 2})
            .stroke()
            .moveDown(2);

// Footer
        doc.font('p')
            .fontSize(7)
            .text('These are present-day news headlines that would have been printed, if AGHORA were to exist now.', {
                align: 'center'
            })
            .moveDown()
        doc.text('Your contibution to AGHORA, a collective intelligence of all audiences, is making better democratic decisions compared to the leaders of today.', {
            align: 'center'
        })
            .moveDown()

        doc.text('Thank you.', {
            align: 'center'
        })
            .moveDown(4);

// Image
        doc.translate(15, 430)
            .image(__dirname + '/outputSketch/sketch.jpg', 47, 20, {fit: [80, 80], align: 'center', valign: 'center'},)
            .rect(0, 0, 174, 120)
            .stroke()
            .moveDown(2);


    });
};
module.exports = printSketch;