const app = require('./src/app.js')

const port = process.env.port || 3003;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));