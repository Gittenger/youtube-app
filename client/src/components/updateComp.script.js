const fs = require('fs')
const path = require('path')

const folderPath = './'
let Files = []

function ThroughDirectory(Directory) {
	fs.readdirSync(Directory).forEach(File => {
		const Absolute = path.join(Directory, File)
		if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute)
		else return Files.push(Absolute)
	})
}

ThroughDirectory(folderPath)

const Matches = Files.filter(filename =>
	filename.includes('.component.jsx')
).map(item => item.match(/\/(\w+).component.jsx/))

const Components = Matches.map(item => item[1])

const data = {}

Components.forEach((Component, i) => {
	if (!data['imports']) {
		data['imports'] = `import ${Component} from "./${Component}${Matches[i][0]}"`
	} else
		data[
			'imports'
		] += `\nimport ${Component} from "./${Component}${Matches[i][0]}"`
})

data['imports'] +=
	'\nimport tycomp from "./typography/typography.components.jsx"'

data['content'] = `\n\nexport const ComponentsIndex = {
		${Components.join(',')},tycomp
	}\n
export default ComponentsIndex`

const output = data.imports + data.content

fs.writeFileSync('./components.index.js', output)
