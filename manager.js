const fs = require('fs')

module.exports = {
    makeDataSet: (data, args) => {
        let result = []

        for (let row of data) {
            result.push({
                vendor: args.vendor,
                cis: args.cis,
                example: args.example,
                key: row[3],
                category: row[1],
                title: row[4],
                content: `<b>요약</b><br />${row[6]}<hr /><b>진단 기준</b><br />${row[7]}<hr /><b>상세 설명</b><br />${row[9]}<hr />`,
                action: row[11]
            })
        }
        fs.writeFileSync('result.json', JSON.stringify(result).replace(/\\n/g, '<br />'))
    }
}