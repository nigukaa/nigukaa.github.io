const WA = '6584042000';
const TG = 'Hunaa22';
const IG = 'niguka12';

// Group icons — emoji per group for card thumbnails
const GROUP_ICONS = {
  'Ferry': '\u26F4\uFE0F',
  'Sentosa': '\u26F1\uFE0F',
  'Mandai Wildlife': '\u{1F981}',
  'Gardens by the Bay': '\u{1F33A}',
  'Marina Bay': '\u{1F3D9}\uFE0F',
  'Museums & Culture': '\u{1F3DB}\uFE0F',
  'Tours': '\u{1F68D}',
  'Jewel Changi': '\u2728',
  'Family & Kids': '\u{1F3A0}',
  'Entertainment': '\u{1F3AD}',
};

// Popular ticket IDs shown in the featured section
const POPULAR_IDS = ['uss', 'oceanarium', 'adventure-cove', 'gbtb', 'night-safari', 'zoo', 'luge', 'majestic'];

const TICKETS = [
  { id: 'majestic', cat: 'ferry', group: 'Ferry', name: 'Majestic Fast Ferry', sub: 'HarbourFront \u21C4 Batam Centre', type: 'Return trip', tags: ['Group promo 4+'], pax: ['Indonesian passport', 'Singapore passport', 'Foreign passport'], img: 'asset/Majestic Fast Ferry (Batam and Singapore).webp', fromPrice: '$38', keywords: ['batam ferry', 'batam centre'] },
  { id: 'sindo', cat: 'ferry', group: 'Ferry', name: 'Sindo Ferry', sub: 'HarbourFront \u21C4 Batam Centre', type: 'Return trip', tags: ['Group promo 4+'], pax: ['Indonesian passport', 'Singapore passport', 'Foreign passport'], img: 'asset/Sindo Ferry.webp', fromPrice: '$38', keywords: ['batam ferry', 'batam centre'] },
  { id: 'horizon', cat: 'ferry', group: 'Ferry', name: 'Horizon Ferry', sub: 'HarbourFront \u21C4 Harbour Bay', type: 'Return / One-way', tags: [], pax: ['Return trip', 'One-way'], img: 'asset/Horizon Ferry.webp', fromPrice: '$35', keywords: ['batam ferry', 'harbour bay'] },
  { id: 'horizon-group', cat: 'ferry', group: 'Ferry', name: 'Horizon Ferry (Group)', sub: 'HarbourFront \u21C4 Harbour Bay', type: 'Return trip', tags: ['Min. 5 pax'], pax: ['Indonesian passport', 'Singapore passport', 'Foreign passport'], img: 'asset/Horizon Ferry.webp', fromPrice: '$30', keywords: ['batam ferry', 'harbour bay', 'group'] },
  { id: 'batamfast', cat: 'ferry', group: 'Ferry', name: 'Batam Fast Ferry', sub: 'HarbourFront \u21C4 Batam Centre', type: 'Return trip', tags: [], pax: ['Indonesian passport', 'Singapore passport', 'Foreign passport'], img: 'asset/Batam Fast Ferry.webp', fromPrice: '$38', keywords: ['batamfast', 'batam centre'] },
  { id: 'sentosa-express', cat: 'attraction', group: 'Sentosa', name: 'Sentosa Express Monorail Ticket', sub: 'HarbourFront MRT \u2192 Sentosa', type: 'Monorail ride', tags: [], pax: ['Ticket'], img: 'asset/Sentosa Express Monorail Ticket.webp', promo: { price: '$2', original: '$4', save: '$2', minQty: 2 }, keywords: ['monorail', 'train'] },
  { id: 'uss', cat: 'attraction', group: 'Sentosa', name: 'Universal Studios Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Adult', 'Child'], img: 'asset/Universal Studios Singapore.webp', fromPrice: '$63', keywords: ['uss', 'universal', 'theme park'] },
  { id: 'adventure-cove', cat: 'attraction', group: 'Sentosa', name: 'Adventure Cove Waterpark', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Adventure Cove Waterpark.webp', fromPrice: '$29', keywords: ['waterpark', 'water park', 'swimming'] },
  { id: 'harry-potter', cat: 'attraction', group: 'Sentosa', name: 'Harry Potter: Visions of Magic', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Off-Peak', 'Peak', 'Super-Peak'], img: 'asset/Harry Potter Visions of Magic.webp', fromPrice: '$38', keywords: ['hp', 'harry potter', 'hogwarts'] },
  { id: 'oceanarium', cat: 'attraction', group: 'Sentosa', name: 'Singapore Oceanarium', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Singapore Oceanarium.webp', fromPrice: '$45', keywords: ['sea aquarium', 'aquarium', 'ocean'] },
  { id: 'marine-mammal', cat: 'attraction', group: 'Sentosa', name: 'Marine Mammal Habitat', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Marine Mammal Habitat.webp', keywords: ['dolphin'] },
  { id: 'wot', cat: 'attraction', group: 'Sentosa', name: 'Wings of Time', sub: 'Sentosa, Fireworks Show', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Wings of Time.webp', fromPrice: '$12', keywords: ['fireworks', 'night show', 'light show'] },
  { id: 'cable-car', cat: 'attraction', group: 'Sentosa', name: 'Singapore Cable Car', sub: 'Sentosa Line + Mount Faber Line', type: 'Two-way ride', tags: [], pax: ['Ticket'], img: 'asset/Singapore Cable Car.webp', fromPrice: '$21', keywords: ['mount faber']},
  { id: 'skyhelix', cat: 'attraction', group: 'Sentosa', name: 'SkyHelix Sentosa', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/SkyHelix Sentosa.webp', keywords: [] },
  { id: 'skyslide', cat: 'attraction', group: 'Sentosa', name: 'SkyPark Skyslide', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/SkyPark Skyslide.webp', keywords: [] },
  { id: 'sentosa-4d', cat: 'attraction', group: 'Sentosa', name: 'Sentosa 4D AdventureLand', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Sentosa 4D AdventureLand.webp', keywords: ['4d'] },
  { id: 'ifly', cat: 'attraction', group: 'Sentosa', name: 'iFly Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/iFly Singapore.webp', fromPrice: '$69', keywords: ['skydiving', 'indoor skydive'] },
  { id: 'megazip', cat: 'attraction', group: 'Sentosa', name: 'Mega Adventure Park (MegaZip)', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Mega Adventure Park (MegaZip).webp', keywords: ['zipline', 'zip line'] },
  { id: 'headrock', cat: 'attraction', group: 'Sentosa', name: 'HeadRock VR', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/HeadRock VR.webp', keywords: ['virtual reality', 'vr'] },
  { id: 'hyperdrive', cat: 'attraction', group: 'Sentosa', name: 'HyperDrive Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/HyperDrive Singapore.webp', keywords: ['go kart', 'karting'] },
  { id: 'luge', cat: 'attraction', group: 'Sentosa', name: 'Skyline Luge Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Off-Peak', 'Peak', 'Super-Peak', 'Night'], img: 'asset/Skyline Luge Singapore.webp', fromPrice: '$25', keywords: ['luge', 'skyride'] },
  { id: 'zoo', cat: 'attraction', group: 'Mandai Wildlife', name: 'Singapore Zoo (with Tram)', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Adult', 'Child'], img: 'asset/Singapore Zoo (with Tram).webp', fromPrice: '$35', keywords: ['zoo', 'mandai zoo'] },
  { id: 'rainforest', cat: 'attraction', group: 'Mandai Wildlife', name: 'Rainforest Wild Asia', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Rainforest Wild Asia.webp', keywords: ['rainforest'] },
  { id: 'rainforest-adv', cat: 'attraction', group: 'Mandai Wildlife', name: 'Rainforest Wild + Adventure', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Rainforest Wild Asia.webp', keywords: ['rainforest'] },
  { id: 'river-wonders', cat: 'attraction', group: 'Mandai Wildlife', name: 'River Wonders', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/River Wonders.webp', fromPrice: '$30', keywords: ['river safari', 'panda'] },
  { id: 'bird-paradise', cat: 'attraction', group: 'Mandai Wildlife', name: 'Bird Paradise', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Bird Paradise.webp', fromPrice: '$30', keywords: ['jurong bird park', 'bird park'] },
  { id: 'night-safari', cat: 'attraction', group: 'Mandai Wildlife', name: 'Night Safari', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Adult', 'Child'], img: 'asset/Night Safari.webp', fromPrice: '$38', keywords: ['night zoo', 'night safari mandai'] },
  { id: 'curiosity-cove', cat: 'attraction', group: 'Mandai Wildlife', name: 'Curiosity Cove', sub: 'Mandai', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Curiosity Cove.webp', keywords: [] },
  { id: 'gbtb', cat: 'attraction', group: 'Gardens by the Bay', name: 'Flower Dome + Cloud Forest', sub: 'Gardens by the Bay', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Flower Dome.webp', fromPrice: '$28', keywords: ['gardens by the bay', 'gbtb', 'flower dome', 'cloud forest'] },
  { id: 'supertree', cat: 'attraction', group: 'Gardens by the Bay', name: 'Supertree Observatory', sub: 'Gardens by the Bay', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Supertree Observatory.webp', fromPrice: '$10', keywords: ['supertree grove', 'gbtb'] },
  { id: 'floral-fantasy', cat: 'attraction', group: 'Gardens by the Bay', name: 'Floral Fantasy', sub: 'Gardens by the Bay', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Floral Fantasy.webp', keywords: ['gbtb'] },
  { id: 'gbtb-shuttle', cat: 'attraction', group: 'Gardens by the Bay', name: 'Shuttle Bus Combo', sub: 'Gardens by the Bay', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Shuttle Bus Combo.webp', keywords: ['gbtb', 'shuttle'] },
  { id: 'flyer', cat: 'attraction', group: 'Marina Bay', name: 'Singapore Flyer', sub: 'Marina Bay', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/singapore flyer.webp', fromPrice: '$28', keywords: ['ferris wheel', 'observation wheel'] },
  { id: 'sky-dining', cat: 'attraction', group: 'Marina Bay', name: '165 Sky Dining by Singapore Flyer', sub: 'Marina Bay', type: 'Dining experience', tags: [], pax: ['Ticket'], img: 'asset/165 Sky Dining by Singapore Flyer.webp', keywords: ['sky dining', 'flyer dining'] },
  { id: 'mbs-skypark', cat: 'attraction', group: 'Marina Bay', name: 'MBS SkyPark Observation Deck', sub: 'Marina Bay Sands', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/MBS SkyPark Observation Deck.webp', fromPrice: '$25', keywords: ['marina bay sands', 'mbs', 'skypark']},
  { id: 'digital-light', cat: 'attraction', group: 'Marina Bay', name: 'Digital Light Canvas by teamLab', sub: 'Marina Bay Sands', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Digital Light Canvas by teamLab.webp', keywords: ['teamlab', 'mbs'] },
  { id: 'sampan', cat: 'attraction', group: 'Marina Bay', name: 'Sampan Rides', sub: 'Marina Bay Sands', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Sampan Rides.webp', keywords: ['mbs', 'boat ride'] },
  { id: 'artscience', cat: 'attraction', group: 'Marina Bay', name: 'ArtScience Museum', sub: 'Marina Bay Sands', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/ArtScience Museum.webp', fromPrice: '$25', keywords: ['mbs', 'art science']},
  { id: 'teamlab', cat: 'attraction', group: 'Marina Bay', name: 'teamLab Future World', sub: 'ArtScience Museum', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/teamLab Future World.webp', keywords: ['mbs', 'teamlab'] },
  { id: 'flesh-bones', cat: 'attraction', group: 'Marina Bay', name: 'Flesh and Bones: The Art of Anatomy', sub: 'ArtScience Museum', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Flesh and Bones The Art of Anatomy.webp', keywords: ['mbs', 'artscience'] },
  { id: 'into-ocean', cat: 'attraction', group: 'Marina Bay', name: 'Into the Ocean: Journey Beneath', sub: 'ArtScience Museum', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Into the Ocean Journey Beneath.webp', keywords: ['mbs', 'artscience'] },
  { id: 'nat-gallery', cat: 'attraction', group: 'Museums & Culture', name: 'National Gallery Singapore', sub: 'Civic District', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/National Gallery Singapore.webp', fromPrice: '$18', keywords: ['gallery', 'art gallery'] },
  { id: 'art-museum', cat: 'attraction', group: 'Museums & Culture', name: 'Singapore Art Museum', sub: 'Tanjong Pagar', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Singapore Art Museum.webp', keywords: ['sam', 'art'] },
  { id: 'illusions', cat: 'attraction', group: 'Museums & Culture', name: 'Museum of Illusions', sub: 'Sentosa', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Museum of Illusions.webp', keywords: ['illusion'] },
  { id: 'science-centre', cat: 'attraction', group: 'Museums & Culture', name: 'Singapore Science Centre', sub: 'Jurong', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Singapore Science Centre.webp', fromPrice: '$10', keywords: ['science center', 'omni theatre'] },
  { id: 'kidstop', cat: 'attraction', group: 'Museums & Culture', name: 'Science Centre KidsSTOP', sub: 'Jurong', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Science Centre KidsSTOP.webp', keywords: ['kidstop', 'kids stop'] },
  { id: 'orchid-garden', cat: 'attraction', group: 'Museums & Culture', name: 'National Orchid Garden', sub: 'Botanic Gardens', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/National Orchid Garden.webp', keywords: ['botanic gardens', 'orchid'] },
  { id: 'duck-tour', cat: 'attraction', group: 'Tours', name: 'DUCK Tour Singapore', sub: 'Suntec City', type: 'Tour', tags: [], pax: ['Ticket'], img: 'asset/DUCK Tour Singapore.webp', fromPrice: '$35', keywords: ['duck boat', 'amphibious'] },
  { id: 'dukw', cat: 'attraction', group: 'Tours', name: 'Captain Explorer DUKW Tours', sub: 'Marina Bay', type: 'Tour', tags: [], pax: ['Ticket'], img: 'asset/Captain Explorer DUKW Tours.webp', keywords: ['duck boat'] },
  { id: 'funvee', cat: 'attraction', group: 'Tours', name: 'FunVee Open-Top Bus', sub: 'Hop-on Hop-off', type: 'Tour', tags: [], pax: ['Ticket'], img: 'asset/FunVee Open-Top Bus.webp', keywords: ['hop on hop off', 'bus tour', 'city tour'] },
  { id: 'bigbus', cat: 'attraction', group: 'Tours', name: 'Big Bus Singapore', sub: 'Hop-on Hop-off', type: 'Tour', tags: [], pax: ['Ticket'], img: 'asset/Big Bus Singapore.webp', keywords: ['hop on hop off', 'bus tour', 'city tour'] },
  { id: 'river-cruise', cat: 'attraction', group: 'Tours', name: 'Singapore River Cruise', sub: 'Clarke Quay', type: 'Cruise', tags: [], pax: ['Ticket'], img: 'asset/Singapore River Cruise.webp', fromPrice: '$18', keywords: ['bumboat', 'clarke quay boat'] },
  { id: 'mb-cruise', cat: 'attraction', group: 'Tours', name: 'Marina Bay Sightseeing Cruise', sub: 'Marina Bay', type: 'Cruise', tags: [], pax: ['Ticket'], img: 'asset/Marina Bay Sightseeing Cruise.webp', keywords: ['boat cruise'] },
  { id: 'canopy-park', cat: 'attraction', group: 'Jewel Changi', name: 'Canopy Park', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Canopy Park.webp', fromPrice: '$18', keywords: ['jewel', 'changi airport'] },
  { id: 'hedge-maze', cat: 'attraction', group: 'Jewel Changi', name: 'Hedge Maze', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Hedge Maze.webp', keywords: ['jewel', 'maze'] },
  { id: 'mirror-maze', cat: 'attraction', group: 'Jewel Changi', name: 'Mirror Maze', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Mirror Maze.webp', keywords: ['jewel', 'maze'] },
  { id: 'walking-net', cat: 'attraction', group: 'Jewel Changi', name: 'Walking Net', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Walking Net.webp', keywords: ['jewel', 'manulife sky nets'] },
  { id: 'bouncing-net', cat: 'attraction', group: 'Jewel Changi', name: 'Bouncing Net', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Bouncing Net.webp', keywords: ['jewel', 'manulife sky nets'] },
  { id: 'canopy-bridge', cat: 'attraction', group: 'Jewel Changi', name: 'Canopy Bridge', sub: 'Jewel Changi Airport', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Canopy Bridge.webp', keywords: ['jewel'] },
  { id: 'kiztopia', cat: 'attraction', group: 'Family & Kids', name: 'Kiztopia Marina Square', sub: 'Marina Square', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Kiztopia Marina Square.webp', keywords: ['kids playground', 'indoor playground'] },
  { id: 'tayo', cat: 'attraction', group: 'Family & Kids', name: 'Tayo Station', sub: 'Downtown East', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Tayo Station.webp', keywords: ['tayo bus', 'kids'] },
  { id: 'pororo', cat: 'attraction', group: 'Family & Kids', name: 'Pororo Park Singapore', sub: 'Marina Square', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Pororo Park Singapore.webp', keywords: ['kids', 'indoor playground'] },
  { id: 'superpark', cat: 'attraction', group: 'Family & Kids', name: 'SuperPark Singapore', sub: 'Suntec City', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/SuperPark Singapore.webp', keywords: ['trampoline', 'indoor park'] },
  { id: 'kidzania', cat: 'attraction', group: 'Family & Kids', name: 'KidZania Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/KidZania Singapore.webp', fromPrice: '$38', keywords: ['kids', 'role play'] },
  { id: 'minecraft', cat: 'attraction', group: 'Family & Kids', name: 'Minecraft Experience: Villager Rescue', sub: 'Singapore', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Minecraft ExperienceVillager Rescue.webp', keywords: ['minecraft'] },
  { id: 'tussauds', cat: 'attraction', group: 'Entertainment', name: 'Madame Tussauds Singapore', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Madame Tussauds Singapore.webp', fromPrice: '$22', keywords: ['wax museum', 'madame tussaud'] },
  { id: 'ice-cream', cat: 'attraction', group: 'Entertainment', name: 'Museum of Ice Cream', sub: 'Dempsey', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Museum of Ice Cream.webp', fromPrice: '$32', keywords: ['moic', 'ice cream museum'] },
  { id: 'snow-city', cat: 'attraction', group: 'Entertainment', name: 'Snow City', sub: 'Jurong', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Snow City.webp', fromPrice: '$15', keywords: ['snow', 'winter'] },
  { id: 'wildwildwet', cat: 'attraction', group: 'Entertainment', name: 'Wild Wild Wet', sub: 'Downtown East', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Wild Wild Wet.webp', fromPrice: '$18', keywords: ['waterpark', 'water park'] },
  { id: 'butterfly', cat: 'attraction', group: 'Entertainment', name: 'Butterfly Park & Insect Kingdom', sub: 'Sentosa Island', type: 'Admission', tags: [], pax: ['Ticket'], img: 'asset/Butterfly Park & Insect Kingdom.webp', keywords: ['butterfly'] },
];

const REVIEWS = [
  { n: 5, t: 'Cheaper than buying direct, tickets came through within the hour. Highly recommended!', o: 'Rina S.', p: 'Sindo Ferry', d: 'Aug 2026' },
  { n: 5, t: 'Bought USS and Night Safari tickets, super smooth process. Thank you Niguka!', o: 'Andy M.', p: 'USS + Night Safari', d: 'Jul 2026' },
  { n: 5, t: 'First time buying this way, was a bit skeptical but everything was legit. Great service.', o: 'Dewi L.', p: 'Majestic Ferry', d: 'Jun 2026' },
  { n: 4, t: 'Fast replies, good price. Helped me pick the right ferry schedule too.', o: 'Bryan P.', p: 'Horizon Ferry', d: 'May 2026' },
];

// ── APP LOGIC ───────────────────────────────────────────────

let activeFilter = 'all';
let searchQuery = '';
const $ = (s) => document.querySelector(s);

function showSkeleton() {
  const grid = $('#productGrid');
  let html = '';
  for (let i = 0; i < 6; i++) {
    html += '<div class="skeleton-card"><div class="skeleton-body">' +
      '<div class="skeleton-line w70"></div>' +
      '<div class="skeleton-line w50"></div>' +
      '<div class="skeleton-line w30"></div>' +
      '</div><div class="skeleton-stub"></div></div>';
  }
  grid.innerHTML = html;
}

const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
searchInput.oninput = () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  searchClear.classList.toggle('visible', searchQuery.length > 0);
  renderGrid();
  renderJumpChips();
};
searchClear.onclick = () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  renderGrid();
  renderJumpChips();
};

function renderFilters() {
  const counts = { all: TICKETS.length, ferry: 0, attraction: 0 };
  TICKETS.forEach(t => counts[t.cat]++);
  const labels = { all: 'All', ferry: 'Ferry', attraction: 'Attractions' };
  const el = $('#filters');
  el.innerHTML = '';
  for (const [key, label] of Object.entries(labels)) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (activeFilter === key ? ' active' : '');
    btn.innerHTML = label + ' <span class="count">(' + counts[key] + ')</span>';
    btn.onclick = () => { activeFilter = key; renderFilters(); renderGrid(); renderJumpChips(); };
    el.appendChild(btn);
  }
}

function renderJumpChips() {
  const chips = $('#jumpChips');
  const groups = [];
  const seen = {};
  getFiltered().forEach(t => {
    if (t.group && !seen[t.group]) { seen[t.group] = true; groups.push(t.group); }
  });
  chips.innerHTML = '';
  groups.forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'jump-chip';
    btn.textContent = (GROUP_ICONS[g] || '') + ' ' + g;
    btn.onclick = () => {
      const target = document.getElementById('group-' + g.replace(/[^a-zA-Z0-9]/g, ''));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    chips.appendChild(btn);
  });
}

function getFiltered() {
  return TICKETS.filter(t => {
    if (activeFilter !== 'all' && t.cat !== activeFilter) return false;
    if (searchQuery) {
      const hay = (t.name + ' ' + t.sub + ' ' + t.group + ' ' + t.type + ' ' + (t.keywords || []).join(' ')).toLowerCase();
      return hay.includes(searchQuery);
    }
    return true;
  });
}

function renderPopular() {
  const container = $('#popularScroll');
  if (!container) return;
  container.innerHTML = '';
  POPULAR_IDS.forEach(id => {
    const t = TICKETS.find(item => item.id === id);
    if (!t) return;
    const card = document.createElement('div');
    card.className = 'popular-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Enquire about ' + t.name);
    card.onclick = () => openModal(t);
    card.onkeydown = (e) => { if (e.key === 'Enter') openModal(t); };
    const icon = GROUP_ICONS[t.group] || '\u{1F3AB}';
    card.innerHTML =
      (t.img ? '<img class="popular-img" src="' + t.img + '" alt="' + t.name + '" loading="lazy">' : '<div class="popular-img popular-img-placeholder">' + icon + '</div>') +
      '<div class="popular-body">' +
        '<div class="popular-name">' + t.name + '</div>' +
        '<div class="popular-cat">' + icon + ' ' + t.group + '</div>' +
        (t.fromPrice ? '<div class="popular-price">From ' + t.fromPrice + '</div>' : '') +
      '</div>';
    container.appendChild(card);
  });
}

function renderGrid() {
  const grid = $('#productGrid');
  const filtered = getFiltered();
  grid.innerHTML = '';

  if (filtered.length === 0) {
    $('#resultCount').innerHTML = '<div class="no-results">No tickets found for "' + searchInput.value + '"</div>';
    return;
  }
  $('#resultCount').textContent = filtered.length + ' tickets available';

  let lastGroup = '';
  filtered.forEach(t => {
    if (t.group && t.group !== lastGroup) {
      lastGroup = t.group;
      const gh = document.createElement('div');
      gh.className = 'group-header';
      gh.id = 'group-' + t.group.replace(/[^a-zA-Z0-9]/g, '');
      gh.textContent = (GROUP_ICONS[t.group] || '') + ' ' + t.group;
      grid.appendChild(gh);
    }
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Enquire about ' + t.name);
    card.onclick = () => openModal(t);
    card.onkeydown = (e) => { if (e.key === 'Enter') openModal(t); };

    if (t.promo) card.className = 'card card-promo';

    const icon = GROUP_ICONS[t.group] || '\u{1F3AB}';
    let bodyHtml = '';
    if (t.promo) {
      bodyHtml =
        '<div class="card-name">\u{1F6A0} ' + t.name + '</div>' +
        '<div class="card-sub">\u{1F4CD} ' + t.sub + '</div>' +
        '<div class="card-details">' +
          '<div>\u{1F3AB}\uFE0F Minimum purchase: ' + t.promo.minQty + ' tickets</div>' +
          '<div class="card-price">\u{1F525} ONLY ' + t.promo.price + ' each</div>' +
          '<div>\u{1F4B0} Official price: ' + t.promo.original + ' each \u2014 <span class="card-save">SAVE ' + t.promo.save + '!</span></div>' +
        '</div>';
    } else {
      bodyHtml =
        '<div class="card-name">' + t.name + '</div>' +
        '<div class="card-sub">' + t.sub + '</div>' +
        (t.fromPrice ? '<div class="card-from-price">From ' + t.fromPrice + '</div>' : '<span class="card-type">' + t.type + '</span>') +
        (t.tags.length ? '<div class="card-tags">' + t.tags.map(tag => '<span class="card-tag">' + tag + '</span>').join('') + '</div>' : '');
    }

    card.innerHTML =
      '<div class="card-content">' +
        (t.img ? '<img class="card-hero" src="' + t.img + '" alt="' + t.name + '">' : '<div class="card-hero card-hero-placeholder">' + icon + '</div>') +
        '<div class="card-body">' + bodyHtml + '</div>' +
      '</div>' +
      '<div class="card-stub">' +
        '<div class="card-notch-top"></div><div class="card-notch-bot"></div>' +
        '<div class="card-stub-text">Ask<br>Price</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

function openModal(t) {
  const modal = $('#modal');
  $('#modalTitle').textContent = t.name;
  $('#modalSub').textContent = t.sub + ' \u2014 ' + t.type;
  const body = $('#modalBody');
  const isFerry = t.cat === 'ferry';

  let html = '<div class="modal-note">Fill in your details below and we\'ll send an enquiry to Niguka on WhatsApp. No payment is made here \u2014 pricing and availability will be confirmed via chat.</div>';
  t.pax.forEach((label, i) => {
    html += '<div class="pax-row"><div class="pax-label">' + label + '</div>' +
      '<div class="stepper">' +
      '<button type="button" aria-label="Decrease" onclick="stepQty(' + i + ',-1)">\u2212</button>' +
      '<div class="qty" id="qty' + i + '">0</div>' +
      '<button type="button" aria-label="Increase" onclick="stepQty(' + i + ',1)">+</button>' +
      '</div></div>';
  });
  html += '<div style="margin-top:18px">';
  if (isFerry) {
    html += '<div class="form-row"><label for="dateDepart">Departure date</label><input type="date" id="dateDepart" min="' + todayStr() + '"></div>';
    html += '<div class="form-row"><label for="dateReturn">Return date</label><input type="date" id="dateReturn" min="' + todayStr() + '"></div>';
  } else {
    html += '<div class="form-row"><label for="dateVisit">Visit date</label><input type="date" id="dateVisit" min="' + todayStr() + '"></div>';
  }
  html += '</div>';
  html += '<button class="btn-wa" id="btnSend" disabled>Enquire on WhatsApp</button>';
  html += '<div class="btn-wa-note">Opens WhatsApp with your enquiry \u2014 no payment</div>';

  body.innerHTML = html;
  modal._ticket = t;
  modal._qty = t.pax.map(() => 0);

  if (isFerry) {
    $('#dateDepart').onchange = () => { $('#dateReturn').min = $('#dateDepart').value || todayStr(); checkReady(); };
    $('#dateReturn').onchange = checkReady;
  } else {
    $('#dateVisit').onchange = checkReady;
  }
  $('#btnSend').onclick = () => sendEnquiry();
  modal.classList.remove('closing');
  modal.showModal();
}

function closeModal() {
  const modal = $('#modal');
  modal.classList.add('closing');
  modal.addEventListener('animationend', function handler() {
    modal.classList.remove('closing');
    modal.close();
    modal.removeEventListener('animationend', handler);
  });
}

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function fmtDate(str) {
  if (!str) return '';
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const [y, m, d] = str.split('-');
  return parseInt(d) + ' ' + months[parseInt(m) - 1] + ' ' + y;
}

window.stepQty = function(idx, delta) {
  const modal = $('#modal');
  modal._qty[idx] = Math.max(0, modal._qty[idx] + delta);
  $('#qty' + idx).textContent = modal._qty[idx];
  checkReady();
};

function checkReady() {
  const modal = $('#modal');
  const t = modal._ticket;
  const total = modal._qty.reduce((s, q) => s + q, 0);
  const isFerry = t.cat === 'ferry';
  let dateOk = false;
  if (isFerry) {
    const dep = $('#dateDepart'), ret = $('#dateReturn');
    dateOk = dep && dep.value && ret && ret.value && ret.value >= dep.value;
  } else {
    const vis = $('#dateVisit');
    dateOk = vis && vis.value;
  }
  $('#btnSend').disabled = !(total > 0 && dateOk);
}

function sendEnquiry() {
  const modal = $('#modal');
  const t = modal._ticket;
  const isFerry = t.cat === 'ferry';
  let msg = 'Hi Niguka, I\'d like to enquire about:\n\n*' + t.name + '* \u2014 ' + t.sub + '\n';
  const parts = [];
  t.pax.forEach((label, i) => { if (modal._qty[i] > 0) parts.push(modal._qty[i] + '\u00d7 ' + label); });
  msg += parts.join(', ') + '\n';
  if (isFerry) {
    msg += 'Departure: ' + fmtDate($('#dateDepart').value) + '\nReturn: ' + fmtDate($('#dateReturn').value) + '\n';
  } else {
    msg += 'Visit date: ' + fmtDate($('#dateVisit').value) + '\n';
  }
  msg += '\nPlease let me know the price and availability. Thank you!';
  window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank');
  closeModal();
}

$('#modalClose').onclick = () => closeModal();
$('#modal').onclick = (e) => { if (e.target === $('#modal')) closeModal(); };

// WA BAR AUTO-HIDE on scroll
let lastScrollY = 0;
const waBar = $('#waBar');
const scrollTopBtn = $('#scrollTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastScrollY && y > 300) {
    waBar.classList.add('bar-hidden');
  } else {
    waBar.classList.remove('bar-hidden');
  }
  if (y > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
  lastScrollY = y;
}, { passive: true });

scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// REVIEWS
function renderReviews() {
  const c = $('#reviewsContainer');
  REVIEWS.forEach(r => {
    const div = document.createElement('div');
    div.className = 'review';
    div.innerHTML =
      '<div class="review-stars">' + '\u2605'.repeat(r.n) + '\u2606'.repeat(5 - r.n) + '</div>' +
      '<div class="review-text">\u201c' + r.t + '\u201d</div>' +
      '<div class="review-meta"><strong>' + r.o + '</strong> \u2014 ' + r.p + ' \u00b7 ' + r.d + '</div>';
    c.appendChild(div);
  });
}

// HERO SLIDESHOW
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;
function goToSlide(idx) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}
function nextSlide() { goToSlide((currentSlide + 1) % slides.length); }
dots.forEach((dot, i) => { dot.onclick = () => { goToSlide(i); resetTimer(); }; });
function resetTimer() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) resetTimer();

// INIT
showSkeleton();
setTimeout(() => {
  renderPopular();
  renderFilters();
  renderGrid();
  renderJumpChips();
  renderReviews();
}, 150);
