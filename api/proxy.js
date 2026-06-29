export default async function handler(req, res) {
  const { marcas, cartones, regalo } = req.query;
  
  const url = `https://script.google.com/macros/s/AKfycbx6df6_ZW4WV-SmJmOVVd4oIX4obZ_DrMSIUzQErixWtdn4fNLwg2DyVd8nSd3iF3FB7Q/exec?marcas=${encodeURIComponent(marcas)}&cartones=${encodeURIComponent(cartones)}&regalo=${encodeURIComponent(regalo)}`;
  
  await fetch(url);
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true });
}
