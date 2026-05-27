const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

async function checkContent() {
  try {
    console.log('📄 Fetching all testimonials...');
    
    const res = await fetch(`${STRAPI_URL}/api/testimonials?pagination[limit]=999&populate=page`, {
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

checkContent();
