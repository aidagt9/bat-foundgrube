export default async function handler(req, res) {
  const { marcas, cartones, regalo } = req.query;
  
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6df6_ZW4WV-SmJmOVVd4oIX4obZ_DrMSIUzQErixWtdn4fNLwg2DyVd8nSd3iF3FB7Q/exec';
  
  const url = `${SCRIPT_URL}?marcas=${encodeURIComponent(marcas)}&cartones=${encodeURIComponent(cartones)}&regalo=${encodeURIComponent(regalo)}`;
  
  try {
    await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
  } catch(e) {
    console.error('Error:', e);
  }
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true });
}
