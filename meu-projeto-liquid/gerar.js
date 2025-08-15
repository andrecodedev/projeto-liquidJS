const { Liquid } = require('liquidjs');
const fs = require('fs');

(async () => {
  const engine = new Liquid();
  const template = fs.readFileSync('index.liquid', 'utf8');
  const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

  const html = await engine.parseAndRender(template, dados);
  fs.writeFileSync('index.html', html);
  console.log("✅ Arquivo index.html gerado com sucesso!");
})();
