"use strict";

/* =========================================================================
 * SUSS MA/BA6 Gen4 · MA/BA8 Gen4 配置器
 * 数据模型 + 渲染 + 交互逻辑（纯静态，GitHub Pages 友好）
 * ========================================================================= */

const MODELS = [
  { id: "mjb4", name: "MJB4", en: "Mask Aligner", automation: "Manual", wafer: '4"', tag: "手动", img: "images/MJB4.png" },
  { id: "maba6", name: "MA/BA6 Gen4", en: "Mask & Bond Aligner", automation: "Semi-Automated", wafer: '6"', tag: "标准 · 半自动", img: "images/MA68Gen4.png" },
  { id: "maba8", name: "MA/BA8 Gen4", en: "Mask & Bond Aligner", automation: "Semi-Automated", wafer: '8"', tag: "标准 · 半自动", img: "images/MA68Gen4.png" },
  { id: "ma12", name: "MA12 Gen3", en: "Mask Aligner", automation: "Semi-Automated", wafer: '12"', tag: "200 / 300 mm · 半自动", img: "images/MA12.png" },
];

const SECTIONS = [
  {
    id: "exposure_area", zh: "曝光范围", en: "Exposure Area", type: "radio",
    options: [
      { id: "4round", zh: "4英寸圆形", en: '4" Round', models: ["mjb4"] },
      { id: "6round", zh: "6英寸圆形", en: '6" Round', models: ["maba6"] },
      { id: "6sq", zh: "6英寸方形", en: '6" Squared', models: ["maba6"] },
      { id: "8round", zh: "8英寸圆形", en: '8" Round', models: ["maba8"] },
      { id: "8sq", zh: "8英寸方形", en: '8" Squared', models: ["maba8"] },
      { id: "12round", zh: "12英寸圆形", en: '12" Round', models: ["ma12"] },
      { id: "12sq", zh: "12英寸方形", en: '12" Squared', models: ["ma12"] },
    ],
  },
  {
    id: "alignment", zh: "对准方式", en: "Alignment Type", type: "radio",
    notes:
      "a. 共有三种对准方式：TSA 正面、BSA 背面、IR 红外。<br/>" +
      "b. BSA 采用背面光学显微镜成像，IR 通过透射式红外成像；一般 BSA 比 IR 兼容性更强，成像不受衬底材料组成影响。仅做背面对位建议选 BSA。<br/>" +
      "c. 若对准标记从上方和下方都无法观察到，可增配 IR 模块。",
    options: [
      { id: "tsa", zh: "TSA（仅正面）", en: "Top Side Alignment", imgs: ["images/TSA.png"] },
      { id: "tsa_bsa", zh: "TSA + BSA（正面 + 背面）", en: "Top + Bottom Side Alignment", imgs: ["images/TSA.png", "images/BSA.png"], models: ["maba6", "maba8", "ma12"] },
      { id: "bsa", zh: "BSA（仅背面）", en: "Bottom Side Alignment", imgs: ["images/BSA.png"], models: ["maba6", "maba8", "ma12"] },
      { id: "ir_tsa", zh: "TSA + BSA + IR Visualization via TSA（正面 + 背面 + 红外背面光源，正面观察）", en: "TSA + BSA + IR Visualization via TSA", imgs: ["images/IR.png"], models: ["maba6", "maba8", "ma12"] },
      { id: "ir_bsa", zh: "TSA + BSA + IR Visualization via BSA（正面 + 背面 + 红外正面光源，背面观察）", en: "TSA + BSA + IR Visualization via BSA", imgs: ["images/IR.png"], models: ["maba6", "maba8", "ma12"] },
      { id: "none", zh: "No Alignment（不做对准）", en: "No Alignment", models: ["maba6", "maba8", "ma12"] },
    ],
  },
  {
    id: "tsa_objective", zh: "TSA 物镜", en: "Objective for TSA", type: "radio",
    notes:
      "a. 大多数应用采用 5 倍物镜即可，光学放大 112 倍，视场 1.56×2.07 mm。<br/>" +
      "b. 对准标记特别小（<50 µm）可加 10 倍物镜，放大一倍，视场 0.78×1.04 mm。<br/>" +
      "c. 标准 5 倍与 10 倍物镜最小间隙 29 mm；需靠得更近可选 11.25X Offset（8 mm）或 7.2X Offset（13 mm）。",
    options: [
      { id: "5x", zh: "5X Standard 标准物镜", en: "5X Standard" },
      { id: "10x", zh: "10X Standard 标准物镜", en: "10X Standard" },
      { id: "11_25x", zh: "11.25X Offset 标准物镜", en: "11.25X Offset" },
      { id: "7_2x", zh: "7.2X Offset 标准物镜", en: "7.2X Offset" },
    ],
  },
  {
    id: "light_source", zh: "高压汞灯光源", en: "UV Light Source", type: "radio",
    notes:
      "a. LED 灯非曝光时关闭，约 5000 h 后光强衰减至 70%，期望寿命 20000 h。<br/>" +
      "b. 高压汞灯非曝光时也需开启，开机寿命约 600 h。<br/>" +
      "c. LED 将取代汞灯成为主流，SUSS 提供汞灯转 LED 技术支持。",
    options: [
      { id: "led", zh: "LED", en: "LED Light Source" },
      { id: "hg", zh: "HG 高压汞灯", en: "High-pressure Mercury Lamp", disabledModels: ["mjb4"] },
    ],
  },
  {
    id: "uv_spectrum", zh: "高压汞灯紫外波长范围", en: "UV Spectrum", type: "radio",
    visible: (sel) => sel.light_source === "hg",
    options: [
      { id: "uv400", zh: "UV400", en: "UV400" },
      { id: "uv400_uv300", zh: "UV400 + UV300", en: "UV400 + UV300" },
    ],
  },
  {
    id: "filter", zh: "滤镜", en: "Filter", type: "radio",
    visible: (sel) => sel.light_source === "hg",
    options: [
      { id: "i_line", zh: "i-Line Filter", en: "i-Line Filter" },
      { id: "g_line", zh: "g-Line Filter", en: "g-Line Filter" },
      { id: "h_line", zh: "h-Line Filter", en: "h-Line Filter" },
      { id: "gh_line", zh: "gh-Line Filter", en: "gh-Line Filter" },
      { id: "t25", zh: "25% Transmission Filter", en: "25% Transmission Filter" },
      { id: "t33", zh: "33% Transmission Filter", en: "33% Transmission Filter" },
      { id: "t50", zh: "50% Transmission Filter", en: "50% Transmission Filter" },
      { id: "t70", zh: "70% Transmission Filter", en: "70% Transmission Filter" },
    ],
  },
  {
    id: "exposure_mode", zh: "曝光能量控制", en: "Exposure Dosage Control Mode", type: "radio",
    visible: () => state.model !== "mjb4",
    notes:
      "CPC 即恒定功率模式，通过曝光时间控制曝光量；CDC 即恒定剂量模式，可直接输入剂量，使用更方便。CDC 包含 CPC 功能。建议研发单位仅配置 CPC 模式。",
    options: [
      { id: "cpc", zh: "CPC 通过曝光时间控制", en: "Constant Power Mode (CPC)" },
      { id: "cdc", zh: "CDC 直接控制曝光剂量", en: "Constant Dose Mode (CDC)" },
    ],
  },
  {
    id: "auto_alignment", zh: "对准自动化", en: "Automatic Alignment", type: "radio",
    visible: () => state.model !== "mjb4",
    notes:
      "MA6 / MA8 可配自动对位 Auto Alignment（对位精度 ±0.5 µm for TSA），或超高精度 Direct Alignment（对位精度 ±0.25 µm）。",
    options: [
      { id: "manual", zh: "手动对准 Full Manual Alignment", en: "Full Manual Alignment" },
      { id: "auto", zh: "自动对准 Auto Alignment（±0.5 µm）", en: "Auto Alignment" },
      { id: "direct", zh: "超高精度对准 Direct Alignment（±0.25 µm）", en: "Direct Alignment (DirectAlign®)" },
    ],
  },
  {
    id: "accessories", zh: "附属小部件", en: "Additional Accessories", type: "checkbox",
    options: [
      { id: "intensity_meter", zh: "原装光强计", en: "Intensity Meter" },
      { id: "vacuum_pump", zh: "厂务真空泵", en: "Facility Vacuum Pump" },
      { id: "sector_disk", zh: "分区曝光板", en: "Sector Exposure Disk" },
      { id: "filter_cda", zh: "压缩空气滤芯", en: "Filter Unit CDA", models: ["maba6", "maba8", "ma12"] },
      { id: "cassette_tray", zh: "片盒托盘", en: "Cassette Tray", models: ["maba6", "maba8", "ma12"] },
      { id: "tool_tray", zh: "工装夹具收纳托盘", en: "Tool Tray", models: ["maba6", "maba8", "ma12"] },
    ],
  },
];

const CHUCK_OPTIONS = [
  { id: "vac_contact", zh: "支持真空接触", en: "Vacuum Contact" },
  { id: "bsa", zh: "支持背面对准", en: "BSA (Backside Alignment)" },
  { id: "teflon", zh: "支持抗反射涂层", en: "Teflon / Anti-reflection Coating" },
];

const NON_STANDARD_CHUCK_MA = [
  { id: "ma-1", sizes: '5×5/10×10/20×20 mm', bsa: false, vacuum: false, teflon: false },
  { id: "ma-2", sizes: '5×5/10×10/20×20/Wafer-2"/3"', bsa: true, vacuum: true, teflon: false },
  { id: "ma-3", sizes: '5×5/10×10/20×20 mm', bsa: true, vacuum: true, teflon: false },
  { id: "ma-4", sizes: '5×5/10×10/40×40 mm', bsa: false, vacuum: true, teflon: false },
  { id: "ma-5", sizes: '5×5/12×12/20×20 mm', bsa: false, vacuum: false, teflon: true },
  { id: "ma-6", sizes: '5×5/20×20/25×25 mm', bsa: false, vacuum: true, teflon: true },
  { id: "ma-7", sizes: '10×10/15×15/20×20 mm', bsa: true, vacuum: true, teflon: false },
  { id: "ma-8", sizes: '10×10/20×20/30×30 mm', bsa: false, vacuum: true, teflon: true },
  { id: "ma-9", sizes: '10×10/20×20/30×30 mm', bsa: true, vacuum: true, teflon: false },
  { id: "ma-10", sizes: '10×10/20×20/30×30 mm', bsa: false, vacuum: false, teflon: false },
  { id: "ma-11", sizes: '10×10/20×20/30×30 mm', bsa: false, vacuum: true, teflon: false },
  { id: "ma-12", sizes: '10×10/25×25/Wafer-2"', bsa: false, vacuum: true, teflon: false },
  { id: "ma-13", sizes: '15×15/25×25 mm', bsa: false, vacuum: true, teflon: true },
  { id: "ma-14", sizes: '15×15/30×30 mm', bsa: true, vacuum: true, teflon: false },
  { id: "ma-15", sizes: '15×15/30×30 mm', bsa: false, vacuum: false, teflon: false },
  { id: "ma-16", sizes: '20×20/25×25/30×30 mm', bsa: false, vacuum: false, teflon: true },
  { id: "ma-17", sizes: '20×20/30×30/40×40 mm', bsa: true, vacuum: false, teflon: false },
];

const NON_STANDARD_CHUCK_MJB4 = [
  { id: "mjb4-1", sizes: '5×5/10×10 mm', bsa: false, vacuum: true, teflon: false },
  { id: "mjb4-2", sizes: '5×5/10×10 mm', bsa: false, vacuum: true, teflon: true },
  { id: "mjb4-3", sizes: '10×10/20×20 mm', bsa: false, vacuum: true, teflon: false },
  { id: "mjb4-4", sizes: '10×10/20×20 mm', bsa: false, vacuum: true, teflon: true },
  { id: "mjb4-5", sizes: '5×5/10×10 mm', bsa: false, vacuum: false, teflon: false },
  { id: "mjb4-6", sizes: '5×5/10×10 mm', bsa: false, vacuum: false, teflon: true },
  { id: "mjb4-7", sizes: '10×10/20×20 mm', bsa: false, vacuum: false, teflon: false },
  { id: "mjb4-8", sizes: '10×10/20×20 mm', bsa: false, vacuum: false, teflon: true },
];

function nonStandardChucks(model) {
  if (model === "mjb4") return NON_STANDARD_CHUCK_MJB4;
  if (model === "maba6" || model === "maba8") return NON_STANDARD_CHUCK_MA;
  return [];
}

function nonStandardLabel(c, model) {
  const parts = [c.sizes];
  if (model !== "mjb4") parts.push(c.bsa ? "支持BSA" : "不支持BSA");
  parts.push(c.vacuum ? "支持真空接触" : "不支持真空接触");
  parts.push(c.teflon ? "含Teflon涂层" : "无Teflon涂层");
  return parts.join(" · ");
}

function chuckWaferSizes(model) {
  if (model === "mjb4") return ['2"', '3"', '4"', "非标"];
  if (model === "ma12") return ['6"', '8"', '12"', "非标"];
  return ['2"', '3"', '4"', '6"', '8"', "非标"];
}

function defaultChuckWafer(model) {
  const sizes = chuckWaferSizes(model).filter((s) => s !== "非标");
  return sizes.includes('6"') ? '6"' : sizes[sizes.length - 1];
}

const CHUCK_NOTES =
  "1. 真空接触 Chuck 带用于形成真空腔体的橡胶圈；真空接触分辨率最高，掩模版损伤也最大。<br/>" +
  "2. 背面对准 Chuck 带背面显微镜观察窗。<br/>" +
  "3. 透明衬底建议配置抗反射涂层 Chuck，防止紫外光透射到 Chuck 反射造成二次曝光。<br/>" +
  "4. 特殊要求（大翘曲 >200 µm、超厚片 >3 mm、高精度平边对准）需配 LED 背光或镜面反射。";

const MASK_HOLDER_OPTIONS = [
  { id: "round", zh: "圆形开孔", en: "Round Exposure Opening" },
  { id: "square", zh: "方形开孔", en: "Square Exposure Opening" },
  { id: "non_contact", zh: "支持非接触式找平", en: "Non-contact Leveling" },
];

const MASK_HOLDER_NOTES =
  "1. 方形开孔方便首层掩模版寻边式对准，但吸附 Mask 的真空区较小；建议圆形晶圆选圆形开孔，方形晶圆选方形开孔。<br/>" +
  "2. 非接触式找平可减少掩模版损伤，但价格较高，科研教育或低产量单位可不选。<br/>" +
  "3. 9\" 与 14\" 因 Mask 价格较贵，无论是否选择，都会提供支持非接触式找平的掩模版架。";

/* ============================ 状态 ============================ */

const state = {
  model: "maba6",
  selection: {},       // { sectionId: optionId | [optionId,...] }
  chucks: [],          // [{ waferSize, options:Set }]
  maskHolders: [],     // [{ options:Set }]
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ============================ 渲染 ============================ */

function renderModelSelector() {
  const wrap = $("#model-selector");
  wrap.innerHTML = MODELS.map((m) => `
    <label class="model-card ${m.id === state.model ? "active" : ""}">
      <input type="radio" name="model" value="${m.id}" ${m.id === state.model ? "checked" : ""} />
      <div class="model-img"><img src="${m.img}" alt="${m.name}" loading="lazy" /></div>
      <div class="model-name">${m.name}</div>
      <div class="model-sub">${m.en} · ${m.automation} · 晶圆 ${m.wafer}</div>
      <span class="model-tag">${m.tag}</span>
    </label>`).join("");
}

function renderSections() {
  const wrap = $("#sections");
  let html = "";
  let idx = 0;
  let dynamicsInserted = false;
  SECTIONS.forEach((sec) => {
    if (sec.visible && !sec.visible(state.selection)) return;
    if (sec.id === "exposure_mode" && !dynamicsInserted) {
      html += renderChuckSection(++idx);
      html += renderMaskHolderSection(++idx);
      dynamicsInserted = true;
    }
    idx++;
    html += renderSection(sec, idx);
  });
  wrap.innerHTML = html;
  updateAlignmentImage();
  renderExposureSchematic();
}

function sectionHeader(sec, idx) {
  return `
    <div class="section-head">
      <span class="idx">${idx}</span>
      <div><h3>${sec.zh}</h3><p class="en">${sec.en}</p></div>
    </div>`;
}

function renderSection(sec, idx) {
  const visibleOpts = (sec.options || []).filter((o) => !o.models || o.models.includes(state.model));
  const cur = state.selection[sec.id];
  const isMulti = sec.type === "checkbox";

  const opts = visibleOpts.map((o) => {
    const checked = isMulti ? (Array.isArray(cur) && cur.includes(o.id)) : cur === o.id;
    const disabled = o.disabledModels && o.disabledModels.includes(state.model);
    return `
      <label class="option ${checked ? "selected" : ""} ${disabled ? "disabled" : ""}">
        <input type="${sec.type}" name="${sec.id}" value="${o.id}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} />
        <span class="option-label"><span class="zh">${o.zh}</span><span class="en">${o.en}</span></span>
      </label>`;
  }).join("");

  const notes = sec.notes ? `<div class="notes hidden" data-notes="${sec.id}">${sec.notes}</div>` : "";
  const gallery = sec.id === "alignment" ? `<div class="align-gallery" data-align-gallery></div>` : "";
  const schematic = sec.id === "exposure_area" ? `
    <div class="exposure-wrap">
      <div class="exposure-schematic" data-exposure-schematic></div>
      <figure class="exposure-photo">
        <img src="images/Exposure.png" alt="曝光范围示意图" loading="lazy" />
      </figure>
    </div>` : "";

  return `
    <section class="section" data-section="${sec.id}">
      ${sectionHeader(sec, idx)}
      <div class="section-body">${opts}${schematic}${notes}${gallery}</div>
    </section>`;
}

function maskHolderSizes(model) {
  return chuckWaferSizes(model).filter((s) => s !== "非标");
}

function renderChuckSection(idx) {
  const presets = nonStandardChucks(state.model);
  const waferSizes = chuckWaferSizes(state.model);
  const rows = state.chucks.map((c, i) => {
    const isNonStd = c.waferSize === "非标";
    let extra = "";
    if (isNonStd) {
      extra = `
      <label class="chuck-nonstd">非标准晶圆夹具 Non-standard Chuck：
        <select data-action="chuck-nonstandard" data-i="${i}">
          <option value="">— 标准（不选）—</option>
          ${presets.map((p) => `<option value="${p.id}" ${c.nonStandard === p.id ? "selected" : ""}>${nonStandardLabel(p, state.model)}</option>`).join("")}
        </select>
      </label>`;
    } else {
      extra = `
      <div class="dyn-options">
      ${CHUCK_OPTIONS.map((o) => {
        const checked = c.options.has(o.id);
        return `
          <label class="option ${checked ? "selected" : ""}">
            <input type="checkbox" data-action="chuck-opt" data-i="${i}" value="${o.id}" ${checked ? "checked" : ""} />
            <span class="option-label"><span class="zh">${o.zh}</span><span class="en">${o.en}</span></span>
          </label>`;
      }).join("")}
      </div>`;
    }
    return `
    <div class="dyn-row">
      <div class="dyn-row-head">
        <span class="dyn-title">晶圆吸盘 Chuck #${i + 1}</span>
        <button class="btn icon-btn" data-action="remove-chuck" data-i="${i}" title="删除">✕</button>
      </div>
      <label class="chuck-wafer">晶圆尺寸 Wafer Size：
        <select data-action="chuck-wafer" data-i="${i}">
          ${waferSizes.map((s) => `<option value="${s.replace(/"/g, "&quot;")}" ${c.waferSize === s ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </label>
      ${extra}
    </div>`;
  }).join("");

  return `
    <section class="section" data-section="chuck">
      ${dynamicHeader(idx, "晶圆吸盘", "Chuck and Mask Holder — Chuck")}
      <div class="section-body">
        <div class="dyn-controls">
          <button class="btn icon-btn" data-action="add-chuck" title="增加晶圆吸盘 Add Chuck">＋</button>
          <button class="btn icon-btn" data-action="reset-chucks" title="重置 Reset">↻</button>
        </div>
        ${rows || '<p class="summary-empty">尚未添加晶圆吸盘，点击上方按钮添加。</p>'}
        <div class="notes hidden" data-notes="chuck">${CHUCK_NOTES}</div>
      </div>
    </section>`;
}

function renderMaskHolderSection(idx) {
  const sizes = maskHolderSizes(state.model);
  const rows = state.maskHolders.map((m, i) => `
    <div class="dyn-row">
      <div class="dyn-row-head">
        <span class="dyn-title">掩模版架 Mask Holder #${i + 1}</span>
        <button class="btn icon-btn" data-action="remove-maskholder" data-i="${i}" title="删除">✕</button>
      </div>
      <label class="chuck-wafer">曝光孔大小 Exposure Opening Size：
        <select data-action="maskholder-size" data-i="${i}">
          ${sizes.map((s) => `<option value="${s.replace(/"/g, "&quot;")}" ${m.openingSize === s ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </label>
      <div class="dyn-options">
      ${MASK_HOLDER_OPTIONS.map((o) => {
        const checked = m.options.has(o.id);
        const isOpening = o.id === "round" || o.id === "square";
        const type = isOpening ? "radio" : "checkbox";
        const action = isOpening ? "maskholder-opening" : "maskholder-opt";
        const name = isOpening ? `maskholder-opening-${i}` : `maskholder-opt-${i}`;
        return `
          <label class="option ${checked ? "selected" : ""}">
            <input type="${type}" data-action="${action}" data-i="${i}" name="${name}" value="${o.id}" ${checked ? "checked" : ""} />
            <span class="option-label"><span class="zh">${o.zh}</span><span class="en">${o.en}</span></span>
          </label>`;
      }).join("")}
      </div>
    </div>`).join("");

  return `
    <section class="section" data-section="maskholder">
      ${dynamicHeader(idx, "掩模版架", "Chuck and Mask Holder — Mask Holder")}
      <div class="section-body">
        <div class="dyn-controls">
          <button class="btn icon-btn" data-action="add-maskholder" title="增加掩模版架 Add Mask Holder">＋</button>
          <button class="btn icon-btn" data-action="reset-maskholders" title="重置 Reset">↻</button>
        </div>
        ${rows || '<p class="summary-empty">尚未添加掩模版架，点击上方按钮添加。</p>'}
        <div class="notes hidden" data-notes="maskholder">${MASK_HOLDER_NOTES}</div>
      </div>
    </section>`;
}

function dynamicHeader(idx, zh, en) {
  return `
    <div class="section-head">
      <span class="idx">${idx}</span>
      <div><h3>${zh}</h3><p class="en">${en}</p></div>
    </div>`;
}

/* ============================ 高亮 ============================ */

function highlightSection(sectionId, type) {
  const sec = document.querySelector(`[data-section="${sectionId}"]`);
  if (!sec) return;
  sec.querySelectorAll(".option").forEach((lbl) => {
    const inp = lbl.querySelector("input");
    if (!inp) return;
    const on = type === "checkbox"
      ? (state.selection[sectionId] || []).includes(inp.value)
      : state.selection[sectionId] === inp.value;
    lbl.classList.toggle("selected", on);
  });
}

function updateAlignmentImage() {
  const gallery = document.querySelector("[data-align-gallery]");
  if (!gallery) return;
  const sec = SECTIONS.find((s) => s.id === "alignment");
  const opt = sec.options.find((o) => o.id === state.selection.alignment);
  const imgs = (opt && opt.imgs) || [];
  if (!imgs.length) { gallery.innerHTML = ""; gallery.style.display = "none"; return; }
  gallery.style.display = "grid";
  gallery.innerHTML = imgs.map((src) => `
    <figure class="align-item"><img src="${src}" alt="${opt.zh}" loading="lazy" /></figure>`).join("");
}

const WAFER_MM = { "4": 100, "6": 150, "8": 200, "12": 300 };
const SIZE_SCALE = { "4": 38, "6": 54, "8": 70, "12": 86 };

function renderExposureSchematic() {
  const el = document.querySelector("[data-exposure-schematic]");
  if (!el) return;
  const photo = document.querySelector(".exposure-photo");
  const id = state.selection.exposure_area;
  const sec = SECTIONS.find((s) => s.id === "exposure_area");
  const opt = sec.options.find((o) => o.id === id);
  if (!opt) {
    el.innerHTML = "";
    if (photo) photo.style.display = "none";
    return;
  }
  if (photo) photo.style.display = "";
  const round = /round$/.test(id);
  const size = id.replace(/round|sq/g, "");
  const mm = WAFER_MM[size] || "";
  const shape = round ? "圆形" : "方形";
  const dimension = round ? "直径" : "边长";
  el.innerHTML = `
    <div class="schematic-figure">${exposureSchematicSVG(round, size)}</div>
    <div class="schematic-label">${shape}曝光范围 · ${dimension} ${size}"（${mm} mm）</div>`;
  syncExposurePhotoHeight();
}

function syncExposurePhotoHeight() {
  const schematic = document.querySelector("[data-exposure-schematic]");
  const img = document.querySelector(".exposure-photo img");
  if (!schematic || !img) return;
  const apply = () => {
    const h = Math.round(schematic.getBoundingClientRect().height);
    const cur = parseInt(img.style.height, 10);
    if (cur !== h) {
      img.style.height = h + "px";
      img.style.width = "auto";
    }
  };
  apply();
  requestAnimationFrame(apply);
  if (window._exposureResizeObserver) window._exposureResizeObserver.disconnect();
  window._exposureResizeObserver = new ResizeObserver(() => apply());
  window._exposureResizeObserver.observe(schematic);
}

function dimensionLine(x1, x2, yBase, label, clearance, direction = -1) {
  const y = yBase + direction * (clearance || 34);
  const startY = yBase + direction * 8;
  return `
    <line x1="${x1}" y1="${startY}" x2="${x1}" y2="${y}" stroke="#003F30" stroke-width="1.2"/>
    <line x1="${x2}" y1="${startY}" x2="${x2}" y2="${y}" stroke="#003F30" stroke-width="1.2"/>
    <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#003F30" stroke-width="1.5"/>
    <path d="M${x1} ${y} l7 -4.5 v9 z" fill="#003F30"/>
    <path d="M${x2} ${y} l-7 -4.5 v9 z" fill="#003F30"/>
    <text x="${(x1 + x2) / 2}" y="${y + (direction === 1 ? 19 : -7)}" text-anchor="middle" font-size="13.5" font-weight="700" fill="#003F30">${label}</text>`;
}

function exposureSchematicSVG(round, size) {
  const mm = WAFER_MM[size] || "";
  const uvLabel = (y) => `<text x="130" y="${y}" text-anchor="middle" font-size="15" font-weight="700" fill="#7e22ce" stroke="#fff" stroke-width="4" paint-order="stroke">紫外光（UV）</text>`;
  if (round) {
    const rx = SIZE_SCALE[size] || 60;
    const ry = Math.round(rx * 0.36);
    const cx = 130, lightTopY = 88, lightBottomY = lightTopY + 16;
    const waferTopY = lightBottomY, waferBottomY = waferTopY + 10;
    const left = cx - rx, right = cx + rx;
    const svgHeight = waferBottomY + ry + 46;
    return `
    <svg viewBox="0 0 260 ${svgHeight}" role="img" aria-label="${size} 英寸圆形曝光范围与晶圆三维示意图，紫外光在上方并遮挡晶圆">
      <ellipse cx="${cx}" cy="${waferBottomY}" rx="${rx}" ry="${ry}" fill="#64748b"/>
      <path d="M${left} ${waferTopY} L${left} ${waferBottomY} A${rx} ${ry} 0 0 0 ${right} ${waferBottomY} L${right} ${waferTopY} A${rx} ${ry} 0 0 1 ${left} ${waferTopY} Z" fill="#94a3b8"/>
      <ellipse cx="${cx}" cy="${waferTopY}" rx="${rx}" ry="${ry}" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <text x="${cx}" y="${waferBottomY + ry + 4}" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">晶圆</text>
      <ellipse cx="${cx}" cy="${lightBottomY}" rx="${rx}" ry="${ry}" fill="#7e22ce"/>
      <path d="M${left} ${lightTopY} L${left} ${lightBottomY} A${rx} ${ry} 0 0 0 ${right} ${lightBottomY} L${right} ${lightTopY} A${rx} ${ry} 0 0 1 ${left} ${lightTopY} Z" fill="#a855f7"/>
      <ellipse cx="${cx}" cy="${lightTopY}" rx="${rx}" ry="${ry}" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
      <ellipse cx="${cx}" cy="${lightTopY}" rx="${Math.round(rx * 0.62)}" ry="${Math.round(ry * 0.62)}" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="6 5"/>
      ${uvLabel(lightTopY - ry - 10)}
      <text x="${cx}" y="${lightTopY + 6}" text-anchor="middle" font-size="14" font-weight="700" fill="#6b21a8">${size}"</text>
      ${dimensionLine(left, right, waferBottomY, `Ø ${mm} mm（${size}"）`, ry + 18, 1)}
    </svg>`;
  }
  const s = SIZE_SCALE[size] || 60;
  const halfW = Math.round(s * 0.78);
  const hh = Math.round(s * 0.38);
  const cx = 130;
  const backLeftX = cx - s, backRightX = backLeftX + halfW * 2;
  const frontRightX = cx + s, frontLeftX = frontRightX - halfW * 2;
  const lightTopY = 88, lightBackY = lightTopY - hh, lightFrontY = lightTopY + hh, lightH = 12;
  const waferTopY = lightTopY + lightH, waferBackY = waferTopY - hh, waferFrontY = waferTopY + hh, waferH = 10;
  const innerS = Math.round(s * 0.55), innerHalfW = Math.round(halfW * 0.55), innerHh = Math.round(hh * 0.55);
  const innerBackLeftX = cx - innerS, innerBackRightX = innerBackLeftX + innerHalfW * 2;
  const innerFrontRightX = cx + innerS, innerFrontLeftX = innerFrontRightX - innerHalfW * 2;
  const svgHeight = waferFrontY + waferH + 46;
  return `
    <svg viewBox="0 0 260 ${svgHeight}" role="img" aria-label="${size} 英寸方形曝光范围（边长）与晶圆三维示意图，紫外光在上方并遮挡晶圆">
      <path d="M${backRightX} ${waferBackY} L${frontRightX} ${waferFrontY} L${frontRightX} ${waferFrontY + waferH} L${backRightX} ${waferBackY + waferH} Z" fill="#94a3b8"/>
      <path d="M${frontLeftX} ${waferFrontY} L${frontRightX} ${waferFrontY} L${frontRightX} ${waferFrontY + waferH} L${frontLeftX} ${waferFrontY + waferH} Z" fill="#cbd5e1"/>
      <path d="M${backLeftX} ${waferBackY} L${backRightX} ${waferBackY} L${frontRightX} ${waferFrontY} L${frontLeftX} ${waferFrontY} Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <text x="${cx}" y="${waferFrontY + 16}" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">晶圆</text>
      <path d="M${backRightX} ${lightBackY} L${frontRightX} ${lightFrontY} L${frontRightX} ${lightFrontY + lightH} L${backRightX} ${lightBackY + lightH} Z" fill="#9333ea"/>
      <path d="M${frontLeftX} ${lightFrontY} L${frontRightX} ${lightFrontY} L${frontRightX} ${lightFrontY + lightH} L${frontLeftX} ${lightFrontY + lightH} Z" fill="#a855f7"/>
      <path d="M${backLeftX} ${lightBackY} L${backRightX} ${lightBackY} L${frontRightX} ${lightFrontY} L${frontLeftX} ${lightFrontY} Z" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
      <path d="M${backLeftX} ${lightBackY} L${backLeftX} ${lightBackY + lightH} L${frontLeftX} ${lightFrontY + lightH} L${frontLeftX} ${lightFrontY}" fill="none" stroke="#7e22ce" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${innerBackLeftX} ${lightTopY - innerHh} L${innerBackRightX} ${lightTopY - innerHh} L${innerFrontRightX} ${lightTopY + innerHh} L${innerFrontLeftX} ${lightTopY + innerHh} Z" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="6 5"/>
      ${uvLabel(lightBackY - 10)}
      <text x="${cx}" y="${lightTopY + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="#6b21a8">${size}"</text>
      ${dimensionLine(frontLeftX, frontRightX, waferFrontY + waferH, `边长 ${mm} mm（${size}"）`, 18, 1)}
    </svg>`;
}

/* ============================ 交互（事件委托，绑定一次） ============================ */

function onSectionsChange(e) {
  const t = e.target;
  if (t.dataset.action) {
    // 动态行
    const i = parseInt(t.dataset.i, 10);
    const action = t.dataset.action;
    if (action === "chuck-wafer") { state.chucks[i].waferSize = t.value; renderSections(); }
    else if (action === "chuck-opt") { const s = state.chucks[i].options; t.checked ? s.add(t.value) : s.delete(t.value); }
    else if (action === "maskholder-opt") { const s = state.maskHolders[i].options; t.checked ? s.add(t.value) : s.delete(t.value); }
    else if (action === "maskholder-opening") { const s = state.maskHolders[i].options; s.delete("round"); s.delete("square"); s.add(t.value); }
    else if (action === "chuck-nonstandard") state.chucks[i].nonStandard = t.value;
    else if (action === "maskholder-size") state.maskHolders[i].openingSize = t.value;
    updateSummary();
    return;
  }

  if (!t.name) return;
  const sec = SECTIONS.find((s) => s.id === t.name);
  if (!sec) return;
  if (sec.type === "checkbox") {
    const arr = new Set(state.selection[sec.id] || []);
    t.checked ? arr.add(t.value) : arr.delete(t.value);
    state.selection[sec.id] = [...arr];
  } else {
    state.selection[sec.id] = t.value;
  }
  highlightSection(sec.id, sec.type);
  updateSummary();
  if (sec.id === "alignment") updateAlignmentImage();
  if (sec.id === "exposure_area") renderExposureSchematic();
  if (sec.id === "light_source") renderSections();
}

function onSectionsClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;
  const i = parseInt(btn.dataset.i, 10);
  switch (action) {
    case "add-chuck": state.chucks.push({ waferSize: defaultChuckWafer(state.model), options: new Set(), nonStandard: "" }); break;
    case "remove-chuck": state.chucks.splice(i, 1); break;
    case "reset-chucks": state.chucks = []; break;
    case "add-maskholder": state.maskHolders.push({ openingSize: defaultChuckWafer(state.model), options: new Set() }); break;
    case "remove-maskholder": state.maskHolders.splice(i, 1); break;
    case "reset-maskholders": state.maskHolders = []; break;
    default: return;
  }
  renderSections();
  updateSummary();
}

function cleanSelectionForModel() {
  SECTIONS.forEach((sec) => {
    if (sec.visible && !sec.visible(state.selection)) {
      delete state.selection[sec.id];
      return;
    }
    const cur = state.selection[sec.id];
    if (cur == null) return;
    if (sec.type === "checkbox" && Array.isArray(cur)) {
      const valid = cur.filter((id) => {
        const o = sec.options.find((x) => x.id === id);
        return !o || !o.models || o.models.includes(state.model);
      });
      if (valid.length) state.selection[sec.id] = valid;
      else delete state.selection[sec.id];
    } else {
      const o = sec.options.find((x) => x.id === cur);
      if (o && o.models && !o.models.includes(state.model)) {
        delete state.selection[sec.id];
      }
    }
  });
}

function onModelClick(e) {
  const card = e.target.closest(".model-card");
  if (!card) return;
  state.model = card.querySelector("input").value;
  const sizes = chuckWaferSizes(state.model);
  state.chucks.forEach((c) => {
    c.nonStandard = "";
    if (!sizes.includes(c.waferSize)) c.waferSize = defaultChuckWafer(state.model);
  });
  const mhSizes = maskHolderSizes(state.model);
  state.maskHolders.forEach((m) => {
    if (!mhSizes.includes(m.openingSize)) m.openingSize = defaultChuckWafer(state.model);
  });
  cleanSelectionForModel();
  if (state.model === "mjb4") state.selection.light_source = "led";
  renderModelSelector();
  renderSections();
  updateSummary();
}

/* ============================ 摘要 ============================ */

function optionLabel(secId, optId) {
  const sec = SECTIONS.find((s) => s.id === secId);
  const o = sec && sec.options.find((x) => x.id === optId);
  return o ? o.zh : optId;
}

function updateSummary() {
  const list = $("#summary-list");
  const items = [];
  const model = MODELS.find((m) => m.id === state.model);
  items.push({ key: "设备型号", val: model.name });

  SECTIONS.forEach((sec) => {
    if (sec.visible && !sec.visible(state.selection)) return;
    const cur = state.selection[sec.id];
    if (sec.type === "checkbox") {
      if (Array.isArray(cur) && cur.length) {
        items.push({ key: sec.zh, val: cur.map((id) => optionLabel(sec.id, id)).join("、") });
      }
    } else if (cur) {
      items.push({ key: sec.zh, val: optionLabel(sec.id, cur) });
    }
  });

  state.chucks.forEach((c, i) => {
    let parts;
    if (c.waferSize === "非标") {
      parts = ["非标"];
      const preset = nonStandardChucks(state.model).find((p) => p.id === c.nonStandard);
      parts.push(preset ? nonStandardLabel(preset, state.model) : "未指定非标夹具");
    } else {
      const opts = [...c.options].map((id) => (CHUCK_OPTIONS.find((o) => o.id === id) || {}).zh || id);
      parts = [c.waferSize, ...opts];
    }
    items.push({ key: `Chuck #${i + 1}`, val: parts.join(" · ") });
  });
  state.maskHolders.forEach((m, i) => {
    const opts = [...m.options].map((id) => (MASK_HOLDER_OPTIONS.find((o) => o.id === id) || {}).zh || id);
    items.push({ key: `Mask Holder #${i + 1}`, val: [m.openingSize, ...opts].join(" · ") || "未指定" });
  });

  list.innerHTML = items.length
    ? items.map((it) => `<div class="summary-item"><div class="s-key">${it.key}</div><div class="s-val">${it.val}</div></div>`).join("")
    : '<p class="summary-empty">尚未选择任何配置项</p>';
  $("#summary-count").textContent = items.length;
  updateSummaryMeta();
}

function updateSummaryMeta() {
  const c = $("#customer-name").value.trim();
  const o = $("#owner-name").value.trim();
  const d = $("#quote-date").value;
  const parts = [];
  if (c) parts.push(`客户：${c}`);
  if (o) parts.push(`负责人：${o}`);
  if (d) parts.push(`日期：${d}`);
  $("#summary-customer").textContent = parts.join("  ·  ");
}

/* ============================ 导入 / 导出 / 重置 ============================ */

function serializeState() {
  return {
    model: state.model,
    customer: $("#customer-name").value,
    owner: $("#owner-name").value,
    date: $("#quote-date").value,
    selection: state.selection,
    chucks: state.chucks.map((c) => ({ waferSize: c.waferSize, options: [...c.options], nonStandard: c.nonStandard || "" })),
    maskHolders: state.maskHolders.map((m) => ({ openingSize: m.openingSize || "", options: [...m.options] })),
  };
}

function deserializeState(data) {
  if (!data || typeof data !== "object") return;
  if (data.model && MODELS.some((m) => m.id === data.model)) state.model = data.model;
  $("#customer-name").value = data.customer || "";
  $("#owner-name").value = data.owner || "";
  $("#quote-date").value = data.date || "";
  state.selection = data.selection || {};
  cleanSelectionForModel();
  if (state.model === "mjb4") state.selection.light_source = "led";
  state.chucks = (data.chucks || []).map((c) => {
    const sizes = chuckWaferSizes(state.model);
    const presets = nonStandardChucks(state.model);
    const waferSize = sizes.includes(c.waferSize) ? c.waferSize : defaultChuckWafer(state.model);
    const nonStandard = c.nonStandard && presets.some((p) => p.id === c.nonStandard) ? c.nonStandard : "";
    return { waferSize, options: new Set(c.options || []), nonStandard };
  });
  state.maskHolders = (data.maskHolders || []).map((m) => {
    const sizes = maskHolderSizes(state.model);
    const openingSize = sizes.includes(m.openingSize) ? m.openingSize : defaultChuckWafer(state.model);
    return { openingSize, options: new Set(m.options || []) };
  });
  renderModelSelector();
  renderSections();
  updateSummary();
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(serializeState(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "suss-config.json"; a.click();
  URL.revokeObjectURL(url);
}

function resetAll() {
  state.model = "maba6";
  state.selection = {};
  state.chucks = [];
  state.maskHolders = [];
  $("#customer-name").value = "";
  $("#owner-name").value = "";
  $("#quote-date").valueAsDate = new Date();
  renderModelSelector();
  renderSections();
  updateSummary();
}

/* ============================ 报价单弹窗 ============================ */

function collectItems() {
  const items = [];
  SECTIONS.forEach((sec) => {
    if (sec.visible && !sec.visible(state.selection)) return;
    const cur = state.selection[sec.id];
    if (sec.type === "checkbox" && Array.isArray(cur) && cur.length) {
      items.push({ k: sec.zh, v: cur.map((id) => optionLabel(sec.id, id)).join("、") });
    } else if (cur) {
      items.push({ k: sec.zh, v: optionLabel(sec.id, cur) });
    }
  });
  state.chucks.forEach((c, i) => {
    let parts;
    if (c.waferSize === "非标") {
      parts = ["非标"];
      const preset = nonStandardChucks(state.model).find((p) => p.id === c.nonStandard);
      parts.push(preset ? nonStandardLabel(preset, state.model) : "未指定非标夹具");
    } else {
      const opts = [...c.options].map((id) => (CHUCK_OPTIONS.find((o) => o.id === id) || {}).zh || id);
      parts = [c.waferSize, ...opts];
    }
    items.push({ k: `Chuck #${i + 1}`, v: parts.join(" · ") });
  });
  state.maskHolders.forEach((m, i) => {
    const opts = [...m.options].map((id) => (MASK_HOLDER_OPTIONS.find((o) => o.id === id) || {}).zh || id);
    items.push({ k: `Mask Holder #${i + 1}`, v: [m.openingSize, ...opts].join(" · ") || "未指定" });
  });
  return items;
}

function showQuotation() {
  const model = MODELS.find((m) => m.id === state.model);
  const items = [{ k: "设备型号", v: model.name }, ...collectItems()];
  const meta = $("#summary-customer").textContent;
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-head"><h2>报价单摘要</h2><button class="modal-close">×</button></div>
      <div class="modal-body">
        <p class="modal-meta">${meta}</p>
        ${items.map((it) => `<div class="summary-item"><div class="s-key">${it.k}</div><div class="s-val">${it.v}</div></div>`).join("")}
      </div>
      <div class="modal-foot"><button class="btn" id="modal-print">打印</button></div>
    </div>`;
  document.body.appendChild(modal);
  modal.querySelector(".modal-close").addEventListener("click", () => modal.remove());
  modal.querySelector("#modal-print").addEventListener("click", () => window.print());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });
}

/* ============================ 初始化 ============================ */

document.addEventListener("DOMContentLoaded", () => {
  $("#quote-date").valueAsDate = new Date();

  renderModelSelector();
  renderSections();
  updateSummary();

  // 事件委托：只绑定一次
  $("#model-selector").addEventListener("click", onModelClick);
  $("#sections").addEventListener("change", onSectionsChange);
  $("#sections").addEventListener("click", onSectionsClick);

  ["customer-name", "owner-name", "quote-date"].forEach((id) => {
    $("#" + id).addEventListener("input", updateSummaryMeta);
  });

  $("#btn-reset").addEventListener("click", resetAll);
  $("#btn-print").addEventListener("click", () => window.print());
  $("#btn-save-json").addEventListener("click", exportJSON);

  $("#btn-import").addEventListener("click", () => $("#import-file").click());
  $("#import-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { deserializeState(JSON.parse(reader.result)); } catch (err) { alert("导入失败：JSON 格式错误"); }
    };
    reader.readAsText(file);
    e.target.value = "";
  });
});
