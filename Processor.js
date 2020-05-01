class Processor{
    static Process(data){
        var row = data.split("\r\n")
        var rows = []
        row.forEach(element => {
            var arr = element.split(";")
            rows.push(arr)
        });
        return rows
    }
}

module.exports = Processor;