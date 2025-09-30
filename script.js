export default function handler(req, res) {
  // Simulação de banco de dados de keys (substitua por seu método real)
  const keysDb = {
    "KEY-EXEMPLO-1": { valid: true, expires: "2025-12-31" },
    "KEY-EXEMPLO-2": { valid: false, expires: "2024-10-10" }
  };

  const key = req.query.key;
  if (!key || !keysDb[key] || !keysDb[key].valid) {
    return res.status(403).send("-- Key inválida ou expirada --");
  }

  // Gera script personalizado
  const script = `
getgenv().autojoiner_key = "${key}"
loadstring(game:HttpGet("https://SEU-SITE/autojoiner.lua"))()
  `.trim();

  res.setHeader("Content-Type", "text/plain");
  return res.send(script);
}
