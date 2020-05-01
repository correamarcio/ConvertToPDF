var pdf = require("html-pdf")

class PDFWriter{

    static WritePWD(fileName, html){
        pdf.create(html, {}).toFile(fileName, (err)=>{})
    }
}

module.exports = PDFWriter