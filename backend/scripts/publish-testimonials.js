const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

async function publishContent() {
  try {
    console.log('📄 Fetching home page...');
    
    const pageRes = await fetch(`${STRAPI_URL}/api/pages?filters[slug][$eq]=home`, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (!pageRes.ok) {
      console.error('❌ Failed to fetch home page');
      process.exit(1);
    }

    const pageData = await pageRes.json();
    if (!pageData.data || pageData.data.length === 0) {
      console.error('❌ Home page not found');
      process.exit(1);
    }

    const homePage = pageData.data[0];
    console.log(`✅ Found home page (ID: ${homePage.id})`);

    // Check if published
    if (!homePage.publishedAt) {
      console.log('📝 Publishing home page...');
      const publishRes = await fetch(`${STRAPI_URL}/api/pages/${homePage.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            publishedAt: new Date().toISOString()
          }
        })
      });

      if (publishRes.ok) {
        console.log('✅ Home page published');
      }
    } else {
      console.log('✅ Home page already published');
    }

    // Now fetch testimonials linked to home
    console.log('\n📝 Fetching testimonials...');
    const testimonialsRes = await fetch(
      `${STRAPI_URL}/api/testimonials?filters[page][id][$eq]=${homePage.id}&pagination[limit]=999`,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const testimonialsData = await testimonialsRes.json();
    const testimonials = testimonialsData.data || [];

    console.log(`Found ${testimonials.length} testimonials`);

    // Publish each testimonial
    let published = 0;
    for (const testimonial of testimonials) {
      if (!testimonial.publishedAt) {
        console.log(`📝 Publishing: ${testimonial.attributes.name}...`);
        const pubRes = await fetch(`${STRAPI_URL}/api/testimonials/${testimonial.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              publishedAt: new Date().toISOString()
            }
          })
        });

        if (pubRes.ok) {
          console.log(`✅ Published: ${testimonial.attributes.name}`);
          published++;
        }
      } else {
        console.log(`✅ Already published: ${testimonial.attributes.name}`);
      }
    }

    console.log(`\n🎉 Done! Published ${published} testimonials.`);
    console.log('🔄 Refresh your frontend to see the testimonials.');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

publishContent();
