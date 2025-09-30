export default function handler(req, res) {
  // Simulação de banco de dados de keys (substitua por seu método real)
  const keysDb = {
    "KEY-EXEMPLO-1": { valid: true, expires: "2025-12-31" },
    "KEY-EXEMPLO-2": { valid: false, expires: "2024-10-10" }
  };

  const key = req.query.key;
  if (!key) return res.status(400).json({ valid: false, reason: "Key não enviada" });

  const info = keysDb[key];
  if (!info || !info.valid) {
    return res.json({ valid: false, reason: "Key inválida ou expirada" });
  }

  // Aqui você pode adicionar lógica para expiração, HWID, etc.
  return res.json({ valid: true });
}
