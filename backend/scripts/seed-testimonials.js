const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN || ''; // Set this if needed

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Talent",
    company: "Stripe",
    quote: "CareerXel reduced our hiring cycle by 40% and improved candidate experience significantly. The AI screening alone saved us weeks of work."
  },
  {
    name: "Marcus Johnson",
    role: "Head of Recruitment",
    company: "Vercel",
    quote: "We've never seen a platform that handles full-stack hiring this well. From ATS to interviews to analytics—it's all seamless."
  },
  {
    name: "Priya Patel",
    role: "Director of Operations",
    company: "Figma",
    quote: "The mock interviews are a game-changer for our candidates. They come in more prepared and confident than ever before."
  },
  {
    name: "David Martinez",
    role: "Chief Talent Officer",
    company: "Linear",
    quote: "Placement analytics gave us insights we never had. Now we can actually measure impact and iterate on our hiring strategy."
  },
  {
    name: "Emma Thompson",
    role: "Campus Recruiter",
    company: "Northwell Health",
    quote: "Managing college placement at scale is finally manageable. The bulk onboarding and reporting features are incredible."
  }
];

async function seedTestimonials() {
  try {
    console.log('🌱 Starting testimonial seeding...');

    // First, get the home page to get its ID
    console.log('📄 Fetching home page...');
    const pageHeaders = new Headers();
    if (API_TOKEN) pageHeaders.append('Authorization', `Bearer ${API_TOKEN}`);
    
    const pageRes = await fetch(`${STRAPI_URL}/api/pages?filters[slug][$eq]=home`, {
      headers: pageHeaders
    });

    if (!pageRes.ok) {
      console.error(`❌ Failed to fetch home page. Status: ${pageRes.status}`);
      console.error(await pageRes.text());
      process.exit(1);
    }

    const pageData = await pageRes.json();
    if (!pageData.data || pageData.data.length === 0) {
      console.error('❌ Home page not found. Please create it first in Strapi admin.');
      process.exit(1);
    }

    const homePageId = pageData.data[0].id;
    console.log(`✅ Found home page (ID: ${homePageId})`);

    // Create testimonials
    let created = 0;
    for (const testimonial of testimonials) {
      try {
        console.log(`📝 Creating testimonial: "${testimonial.name}"...`);
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (API_TOKEN) headers.append('Authorization', `Bearer ${API_TOKEN}`);

        const res = await fetch(`${STRAPI_URL}/api/testimonials`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            data: {
              name: testimonial.name,
              role: testimonial.role,
              company: testimonial.company,
              quote: testimonial.quote,
              page: homePageId,
              publishedAt: new Date().toISOString()
            }
          })
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error(`❌ Failed to create testimonial for ${testimonial.name}:`, errorData);
          continue;
        }

        console.log(`✅ Created: ${testimonial.name}`);
        created++;
      } catch (err) {
        console.error(`❌ Error creating testimonial for ${testimonial.name}:`, err.message);
      }
    }

    console.log(`\n🎉 Successfully created ${created}/${testimonials.length} testimonials!`);
    console.log('🔄 Refresh your frontend to see them appear on the homepage.');
  } catch (err) {
    console.error('❌ Error seeding testimonials:', err.message);
    process.exit(1);
  }
}

seedTestimonials();
