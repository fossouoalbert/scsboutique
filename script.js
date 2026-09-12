/* 
=================================
=================================
=======
SC SARL —
script.js
Vanilla JS. Aucune dépendance 
externe.
Sections : 1) Config  2) i18n  
3) Données produits  4) Thème
5) Rendu grille  6) 
Modale produit  7) Panier  8) 
Divers
=================================
=================================
======= */
/* ------------------------------------------------------------------ *
* 1) CONFIGURATION — à 
personnaliser avant mise en ligne
* ------------------------------------------------------------------ */
const SITE_VERSION = "20260912-2";

try {
const previousVersion = localStorage.getItem("sc-sarl-site-version");
localStorage.setItem("sc-sarl-site-version", SITE_VERSION);
if (previousVersion && previousVersion !== SITE_VERSION) {
window.location.reload();
}
} catch (error) {
}

const CONFIG = {
whatsappNumber: 
"676393943",          
// ex: 

whatsappGroupUrl: 
" https://chat.whatsapp.com/FfNwUgwEAbFG0f1QZBRKxT",
locationUrl: "https://www.google.com/maps/search/?api=1&query=SC%20SARL%2C%20Entree%20Carriere%2C%20Ndogpassi",
currency: "FCFA"
};
/* ------------------------------------------------------------------ *
* 2) i18n — dictionnaire FR / EN 
léger, sans librairie externe
* ------------------------------------------------------------------ */
const I18N = {
fr: {
brandName: "sc sarl",
searchPlaceholder: 
"Rechercher un objet…",
heroEyebrow: "Chaque produit a une histoire, nous lui en donnons une seconde",
heroTitle: "Brocante à prix doux depuis 10 mois",
heroSub: "Des objets de seconde main choisis à la main, à des prix qui ne font pas grincer le porte-monnaie.",
catAll: "Tout", catMeubles: 
"Meubles", catElectronique: 
"Électronique",
catDeco: "Déco", 
catCuisine: "Cuisine", 
catEcole: "École", 
catVetements: "Vêtements", 
catDivers: "Divers",
shareProduct: "Partager ce produit",
findShop: "Localiser la boutique",
promotionsKicker: "En ce moment",
promotionsTitle: "Promotions en cours",
arrivalsKicker: "Nouveautés",
arrivalsTitle: "Derniers arrivages",
arrivalsText: "Les produits fraîchement disponibles en boutique.",
newBadge: "Nouveau",
clearanceKicker: "Bonnes affaires",
clearanceTitle: "À liquider",
clearanceText: "Des prix réduits, disponibles en quantité limitée.",
whyChooseKicker: "L'esprit SC SARL",
whyChooseTitle: "Pourquoi nous choisir ?",
whyChooseText: "Une seconde vie pour les beaux objets, avec une expérience simple et humaine.",
whyQualityTitle: "Sélection contrôlée",
whyQualityText: "Chaque article est vérifié avant d'arriver dans notre vitrine.",
whyPriceTitle: "Des prix sincères",
whyPriceText: "Nous privilégions les bonnes affaires, sans gonfler les prix.",
whyAdviceTitle: "Un conseil humain",
whyAdviceText: "Une question ? Écrivez-nous directement, nous vous répondons avec plaisir.",
whySecondLifeTitle: "Acheter autrement",
whySecondLifeText: "Vous donnez une nouvelle histoire à des objets qui le méritent.",
reviewsKicker: "Ils nous font confiance",
reviewsTitle: "Évaluations clients",
reviewsCount: "{count} avis",
satisfiedClients: "clients satisfaits",
reviewFormTitle: "Laisser une évaluation",
reviewName: "Votre prénom",
reviewRating: "Votre note",
reviewMessage: "Votre commentaire",
reviewSubmit: "Publier mon avis",
emptyState: "Aucun objet ne correspond à votre recherche.",
aboutTitle: "Une brocante jeune, une promesse simple",
aboutP1: "Depuis 10 mois, nous chinons, réparons parfois, et remettons en circulation des objets qui méritent une seconde vie — meubles, électronique, déco, vêtements.Chaque pièce est inspectée avant d'être mise en ligne.",
aboutP2: "Notre engagement reste le même depuis le premier jour : des prix doux, une sélection honnête, et une commande qui se fait en un message.",
joinGroup: "Rejoindre notre groupe WhatsApp",
followUs: "Suivez-nous",
footerTag: "Brocante en ligne — à prix doux depuis 10 mois.",
footerBottom: "© 2026 . Fait avec soin, un objet à la fois.",
quantity: "Quantité",
addToCart: "Ajouter au panier",
orderWhatsapp: "Commander sur WhatsApp",
altOrderSummary: "Commande avec livraison — formulaire rapide",
fullName: "Nom complet",
address: "Adresse de livraison",
remarks: "Remarques (optionnel)",
sendOrderWhatsapp: "Envoyer la commande par WhatsApp",
cartTitle: "Votre panier",
cartEmpty: "Votre panier est vide pour l'instant.",
total: "Total",
sendCartWhatsapp: "Envoyer la liste par WhatsApp",
badgeUnique: "Pièce unique",
badgeStock: "En stock",
addedToCart: "Ajouté au panier ✓"
},
en: {
brandName: "SC SARL",
searchPlaceholder: "Search an item…",
heroEyebrow: "Each product has a story, we give it a second life",
heroTitle: "Sweet-priced second-hand finds, 10 months in",
heroSub: "Hand-picked secondhand items at prices that won't hurt your wallet.",
catAll: "All", catMeubles: 
"Furniture", catElectronique: 
"Electronics",
catDeco: "Decor", 
catCuisine: "Kitchen", 
catEcole: "School", 
catVetements: "Clothing", 
catDivers: "Misc",
shareProduct: "Share this product",
findShop: "Find the shop",
promotionsKicker: "Right now",
promotionsTitle: "Current promotions",
arrivalsKicker: "New in",
arrivalsTitle: "Latest arrivals",
arrivalsText: "Products that have just arrived in the shop.",
newBadge: "New",
clearanceKicker: "Best deals",
clearanceTitle: "Clearance",
clearanceText: "Reduced prices, available in limited quantities.",
whyChooseKicker: "The SC SARL spirit",
whyChooseTitle: "Why choose us?",
whyChooseText: "A second life for beautiful objects, with a simple and human shopping experience.",
whyQualityTitle: "Checked selection",
whyQualityText: "Every item is checked before it joins our showcase.",
whyPriceTitle: "Honest prices",
whyPriceText: "We focus on genuine bargains, without inflating the price.",
whyAdviceTitle: "Human advice",
whyAdviceText: "Have a question? Message us directly and we will be happy to help.",
whySecondLifeTitle: "Shop differently",
whySecondLifeText: "You give a new story to objects that deserve one.",
reviewsKicker: "Trusted by our customers",
reviewsTitle: "Customer reviews",
reviewsCount: "{count} reviews",
satisfiedClients: "satisfied customers",
reviewFormTitle: "Leave a review",
reviewName: "Your first name",
reviewRating: "Your rating",
reviewMessage: "Your comment",
reviewSubmit: "Publish my review",
emptyState: "No item matches your search.",
aboutTitle: "A young thrift shop, a simple promise",
aboutP1: "For 10 months we've been sourcing, sometimes fixing, and giving a second life to things worth keeping — furniture, electronics, decor, clothing. Every piece is checked before it goes online.",
aboutP2: "Our commitment hasn't changed since day one: fair prices, an honest selection, and ordering that takes one message.",
joinGroup: "Join our WhatsApp group",
followUs: "Follow us",
footerTag: "Online thrift shop — sweet prices for 10 months.",
footerBottom: "© 2026 The Treasure Attic. Made with care, one item at a time.",
quantity: "Quantity",
addToCart: "Add to cart",
orderWhatsapp: "Order on WhatsApp",
altOrderSummary: "Order with delivery — quick form",
fullName: "Full name",
address: "Delivery address",
remarks: "Notes (optional)",
sendOrderWhatsapp: "Send order via WhatsApp",
cartTitle: "Your cart",
cartEmpty: "Your cart is empty for now.",
total: "Total",
sendCartWhatsapp: "Send list via WhatsApp",
badgeUnique: "One of a kind",
badgeStock: "In stock",
addedToCart: "Added to cart ✓"
}
};
let currentLang = 
localStorage.getItem("lang") || 
"fr";
function t(key) {
return I18N[currentLang][key] 
|| key;
}
function applyTranslations() {
document.documentElement.lang = 
currentLang;
document.querySelectorAll("[data-i18n]").forEach(el => {el.textContent = t(el.dataset.i18n);
});
document.querySelectorAll("[data-i18nplaceholder]").forEach(el => {el.placeholder = 
t(el.dataset.i18nPlaceholder);
});
document.getElementById("langToggle").textContent = currentLang.toUpperCase();
renderCategoryLabels();
renderProducts();
renderCart();
renderPromotions();
renderReviews();
}
/* ------------------------------------------------------------------ *
* 3) DONNÉES PRODUITS
* Ajoute / modifie des objets 
ici — aucune autre partie du code
* n'a besoin d'être touchée pour 
gérer le catalogue.
* ------------------------------------------------------------------ */
const PRODUCTS = [
{
id: 1, categorie: "meubles",
nom: { fr: "Chaise visiteur verte", en: "Green visitor chair" },
prix: 15000,
image: 
"3515322ae7a9794727ea83377d8500ef.jpg",
description: { fr: "Chaise visiteur avec assise et dossier rembourrés, structure métallique noire.", en: "Visitor chair with padded seat and backrest, black metal frame." },
stock: " stock"
},
{
id: 2, categorie: 
"electronique",
nom: { fr: "Thermos isotherme bleu", en: "Blue insulated flask" },
prix: 8000,
image: "541729b338cc888ba95be4a448e7d3ed.jpg",
description: { fr: "Thermos bleu avec poignée et bec verseur, pratique pour garder les boissons chaudes.", 
en: "Blue insulated flask with handle and pouring spout, ideal for keeping drinks hot." },
stock: "stock"
},
{
id: 3, categorie: "divers",
nom: { fr: "Fer à repasser", en: "Clothes iron" },
prix: 10000,
image: 
"3402c132dd7c1eba8cf75217e046d5b2.jpg",
description: { fr: "Fer à repasser électrique avec semelle antiadhésive et fonction vapeur.", 
    en: "Electric clothes iron with non-stick soleplate and steam function." },
stock: "unique"
},
{
id: 4, categorie: 
"vetements",
nom: { fr: "Veste en jean délavée", en: "Faded denim jacket" },
prix: 15,
image: 
"https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=60&auto=format",
description: { fr: "Veste en jean unisexe, taille M, coupe classique, légèrement délavée.", 
en: "Unisex denim jacket, size M, classic cut, lightly faded." },
stock: "stock"
},

{
id: 5, categorie: "divers",
nom: { fr: "Lot de 6 verres à pied", en: "Set of 6 stemmed glasses" },
prix: 2000,
image: 
"https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=60&auto=format",
description: { fr: "Six verres à pied dépareillés mais assortis dans l'esprit, sans ébréchure.", en: "Six mismatched but-coordinated stemmed glasses, no chips." },
stock: "stock"
},
{
id: 6, categorie: "meubles",
nom: { fr: "Fauteuil de bureau en cuir", en: "Leather office chair" 
},
prix: 60000,
image: "1b3c990f14f02ca11fe9f418dff19edd.jpg",
description: { fr: "Fauteuil de bureau noir rembourré avec accoudoirs et piètement à roulettes.", en: "Padded black office chair with armrests and wheeled base." },
stock: "stock"
},
{
id: 7, categorie: 
"electronique",
nom: { fr: "Fauteuil de bureau pivotant", en: "Swivel office chair" },
prix: 13000,
image: 
"4f8c3b4cab5a178f08973962c42fb021.jpg",
description: { fr: "Fauteuil de bureau pivotant avec dossier haut et accoudoirs.", en: "Swivel office chair with high backrest and armrests." },
stock: "stock"
},

{
id: 8, categorie: "ecole",
nom: { fr: "plat pour gateau", en: "cake plate" },
prix: 500,
image: 
"Screenshot_20260906_223508_Gallery.jpg",
description: { fr: "plat pour gateau",
    en: "cake plate" },
stock: "stock"
},

{
id: 9, categorie: "ecole",
nom: { fr: "Sac à dos enfant Mickey", en: "Mickey children's backpack" },
prix: 6000,
image: 
"Screenshot_20260906_223259_Gallery.jpg",
description: { fr: "Sac à dos enfant rose avec motif Mickey et plusieurs compartiments.", en: "Pink children's backpack with Mickey design and several compartments." },
stock: "stock"
},
{
id: 10, categorie: 
"cuisine",
nom: { fr: "porte plat", en: "Oven rack" },
prix: 1500,
image: "Screenshot_20260906_223306_Gallery.jpg",
description: { fr: "porte plat pour classer les plats à la maison.", 
en: "Black metal rack for an oven or cooking appliance." },
stock: "stock"
},
{
id: 11, categorie: "cuisine",
nom: { fr: "Tasse d'apprentissage bleue", en: "Blue training cup" },
prix: 500,
image: 
"Screenshot_20260906_223504_Gallery.jpg",
description: { fr: "Tasse d'apprentissage bleue avec poignées et couvercle doseur.", 
    en: "Blue training cup with handles and measuring lid." },
stock: "stock"
},
{
id: 12, categorie: 
"cuisine",
nom: { fr: "Lot de verres dorés", en: "Set of golden glasses" },
prix: 7000,
image: 
"Screenshot_20260906_223633_Gallery.jpg",
description: { fr: "Lot de verres transparents à finition dorée, pour le service des boissons.", 
en: "Set of clear glasses with a golden finish, suitable for serving drinks." },
stock: "stock"
},

{
id: 13, categorie: "cuisine",
nom: { fr: "Service de casseroles", en: "Cookware set" },
prix: 10500,
image: 
"Screenshot_20260906_223629_Gallery.jpg",
description: { fr: "Service de casseroles blanches avec bordure dorée et couvercles.", en: "Set of white saucepans with gold trim and lids." },
stock: "stock"
},
{
id: 14, categorie: "cuisine",
nom: { fr: "Lot de plateaux inox", en: "Set of stainless-steel trays" 
},
prix: 12000,
image: "Screenshot_20260906_223625_Gallery.jpg",
description: { fr: "Lot de plateaux de service ovales en acier inoxydable.", en: "Set of oval stainless-steel serving trays." },
stock: "stock"
},
{
id: 15, categorie: 
"cuisine",
nom: { fr: "Porte-verres à vin avec verres", en: "Wine glass holder" },
prix: 7000,
image: 
"Screenshot_20260906_223608_Gallery.jpg",
description: { fr: "Support décoratif avec six verres à vin suspendus.", en: "Decorative stand holding six suspended wine glasses." },
stock: "stock"
},

{
id: 16, categorie: "cuisine",
nom: { fr: "Lot de plateaux argentés", en: "Set of silver trays" },
prix: 8000,
image: 
"Screenshot_20260906_223522_Gallery.jpg",
description: { fr: "Lot de plateaux de service argentés de différentes tailles.",
    en: "Set of silver serving trays in different sizes." },
stock: "stock"
}
,
{
id: 17, categorie: "cuisine",
nom: { fr: "Poêle antiadhésive", en: "Non-stick frying pan" },
prix: 5000,
image: 
"Screenshot_20260906_223511_Gallery.jpg",
description: { fr: "Poêle noire antiadhésive compatible avec plusieurs types de feux.", 
    en: "Black non-stick frying pan compatible with several types of cookers." },
stock: "unique"
},
{
id: 18, categorie: 
"cuisine",
nom: { fr: "Lot de 6 cuillères dorées", en: "Set of 6 golden spoons" },
prix: 3000,
image: 
"Screenshot_20260906_223449_Gallery.jpg",
description: { fr: "Lot de six cuillères dorées au design classique.", 
en: "Set of six golden spoons with a classic design." },
stock: "stock"
},

{
id: 19, categorie: "cuisine",
nom: { fr: "Lot de 6 fourchettes dorées", en: "Set of 6 golden forks" },
prix: 3000,
image: 
"Screenshot_20260906_223444_Gallery.jpg",
description: { fr: "Lot de six fourchettes dorées au design classique.", en: "Set of six golden forks with a classic design." },
stock: "stock"
},
{
id: 20, categorie: "vetement",
nom: { fr: "Sac à dos Pat'Patrouille", en: "Paw Patrol backpack" 
},
prix: 3500,
image: "Screenshot_20260906_223422_Gallery.jpg",
description: { fr: "Sac à dos bleu pour enfant avec motif Pat'Patrouille.", en: "Blue children's backpack with Paw Patrol design." },
stock: "stock"
},
{
id: 21, categorie: 
"electronique",
nom: { fr: "Bouilloire à col de cygne", en: "Gooseneck kettle" },
prix: 4000,
image: 
"Screenshot_20260906_223601_Gallery.jpg",
description: { fr: "Bouilloire en acier inoxydable avec bec verseur fin et poignée noire.", en: "Stainless-steel kettle with a narrow spout and black handle." },
stock: "stock"
},

{
id: 22, categorie: "vetement",
nom: { fr: "Sèche-cheveux", en: "Hair dryer" },
prix: 5000,
image: 
"Screenshot_20260906_223432_Gallery.jpg",
description: { fr: "Sèche-cheveux noir avec deux réglages et câble électrique.",
    en: "Black hair dryer with two settings and power cord." },
stock: "stock"
},
{
id: 23, categorie: "cuisine",
nom: { fr: "Moule à gâteau cannelé", en: "Bundt cake pan" },
prix: 1000,
image: 
"Screenshot_20260906_223415_Gallery.jpg",
description: { fr: "Moule à gâteau noir avec reliefs cannelés et cheminée centrale.", en: "Black cake pan with fluted sides and a central tube." },
stock: "stock"
},
{
id: 24, categorie: 
"vetement",
nom: { fr: "Parure de lit 3 pièces", en: "3-piece bedding set" },
prix: 3000,
image: "Screenshot_20260906_223411_Gallery.jpg",
description: { fr: "Parure de lit trois pièces en coton avec motif floral.", 
en: "Three-piece cotton bedding set with a floral pattern." },
stock: "stock"
},
{
id: 25, categorie: "vetement",
nom: { fr: "Sac à dos marron", en: "Brown backpack" },
prix: 6500,
image: 
"Screenshot_20260906_223239_Gallery.jpg",
description: { fr: "Sac à dos marron en matière synthétique avec poche frontale.", 
    en: "Brown synthetic-material backpack with a front pocket." },
stock: "stock"
},
{
id: 26, categorie: 
"cuisine",
nom: { fr: "Tasse et soucoupe colorées", en: "Colorful cup and saucer" },
prix: 1000,
image: 
"Screenshot_20260906_223204_Gallery.jpg",
description: { fr: "Tasse en céramique colorée avec sa soucoupe assortie.", 
en: "Colorful ceramic cup with a matching saucer." },
stock: "stock"
},

{
id: 27, categorie: "divers",
nom: { fr: "Boîte de craies blanches", en: "Box of white chalk" },
prix: 1500,
image: 
"Screenshot_20260906_223316_Gallery.jpg",
description: { fr: "Boîte de craies blanches sans poussière, format de 100 pièces.", en: "Box of 100 dustless white chalk sticks." },
stock: "stock"
},
{
id: 28, categorie: "vetement",
nom: { fr: "Sac à dos Minecraft", en: "Minecraft backpack" 
},
prix: 6500,
image: "Screenshot_20260906_223231_Gallery.jpg",
description: { fr: "Sac à dos scolaire Minecraft avec trousse assortie.", en: "Minecraft school backpack with a matching pencil case." },
stock: "stock"
},
{
id: 29, categorie: 
"deco",
nom: { fr: "Parfum fleur rouge", en: "Red flower perfume" },
prix: 3500,
image: 
"Screenshot_20260906_223313_Gallery.jpg",
description: { fr: "Flacon de parfum en forme de fleur, avec bouchon rouge.", en: "Flower-shaped perfume bottle with a red cap." },
stock: "stock"
},

{
id: 30, categorie: "deco",
nom: { fr: "Parfum Ramba", en: "Ramba perfume" },
prix: 2000,
image: 
"Screenshot_20260906_223309_Gallery.jpg",
description: { fr: "Flacon de parfum Ramba au design arrondi et finition mate.",
    en: "Rounded Ramba perfume bottle with a matte finish." },
stock: "stock"
},

{
id: 31, categorie: "cuisine",
nom: { fr: "carafe en acier inoxydable", en: "Stainless-steel pot" },
prix: 3000,
image: 
"Screenshot_20260906_223557_Gallery.jpg",
description: { fr: "carafe en acier inoxydable avec couvercle et poignée latérale.", en: "Stainless-steel pot with lid and side handle." },
stock: "unique"
},
{
id: 32, categorie: 
"cuisine",
nom: { fr: "Gobelet de voyage rose", en: "Pink travel tumbler" },
prix: 6000,
image: "Screenshot_20260906_223554_Gallery.jpg",
description: { fr: "Gobelet rose avec couvercle, poignée et paille intégrée.", 
en: "Pink tumbler with lids, handle and built-in straw." },
stock: "stock"
},{
id: 33, categorie: "cuisine",
nom: { fr: "glaciere isotherme tres solide de 56 litres", en: "cool water" },
prix:40000 ,
image: 
"3f55442d9554f52db46aa8123d4d742e.jpg",
description: { fr: "glaciere isotherme tres solide de 56 litres.", en: "Box of 100 dustless white chalk sticks." },
stock: "stock"
},
{
id: 34, categorie: "cuisine",
nom: { fr: "cuisiniere", en: "Minecraft backpack" 
},
prix: 30000,
image: "4d1f14feaca578834f2da1e519ae66d8.jpg",
description: { fr: "cuisiniere.", en: "Minecraft school backpack with a matching pencil case." },
stock: "stock"
},
{
id: 35, categorie: 
"deco",
nom: { fr: "tapis de salon", en: "carpet" },
prix: 15000,
image: 
"0c86bc4ee16ed8ee593bfdde263d5902.jpg",
description: { fr: "Flacon de parfum en forme de fleur, avec bouchon rouge.", en: "Flower-shaped perfume bottle with a red cap." },
stock: "stock"
},

{
id: 36, categorie: "deco",
nom: { fr: "matelas 3 places confortable", en: "mattress" },
prix: 90000,
image: 
"87eee2fc65b69026bf15c25fcf52756a.jpg",
description: { fr: "matelas 3 places confortable",
    en: "mattress." },
stock: "stock"
}


];

const PROMOTIONS = [
{ title: { fr: "-15% sur la déco", en: "-15% on decor" }, text: { fr: "Sur une sélection de miroirs et lampes", en: "On a selection of mirrors and lamps" }, code: "DECO15" },
{ title: { fr: "Livraison offerte", en: "Free delivery" }, text: { fr: "Dès 50 000 FCFA d'achat", en: "From 50,000 FCFA spent" }, code: "LIVRAISON" },
{ title: { fr: "Offre seconde pièce", en: "Second item offer" }, text: { fr: "-10% sur le deuxième article", en: "-10% on the second item" }, code: "DUO10" }
];
const DEFAULT_REVIEWS = [
{ name: "Amina", rating: 5, message: { fr: "Objet conforme aux photos et livraison rapide. Je recommande !", en: "Item as described and fast delivery. I recommend it!" } },
{ name: "Marc", rating: 5, message: { fr: "Très belle sélection, vendeur sérieux et disponible.", en: "A great selection, serious and available seller." } },
{ name: "Sophie", rating: 4, message: { fr: "Commande simple et fauteuil soigneusement emballé.", en: "Easy order and carefully packaged armchair." } }
];
const ARRIVALS_IDS = [32, 29, 21, 9];
const CLEARANCE_IDS = [1, 17, 18, 30];

function getProductsByIds(ids) {
return ids.map(id => PRODUCTS.find(product => product.id === id)).filter(Boolean);
}

function renderFeaturedProduct(product, type) {
const card = document.createElement("article");
card.className = `featured-product ${type === "clearance" ? "is-clearance" : ""}`;
card.tabIndex = 0;
card.setAttribute("role", "button");
card.innerHTML = `
<div class="featured-product-media">
<img src="${product.image}" alt="${product.nom[currentLang]}" loading="lazy">
<span class="featured-product-label">${type === "clearance" ? "-" + (product.id === 1 ? "20" : "15") + "%" : t("newBadge")}</span>
</div>
<div class="featured-product-info">
<strong>${product.nom[currentLang]}</strong>
<span class="featured-product-price">${formatPrice(product.prix)}</span>
</div>`;
const open = () => openProductModal(product.id);
card.addEventListener("click", open);
card.addEventListener("keydown", event => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
open();
}
});
return card;
}

function renderFeaturedSections() {
const sections = [
{ elementId: "arrivalsGrid", ids: ARRIVALS_IDS, type: "arrival" },
{ elementId: "clearanceGrid", ids: CLEARANCE_IDS, type: "clearance" }
];
sections.forEach(section => {
const grid = document.getElementById(section.elementId);
grid.replaceChildren(...getProductsByIds(section.ids).map(product => renderFeaturedProduct(product, section.type)));
});
}
function loadReviews() {
try {
const savedValue = localStorage.getItem("customerReviews");
if (savedValue !== null) {
const savedReviews = JSON.parse(savedValue);
return Array.isArray(savedReviews)
? savedReviews.filter(review => review && review.name && Number(review.rating) >= 1 && Number(review.rating) <= 5).map(review => ({
name: String(review.name),
rating: Number(review.rating),
message: review.message
}))
: [];
}
localStorage.setItem("customerReviews", JSON.stringify(DEFAULT_REVIEWS));
return DEFAULT_REVIEWS;
} catch (error) {
return DEFAULT_REVIEWS;
}
}
let reviews = loadReviews();

function renderPromotions() {
const grid = document.getElementById("promotionsGrid");
grid.innerHTML = PROMOTIONS.map(promotion => `
<article class="promotion-card"><span class="promotion-tag">${promotion.code}</span><h3>${promotion.title[currentLang]}</h3><p>${promotion.text[currentLang]}</p></article>`).join("");
}
function renderReviews() {
const list = document.getElementById("reviewsList");
const totalReviews = reviews.length;
const average = totalReviews === 0 ? 0 : reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
document.getElementById("reviewsAverage").textContent = average.toFixed(1).replace(".", ",");
document.getElementById("reviewsStars").textContent = "★".repeat(Math.round(average)) + "☆".repeat(5 - Math.round(average));
document.getElementById("reviewsCount").textContent = t("reviewsCount").replace("{count}", totalReviews);
list.innerHTML = "";
reviews.slice().reverse().forEach(review => {
const card = document.createElement("article");
card.className = "review-card";
card.innerHTML = `<div class="review-card-top"><strong></strong><span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div><p></p>`;
card.querySelector("strong").textContent = review.name;
card.querySelector("p").textContent = typeof review.message === "object" ? review.message[currentLang] : review.message;
list.appendChild(card);
});
}
document.getElementById("reviewForm").addEventListener("submit", (event) => {
event.preventDefault();
reviews.push({ name: document.getElementById("reviewName").value.trim(), rating: Number(document.getElementById("reviewRating").value), message: document.getElementById("reviewMessage").value.trim() });
localStorage.setItem("customerReviews", JSON.stringify(reviews));
event.target.reset();
renderReviews();
});
/* ------------------------------------------------------------------ *
* 4) THÈME (sombre par défaut, 
bascule vers clair)
* ------------------------------------------------------------------ */
function initTheme() {
const saved = 
localStorage.getItem("theme") || 
"light";
setTheme(saved);
}
function setTheme(theme) {
document.documentElement.dataset.
theme = theme;
localStorage.setItem("theme", 
theme);
document.getElementById("themeIconMoon").hidden = theme === 
"light";
document.getElementById("themeIconSun").hidden = theme === "dark";
}
document.getElementById("themeToggle").addEventListener("click", 
() => {
const next = 
document.documentElement.dataset.
theme === "dark" ? "light" : 
"dark";
setTheme(next);
});
document.getElementById("langToggle").addEventListener("click", () => {
currentLang = currentLang === 
"fr" ? "en" : "fr";
localStorage.setItem("lang", currentLang);
applyTranslations();
});
/* ------------------------------------------------------------------ *
* 5) RENDU DE LA GRILLE PRODUITS 
+ FILTRES + RECHERCHE
* ------------------------------------------------------------------ */
let activeCategory = "all";
let searchTerm = "";
function initializeCatalog() {
activeCategory = "all";
searchTerm = "";
document.getElementById("searchInput").value = "";
document.querySelectorAll(".filter-chip").forEach(btn => {
btn.classList.toggle("is-active", btn.dataset.category === "all");
});
renderProducts();
}
function renderCategoryLabels() {
// Les libellés des chips sont 
//déjà gérés par data-i18n dans 
// applyTranslations().
}
function getFilteredProducts() {
return PRODUCTS.filter(p => {
const matchesCategory = 
activeCategory === "all" || 
 normalizeCategory(p.categorie) === activeCategory;
const name = 
p.nom[currentLang].toLowerCase();
const matchesSearch = 
name.includes(searchTerm.toLowerCase());
return matchesCategory && 
matchesSearch;
});
}
function formatPrice(value) {
return `${value} 
${CONFIG.currency}`;
}
async function shareWithApi(shareData) {
if (!navigator.share) return false;
if (navigator.canShare && !navigator.canShare(shareData)) return false;
await navigator.share(shareData);
return true;
}
async function shareProduct(product) {
const shareData = {
title: product.nom[currentLang],
text: currentLang === "fr"
? `Découvre ${product.nom.fr} (${formatPrice(product.prix)}) chez SC SARL.`
: `Check out ${product.nom.en} (${formatPrice(product.prix)}) at SC SARL.`,
url: `${window.location.href.split("#")[0]}#product-${product.id}`
};
if (window.matchMedia("(min-width: 768px)").matches) {
openSocialShareMenu(shareData);
return;
}
try {
if (!await shareWithApi(shareData)) {
openSocialShareMenu(shareData);
}
} catch (err) {
// L'utilisateur a annulé le partage.
}
}
function openSocialShareMenu(shareData) {
const existingMenu = document.querySelector(".social-share-menu");
if (existingMenu) existingMenu.remove();
const encodedUrl = encodeURIComponent(shareData.url);
const encodedText = encodeURIComponent(`${shareData.text} ${shareData.url}`);
const menu = document.createElement("div");
menu.className = "social-share-menu";
menu.setAttribute("role", "menu");
menu.innerHTML = `
<strong>${currentLang === "fr" ? "Partager sur" : "Share on"}</strong>
<a href="https://wa.me/?text=${encodedText}" target="_blank" rel="noopener" role="menuitem">WhatsApp</a>
<a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" rel="noopener" role="menuitem">Facebook</a>
<a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodedUrl}" target="_blank" rel="noopener" role="menuitem">X</a>
<a href="https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(shareData.text)}" target="_blank" rel="noopener" role="menuitem">Telegram</a>
<a href="mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodedText}" role="menuitem">E-mail</a>
<button type="button" data-share-copy role="menuitem">${currentLang === "fr" ? "Copier le lien" : "Copy link"}</button>`;
document.body.appendChild(menu);
menu.querySelector("[data-share-copy]").addEventListener("click", async () => {
const copied = await copyShareLink(shareData.url);
alert(copied
? (currentLang === "fr" ? "Lien copié !" : "Link copied!")
: (currentLang === "fr" ? "Copiez ce lien : " : "Copy this link: ") + shareData.url);
menu.remove();
});
const closeMenu = (event) => {
if (!menu.contains(event.target)) {
menu.remove();
document.removeEventListener("click", closeMenu);
}
};
setTimeout(() => document.addEventListener("click", closeMenu), 0);
}
async function copyShareLink(url) {
try {
if (navigator.clipboard) {
await navigator.clipboard.writeText(url);
return true;
}
const input = document.createElement("textarea");
input.value = url;
input.setAttribute("readonly", "");
input.style.position = "fixed";
input.style.opacity = "0";
document.body.appendChild(input);
input.select();
const copied = document.execCommand("copy");
input.remove();
return copied;
} catch (err) {
return false;
}
}
function renderProducts() {
const grid = 
document.getElementById("productGrid");
const empty = document.getElementById("emptyState");
const list = getFilteredProducts();
grid.replaceChildren();
empty.hidden = list.length !== 
0;
list.forEach(p => {
const card = 
document.createElement("article")
;
card.className = "product-card";
card.dataset.id = p.id;
const badgeLabel = p.stock 
=== "unique" ? t("badgeUnique") : 
t("badgeStock");
const badgeClass = p.stock 
=== "unique" ? "unique" : 
"stock";
card.innerHTML = `
<div class="product-media">
<img src="${p.image}" 
alt="${p.nom[currentLang]}" 
loading="lazy">
<span class="product-badge ${badgeClass}">${badgeLabel}
</span>
</div>
<div class="product-info">
<span class="product-cat">${t("cat" + 
capitalize(p.categorie))}</span>
<span class="product-name">${p.nom[currentLang]}
</span>
<span class="product-description"></span>
<span class="product-price">${formatPrice(p.prix)}
</span>
<button class="product-share share-cta" type="button" aria-label="${t("shareProduct")}">
<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="6" cy="12" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><line x1="8" y1="11" x2="16" y2="7" stroke="currentColor" stroke-width="1.7"/><line x1="8" y1="13" x2="16" y2="17" stroke="currentColor" stroke-width="1.7"/></svg>
</button>
</div>
`;
card.querySelector(".product-description").textContent = p.description[currentLang];
card.addEventListener("click", () => openProductModal(p.id));
card.querySelector(".product-share").addEventListener("click", (event) => {
event.stopPropagation();
shareProduct(p);
});
grid.appendChild(card);
});
}
function capitalize(str) {
// "electronique" -> 
"Electronique" //pour matcher les clés catElectronique, etc.
if (str === "electronique") return "Electronique";
if (str === "meubles") return "Meubles";
if (str === "deco") return "Deco";
if (str === "cuisine") return "Cuisine";
if (str === "ecole") return "Ecole";
if (str === "vetements") return "Vetements";
if (str === "divers") return "Divers";
return str;
}
function normalizeCategory(category) {
return category === "vetement" ? "vetements" : category;
}
document.querySelectorAll(".filter-chip").forEach(btn => {
btn.addEventListener("click", 
() => {
document.querySelectorAll(".filter-chip").forEach(b => 
b.classList.remove("is-active"));
btn.classList.add("is-active");
activeCategory = 
btn.dataset.category;
renderProducts();
});
});
document.getElementById("searchInput").addEventListener("input", 
(e) => {
searchTerm = e.target.value;
renderProducts();
});
/* ------------------------------------------------------------------ *
* 6) MODALE PRODUIT + COMMANDE 
DIRECTE / FORMULAIRE WHATSAPP
* ------------------------------------------------------------------ */
let currentProduct = null;
function openProductModal(id) {
currentProduct = 
PRODUCTS.find(p => p.id === id);
if (!currentProduct) return;
document.getElementById("modalImage").src = currentProduct.image;
document.getElementById("modalImage").alt = 
currentProduct.nom[currentLang];
document.getElementById("modalCategory").textContent = t("cat" + 
capitalize(currentProduct.categorie));
document.getElementById("modalProductName").textContent = 
currentProduct.nom[currentLang];
document.getElementById("modalPrice").textContent = 
formatPrice(currentProduct.prix);
document.getElementById("modalDescription").textContent = 
currentProduct.description[currentLang];
document.getElementById("modalQty").value = 1;
const badge = 
document.getElementById("modalBadge");
badge.textContent = 
currentProduct.stock === "unique" 
? t("badgeUnique") : 
t("badgeStock");
badge.style.background = 
currentProduct.stock === "unique" 
? "var(--stock-unique)" : "var(--stock-ok)";
updateWhatsappDirectLink();
document.getElementById("productModal").hidden = false;
document.body.style.overflow = 
"hidden";
}
function closeProductModal() {
document.getElementById("productModal").hidden = true;
document.body.style.overflow = 
"";
currentProduct = null;
}
document.getElementById("modalClose").addEventListener("click", 
closeProductModal);
document.getElementById("productModal").addEventListener("click", 
(e) => {
if (e.target.id === 
"productModal") 
closeProductModal();
});
document.getElementById("qtyMinus").addEventListener("click", () => {
const input = 
document.getElementById("modalQty");
input.value = Math.max(1, 
parseInt(input.value || "1") - 
1);
updateWhatsappDirectLink();
});
document.getElementById("qtyPlus"
).addEventListener("click", () => 
{
const input = 
document.getElementById("modalQty");
input.value = 
parseInt(input.value || "1") + 1;
updateWhatsappDirectLink();
});
document.getElementById("modalQty").addEventListener("input", 
updateWhatsappDirectLink);
function 
updateWhatsappDirectLink() {
if (!currentProduct) return;
const qty = Math.max(1, 
parseInt(document.getElementById(
"modalQty").value || "1"));
const total = 
currentProduct.prix * qty;
const message =
(currentLang === "fr"
? `Bonjour ! Je souhaite 
commander :\n• 
${currentProduct.nom.fr} x${qty} 
— ${formatPrice(total)}\n\nMerci 
de me confirmer la 
disponibilité.`
: `Hello! I'd like to 
order:\n• 
${currentProduct.nom.en} x${qty} 
— ${formatPrice(total)}\n\nCould 
you confirm availability?`);
document.getElementById("whatsappDirectBtn").href =
`https://wa.me/${CONFIG.whatsappNumber}?
text=${encodeURIComponent(message
)}`;
}
/* ---- Formulaire de commande 
alternative (avec livraison) ---- 
*/
document.getElementById("orderForm").addEventListener("submit", 
(e) => {
e.preventDefault();
if (!currentProduct) return;
const qty = Math.max(1, 
parseInt(document.getElementById(
"modalQty").value || "1"));
const total = 
currentProduct.prix * qty;
const name = 
document.getElementById("orderName").value.trim();
const address = 
document.getElementById("orderAddress").value.trim();
const remarks = 
document.getElementById("orderRemarks").value.trim();
const message = currentLang === 
"fr"
? `Nouvelle commande — Le 
Grenier à Trésors\n\nArticle : 
${currentProduct.nom.fr}\nQuantit
é : ${qty}\nTotal : 
${formatPrice(total)}\n\nNom : 
${name}\nAdresse : 
${address}\nRemarques : ${remarks 
|| "—"}`
: `New order — The Treasure 
Attic\n\nItem: 
${currentProduct.nom.en}\nQuantit
y: ${qty}\nTotal: 
${formatPrice(total)}\n\nName: 
${name}\nAddress: 
${address}\nNotes: ${remarks || 
"—"}`;
window.open(`https://wa.me/${CONFIG.whatsappNumber}?
text=${encodeURIComponent(message
)}`, "_blank");
e.target.reset();
});
/* ------------------------------------------------------------------ *
* 7) PANIER MULTI-ARTICLES
* Stocké en mémoire (tableau 
d'objets { id, qty }).
* ------------------------------------------------------------------ */
let cart = [];
document.getElementById("addToCartBtn").addEventListener("click", 
() => {
if (!currentProduct) return;
const qty = Math.max(1, 
parseInt(document.getElementById(
"modalQty").value || "1"));
const existing = cart.find(item => item.id === 
currentProduct.id);
if (existing) {
existing.qty += qty;
} else {
cart.push({ id: 
currentProduct.id, qty });
}
renderCart();
flashAddedToCart();
});
function flashAddedToCart() {
const btn = 
document.getElementById("addToCartBtn");
const original = 
btn.textContent;
btn.textContent = 
t("addedToCart");
setTimeout(() => { 
btn.textContent = original; }, 
1200);
}

function renderCart() {
const container = 
document.getElementById("cartItems");
const emptyMsg = 
document.getElementById("cartEmpty");
const footer = 
document.getElementById("cartFooter");
const countBadge = 
document.getElementById("cartCount");
const totalItems = 
cart.reduce((sum, i) => sum + 
i.qty, 0);
countBadge.hidden = totalItems 
=== 0;
countBadge.textContent = 
totalItems;
countBadge.classList.remove("is-bumping");
void countBadge.offsetWidth;
if (totalItems > 0) countBadge.classList.add("is-bumping");
container.innerHTML = "";
if (cart.length === 0) {
emptyMsg.hidden = false;
footer.hidden = true;
return;
}
emptyMsg.hidden = true;
footer.hidden = false;
let total = 0;
cart.forEach(item => {
const product = 
PRODUCTS.find(p => p.id === 
item.id);
if (!product) return;
const lineTotal = 
product.prix * item.qty;
total += lineTotal;
const row = 
document.createElement("div");
row.className = "cart-item";
row.innerHTML = `
<img src="${product.image}" 
alt="${product.nom[currentLang]}"
>
<div class="cart-item
info">
<div class="cart-item
name">${product.nom[currentLang]}
</div>
<div class="cart-item
meta">x${item.qty} — 
${formatPrice(lineTotal)}</div>
</div>
<button class="cart-item
remove" data
id="${item.id}">${currentLang === 
"fr" ? "Retirer" : "Remove"}
</button>
`;
container.appendChild(row);
});
document.getElementById("cartTotal").textContent = 
formatPrice(total);
container.querySelectorAll(".cart-item-remove").forEach(btn => {
btn.addEventListener("click", 
() => {
cart = cart.filter(i => 
i.id !== 
parseInt(btn.dataset.id));
renderCart();
});
});
updateCartWhatsappLink(total);
}
function 
updateCartWhatsappLink(total) {
const lines = cart.map(item => 
{
const product = 
PRODUCTS.find(p => p.id === 
item.id);
if (!product) return "";
const name = 
product.nom[currentLang];
return `• ${name} 
x${item.qty} — 
${formatPrice(product.prix * 
item.qty)}`;
}).filter(Boolean).join("\n");
const message = currentLang === 
"fr"
? `Bonjour ! Voici ma liste 
de commande 
:\n\n${lines}\n\nTotal : 
${formatPrice(total)}\n\nMerci de 
me confirmer la disponibilité.`
: `Hello! Here's my order 
list:\n\n${lines}\n\nTotal: 
${formatPrice(total)}\n\nCould 
you confirm availability?`;
document.getElementById("cartWhatsappBtn").href =
`https://wa.me/${CONFIG.whatsappNumber}?
text=${encodeURIComponent(message
)}`;
}
document.getElementById("cartToggle").addEventListener("click", () => {
document.getElementById("cartModal").hidden = false;
document.body.style.overflow = 
"hidden";
});
document.getElementById("cartClose").addEventListener("click", 
closeCartModal);
document.getElementById("cartModal").addEventListener("click", (e) => {
if (e.target.id === 
"cartModal") closeCartModal();
});
function closeCartModal() {
document.getElementById("cartModal").hidden = true;
document.body.style.overflow = 
"";
}
/* ------------------------------------------------------------------ *
* 8) DIVERS — communauté 
WhatsApp, partage du site, échap 
pour fermer
* ------------------------------------------------------------------ */
document.getElementById("communityBtn").href = 
CONFIG.whatsappGroupUrl;
document.getElementById("locationBtn").href = CONFIG.locationUrl;
function setupScrollEffects() {
const revealItems = document.querySelectorAll(".product-card, .featured-section, .promotion-card, .why-card, .review-card, .about-inner, .site-footer, .satisfaction-proof");
if (!("IntersectionObserver" in window)) {
revealItems.forEach(item => item.classList.add("is-visible"));
return;
}
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });
revealItems.forEach(item => {
item.classList.add("reveal-on-scroll");
observer.observe(item);
});
const counter = document.getElementById("satisfiedCount");
if (counter) {
const counterObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (!entry.isIntersecting || counter.dataset.counted) return;
counter.dataset.counted = "true";
const target = Number(counter.dataset.target || 200);
const startedAt = performance.now();
const duration = 1100;
const tick = now => {
const progress = Math.min((now - startedAt) / duration, 1);
const eased = 1 - Math.pow(1 - progress, 3);
counter.textContent = `${Math.round(target * eased)}+`;
if (progress < 1) requestAnimationFrame(tick);
};
requestAnimationFrame(tick);
counterObserver.unobserve(counter);
});
});
counterObserver.observe(counter);
}
}
window.addEventListener("scroll", () => {
document.querySelector(".site-header").classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });
document.getElementById("shareBtn").addEventListener("click", 
async () => {
const shareData = {title: "SC SARL",
text: currentLang === "fr" ? 
"Découvre cette brocante en ligne à prix doux !" : "Check out this sweet-priced online thrift shop!",
url: window.location.href
};
try {
if (!await shareWithApi(shareData)) {
openSocialShareMenu(shareData);
}
} catch (err) {
// L'utilisateur a annulé le 
//partage — rien à faire.
}
});
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closeProductModal();
closeCartModal();
}
});
/* ------------------------------------------------------------------ *
* INITIALISATION
* ------------------------------------------------------------------ */
initTheme();
function updateLoaderProgress(value, status) {
const progress = Math.max(0, Math.min(100, value));
const bar = document.getElementById("loaderProgressBar");
const percent = document.getElementById("loaderPercent");
const label = document.getElementById("loaderStatus");
const loader = document.getElementById("siteLoader");
if (!bar || !percent || !label) return;
bar.style.width = `${progress}%`;
percent.textContent = `${progress}%`;
label.textContent = status;
loader?.querySelector("[role='progressbar']")?.setAttribute("aria-valuenow", String(progress));
}
updateLoaderProgress(25, currentLang === "fr" ? "Préparation de la boutique" : "Preparing the shop");
initializeCatalog();
updateLoaderProgress(65, currentLang === "fr" ? "Mise en place de la vitrine" : "Setting up the showcase");
applyTranslations();
setupScrollEffects();
const siteLoader = document.getElementById("siteLoader");
if (siteLoader) {
const finishLoader = () => {
updateLoaderProgress(100, currentLang === "fr" ? "Bienvenue chez SC SARL" : "Welcome to SC SARL");
setTimeout(() => siteLoader.classList.add("is-hidden"), 100);
};
setTimeout(finishLoader, 30);
}
