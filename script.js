fetchCard = async (e) => {
  // Add the loading spinner.
  const imageEl = document.getElementById('card');
  //imageEl.classList.add('loading');
  const linkEl = document.getElementById('link');
  const oracleEl = document.getElementById('oracle');
  const newCard = document.getElementById('renderedCard');
  
  // Getting the Scryfall data.
  const response = await fetch(`https://api.scryfall.com/cards/random?q=-t:planeswalker -t:basic f:vintage date<=2014-07-01`);
  //const response = await fetch('https://api.scryfall.com/cards/random?q= name:wizards-school');
  const card = await response.json();
  
  console.log(card);
  
  // Updating the card with the image data.
  imageEl.src = card.image_uris.normal;
  linkEl.href = card.scryfall_uri;
  title.innerHTML = card.name;
  cost.innerHTML = card.mana_cost
  .replace(/\{T}/g, '<i class="ms ms-tap ms-cost"></i>')
  .replace(/\{W}/g, '<i class="ms ms-w ms-cost"></i>')
  .replace(/\{U}/g, '<i class="ms ms-u ms-cost"></i>')
  .replace(/\{B}/g, '<i class="ms ms-b ms-cost"></i>')
  .replace(/\{R}/g, '<i class="ms ms-r ms-cost"></i>')
  .replace(/\{G}/g, '<i class="ms ms-g ms-cost"></i>')
  .replace(/\{C}/g, '<i class="ms ms-c ms-cost"></i>')
  .replace(/\{0}/g, '<i class="ms ms-0 ms-cost"></i>')
  .replace(/\{1}/g, '<i class="ms ms-1 ms-cost"></i>')
  .replace(/\{2}/g, '<i class="ms ms-2 ms-cost"></i>')
  .replace(/\{3}/g, '<i class="ms ms-3 ms-cost"></i>')
  .replace(/\{4}/g, '<i class="ms ms-4 ms-cost"></i>')
  .replace(/\{5}/g, '<i class="ms ms-5 ms-cost"></i>')
  .replace(/\{6}/g, '<i class="ms ms-6 ms-cost"></i>')
  .replace(/\{7}/g, '<i class="ms ms-7 ms-cost"></i>')
  .replace(/\{8}/g, '<i class="ms ms-8 ms-cost"></i>')
  .replace(/\{9}/g, '<i class="ms ms-9 ms-cost"></i>')
  .replace(/\{X}/g, '<i class="ms ms-x ms-cost"></i>');
  art.src = card.image_uris.art_crop;
  type.innerHTML = card.type_line;
  rarity.innerHTML = card.set;
  rarity.setAttribute('title', card.set_name);

  if (card.rarity === 'common') {
    rarity.setAttribute('style', 'background: black; color: white;');
  } else if (card.rarity === 'uncommon') {
    rarity.setAttribute('style', 'background: linear-gradient(45deg, rgb(70,100,110), rgb(185,220,235)');
  } else if (card.rarity === 'rare') {
    rarity.setAttribute('style', 'background: linear-gradient(45deg, rgb(118,98,55), rgb(230,205,140)');
  } else if (card.rarity === 'mythic') {
    rarity.setAttribute('style', 'background: linear-gradient(45deg, rgb(180,50,25), rgb(245,145,5)');
  } else {
    rarity = card.rarity;
  }
  
  oracleEl.innerHTML = card.oracle_text
  .replace(/\n/g, '<p />')
  .replace(/\{T}/g, '<i class="ms ms-tap ms-cost"></i>')
  .replace(/\{W}/g, '<i class="ms ms-w ms-cost"></i>')
  .replace(/\{U}/g, '<i class="ms ms-u ms-cost"></i>')
  .replace(/\{B}/g, '<i class="ms ms-b ms-cost"></i>')
  .replace(/\{R}/g, '<i class="ms ms-r ms-cost"></i>')
  .replace(/\{G}/g, '<i class="ms ms-g ms-cost"></i>')
  .replace(/\{C}/g, '<i class="ms ms-c ms-cost"></i>')
  .replace(/\{0}/g, '<i class="ms ms-0 ms-cost"></i>')
  .replace(/\{1}/g, '<i class="ms ms-1 ms-cost"></i>')
  .replace(/\{2}/g, '<i class="ms ms-2 ms-cost"></i>')
  .replace(/\{3}/g, '<i class="ms ms-3 ms-cost"></i>')
  .replace(/\{4}/g, '<i class="ms ms-4 ms-cost"></i>')
  .replace(/\{5}/g, '<i class="ms ms-5 ms-cost"></i>')
  .replace(/\{6}/g, '<i class="ms ms-6 ms-cost"></i>')
  .replace(/\{7}/g, '<i class="ms ms-7 ms-cost"></i>')
  .replace(/\{8}/g, '<i class="ms ms-8 ms-cost"></i>')
  .replace(/\{9}/g, '<i class="ms ms-9 ms-cost"></i>')
  .replace(/\{X}/g, '<i class="ms ms-x ms-cost"></i>')
  .replace(/\(/g, '<i>(')
  .replace(/\)/g, ')</i>');

  //text box colors: R.#b47869
  
  if (card.flavor_text !== undefined) {
    flavour.innerHTML = card.flavor_text
    .replace(/\n/g, '<p />')
    .replace(/\*/g, '<i>')
    .replace(/"([^"]*)"/g, "“$1”")
    .replace(/(\w)'(\w)/g, "$1’$2")
    .replace(/'([^']*)'/g, "‘$1’")
 //   .replace(/'([^']*)'/g, "‘$1’")
 //   .replace(/'([^']*)'/g, "$1’")
 //   .replace(/\s"/g, '“')
 //   .replace(/\S"/g, '”');
  } else {
    flavour.innerHTML = '';
  }

  artist.innerHTML = card.artist
  date.innerHTML = card.released_at;

  if (card.power !== undefined) {
    power.innerHTML = card.power + ' / ' + card.toughness;
  } else {
    power.innerHTML = '';
  }

  if (card.colors[0] === "W") {
    newCard.setAttribute('style', 'background-color: #fffd8c;');
  } else if (card.colors[0]  === "U") {    
    newCard.setAttribute('style', 'background-color: #4f7a9d;');
  } else if (card.colors[0] === "B") {    
    newCard.setAttribute('style', 'background-color: #9b759e;');
  } else if (card.colors[0] === "R") {    
    newCard.setAttribute('style', 'background-color: #904333;');
  } else if (card.colors[0] === 'G') {    
    newCard.setAttribute('style', 'background-color: #55724d;');
  } else if (!card.colors.length && card.type_line === 'Land') {    
    newCard.setAttribute('style', 'background-color: #946737;');
  } else if (!card.colors.length && card.type_line === 'Artifact') {    
    newCard.setAttribute('style', 'background-color: #c9c9c9;');
  } else {
    newCard.setAttribute('style', 'background-color: #f0f0e9;');
  }
  
  console.log(card.type_line);
  console.log(card.colors);
  // Remove loading spinner.
  imageEl.classList.remove('loading');
}