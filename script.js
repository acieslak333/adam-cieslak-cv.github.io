/* ===================================================================
   Adam Cieślak — CV  |  i18n (EN/PL) + Save PDF
   =================================================================== */

const I18N = {
  en: {
    'ui.print': 'Save PDF',
    'ui.download': 'Download',
    'ui.pdf': 'PDF document',
    'ui.png': 'PNG image',
    'pub.view': 'View paper',
    'nav.cv': 'Curriculum Vitae',
    'main.skills': 'Skills & Tools',
    'hero.cta': 'Download CV',
    'hero.mt': 'Machine Translation',
    'cta.heading': "Let's work together",
    'cta.button': 'Email me',
    'ui.copied': 'Copied',
    'hero.title': 'AI Engineer',
    'hero.subtitle': 'LLMs · Speech · Diffusion',

    'sidebar.contact': 'Contact',
    'sidebar.programming': 'Programming',
    'sidebar.aiml': 'AI / Machine Learning',
    'sidebar.frameworks': 'Frameworks',
    'sidebar.cloud': 'Cloud & MLOps',
    'sidebar.ondevice': 'On-Device',
    'sidebar.languages': 'Languages',
    'sidebar.certifications': 'Certifications',
    'sidebar.volunteering': 'Volunteering',

    'contact.location': 'Cracow, Poland',
    'lang.english': 'English',  'lang.english.lvl': 'C1',
    'lang.polish': 'Polish',    'lang.polish.lvl': 'Native',
    'lang.japanese': 'Japanese',
    'lang.chinese': 'Chinese',  'lang.chinese.lvl': '(beginner)',
    'cert.nvidia': 'NVIDIA DeepStream — Object Detection & Tracking on Video Streams',
    'volunteering.text': 'Neurodiversity ERG @ Samsung · English tutor @ Anioły Wiedzy · Mentor @ Akademia Przyszłości',

    'main.summary': 'Summary',
    'main.experience': 'Experience',
    'main.publications': 'Publications',
    'main.education': 'Education',

    'summary.text': 'AI Engineer with 4+ years at Samsung R&D Poland delivering production AI in <strong>machine translation (MT)</strong>, <strong>speech processing</strong>, <strong>large language models (LLMs)</strong>, and <strong>generative diffusion</strong>. Co-author of three peer-reviewed publications (<strong>Interspeech</strong> ×2, <strong>ICASSP</strong>). End-to-end ownership of on-device deep learning models shipped to Samsung products. Hands-on with <strong>Llama</strong> fine-tuning, <strong>LoRA</strong>, <strong>RAG</strong>, <strong>Conformer</strong> ASR, and <strong>AWS</strong> MLOps (SageMaker, Kubeflow).',

    'exp.1.title': 'AI Engineer',
    'exp.1.date': 'Apr 2025 — Present',
    'exp.1.b1': 'Own end-to-end lifecycle of on-device <strong>Machine Translation</strong> models (3 language pairs, sub-1B params) shipped to Samsung products.',
    'exp.1.b2': 'Built <strong>AWS SageMaker</strong> training pipelines from scratch; team go-to for SageMaker AI, S3, EC2, EFS. Also train domain classification and end-of-sentence models for TV-subtitle pipelines.',
    'exp.1.b3': 'Lead on-device <strong>real-time generative music research</strong> using MIDI transformers; co-authored ICASSP 2025 work on latent diffusion for speech.',

    'exp.2.title': 'Junior AI Engineer',
    'exp.2.date': 'Apr 2023 — Apr 2025',
    'exp.2.b1': 'Designed and trained <strong>spoof classification</strong> models for voice authentication, reaching production-grade quality on Android benchmarks.',
    'exp.2.b2': 'Co-authored Interspeech 2024 work on <strong>LLM truthfulness</strong> (NL-ITI); experiments achieved <strong>&gt;16% relative MC1 improvement on TruthfulQA</strong> over baseline ITI.',
    'exp.2.b3': 'Fine-tuned 7B/13B <strong>Llama-family LLMs</strong> with <strong>LoRA</strong> (Low-Rank Adaptation) and <strong>RAG</strong> (Retrieval-Augmented Generation) for internal AI assistant demos; built and maintained <strong>AWS Kubeflow</strong> training pipelines.',

    'exp.3.title': 'AI Research Intern — Voice Intelligence',
    'exp.3.date': 'Jul 2022 — Apr 2023',
    'exp.3.b1': 'Trained Voice Command Classification and <strong>Conformer-based</strong> Automatic Speech Recognition (ASR) systems; co-authored Interspeech 2023 publication preparing the multilingual <strong>MOCKS testset</strong> (~50,000 keywords, 5 languages).',

    'exp.4.title': 'MRI Image Correction Developer',
    'exp.4.date': 'Jul 2021 — Dec 2021',
    'exp.4.desc': 'Built Python pipeline for medical DICOM processing; ML and matrix-algebra routines for medical image correction.',

    'pub.contrib': 'My contribution:',
    'pub.1.desc': '— Latent-space diffusion for speech enhancement; multifold inference-speed gains on EARS-WHAM/EARS-Reverb.',
    'pub.1.contrib': 'implementation, experiments, paper review.',
    'pub.2.desc': '— Non-linear probing on LLM attention heads; >16% MC1 on TruthfulQA over baseline ITI without fine-tuning.',
    'pub.2.contrib': 'experiments, paper preparation and review.',
    'pub.3.desc': '— Public testset, ~50,000 keywords, 5 languages.',
    'pub.3.contrib': 'dataset preparation and processing scripts.',

    'edu.1.degree': 'M.Sc. Artificial Intelligence & Data Analysis',
    'edu.2.degree': 'B.Eng. Biomedical Engineering',
    'edu.school': 'AGH University of Science and Technology, Kraków',

    'consent.heading': 'Data Processing Consent',
    'consent.text': 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).'
  },

  pl: {
    'ui.print': 'Zapisz PDF',
    'ui.download': 'Pobierz',
    'ui.pdf': 'Dokument PDF',
    'ui.png': 'Obraz PNG',
    'pub.view': 'Zobacz publikację',
    'nav.cv': 'Życiorys',
    'main.skills': 'Umiejętności i narzędzia',
    'hero.cta': 'Pobierz CV',
    'hero.mt': 'Tłumaczenie maszynowe',
    'cta.heading': 'Współpracujmy',
    'cta.button': 'Napisz do mnie',
    'ui.copied': 'Skopiowano',
    'hero.title': 'Inżynier AI',
    'hero.subtitle': 'LLM · Mowa · Dyfuzja',

    'sidebar.contact': 'Kontakt',
    'sidebar.programming': 'Programowanie',
    'sidebar.aiml': 'AI / Uczenie maszynowe',
    'sidebar.frameworks': 'Frameworki',
    'sidebar.cloud': 'Chmura i MLOps',
    'sidebar.ondevice': 'Na urządzeniu',
    'sidebar.languages': 'Języki',
    'sidebar.certifications': 'Certyfikaty',
    'sidebar.volunteering': 'Wolontariat',

    'contact.location': 'Kraków, Polska',
    'lang.english': 'Angielski', 'lang.english.lvl': 'C1',
    'lang.polish': 'Polski',     'lang.polish.lvl': 'Ojczysty',
    'lang.japanese': 'Japoński',
    'lang.chinese': 'Chiński',   'lang.chinese.lvl': '(podstawowy)',
    'cert.nvidia': 'NVIDIA DeepStream — Detekcja i śledzenie obiektów w strumieniach wideo',
    'volunteering.text': 'Grupa ERG ds. neuroróżnorodności @ Samsung · Korepetytor j. angielskiego @ Anioły Wiedzy · Mentor @ Akademia Przyszłości',

    'main.summary': 'Podsumowanie',
    'main.experience': 'Doświadczenie',
    'main.publications': 'Publikacje',
    'main.education': 'Wykształcenie',

    'summary.text': 'Inżynier AI z ponad 4-letnim doświadczeniem w Samsung R&D Polska, dostarczający produkcyjne rozwiązania AI w obszarach <strong>tłumaczenia maszynowego (MT)</strong>, <strong>przetwarzania mowy</strong>, <strong>dużych modeli językowych (LLM)</strong> oraz <strong>generatywnej dyfuzji</strong>. Współautor trzech recenzowanych publikacji (<strong>Interspeech</strong> ×2, <strong>ICASSP</strong>). Pełna odpowiedzialność za cykl życia modeli głębokiego uczenia działających na urządzeniach i wdrożonych w produktach Samsung. Praktyczne doświadczenie w dostrajaniu <strong>Llama</strong>, <strong>LoRA</strong>, <strong>RAG</strong>, ASR <strong>Conformer</strong> oraz MLOps na <strong>AWS</strong> (SageMaker, Kubeflow).',

    'exp.1.title': 'Inżynier AI',
    'exp.1.date': 'kwi 2025 — obecnie',
    'exp.1.b1': 'Pełna odpowiedzialność za cykl życia modeli <strong>tłumaczenia maszynowego</strong> działających na urządzeniach (3 pary językowe, poniżej 1 mld parametrów) wdrożonych w produktach Samsung.',
    'exp.1.b2': 'Zbudowanie od podstaw potoków treningowych <strong>AWS SageMaker</strong>; osoba pierwszego kontaktu w zespole ds. SageMaker AI, S3, EC2, EFS. Trenowanie modeli klasyfikacji domen i wykrywania końca zdania dla potoków napisów telewizyjnych.',
    'exp.1.b3': 'Prowadzenie <strong>badań nad generatywną muzyką w czasie rzeczywistym</strong> na urządzeniu z użyciem transformerów MIDI; współautorstwo pracy ICASSP 2025 o dyfuzji latentnej dla mowy.',

    'exp.2.title': 'Młodszy inżynier AI',
    'exp.2.date': 'kwi 2023 — kwi 2025',
    'exp.2.b1': 'Zaprojektowanie i wytrenowanie modeli <strong>klasyfikacji spoofingu</strong> dla uwierzytelniania głosowego, osiągających jakość produkcyjną w benchmarkach na Androidzie.',
    'exp.2.b2': 'Współautorstwo pracy Interspeech 2024 o <strong>prawdomówności LLM</strong> (NL-ITI); eksperymenty osiągnęły <strong>ponad 16% względnej poprawy MC1 na TruthfulQA</strong> względem bazowego ITI.',
    'exp.2.b3': 'Dostrajanie modeli <strong>LLM z rodziny Llama</strong> 7B/13B technikami <strong>LoRA</strong> (Low-Rank Adaptation) i <strong>RAG</strong> (Retrieval-Augmented Generation) na potrzeby wewnętrznych demonstratorów asystenta AI; budowa i utrzymanie potoków treningowych <strong>AWS Kubeflow</strong>.',

    'exp.3.title': 'Stażysta badawczy AI — Voice Intelligence',
    'exp.3.date': 'lip 2022 — kwi 2023',
    'exp.3.b1': 'Trenowanie systemów klasyfikacji komend głosowych oraz automatycznego rozpoznawania mowy (ASR) <strong>opartego na Conformerze</strong>; współautorstwo publikacji Interspeech 2023 — przygotowanie wielojęzycznego <strong>zbioru testowego MOCKS</strong> (~50 000 słów kluczowych, 5 języków).',

    'exp.4.title': 'Programista korekcji obrazów MRI',
    'exp.4.date': 'lip 2021 — gru 2021',
    'exp.4.desc': 'Budowa potoku w Pythonie do przetwarzania medycznych plików DICOM; procedury ML i algebry macierzowej do korekcji obrazów medycznych.',

    'pub.contrib': 'Mój wkład:',
    'pub.1.desc': '— Dyfuzja w przestrzeni latentnej do poprawy jakości mowy; wielokrotne przyspieszenie wnioskowania na EARS-WHAM/EARS-Reverb.',
    'pub.1.contrib': 'implementacja, eksperymenty, recenzja pracy.',
    'pub.2.desc': '— Nieliniowe sondowanie głowic uwagi LLM; ponad 16% MC1 na TruthfulQA względem bazowego ITI bez dostrajania.',
    'pub.2.contrib': 'eksperymenty, przygotowanie i recenzja pracy.',
    'pub.3.desc': '— Publiczny zbiór testowy, ~50 000 słów kluczowych, 5 języków.',
    'pub.3.contrib': 'przygotowanie zbioru danych i skrypty przetwarzające.',

    'edu.1.degree': 'mgr inż. Sztuczna inteligencja i analiza danych',
    'edu.2.degree': 'inż. Inżynieria biomedyczna',
    'edu.school': 'Akademia Górniczo-Hutnicza (AGH), Kraków',

    'consent.heading': 'Zgoda na przetwarzanie danych',
    'consent.text': 'Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.U. z 2018 r. poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).'
  }
};

const titles = {
  en: 'Adam Cieślak — AI Engineer · CV',
  pl: 'Adam Cieślak — Inżynier AI · CV'
};

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.documentElement.lang = lang;
  document.title = titles[lang] || document.title;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem('cv-lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Language: stored → browser → default EN
  let initial = 'en';
  try {
    const saved = localStorage.getItem('cv-lang');
    if (saved && I18N[saved]) initial = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('pl')) initial = 'pl';
  } catch (e) {}
  applyLang(initial);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  setupReveal();
  setupDownload();
  setupCopyEmail();

  const heroBtn = document.getElementById('heroDownload');
  if (heroBtn) heroBtn.addEventListener('click', () => runDownload('pdf'));
});

/* ----------------------- Copy email ----------------------- */
function setupCopyEmail() {
  const btn = document.getElementById('copyEmail');
  const pill = document.getElementById('emailPill');
  if (!btn || !pill) return;
  const email = (pill.querySelector('code') || {}).textContent || 'adam.cieslak333@gmail.com';
  const icon = btn.querySelector('i');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email.trim());
    } catch (e) {
      const r = document.createRange(); r.selectNodeContents(pill.querySelector('code'));
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      try { document.execCommand('copy'); } catch (_) {}
      sel.removeAllRanges();
    }
    btn.classList.add('copied');
    if (icon) icon.className = 'fa-solid fa-check';
    const lang = document.documentElement.lang || 'en';
    btn.setAttribute('aria-label', (I18N[lang] && I18N[lang]['ui.copied']) || 'Copied');
    setTimeout(() => {
      btn.classList.remove('copied');
      if (icon) icon.className = 'fa-regular fa-copy';
      btn.setAttribute('aria-label', 'Copy email');
    }, 1600);
  });
}

/* ----------------------- Scroll reveal ----------------------- */
function setupReveal() {
  const els = document.querySelectorAll('.block');
  if (!('IntersectionObserver' in window)) return; // leave fully visible
  els.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

/* ----------------------- Download (PDF / PNG) ----------------------- */
function currentLangCode() {
  return (document.documentElement.lang || 'en').toUpperCase();
}
function fileBase() {
  return 'Adam_Cieslak_CV_' + currentLangCode();
}

async function renderCanvas() {
  const el = document.getElementById('cv');
  // Render at higher resolution for crisp text/icons.
  return html2canvas(el, {
    scale: Math.min(window.devicePixelRatio || 1, 2) * 1.5,
    useCORS: true,
    backgroundColor: '#ffffff',
    windowWidth: el.scrollWidth,
    windowHeight: el.scrollHeight,
    // Render a clean ink-on-white version with all sections revealed (dark tiles flatten to white).
    onclone: (doc) => {
      const c = doc.getElementById('cv');
      if (c) c.classList.add('exporting');
    }
  });
}

function triggerDownload(href, filename) {
  const a = document.createElement('a');
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

async function downloadPNG() {
  const canvas = await renderCanvas();
  await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      triggerDownload(url, fileBase() + '.png');
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      resolve();
    }, 'image/png');
  });
}

async function downloadPDF() {
  const canvas = await renderCanvas();
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const imgData = canvas.toDataURL('image/jpeg', 0.95);
  const imgW = pageW;
  const imgH = (canvas.height * imgW) / canvas.width;

  let heightLeft = imgH;
  pdf.addImage(imgData, 'JPEG', 0, 0, imgW, imgH);
  heightLeft -= pageH;
  while (heightLeft > 0) {
    const position = heightLeft - imgH;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, imgW, imgH);
    heightLeft -= pageH;
  }
  pdf.save(fileBase() + '.pdf');
}

async function runDownload(format) {
  const wrap = document.getElementById('downloadMenu');
  if (wrap && wrap.classList.contains('is-busy')) return;
  // Library availability guard — fall back to print for PDF.
  if (typeof html2canvas === 'undefined' || (format === 'pdf' && !window.jspdf)) {
    window.print();
    return;
  }
  if (wrap) wrap.classList.add('is-busy');
  try {
    if (format === 'png') await downloadPNG();
    else await downloadPDF();
  } catch (err) {
    console.error('Download failed:', err);
    window.print();
  } finally {
    if (wrap) wrap.classList.remove('is-busy');
  }
}

function setupDownload() {
  const wrap = document.getElementById('downloadMenu');
  const main = document.getElementById('dlMain');
  const caret = document.getElementById('dlCaret');
  const menu = document.getElementById('dlMenu');
  if (!wrap || !main || !caret || !menu) return;

  const openMenu = () => { menu.hidden = false; caret.setAttribute('aria-expanded', 'true'); };
  const closeMenu = () => { menu.hidden = true; caret.setAttribute('aria-expanded', 'false'); };

  main.addEventListener('click', () => { closeMenu(); runDownload('pdf'); });
  caret.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.hidden ? openMenu() : closeMenu();
  });
  menu.querySelectorAll('button[data-format]').forEach((b) => {
    b.addEventListener('click', () => { closeMenu(); runDownload(b.dataset.format); });
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
