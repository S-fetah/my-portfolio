import fs from 'node:fs';

const EXPECTED_DOMAIN = 'https://www.abdelfetah-safiddine.com';

function validateFile(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`=== ${label} ===`);
  
  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  
  // Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';
  console.log(`Canonical: ${canonical || 'MISSING'}`);
  if (canonical.includes('vercel.app')) {
    throw new Error(`CRITICAL: Found vercel.app in canonical for ${filePath}: ${canonical}`);
  }
  if (!canonical.startsWith(EXPECTED_DOMAIN)) {
    throw new Error(`CRITICAL: Canonical does not start with ${EXPECTED_DOMAIN}: ${canonical}`);
  }
  
  // Description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  console.log(`Description: ${descMatch ? descMatch[1] : 'MISSING'}`);

  // Robots meta
  const robotsMatch = content.match(/<meta\s+name="robots"\s+content="([^"]+)"/);
  console.log(`Robots: ${robotsMatch ? robotsMatch[1] : 'MISSING'}`);
  
  // Schema.org
  const schemaMatch = content.match(/<script type="application\/ld\+json" id="page-schema">([\s\S]*?)<\/script>/);
  if (schemaMatch) {
    try {
      const parsed = JSON.parse(schemaMatch[1]);
      const graph = parsed['@graph'] || [parsed];
      console.log(`JSON-LD: Valid JSON (${graph.length} entities: ${graph.map(e => e['@type']).join(', ')})`);
      const schemaString = JSON.stringify(parsed);
      if (schemaString.includes('vercel.app')) {
        throw new Error(`CRITICAL: Found vercel.app in JSON-LD schema for ${filePath}!`);
      }
      if (graph[0] && graph[0]['@type'] === 'Person') {
        console.log(`  Person name: "${graph[0].name}", jobTitle: "${JSON.stringify(graph[0].jobTitle)}"`);
        console.log(`  sameAs links (${graph[0].sameAs.length}): ${graph[0].sameAs.join(', ')}`);
      }
    } catch (e) {
      console.error(`JSON-LD ERROR: ${e.message}`);
      throw e;
    }
  } else {
    console.log('JSON-LD: MISSING');
  }
}

validateFile('dist/index.html', 'HOME (dist/index.html)');
validateFile('dist/work/fennec-booking/index.html', 'FENNEC CASE STUDY');
validateFile('dist/work/saha-mind/index.html', 'SAHA MIND CASE STUDY');
validateFile('dist/404.html', '404 PAGE');

console.log('\n=== ROBOTS.TXT ===');
const robots = fs.readFileSync('dist/robots.txt', 'utf8').trim();
console.log(robots);
if (robots.includes('vercel.app')) {
  throw new Error('CRITICAL: robots.txt contains vercel.app reference!');
}
if (!robots.includes(`Sitemap: ${EXPECTED_DOMAIN}/sitemap.xml`)) {
  throw new Error(`CRITICAL: robots.txt does not contain Sitemap: ${EXPECTED_DOMAIN}/sitemap.xml`);
}

console.log('\n=== SITEMAP.XML ===');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8').trim();
console.log(sitemap);
if (sitemap.includes('vercel.app')) {
  throw new Error('CRITICAL: sitemap.xml contains vercel.app reference!');
}
const locMatches = sitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
if (locMatches.length !== 3) {
  throw new Error(`Expected exactly 3 URLs in sitemap, found ${locMatches.length}`);
}
for (const locTag of locMatches) {
  const url = locTag.replace(/<\/?loc>/g, '');
  if (!url.startsWith(EXPECTED_DOMAIN)) {
    throw new Error(`CRITICAL: Sitemap URL does not belong to ${EXPECTED_DOMAIN}: ${url}`);
  }
}

console.log('\n=== VALIDATION COMPLETED: ALL AUDIT CHECKS PASSED WITH ZERO ERRORS ===');
