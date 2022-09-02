const app = require('express')();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/', (_req, res) =>
  res.send('Hello from App: home')
)

app.get('/fast', (_req, res) =>
  res.send('Hello from App: fast')
)

app.get('/slow', async function (_req, res) {
  await sleep(5000)
  res.send('Hello from App: slow')
})

app.get('/exception', (_req, res) =>
  res.status(500).send('Some error response')
)

app.listen(9999, () => console.log('Listening on port 9999'))