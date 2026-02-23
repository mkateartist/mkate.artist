(function(){
  const DATA = window.MKATE_DATA || { works: [] };
  const tg = DATA.telegram || "https://t.me/mkate_gallery";

  const el = (id)=>document.getElementById(id);
  const fmtRub = (n)=> (n ? n.toLocaleString("ru-RU") + " ₽" : "—");

  // Telegram links
  ["tgLink","tgLink2","mTg"].forEach(id=>{
    const a = el(id);
    if(a){ a.href = tg; }
  });

  // Mobile menu
  const burger = el("burger");
  const mobileMenu = el("mobileMenu");
  if(burger && mobileMenu){
    burger.addEventListener("click", (e)=>{
      e.preventDefault();
      mobileMenu.style.display = (mobileMenu.style.display === "none" || !mobileMenu.style.display) ? "block" : "none";
    });
    mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=> mobileMenu.style.display="none"));
  }

  // i18n
  const dict = {
    ru:{
      nav_about:"Обо мне",
      nav_portfolio:"Портфолио",
      nav_shop:"Магазин",
      nav_commissions:"На заказ",
      nav_reviews:"Отзывы",
      nav_pricing:"Стоимость",
      nav_delivery:"Доставка и оплата",
      nav_contacts:"Контакты",
      hero_kicker:"Оригинальные работы художника",
      hero_text:"Акварельные пейзажи, море, архитектура и портреты — спокойные сюжеты и воздух в каждом листе.",
      hero_cta_portfolio:"Смотреть портфолио",
      hero_cta_shop:"Перейти в магазин",
      hero_cta_order:"Заказать работу",
      hero_badge:"https://t.me/mkate_gallery",
      about_title:"Обо мне",
      about_kicker:"Художник MKate (Kate Matveeva)",
      about_text:"Я художник, работающий в технике акварели и масляной живописи.\nМои работы — это исследование света, пространства и внутреннего состояния человека.\nЯ ищу в живописи глубину и честность: будь то морской горизонт, архитектура или портрет.\nКартины находятся в частных коллекциях в разных странах мира.\nДля меня живопись — это способ сохранить мгновение и придать ему вечность.",
      about_note:"",
      about_photo:"Место под фото художника",
      portfolio_title:"Портфолио",
      portfolio_kicker:"Фильтруй по темам — открой работу, чтобы увидеть детали.",
      shop_title:"Магазин",
      shop_kicker:"Оригиналы доступны — для заказа напиши в Telegram или через форму.",
      shop_sort_label:"Сортировка",
      shop_sort_newest:"Сначала новые",
      shop_sort_price_desc:"Дороже → дешевле",
      shop_sort_price_asc:"Дешевле → дороже",
      shop_sort_year_desc:"По году (убыв.)",
      pricing_title:"Стоимость",
      pricing_p1_title:"Оригинальная работа",
      pricing_p1_text:"Выбор из готовых работ из портфолио.",
      pricing_p1_li1:"Размер и цена — в карточке работы",
      pricing_p1_li2:"Можно подобрать в интерьер",
      pricing_p1_li3:"Фото/видео перед отправкой",
      pricing_p1_price:"от 6 000 ₽",
      pricing_p2_title:"Работа на заказ",
      pricing_p2_text:"По референсу/идее в моём стиле.",
      pricing_p2_li1:"Согласуем сюжет и размер",
      pricing_p2_li2:"Сроки — индивидуально",
      pricing_p2_li3:"Предоплата по договорённости",
      pricing_p2_price:"по запросу",
      pricing_p3_title:"Оформление в раму",
      pricing_p3_text:"Если нужно “под ключ”.",
      pricing_p3_li1:"Подбор паспарту/рамы",
      pricing_p3_li2:"Фото вариантов перед заказом",
      pricing_p3_li3:"Стоимость зависит от оформления",
      pricing_p3_price:"по запросу",
      delivery_title:"Доставка и оплата",
      delivery_pay_kicker:"Оплата",
      delivery_pay_1:"Перевод / по договорённости",
      delivery_pay_2:"Предоплата для заказных работ 50%",
      delivery_pay_3:"Предоплата для работ из наличии перед отправкой 100%",
      delivery_ship_kicker:"Доставка",
      delivery_ship_1:"Упаковка с защитой углов",
      delivery_ship_2:"По РФ: 350–500 ₽ (в зависимости от размера). Оплата по согласованию",
      delivery_ship_4:"Зарубеж: по запросу",
      delivery_ship_3:"Трек-номер после отправки",
      reviews_title:"Отзывы",
      reviews_sub:"Отзывы клиентов о заказах портретов и картин.",
      reviews_rating_kicker:"Рейтинг на Profi.ru",
      reviews_rating_note:"5 отзывов на Profi.ru",
      reviews_open_profi:"Смотреть отзывы на Profi.ru →",
      reviews_note:"Если страница Profi.ru не открывается в вашем браузере, я могу прислать отзывы в сообщениях — напишите в Telegram.",
      reviews_highlights_kicker:"Коротко о том, что отмечают",
      reviews_h1:"Точное попадание в настроение и цвет.",
      reviews_h2:"Аккуратная работа с деталями и сходством.",
      reviews_h3:"Бережная упаковка и связь на всех этапах.",
      reviews_cta_tg:"Запросить примеры отзывов →",
      contacts_title:"Контакты",
      contacts_kicker:"Быстрее всего — в Telegram",
      contacts_text:"Напиши, какая работа понравилась (номер из карточки) — и я отвечу по наличию/доставке/оформлению.",
      contacts_cta_back:"Вернуться к портфолио",
      contacts_note:"Здесь можно добавить Instagram/сайт/почту.",
      form_kicker:"Форма заявки",
      form_send:"Отправить",
      
      modal_price:"Цена",
      modal_price_note:"Чтобы купить — напиши в Telegram, указав номер работы.",
      modal_write:"Написать в Telegram",
      modal_copy:"Скопировать текст",
      modal_framed:"Фото в раме",
      footer_note:".",
      // placeholders
      form_name:"Имя",
      form_contact:"Telegram / Email",
      form_msg:"Сообщение (например: хочу работу №10, доставка в ...)",
      comm_title:"Картины на заказ",
      comm_lead:"Портреты, картины по фото и книжные иллюстрации. Сроки и детали — обсудим в личных сообщениях.",
      comm_portrait_title:"Портрет на заказ",
      comm_portrait_note:"Акварель или чёрно-белая живопись маслом.\nРабота создаётся по фотографии с сохранением характера и атмосферы образа.",
      comm_20x30:"20×30 см",
      comm_30x40:"30×40 см",
      comm_40x50:"40×50 см",
      comm_50x60:"50×60 см",
      comm_extra_face:"+1 лицо на лист — 7 000 ₽",
      comm_photo_title:"Картина по фото",
      comm_photo_text:"Материал по согласованию.\nСтоимость рассчитывается индивидуально в зависимости от размера и задачи.",
      comm_book_title:"3) Иллюстрации к книге",
      comm_book_text:"Медиум по согласованию, 2D‑изображение.",
      comm_book_price_label:"Цена",
      comm_book_price_value:"6 000 ₽ за изображение",
      comm_cta:"Оставить заявку",

      ach_group_title:"Выставки (коллективные)",
      ach_group_2025_cn:"2025 — 4th Watercolor Exhibition of China‑Russia Cultural Exchange, Beijing (China)",
      ach_group_2024_us:"2024 — Warm Of Canvas (Christmas), Brookline (USA)",
      ach_group_2024_gm:"2024 — Grand Master, Moscow (Russia)",
      ach_group_2024_10th:"2024 — 10th Exhibition of Russian Watercolor Artists, Moscow (Russia)",
      ach_group_2024_tehran:"2024 — “Art And Point” 1st International Annual Watercolor Exhibition, Tehran (Iran)",
      ach_group_2023_raaw:"2023 — RAAW, New York (USA)",
      ach_group_2022_tretyakov:"2022 — Creative Environments, New Tretyakov Gallery, Moscow (Russia)",
      ach_note:"Полный список — на Artmajeur.",
      ach_solo_title:"Персональные выставки",
      ach_solo_2025:"2025 — Watercolor Worlds, Moscow (Russia)",
      ach_solo_2024:"2024 — “Through The Watercolor Window”, June, Moscow (Russia)",
      ach_collections_title:"Постоянные коллекции",
      ach_collections_2022:"2022 — Artsfashion Exhibition, Moscow (Russia)",
      ach_press_title:"Публикации и пресса",
      ach_press_2023_gb:"2023 — Glamour Buff (USA)",
      ach_press_2023_js:"2023 — Just Summer On My Mind, Miami (USA)",
      ach_press_2023_tng:"2023 — The News God (USA)",
      ach_link:"Смотреть профиль Artmajeur →",
      ach_edu_title:"Обучение",
      ach_edu_2024:"2024 — DRY BRUSH, Artlife Academy (Moscow)",
      ach_edu_2022:"2022 — Nudity with Anna Marinova, Artlife Academy (Moscow)",
      ach_custom:"Комиссии (картины на заказ) — доступны.",

    },
    en:{
      nav_about:"About",
      nav_portfolio:"Portfolio",
      nav_shop:"Shop",
      nav_commissions:"Commissions",
      nav_reviews:"Reviews",
      nav_pricing:"Pricing",
      nav_delivery:"Delivery & Payment",
      nav_contacts:"Contacts",
      hero_kicker:"Original artworks by the artist",
      hero_text:"Watercolor landscapes, sea scenes, architecture and portraits — calm stories with plenty of air and light.",
      hero_cta_portfolio:"View portfolio",
      hero_cta_shop:"Open shop",
      hero_cta_order:"Commission / order",
      hero_badge:"https://t.me/mkate_gallery",
      about_title:"About",
      about_kicker:"Artist MKate (Kate Matveeva)",
      about_text:"I’m an artist working in watercolor and oil.\nMy works explore light, space, and a person’s inner state.\nI look for depth and honesty in painting — whether it’s a sea horizon, architecture, or a portrait.\nMy artworks are held in private collections in different countries around the world.\nFor me, painting is a way to preserve a moment and give it a sense of eternity.",
      about_note:"You can replace this with a more personal bio later.",
      about_photo:"Place for artist photo",
      portfolio_title:"Portfolio",
      portfolio_kicker:"Filter by themes — open a piece to see details.",
      shop_title:"Shop",
      shop_kicker:"Originals are available — message me on Telegram or use the form.",
      pricing_title:"Pricing",
      pricing_p1_title:"Original artwork",
      pricing_p1_text:"Choose from available works in the portfolio.",
      pricing_p1_li1:"Size and price are shown on each card",
      pricing_p1_li2:"Help with choosing for your interior",
      pricing_p1_li3:"Photo/video before shipping",
      pricing_p1_price:"from 6,000 RUB",
      pricing_p2_title:"Commission",
      pricing_p2_text:"From your reference/idea in my style.",
      pricing_p2_li1:"We’ll agree on theme and size",
      pricing_p2_li2:"Timeline depends on the request",
      pricing_p2_li3:"Prepayment by agreement",
      pricing_p2_price:"on request",
      pricing_p3_title:"Framing",
      pricing_p3_text:"If you want it “turn‑key”.",
      pricing_p3_li1:"Mat & frame options",
      pricing_p3_li2:"Photos before ordering",
      pricing_p3_li3:"Depends on framing",
      pricing_p3_price:"on request",
      delivery_title:"Delivery & Payment",
      delivery_pay_kicker:"Payment",
      delivery_pay_1:"Перевод / по договорённости",
      delivery_pay_2:"Предоплата для заказных работ 50%",
      delivery_pay_3:"Предоплата для работ из наличии перед отправкой 100%",
      delivery_ship_kicker:"Shipping",
      delivery_ship_1:"Protective packaging (corner protection)",
      delivery_ship_2:"Russia and international shipping — discussable",
      delivery_ship_3:"Tracking number after dispatch",
      reviews_title:"Reviews",
      reviews_sub:"Client feedback on portraits and custom paintings.",
      reviews_rating_kicker:"Rating on Profi.ru",
      reviews_rating_note:"according to Profi.ru",
      reviews_open_profi:"View reviews on Profi.ru →",
      reviews_note:"If Profi.ru doesn’t open in your browser, message me on Telegram — I’ll send the reviews.",
      reviews_highlights_kicker:"What clients mention",
      reviews_h1:"Great sense of mood and color.",
      reviews_h2:"Careful details and likeness.",
      reviews_h3:"Secure packaging and clear communication.",
      reviews_cta_tg:"Request review screenshots →",
      contacts_title:"Contacts",
      contacts_kicker:"Fastest way — Telegram",
      contacts_text:"Tell me which piece you like (its number) — I’ll reply about availability, shipping and framing.",
      contacts_cta_back:"Back to portfolio",
      contacts_note:"Add Instagram / website / email here.",
      form_kicker:"Inquiry form",
      form_send:"Send",
      
      modal_price:"Price",
      modal_price_note:"To buy — message me on Telegram and mention the artwork number.",
      modal_write:"Message on Telegram",
      modal_copy:"Copy message",
      modal_framed:"Framed photo",
      footer_note:"Draft site: easy to expand (SEO, articles, collections).",
      // placeholders
      form_name:"Name",
      form_contact:"Telegram / Email",
      form_msg:"Message (e.g., I’d like artwork #10, shipping to ...)",
      comm_title:"Commissions",
      comm_lead:"Portraits, paintings from photo, and book illustrations. Timing and details — via direct message.",
      comm_portrait_title:"Портрет на заказ",
      comm_portrait_note:"Акварель или чёрно-белая живопись маслом.\nРабота создаётся по фотографии с сохранением характера и атмосферы образа.",
      comm_20x30:"20×30 cm",
      comm_30x40:"30×40 cm",
      comm_40x50:"40×50 cm",
      comm_50x60:"50×60 cm",
      comm_extra_face:"+1 face on the sheet — 7,000 ₽",
      comm_photo_title:"Картина по фото",
      comm_photo_text:"Материал по согласованию.\nСтоимость рассчитывается индивидуально в зависимости от размера и задачи.",
      comm_book_title:"3) Book illustrations",
      comm_book_text:"Medium by agreement, 2D image.",
      comm_book_price_label:"Price",
      comm_book_price_value:"6,000 ₽ per image",
      comm_cta:"Request a commission",

      ach_group_title:"Group exhibitions",
      ach_group_2025_cn:"2025 — 4th Watercolor Exhibition of China‑Russia Cultural Exchange, Beijing (China)",
      ach_group_2024_us:"2024 — Warm Of Canvas (Christmas), Brookline (USA)",
      ach_group_2024_gm:"2024 — Grand Master, Moscow (Russia)",
      ach_group_2024_10th:"2024 — 10th Exhibition of Russian Watercolor Artists, Moscow (Russia)",
      ach_group_2024_tehran:"2024 — “Art And Point” 1st International Annual Watercolor Exhibition, Tehran (Iran)",
      ach_group_2023_raaw:"2023 — RAAW, New York (USA)",
      ach_group_2022_tretyakov:"2022 — Creative Environments, New Tretyakov Gallery, Moscow (Russia)",
      ach_note:"Full list on Artmajeur.",
      ach_solo_title:"Solo exhibitions",
      ach_solo_2025:"2025 — Watercolor Worlds, Moscow (Russia)",
      ach_solo_2024:"2024 — “Through The Watercolor Window”, June, Moscow (Russia)",
      ach_collections_title:"Permanent collections",
      ach_collections_2022:"2022 — Artsfashion Exhibition, Moscow (Russia)",
      ach_press_title:"Publications & press",
      ach_press_2023_gb:"2023 — Glamour Buff (USA)",
      ach_press_2023_js:"2023 — Just Summer On My Mind, Miami (USA)",
      ach_press_2023_tng:"2023 — The News God (USA)",
      ach_link:"Open Artmajeur profile →",
      ach_edu_title:"Education",
      ach_edu_2024:"2024 — DRY BRUSH, Artlife Academy (Moscow)",
      ach_edu_2022:"2022 — Nudity with Anna Marinova, Artlife Academy (Moscow)",
      ach_custom:"Commissions are available.",

    }
  };

  let lang = "ru";

  function t(key){
    return (dict[lang] && dict[lang][key]) || key;
  }

  function applyI18n(){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(node=>{
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(node=>{
      const key = node.getAttribute("data-i18n-placeholder");
      node.setAttribute("placeholder", t(key));
    });
  }

  const langSel = el("lang");
  if(langSel){
    langSel.addEventListener("change", ()=>{
      lang = langSel.value;
      applyI18n();
      renderAll();
    });
  }

  // Filters
  const filtersEl = el("filters");
  const galleryEl = el("gallery");
  const shopFiltersEl = el("shopFilters");
  const shopSortEl = el("shopSort");
  const shopEl = el("shopGrid");

  function uniq(arr){ return [...new Set(arr)]; }

  let activeFilter = "all";
  let activeShopFilter = "all";
  let activeShopSort = "newest";

  function categories(){
    const list = DATA.works.map(w => lang === "ru" ? w.category_ru : w.category_en);
    return uniq(list);
  }

  function renderFilters(){
    if(!filtersEl) return;
    filtersEl.innerHTML = "";

    const allBtn = document.createElement("button");
    allBtn.className = "pill" + (activeFilter==="all" ? " active" : "");
    allBtn.textContent = (lang==="ru") ? "Все" : "All";
    allBtn.addEventListener("click", ()=>{ activeFilter="all"; renderAll(); });
    filtersEl.appendChild(allBtn);

    categories().forEach(cat=>{
      const b=document.createElement("button");
      b.className="pill" + (activeFilter===cat ? " active" : "");
      b.textContent=cat;
      b.addEventListener("click", ()=>{ activeFilter=cat; renderAll(); });
      filtersEl.appendChild(b);
    });
  }

  function workTitle(w){ return lang==="ru" ? w.title_ru : w.title_en; }
  function workMeta(w){
    const size = `${w.size_cm.w}×${w.size_cm.h} cm`;
    const med = lang==="ru" ? w.medium_ru : w.medium_en;
    return `${med} · ${size} · ${w.year}`;
  }
  function workDesc(w){ return lang==="ru" ? w.description_long_ru : w.description_long_en; }
  function catOf(w){ return lang==="ru" ? w.category_ru : w.category_en; }

  function createCard(w){
    const card=document.createElement("div");
    card.className="work";
    const img=document.createElement("img");
    img.loading="lazy";
    img.src=w.images.art;
    img.alt=workTitle(w);
    const meta=document.createElement("div");
    meta.className="meta";

    const title=document.createElement("p");
    title.className="title";
    title.textContent=`#${w.id} — ${workTitle(w)}`;

    const sub=document.createElement("p");
    sub.className="sub";
    sub.textContent=workMeta(w);

    const price=document.createElement("div");
    price.className="price";
    price.textContent=fmtRub(w.price_rub);

    meta.appendChild(title);
    meta.appendChild(sub);

    if(w.has_framed_photo){
      const b=document.createElement("div");
      b.style.marginTop="10px";
      b.innerHTML = `<span class="badge">${lang==="ru" ? "Есть фото в раме" : "Framed photo available"}</span>`;
      meta.appendChild(b);
    }

    meta.appendChild(price);
    card.appendChild(img);
    card.appendChild(meta);

    card.addEventListener("click", ()=>openModal(w));
    return card;
  }

  function renderGallery(){
    if(!galleryEl) return;
    galleryEl.innerHTML="";
    const list = DATA.works
      .filter(w=> activeFilter==="all" ? true : catOf(w)===activeFilter)
      .sort((a,b)=>a.id-b.id);
    list.forEach(w=>galleryEl.appendChild(createCard(w)));
  }

  function renderShopFilters(){
    if(!shopFiltersEl) return;
    shopFiltersEl.innerHTML="";

    const allBtn = document.createElement("button");
    allBtn.className = "pill" + (activeShopFilter==="all" ? " active" : "");
    allBtn.textContent = (lang==="ru") ? "Все" : "All";
    allBtn.addEventListener("click", ()=>{ activeShopFilter="all"; renderShop(); });
    shopFiltersEl.appendChild(allBtn);

    categories().forEach(cat=>{
      const b=document.createElement("button");
      b.className="pill" + (activeShopFilter===cat ? " active" : "");
      b.textContent=cat;
      b.addEventListener("click", ()=>{ activeShopFilter=cat; renderShop(); });
      shopFiltersEl.appendChild(b);
    });
  }

  function parsePrice(w){ return (w.price_rub||0); }

  function sortShop(items){
    const arr=[...items];
    if(activeShopSort==="price_desc") arr.sort((a,b)=>parsePrice(b)-parsePrice(a));
    else if(activeShopSort==="price_asc") arr.sort((a,b)=>parsePrice(a)-parsePrice(b));
    else if(activeShopSort==="year_desc") arr.sort((a,b)=>(b.year||0)-(a.year||0));
    else arr.sort((a,b)=>(b.year||0)-(a.year||0) || parsePrice(b)-parsePrice(a)); // newest
    return arr;
  }

  function renderShop(){
    if(!shopEl) return;
    shopEl.innerHTML="";
    let items = [...DATA.works];
    if(activeShopFilter!=="all"){
      items = items.filter(w=>catOf(w)===activeShopFilter);
    }
    items = sortShop(items);
    items.forEach(w=>shopEl.appendChild(createCard(w)));
  }

/* --- Telegram send (opens chat with prefilled message) --- */
(function () {
  function buildTgMessage(form) {
    const fd = new FormData(form);
    const lines = [];
    for (const [k, v] of fd.entries()) {
      if (!v) continue;
      lines.push(`${k}: ${v}`);
    }
    return lines.join('\n');
  }

  function openTelegram(message) {
    const base = 'https://t.me/mkate_gallery';
    const url = `${base}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  document.addEventListener('submit', function (e) {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;

    // Handle only marked forms to avoid breaking anything else
    if (!form.hasAttribute('data-telegram-form')) return;

    e.preventDefault();
    const message = buildTgMessage(form);

    // Open Telegram with prefilled text
    openTelegram(message);

    // Optional: also copy as convenience (silent)
    if (navigator.clipboard && message) {
      navigator.clipboard.writeText(message).catch(() => {});
    }

    // Simple UI feedback if there's a status node
    const status = form.querySelector('[data-status]');
    if (status) status.textContent = 'Откроется Telegram с готовым сообщением. Если нужно — просто нажмите “Отправить”.';
  }, true);
})();
})();
