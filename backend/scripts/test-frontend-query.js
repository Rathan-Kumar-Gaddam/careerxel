const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

async function testFrontendQuery() {
  try {
    console.log('🔍 Testing the exact frontend query...\n');
    
    const query = new URLSearchParams({
      "filters[slug][$eq]": "home",
      "populate[features]": "true",
      "populate[testimonials]": "true"
    }).toString();

    console.log(`📡 URL: ${STRAPI_URL}/api/pages?${query}\n`);
    
    const res = await fetch(`${STRAPI_URL}/api/pages?${query}`);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const page = data.data[0];
      console.log('✅ Home page found!');
      console.log(`   ID: ${page.id}`);
      console.log(`   Title: ${page.title}`);
      console.log(`   Testimonials: ${page.testimonials?.length || 0}`);
      
      if (page.testimonials && page.testimonials.length > 0) {
        console.log('\n📢 Testimonials:');
        page.testimonials.forEach((t, i) => {
          console.log(`   ${i + 1}. ${t.name} - ${t.role} @ ${t.company}`);
        });
      } else {
        console.log('\n❌ No testimonials in response!');
      }
    } else {
      console.log('❌ Home page not found');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

testFrontendQuery();
