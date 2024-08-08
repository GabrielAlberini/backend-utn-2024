import crypto from "crypto"

// process.argv siempre es un array
const arg = process.argv.splice(2)

// Compartime nombre y usuario asi: node index.js --name Gabo --pass 1234
// ARRAY DE ARGUENTOS: [ '--name', 'Gabo', '--pass', '1234567' ]
const name = arg[1]
const pass = arg[3]

if(name.length > 3 && pass.length > 7) {
} else {
  console.log("Datos incorrectos...")
}

const hash = crypto.createHash("sha256").update(pass).digest("hex")

console.log(`
    name: ${name}
    pass: ${hash}
  `)