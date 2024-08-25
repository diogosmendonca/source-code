import crypto from 'crypto'
import fs from 'fs'

// Função para calcular o hash do arquivo
const calculateHash = (filePath) => {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256')
        const stream = fs.createReadStream(filePath)

        stream.on('data', (data) => {
            hash.update(data)
        })

        stream.on('end', () => {
            resolve(hash.digest('hex'))
        })

        stream.on('error', (err) => {
            reject(err)
        })
    })
}

export default calculateHash