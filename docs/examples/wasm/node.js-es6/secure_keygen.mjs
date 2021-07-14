import themis from 'wasm-themis'

async function main() {
    await themis.initialized

    let keypair = new themis.KeyPair()

    console.log(`private key: ${Buffer.from(keypair.privateKey.data).toString('base64')}`)
    console.log(`public key : ${Buffer.from(keypair.publicKey.data).toString('base64')}`)
}

main()
