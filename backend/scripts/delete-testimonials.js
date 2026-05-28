const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

async function deleteAllTestimonials() {
  try {
    console.log('📄 Fetching all testimonials...');
    
    const headers = { 'Content-Type': 'application/json' };
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
    }
    
    const res = await fetch(`${STRAPI_URL}/api/testimonials?pagination[limit]=999`, {
      headers
    });

    const data = await res.json();
    
    if (!data.data || data.data.length === 0) {
      console.log('✅ No testimonials to delete');
      return;
    }

    console.log(`Found ${data.data.length} testimonials. Deleting...`);

    for (const testimonial of data.data) {
      const deleteRes = await fetch(`${STRAPI_URL}/api/testimonials/${testimonial.id}`, {
        method: 'DELETE',
        headers
      });

      if (deleteRes.ok) {
        console.log(`✅ Deleted: ${testimonial.attributes?.name || testimonial.id}`);
      } else {
        const errorText = await deleteRes.text();
        console.error(`❌ Failed to delete ${testimonial.id}: ${deleteRes.status} - ${errorText}`);
      }
    }

    console.log('✨ All testimonials deleted');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

deleteAllTestimonials();
