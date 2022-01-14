const axios = require('axios')

const TokenAddress = 'm0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
const WalletAddress = '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
const APIKEY = '1MrVV1E76W1Fx7n2BZV_QA1NPHhrENbnn9Q1d2Z_14UU1'

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/931284900575846501/KaHMm7KC8dqLSJEqc2cPnASgcnWEqIT8224Oj93ped1cz4aXaluUYzfBCk8b_fdhvrVD'

const sendMessage = (balance) =>
  axios.post(DISCORD_WEBHOOK, {
    content: 'Seu saldo é: ' + balance,
    avatar_url: 'https://i.pinimg.com/originals/54/74/aa/5474aa87f86bdd4153bcfb2874d4507f.jpg'
  })


exports.sendBalance = (req, res) => {
  const url = 'https://api.charmantadvisory.com/BALANCE/'
  const fullUrl = `${url}/${TokenAddress}/${WalletAddress}/${APIKEY}`
  return axios.get(fullUrl).then( resp => {
    console.log("Seu saldo é: " + resp.data);
    return sendMessage(resp.data).then(r => res.status(200).json({ok: resp.data}))
  })
}