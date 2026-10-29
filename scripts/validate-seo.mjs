import fs from 'node:fs';

function validateFile(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`=== ${label} ===`);
  
  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  
  // Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);
  
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
      if (graph[0] && graph[0]['@type'] === 'Person') {
        console.log(`  Person name: "${graph[0].name}", jobTitle: "${JSON.stringify(graph[0].jobTitle)}"`);
        console.log(`  sameAs links (${graph[0].sameAs.length}): ${graph[0].sameAs.join(', ')}`);
      }
    } catch (e) {
      console.error(`JSON-LD ERROR: ${e.message}`);
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
console.log(fs.readFileSync('dist/robots.txt', 'utf8').trim());

console.log('\n=== SITEMAP.XML ===');
console.log(fs.readFileSync('dist/sitemap.xml', 'utf8').trim());
