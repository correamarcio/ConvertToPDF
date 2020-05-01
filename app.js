var Reader = require("./Reader")
var Writer = require("./Writer")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParses")
var PDFWriter = require("./PDFWriter")

var read = new Reader()
var writing = new Writer()

async function main(params) {
var dados = await read.Read("./flamengo.csv")
var dadosProcessados = Processor.Process(dados)
var usuarios = new Table(dadosProcessados)
var html = await HtmlParser.Parse(usuarios)
writing.Write(`${Date.now()}.html`, html)

PDFWriter.WritePWD(`${Date.now()}.PDF`, html)
}

main()