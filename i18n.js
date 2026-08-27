const translations = {
  ar: {
    "nav.home":"الرئيسية","nav.about":"من أنا","nav.work":"أعمالي","nav.services":"خدماتي","nav.contact":"تواصل",
    "hero.title":"فهمي<br><em>عمر</em>","hero.lead":"أحوّل الأفكار إلى تجارب بصرية جريئة، وهوية تصميمية تترك أثرًا.","hero.work":"استكشف أعمالي","hero.contact":"ابدأ مشروعًا",
    "home.selected":"أعمال مختارة","home.statement":"ما تراه<br><em>وما تشعر به.</em>","work.brand":"هوية بصرية","work.poster":"ملصق تجريبي","work.social":"حملة رقمية","work.art":"فن بصري","work.logo":"تصميم شعار","work.form":"تكوين بصري",
    "about.title":"من <em>أنا</em>","about.text":"أنا <strong>فهمي عمر</strong>، مصمم جرافيك وفنان بصري شغوف ببناء الهويات، الملصقات، المحتوى الرقمي والتكوينات البصرية.","about.sub":"أهتم بالتفاصيل الصغيرة التي تجعل التصميم واضحًا، مختلفًا، وقابلًا للتذكر.",
    "stats.projects":"مشروعًا","stats.clients":"عميلًا","stats.years":"سنوات إبداع","stats.passion":"شغف",
    "services.title":"خدماتي <em>الإبداعية</em>","services.graphic":"تصاميم إبداعية احترافية للطباعة والمنصات الرقمية.","services.brand":"هويات بصرية متكاملة تمنح العلامة شخصية قوية ومميزة.","services.logo":"شعارات فريدة تعكس شخصية العلامة وتبقى في الذاكرة.","services.social":"محتوى بصري ملفت للحملات والمنصات الاجتماعية.","services.photo":"معالجات وتركيبات فوتوغرافية بأسلوب سينمائي دقيق.","services.art":"أعمال فنية رقمية تجمع بين الفكرة والتفاصيل والخيال.",
    "portfolio.title":"أعمالي <em>الإبداعية</em>","filter.all":"الكل","filter.branding":"هوية","filter.poster":"بوسترات","filter.social":"سوشيال","filter.art":"فن رقمي",
    "contact.title":"لديك فكرة؟<br><em>لنجعلها واقعًا.</em>","contact.text":"أرسل تفاصيل مشروعك وسأتواصل معك لمناقشة الفكرة والخطوات القادمة.","contact.name":"الاسم","contact.email":"البريد الإلكتروني","contact.subject":"موضوع المشروع","contact.message":"اكتب رسالتك","contact.send":"إرسال الرسالة ↗","contact.success":"تم تجهيز الرسالة بنجاح. يمكنك الآن إرسالها من بريدك."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.work":"Work","nav.services":"Services","nav.contact":"Contact",
    "hero.title":"Fahmi<br><em>Omer</em>","hero.lead":"I turn ideas into bold visual experiences and memorable design identities.","hero.work":"Explore My Work","hero.contact":"Start a Project",
    "home.selected":"Selected Work","home.statement":"What you see,<br><em>and what you feel.</em>","work.brand":"Visual Identity","work.poster":"Experimental Poster","work.social":"Digital Campaign","work.art":"Visual Art","work.logo":"Logo Design","work.form":"Visual Composition",
    "about.title":"About <em>Me</em>","about.text":"I’m <strong>Fahmi Omer</strong>, a graphic designer and visual artist passionate about identities, posters, digital content and visual compositions.","about.sub":"I care about the small details that make design clear, distinctive and memorable.",
    "stats.projects":"Projects","stats.clients":"Clients","stats.years":"Creative Years","stats.passion":"Passion",
    "services.title":"Creative <em>Services</em>","services.graphic":"Professional creative designs for print and digital platforms.","services.brand":"Complete visual identities that give brands a strong, distinctive personality.","services.logo":"Unique logos that reflect a brand’s character and stay memorable.","services.social":"Eye-catching visual content for campaigns and social platforms.","services.photo":"Precise cinematic photo manipulation and compositions.","services.art":"Digital artwork combining ideas, details and imagination.",
    "portfolio.title":"Selected <em>Work</em>","filter.all":"All","filter.branding":"Branding","filter.poster":"Posters","filter.social":"Social","filter.art":"Digital Art",
    "contact.title":"Have an idea?<br><em>Let’s make it real.</em>","contact.text":"Send your project details and I’ll get back to discuss the idea and next steps.","contact.name":"Name","contact.email":"Email","contact.subject":"Project subject","contact.message":"Write your message","contact.send":"Send Message ↗","contact.success":"Your message is ready. You can now send it from your email."
  },
  zh: {}, es: {}
};
translations.zh = translations.en; translations.es = translations.en;

function applyLanguage(lang) {
  const t = translations[lang] || translations.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = t[el.dataset.i18nPlaceholder];
    if (value !== undefined) el.placeholder = value;
  });
  localStorage.setItem("site-language", lang);
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang.toUpperCase() + "⌄";
}
window.applyLanguage = applyLanguage;
