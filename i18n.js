/* ==========================================================
   i18n.js — English / हिंदी / मराठी
   - UI: static page text   { key: {en, hi, mr} }
   - ITEMS: menu names      { "English name": [hindi, marathi] }
   To fix a translation, just edit the text below.
   ========================================================== */
"use strict";

const UI = {
  title:      { en: "Shree Krishna Ice Cream — A Little Scoop of Happiness",
                hi: "श्री कृष्ण आइसक्रीम — खुशियों का एक छोटा सा स्कूप",
                mr: "श्री कृष्ण आईस्क्रीम — आनंदाचा एक छोटासा स्कूप" },
  metaDesc:   { en: "Shree Krishna Ice Cream — ice cream, matka kulfi, falooda, rabdi, milkshakes and family packs. See our full menu.",
                hi: "श्री कृष्ण आइसक्रीम — आइसक्रीम, मटका कुल्फी, फालूदा, रबड़ी, मिल्कशेक और फैमिली पैक। हमारा पूरा मेन्यू देखें।",
                mr: "श्री कृष्ण आईस्क्रीम — आईस्क्रीम, मटका कुल्फी, फालूदा, रबडी, मिल्कशेक आणि फॅमिली पॅक. आमचा संपूर्ण मेनू पहा." },
  brand1:     { en: "SHREE KRISHNA", hi: "श्री कृष्ण", mr: "श्री कृष्ण" },
  brand2:     { en: "ICE CREAM", hi: "आइसक्रीम", mr: "आईस्क्रीम" },
  nav_home:   { en: "Home", hi: "होम", mr: "होम" },
  nav_menu:   { en: "Our Menu", hi: "हमारा मेन्यू", mr: "आमचा मेनू" },
  nav_about:  { en: "About Us", hi: "हमारे बारे में", mr: "आमच्याबद्दल" },
  nav_contact:{ en: "Contact", hi: "संपर्क", mr: "संपर्क" },
  viewMenu:   { en: "View our menu", hi: "हमारा मेन्यू देखें", mr: "आमचा मेनू पहा" },
  exploreMenu:{ en: "Explore Menu", hi: "मेन्यू देखें", mr: "मेनू पहा" },
  langLabel:  { en: "Language", hi: "भाषा", mr: "भाषा" },
  heroAlt:    { en: "Shree Krishna Ice Cream. A little scoop of happiness. Discover delicious ice creams, kulfis, faloodas and milkshakes.",
                hi: "श्री कृष्ण आइसक्रीम। खुशियों का एक छोटा सा स्कूप। स्वादिष्ट आइसक्रीम, कुल्फी, फालूदा और मिल्कशेक खोजें।",
                mr: "श्री कृष्ण आईस्क्रीम. आनंदाचा एक छोटासा स्कूप. स्वादिष्ट आईस्क्रीम, कुल्फी, फालूदा आणि मिल्कशेक शोधा." },
  menuH:      { en: "Our Menu", hi: "हमारा मेन्यू", mr: "आमचा मेनू" },
  menuSub:    { en: "A flavour for every mood. All prices in ₹.",
                hi: "हर मूड के लिए एक स्वाद। सभी कीमतें ₹ में।",
                mr: "प्रत्येक मूडसाठी एक चव. सर्व किमती ₹ मध्ये." },
  aboutH:     { en: "Sweet Moments, Made Better.", hi: "मीठे पल, और भी बेहतर।", mr: "गोड क्षण, आणखी खास." },
  aboutP:     { en: "At Shree Krishna Ice Cream, we believe happiness comes in scoops. From timeless ice cream flavours and Rajasthani matka kulfi to rich rabdi falooda and thick milkshakes, everything is made to bring a little sweetness to your day.",
                hi: "श्री कृष्ण आइसक्रीम में हम मानते हैं कि खुशियाँ स्कूप में आती हैं। पारंपरिक आइसक्रीम फ्लेवर और राजस्थानी मटका कुल्फी से लेकर गाढ़ी रबड़ी फालूदा और मलाईदार मिल्कशेक तक, हर चीज़ आपके दिन में थोड़ी मिठास घोलने के लिए बनाई गई है।",
                mr: "श्री कृष्ण आईस्क्रीममध्ये आमचा विश्वास आहे की आनंद स्कूपमध्ये मिळतो. पारंपरिक आईस्क्रीम फ्लेवर आणि राजस्थानी मटका कुल्फीपासून ते घट्ट रबडी फालूदा आणि दाट मिल्कशेकपर्यंत, प्रत्येक पदार्थ तुमच्या दिवसात थोडा गोडवा आणण्यासाठी बनवला आहे." },
  footerTag:  { en: "Making life a little sweeter.", hi: "ज़िंदगी को थोड़ा और मीठा बनाते हुए।", mr: "आयुष्य थोडं अधिक गोड करताना." },
  explore:    { en: "Explore", hi: "एक्सप्लोर करें", mr: "एक्सप्लोर करा" },
  visit:      { en: "Visit Us", hi: "हमसे मिलें", mr: "भेट द्या" },
  touch:      { en: "Get in Touch", hi: "संपर्क करें", mr: "संपर्कात रहा" },
  rights:     { en: "Shree Krishna Ice Cream. All rights reserved.",
                hi: "श्री कृष्ण आइसक्रीम। सर्वाधिकार सुरक्षित।",
                mr: "श्री कृष्ण आईस्क्रीम. सर्व हक्क राखीव." },
  /* menu table labels */
  col_item:   { en: "Item", hi: "वस्तु", mr: "पदार्थ" },
  col_Half:   { en: "Half", hi: "हाफ", mr: "हाफ" },
  col_Full:   { en: "Full", hi: "फुल", mr: "फुल" },
  col_Price:  { en: "Price", hi: "कीमत", mr: "किंमत" },
  from:       { en: "from {p}", hi: "{p} से", mr: "{p} पासून" }
};

const ITEMS = {
  /* section titles / tabs / highlights */
  "Ice Cream": ["आइसक्रीम", "आईस्क्रीम"],
  "Matka Kulfi": ["मटका कुल्फी", "मटका कुल्फी"],
  "Special Rajasthani Matka Kulfi": ["स्पेशल राजस्थानी मटका कुल्फी", "स्पेशल राजस्थानी मटका कुल्फी"],
  "Falooda Shakes": ["फालूदा शेक", "फालूदा शेक"],
  "Falooda Shake": ["फालूदा शेक", "फालूदा शेक"],
  "Rabdi Falooda": ["रबड़ी फालूदा", "रबडी फालूदा"],
  "Milkshakes": ["मिल्कशेक", "मिल्कशेक"],
  "Family Packs": ["फैमिली पैक", "फॅमिली पॅक"],
  "Special Items": ["स्पेशल आइटम", "स्पेशल आयटम"],
  "Milkshake — Per Litre": ["मिल्कशेक — प्रति लीटर", "मिल्कशेक — प्रति लिटर"],

  /* ice cream */
  "Mix Cone": ["मिक्स कोन", "मिक्स कोन"],
  "Chocolate": ["चॉकलेट", "चॉकलेट"],
  "Mango": ["मैंगो", "मँगो"],
  "Strawberry": ["स्ट्रॉबेरी", "स्ट्रॉबेरी"],
  "Butterscotch": ["बटरस्कॉच", "बटरस्कॉच"],
  "Kaju Anjeer": ["काजू अंजीर", "काजू अंजीर"],
  "Cashew & Fig": ["काजू और अंजीर", "काजू आणि अंजीर"],
  "Kesar Pista": ["केसर पिस्ता", "केशर पिस्ता"],
  "Saffron & Pistachio": ["केसर और पिस्ता", "केशर आणि पिस्ता"],
  "Kaju Draksh": ["काजू द्राक्ष", "काजू द्राक्ष"],
  "Cashew & Raisins": ["काजू और किशमिश", "काजू आणि मनुका"],
  "Rajbhog": ["राजभोग", "राजभोग"],
  "Chhappan Bhog": ["छप्पन भोग", "छप्पन भोग"],
  "Green Pista": ["ग्रीन पिस्ता", "ग्रीन पिस्ता"],
  "Badam Pista": ["बादाम पिस्ता", "बदाम पिस्ता"],
  "Almond & Pistachio": ["बादाम और पिस्ता", "बदाम आणि पिस्ता"],
  "Shahi Gulab": ["शाही गुलाब", "शाही गुलाब"],
  "Royal Rose": ["रॉयल रोज़", "रॉयल रोझ"],
  "Sitaphal": ["सीताफल", "सीताफळ"],
  "Custard Apple": ["शरीफ़ा", "कस्टर्ड ॲपल"],
  "American Dry Fruit": ["अमेरिकन ड्राई फ्रूट", "अमेरिकन ड्राय फ्रूट"],
  "Sugar-Free": ["शुगर-फ्री", "शुगर-फ्री"],

  /* kulfi */
  "Kesar Kulfi": ["केसर कुल्फी", "केशर कुल्फी"],
  "Pista Kulfi": ["पिस्ता कुल्फी", "पिस्ता कुल्फी"],
  "Rajbhog Kulfi": ["राजभोग कुल्फी", "राजभोग कुल्फी"],
  "Malai Kulfi": ["मलाई कुल्फी", "मलाई कुल्फी"],
  "Mango Kulfi": ["मैंगो कुल्फी", "मँगो कुल्फी"],
  "Rabdi Kulfi": ["रबड़ी कुल्फी", "रबडी कुल्फी"],

  /* falooda shakes */
  "Fruit Salad": ["फ्रूट सलाद", "फ्रूट सॅलड"],
  "Rose Falooda": ["रोज़ फालूदा", "रोझ फालूदा"],
  "Kesar Falooda": ["केसर फालूदा", "केशर फालूदा"],
  "Kaju Cold Coffee": ["काजू कोल्ड कॉफी", "काजू कोल्ड कॉफी"],
  "Pineapple Falooda": ["पाइनएप्पल फालूदा", "पायनॅपल फालूदा"],
  "Mango Falooda": ["मैंगो फालूदा", "मँगो फालूदा"],
  "Anjeer Falooda": ["अंजीर फालूदा", "अंजीर फालूदा"],
  "Fig": ["अंजीर", "अंजीर"],
  "Strawberry Falooda": ["स्ट्रॉबेरी फालूदा", "स्ट्रॉबेरी फालूदा"],
  "Chocolate Falooda": ["चॉकलेट फालूदा", "चॉकलेट फालूदा"],
  "Special Fruit Salad": ["स्पेशल फ्रूट सलाद", "स्पेशल फ्रूट सॅलड"],
  "Badam Shake": ["बादाम शेक", "बदाम शेक"],
  "Almond": ["बादाम", "बदाम"],
  "Kaju Anjeer Shake": ["काजू अंजीर शेक", "काजू अंजीर शेक"],
  "Mix Fruit Falooda": ["मिक्स फ्रूट फालूदा", "मिक्स फ्रूट फालूदा"],
  "Sitaphal Falooda": ["सीताफल फालूदा", "सीताफळ फालूदा"],
  "Butterscotch Falooda": ["बटरस्कॉच फालूदा", "बटरस्कॉच फालूदा"],
  "Pista Falooda": ["पिस्ता फालूदा", "पिस्ता फालूदा"],
  "Falooda Ice Cream": ["फालूदा आइसक्रीम", "फालूदा आईस्क्रीम"],
  "Kulfi Falooda": ["कुल्फी फालूदा", "कुल्फी फालूदा"],
  "Krishna Special Falooda": ["कृष्णा स्पेशल फालूदा", "कृष्णा स्पेशल फालूदा"],
  "Rajbhog Falooda": ["राजभोग फालूदा", "राजभोग फालूदा"],
  "Special Mawa Falooda": ["स्पेशल मावा फालूदा", "स्पेशल मावा फालूदा"],

  /* rabdi falooda */
  "Special Rabdi Rose Falooda": ["स्पेशल रबड़ी रोज़ फालूदा", "स्पेशल रबडी रोझ फालूदा"],
  "Special Rabdi Kesar Falooda": ["स्पेशल रबड़ी केसर फालूदा", "स्पेशल रबडी केशर फालूदा"],
  "Special Rabdi Pista Falooda": ["स्पेशल रबड़ी पिस्ता फालूदा", "स्पेशल रबडी पिस्ता फालूदा"],
  "Special Rabdi Sitaphal Falooda": ["स्पेशल रबड़ी सीताफल फालूदा", "स्पेशल रबडी सीताफळ फालूदा"],
  "Special Rabdi Butterscotch Falooda": ["स्पेशल रबड़ी बटरस्कॉच फालूदा", "स्पेशल रबडी बटरस्कॉच फालूदा"],
  "Special Rabdi Mango Falooda": ["स्पेशल रबड़ी मैंगो फालूदा", "स्पेशल रबडी मँगो फालूदा"],
  "Special Rabdi Falooda": ["स्पेशल रबड़ी फालूदा", "स्पेशल रबडी फालूदा"],
  "Matka Special Rabdi": ["मटका स्पेशल रबड़ी", "मटका स्पेशल रबडी"],
  "Special Malai Rabdi": ["स्पेशल मलाई रबड़ी", "स्पेशल मलाई रबडी"],
  "Matka Rabdi Kulfi": ["मटका रबड़ी कुल्फी", "मटका रबडी कुल्फी"],

  /* milkshakes */
  "Chocolate Milkshake": ["चॉकलेट मिल्कशेक", "चॉकलेट मिल्कशेक"],
  "Butterscotch Milkshake": ["बटरस्कॉच मिल्कशेक", "बटरस्कॉच मिल्कशेक"],
  "Rose Milkshake": ["रोज़ मिल्कशेक", "रोझ मिल्कशेक"],
  "Pista Milkshake": ["पिस्ता मिल्कशेक", "पिस्ता मिल्कशेक"],
  "Strawberry Milkshake": ["स्ट्रॉबेरी मिल्कशेक", "स्ट्रॉबेरी मिल्कशेक"],
  "Pineapple Milkshake": ["पाइनएप्पल मिल्कशेक", "पायनॅपल मिल्कशेक"],
  "Kesar Milkshake": ["केसर मिल्कशेक", "केशर मिल्कशेक"],
  "Blackcurrant Milkshake": ["ब्लैककरंट मिल्कशेक", "ब्लॅककरंट मिल्कशेक"],
  "Kaju Cold Cocoa": ["काजू कोल्ड कोको", "काजू कोल्ड कोको"],

  /* family packs */
  "250 gm": ["250 ग्राम", "250 ग्रॅम"],
  "500 gm": ["500 ग्राम", "500 ग्रॅम"],
  "1000 gm (1 kg)": ["1000 ग्राम (1 किलो)", "1000 ग्रॅम (1 किलो)"],
  "Krishna Special Mix Ice Cream": ["कृष्णा स्पेशल मिक्स आइसक्रीम", "कृष्णा स्पेशल मिक्स आईस्क्रीम"],
  "Krishna Special Mix Rabdi Ice Cream": ["कृष्णा स्पेशल मिक्स रबड़ी आइसक्रीम", "कृष्णा स्पेशल मिक्स रबडी आईस्क्रीम"]
};

const I18N = {
  lang: "en",
  t(key, vars) {
    const e = UI[key];
    let s = e ? (e[this.lang] || e.en) : key;
    if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  },
  item(name) {
    if (this.lang === "en") return name;
    const e = ITEMS[name];
    return e ? e[this.lang === "hi" ? 0 : 1] : name;
  },
  set(lang) {
    if (!UI.title[lang]) lang = "en";
    this.lang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = this.t(el.dataset.t); });
    /* attributes:  data-ta="alt:heroAlt;aria-label:viewMenu" */
    document.querySelectorAll("[data-ta]").forEach((el) => {
      el.dataset.ta.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr, this.t(key));
      });
    });
    document.title = this.t("title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", this.t("metaDesc"));
    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;

    document.dispatchEvent(new CustomEvent("langchange"));
  }
};

/* ---------- start-up: the picker shows every time the page is opened ---------- */
(function () {
  const root = document.documentElement;
  const overlay = document.getElementById("lang-overlay");
  const sel = document.getElementById("langSelect");

  root.classList.remove("lang-set");   // make sure the picker is showing
  I18N.set("en");

  overlay.querySelectorAll("button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      I18N.set(btn.dataset.lang);
      root.classList.add("lang-set");
    });
  });
  sel.addEventListener("change", () => I18N.set(sel.value));

  overlay.querySelector("button").focus();
})();
