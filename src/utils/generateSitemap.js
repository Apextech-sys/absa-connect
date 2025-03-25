import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Convert ES module URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site's URLs with enhanced metadata
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/packages', changefreq: 'daily', priority: 1.0 },
  { url: '/compare', changefreq: 'weekly', priority: 0.9 },
  { url: '/mesh-advisor', changefreq: 'weekly', priority: 0.8 },
  { url: '/why-choose-wondernet', changefreq: 'monthly', priority: 0.8 },
  { url: '/support', changefreq: 'weekly', priority: 0.8 },
  { url: '/wonderwatch', changefreq: 'monthly', priority: 0.8 },
  { url: '/how-to-switch', changefreq: 'monthly', priority: 0.7 },
  { url: '/recommend', changefreq: 'weekly', priority: 0.9 },
];

// Configuration
const config = {
  hostname: 'https://wondernet.co.za',
  outputPath: path.join(__dirname, '../../public/sitemap.xml')
};

function generateSitemapXML() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(({ url, changefreq, priority }) => {
    xml += '  <url>\n';
    xml += `    <loc>${config.hostname}${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function writeSitemap() {
  try {
    const xml = generateSitemapXML();
    
    // Ensure output directory exists
    const outputDir = path.dirname(config.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(config.outputPath, xml);
    console.log('Sitemap generated successfully at:', config.outputPath);
    
    // Output some stats
    console.log(`Total URLs: ${urls.length}`);
    console.log(`File size: ${(xml.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Execute the generator
writeSitemap();
