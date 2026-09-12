/* AXIA Business Solutions — nav, language switching, reveals, project diagram. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* scroll progress bar */
  var progress = document.getElementById("scroll-progress");
  if (progress) {
    window.addEventListener("scroll", function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    }, { passive: true });
  }

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- language switching (EN / 中文 / BM) ---------- */
  var dict = {
    en: {
      nav_about: "About", nav_port: "Port Solutions", nav_supply: "Supply Chain", nav_consult: "Consultancy", nav_partners: "Partners", nav_cta: "Contact us",
      hero_eyebrow: "AXIA BUSINESS SOLUTIONS — WIRELESS & DATA INFRASTRUCTURE",
      hero_sub: "We design, install and maintain wireless and data infrastructure for ports and warehouses across Malaysia. One team, from site survey to support.",
      marq1: "Port Solutions", marq2: "Outdoor Wireless", marq3: "Warehouse Management", marq4: "Supply Chain", marq5: "IT Consultancy", marq6: "Device Repair", marq7: "Preventive Maintenance",
      about_num: "01 — About us", about_title: "About AXIA <em>Business Solutions.</em>",
      about_intro: "AXIA is a pool of enterprise IT specialists serving ports and industrial sites. We design the system, install the hardware, and stay on for support — <b>you deal with one vendor, not five.</b>",
      about_b1_t: "What we do", about_b1_p: "Fixed and wireless networks, business applications, device deployment and system integration — designed, installed and supported by our own engineers.",
      about_b2_t: "One vendor, start to finish", about_b2_p: "Project management, system design, testing, training and support all sit with us. You get a complete solution and a single point of responsibility.",
      about_b3_t: "Port-floor experience", about_b3_p: "Our engineers know the port working environment, so our designs are practical rather than theoretical. That includes rolling out WiFi handheld terminals across live operations.",
      port_num: "03 — Port solutions", port_title: "Port <em>solutions.</em>",
      port_1_t: "Site survey, before &amp; after", port_1_p: "We survey the site before we design anything, and again after handover — to confirm coverage and catch what can be improved.",
      port_2_t: "Pole installation", port_2_p: "We advise on pole type and placement based on your site and the work, then install it. Placement decides coverage.",
      port_3_t: "Cabling design", port_3_p: "Organised cabling keeps systems running, cuts infrastructure cost, and makes troubleshooting faster when something goes down.",
      supply_num: "04 — Supply chain", supply_title: "Supply chain <em>solutions.</em>",
      supply_1_l: "Solution / 01", supply_1_t: "Warehouse management (WMS)", supply_1_p: "A WMS keeps inventory organised and productivity measurable. We help you choose it, deploy it, and get your staff using it.",
      supply_2_l: "Solution / 02", supply_2_t: "Hardware &amp; software", supply_2_p: "We recommend devices and software that fit your tasks, budget and working environment — then support your team until the new tools feel normal.",
      consult_num: "05 — IT consultancy", consult_title: "IT <em>consultancy.</em>",
      consult_1_l: "Service / 01", consult_1_t: "Design, project management &amp; installation", consult_1_p: "We review your operation, advise what is worth improving, then manage and install the project end to end.",
      consult_2_l: "Service / 02", consult_2_t: "Maintenance support", consult_2_p: "On-site support for disruptions and hardware failures, with preventive visits through the year to catch problems before they cost you.",
      repair_num: "06 — Repair services", repair_title: "Repair <em>services.</em>",
      repair_1_l: "Repair / handheld", repair_1_t: "Handheld device repair", repair_1_p: "Workshop repairs for handheld terminals, including:",
      repair_2_l: "Repair / mounted", repair_2_t: "Mounted device repair", repair_2_p: "We also repair vehicle-mounted terminals, including:",
      maint_num: "07 — Maintenance", maint_title: "Preventive &amp; <em>corrective.</em>",
      maint_1_l: "Preventive", maint_1_t: "Scheduled preventive maintenance", maint_1_p: "Every project we deliver gets scheduled preventive maintenance — the frequency depends on its size. We check every deployed device and report what we find.",
      maint_2_l: "Corrective", maint_2_t: "Corrective maintenance", maint_2_p: "When signal interference or weak coverage shows up, we find the root cause, fix it, and monitor to make sure it stays fixed.",
      part_num: "08 — Partners", part_title: "Our <em>partners.</em>",
      contact_num: "09 — Contact", contact_title: "Contact <em>us.</em>",
      contact_text: "Tell us about your <b>site</b>, your <b>warehouse</b> or the device that keeps failing. We will tell you honestly whether we can help — and what it will take.",
      contact_btn: "Send an email", contact_off_l: "Office", contact_em_l: "Email", contact_ph_l: "Phone",
      foot_tag: "Wireless and data infrastructure for ports and warehouses — designed, installed and supported by one team.",
      foot_h_services: "Services", foot_h_partners: "Partners", foot_h_contact: "Contact",
      foot_c: "© AXIA BUSINESS SOLUTIONS — ALL RIGHTS RESERVED"
    },
    zh: {
      nav_about: "关于我们", nav_port: "港口方案", nav_supply: "供应链", nav_consult: "IT 顾问", nav_partners: "合作伙伴", nav_cta: "联系我们",
      hero_eyebrow: "AXIA BUSINESS SOLUTIONS — 无线与数据基础设施",
      hero_sub: "我们为马来西亚各地的港口与仓库设计、安装及维护无线与数据基础设施。从现场勘察到售后支持，一个团队负责到底。",
      marq1: "港口方案", marq2: "户外无线", marq3: "仓库管理", marq4: "供应链", marq5: "IT 顾问", marq6: "设备维修", marq7: "预防性维护",
      about_num: "01 — 关于我们", about_title: "关于 AXIA <em>Business Solutions。</em>",
      about_intro: "AXIA 是一支服务港口与工业场地的企业 IT 专家团队。我们负责系统设计、硬件安装与售后支持——<b>您只需对接一家供应商，而不是五家。</b>",
      about_b1_t: "我们的业务", about_b1_p: "固网与无线网络、商业应用系统、设备部署与系统集成——全部由我们自己的工程师设计、安装和维护。",
      about_b2_t: "一家负责到底", about_b2_p: "项目管理、系统设计、测试、培训与售后支持全部由我们承担。您获得的是完整方案，以及唯一的责任方。",
      about_b3_t: "港口现场经验", about_b3_p: "我们的工程师熟悉港口作业环境，方案务实、不纸上谈兵——包括在运营现场部署 WiFi 手持终端。",
      port_num: "03 — 港口方案", port_title: "港口<em>方案。</em>",
      port_1_t: "前后期站点勘察", port_1_p: "设计之前先勘察现场，交付之后再勘察一次——确认覆盖范围，找出可以改进的地方。",
      port_2_t: "杆件安装", port_2_p: "根据场地与作业需求建议杆件类型与安装位置，并负责安装。位置决定覆盖效果。",
      port_3_t: "综合布线设计", port_3_p: "规范的布线让系统稳定运行、降低基础设施成本，故障时也更容易排查。",
      supply_num: "04 — 供应链", supply_title: "供应链<em>方案。</em>",
      supply_1_l: "方案 / 01", supply_1_t: "仓库管理系统 (WMS)", supply_1_p: "WMS 让库存井井有条、效率有据可查。我们帮您选型、部署，并让员工真正用起来。",
      supply_2_l: "方案 / 02", supply_2_t: "软硬件基础设施", supply_2_p: "根据您的作业、预算与环境推荐合适的软硬件，并支持团队直到新工具上手顺畅。",
      consult_num: "05 — IT 顾问", consult_title: "IT <em>顾问。</em>",
      consult_1_l: "服务 / 01", consult_1_t: "设计、项目管理与安装", consult_1_p: "我们先了解您的作业流程，提出值得改进之处，然后端到端地管理与完成整个项目。",
      consult_2_l: "服务 / 02", consult_2_t: "维护支持", consult_2_p: "遇到故障或硬件问题时提供现场支持，并全年安排预防性巡检，把问题挡在发生之前。",
      repair_num: "06 — 维修服务", repair_title: "维修<em>服务。</em>",
      repair_1_l: "维修 / 手持终端", repair_1_t: "手持设备维修", repair_1_p: "手持终端维修，包括：",
      repair_2_l: "维修 / 车载终端", repair_2_t: "车载设备维修", repair_2_p: "我们也维修车载终端，包括：",
      maint_num: "07 — 维护", maint_title: "预防性与<em>纠正性。</em>",
      maint_1_l: "预防性", maint_1_t: "定期预防性维护", maint_1_p: "我们交付的每个项目都享有定期预防性维护，频次视项目规模而定。我们检查每一台在用设备，并如实报告结果。",
      maint_2_l: "纠正性", maint_2_t: "纠正性维护", maint_2_p: "出现信号干扰或覆盖不足时，我们先找根本原因，修复后再持续监测，确保问题不再出现。",
      part_num: "08 — 合作伙伴", part_title: "我们的<em>合作伙伴。</em>",
      contact_num: "09 — 联系我们", contact_title: "联系<em>我们。</em>",
      contact_text: "告诉我们您的<b>场地</b>、<b>仓库</b>，或那台总出问题的设备。我们会如实告诉您能否帮上忙，以及需要什么。",
      contact_btn: "发送邮件", contact_off_l: "办公室", contact_em_l: "邮箱", contact_ph_l: "电话",
      foot_tag: "面向港口与仓库的无线与数据基础设施——一个团队负责设计、安装与支持。",
      foot_h_services: "服务", foot_h_partners: "合作伙伴", foot_h_contact: "联系",
      foot_c: "© AXIA BUSINESS SOLUTIONS — 版权所有"
    },
    ms: {
      nav_about: "Tentang Kami", nav_port: "Penyelesaian Pelabuhan", nav_supply: "Rantai Bekalan", nav_consult: "Perundingan IT", nav_partners: "Rakan Kongsi", nav_cta: "Hubungi kami",
      hero_eyebrow: "AXIA BUSINESS SOLUTIONS — INFRASTRUKTUR WAYARLES & DATA",
      hero_sub: "Kami mereka bentuk, memasang dan menyelenggara infrastruktur wayarles dan data untuk pelabuhan dan gudang di seluruh Malaysia. Satu pasukan, dari tinjauan tapak hingga sokongan.",
      marq1: "Penyelesaian Pelabuhan", marq2: "Wayarles Luar", marq3: "Pengurusan Gudang", marq4: "Rantai Bekalan", marq5: "Perundingan IT", marq6: "Pembaikan Peralatan", marq7: "Penyelenggaraan Pencegahan",
      about_num: "01 — Tentang kami", about_title: "Tentang AXIA <em>Business Solutions.</em>",
      about_intro: "AXIA ialah kumpulan pakar IT perusahaan yang berkhidmat untuk pelabuhan dan kawasan industri. Kami mereka bentuk sistem, memasang perkakasan, dan kekal untuk sokongan — <b>anda hanya berurusan dengan satu vendor, bukan lima.</b>",
      about_b1_t: "Apa yang kami lakukan", about_b1_p: "Rangkaian wayarles dan tetap, aplikasi perniagaan, pelaksanaan peranti dan integrasi sistem — direka, dipasang dan disokong oleh jurutera kami sendiri.",
      about_b2_t: "Satu vendor, dari mula hingga akhir", about_b2_p: "Pengurusan projek, reka bentuk sistem, ujian, latihan dan sokongan semuanya di bawah tanggungjawab kami. Anda mendapat penyelesaian lengkap dan satu titik rujukan.",
      about_b3_t: "Pengalaman lapangan pelabuhan", about_b3_p: "Jurutera kami memahami persekitaran kerja pelabuhan, jadi reka bentuk kami praktikal. Ini termasuk pelaksanaan terminal pegang tangan WiFi di operasi sebenar.",
      port_num: "03 — Penyelesaian pelabuhan", port_title: "Penyelesaian <em>pelabuhan.</em>",
      port_1_t: "Tinjauan tapak, sebelum & selepas", port_1_p: "Kami tinjau tapak sebelum mereka bentuk apa-apa, dan sekali lagi selepas penyerahan — untuk sahkan liputan dan kenal pasti penambahbaikan.",
      port_2_t: "Pemasangan tiang", port_2_p: "Kami nasihatkan jenis dan lokasi tiang berdasarkan tapak dan kerja anda, kemudian memasangnya. Lokasi menentukan liputan.",
      port_3_t: "Reka bentuk kabel", port_3_p: "Kabel yang tersusun memastikan sistem berjalan, mengurangkan kos, dan memudahkan pengesanan masalah.",
      supply_num: "04 — Rantai bekalan", supply_title: "Penyelesaian <em>rantai bekalan.</em>",
      supply_1_l: "Penyelesaian / 01", supply_1_t: "Pengurusan gudang (WMS)", supply_1_p: "WMS menyusun inventori dan menjadikan produktiviti boleh diukur. Kami bantu anda pilih, laksana dan latih pasukan anda.",
      supply_2_l: "Penyelesaian / 02", supply_2_t: "Perkakasan &amp; perisian", supply_2_p: "Kami cadangkan peranti dan perisian yang sesuai dengan tugas, bajet dan persekitaran kerja anda — kemudian sokong pasukan anda sehingga selesa.",
      consult_num: "05 — Perundingan IT", consult_title: "Perundingan <em>IT.</em>",
      consult_1_l: "Perkhidmatan / 01", consult_1_t: "Reka bentuk, pengurusan projek &amp; pemasangan", consult_1_p: "Kami semak operasi anda, cadangkan apa yang berbaloi diperbaiki, kemudian urus dan pasang projek dari mula hingga akhir.",
      consult_2_l: "Perkhidmatan / 02", consult_2_t: "Sokongan penyelenggaraan", consult_2_p: "Sokongan di tapak bagi gangguan dan kerosakan perkakasan, dengan lawatan pencegahan sepanjang tahun.",
      repair_num: "06 — Perkhidmatan pembaikan", repair_title: "Pembaikan <em>peralatan.</em>",
      repair_1_l: "Pembaikan / pegang tangan", repair_1_t: "Pembaikan peranti pegang tangan", repair_1_p: "Pembaikan bengkel untuk terminal pegang tangan, termasuk:",
      repair_2_l: "Pembaikan / dipasang", repair_2_t: "Pembaikan peranti terpasang", repair_2_p: "Kami juga membaiki terminal kenderaan, termasuk:",
      maint_num: "07 — Penyelenggaraan", maint_title: "Pencegahan &amp; <em>pembetulan.</em>",
      maint_1_l: "Pencegahan", maint_1_t: "Penyelenggaraan pencegahan berjadual", maint_1_p: "Setiap projek yang kami serahkan mendapat penyelenggaraan pencegahan berjadual — kekerapan bergantung pada saiz projek. Kami semak setiap peranti dan laporkan penemuan.",
      maint_2_l: "Pembetulan", maint_2_t: "Penyelenggaraan pembetulan", maint_2_p: "Apabila gangguan isyarat atau liputan lemah berlaku, kami cari punca, baiki, dan pantau untuk pastikan ia tidak berulang.",
      part_num: "08 — Rakan kongsi", part_title: "<em>Rakan kongsi</em> kami.",
      contact_num: "09 — Hubungi", contact_title: "Hubungi <em>kami.</em>",
      contact_text: "Beritahu kami tentang <b>tapak</b>, <b>gudang</b> atau peranti yang selalu rosak. Kami akan beritahu dengan jujur sama ada kami dapat membantu.",
      contact_btn: "Hantar emel", contact_off_l: "Pejabat", contact_em_l: "Emel", contact_ph_l: "Telefon",
      foot_tag: "Infrastruktur wayarles dan data untuk pelabuhan dan gudang — direka, dipasang dan disokong oleh satu pasukan.",
      foot_h_services: "Perkhidmatan", foot_h_partners: "Rakan Kongsi", foot_h_contact: "Hubungi",
      foot_c: "© AXIA BUSINESS SOLUTIONS — HAK CIPTA TERPELIHARA"
    }
  };

  var langBtns = document.querySelectorAll(".lang-btn");
  function setLanguage(lang) {
    var strings = dict[lang];
    if (!strings) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) el.innerHTML = strings[key];
    });
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh" : lang === "ms" ? "ms" : "en");
    langBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("axia-lang", lang); } catch (e) {}
  }
  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.getAttribute("data-lang")); });
  });
  var saved = null;
  try { saved = localStorage.getItem("axia-lang"); } catch (e) {}
  if (saved && saved !== "en") setLanguage(saved);

  /* ---------- entrance choreography + sweep fallback ---------- */
  var revealEls = document.querySelectorAll(".rv");
  function revealAll() {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    var diagram = document.querySelector(".how__svg");
    if (diagram) diagram.classList.add("drawn");
  }
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealAll();
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = Number(el.dataset.delay || 0);
          window.setTimeout(function () { el.classList.add("in"); }, delay);
          io.unobserve(el);
        });
      }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
      window.setTimeout(revealAll, 2800);
    }
  }

  /* the project diagram draws itself when it scrolls into view */
  var diagram = document.querySelector(".how__svg");
  if (diagram && "IntersectionObserver" in window && !reduceMotion) {
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { diagram.classList.add("drawn"); dio.unobserve(diagram); }
      });
    }, { threshold: 0.35 });
    dio.observe(diagram);
  } else if (diagram) {
    diagram.classList.add("drawn");
  }
})();
