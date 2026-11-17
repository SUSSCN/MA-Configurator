"use strict";

/* =========================================================================
 * 多语言资源：中文 / English / Deutsch / 日本語 / 한국어
 * ========================================================================= */

const LANGS = [
  { id: "en", label: "English", short: "EN" },
  { id: "zh", label: "中文", short: "中文" },
  { id: "de", label: "Deutsch", short: "DE" },
  { id: "ja", label: "日本語", short: "JA" },
  { id: "ko", label: "한국어", short: "KO" },
];

const HTML_LANG = { en: "en", zh: "zh-CN", de: "de", ja: "ja", ko: "ko" };

const I18N = {
  en: {
    "app.title": "SUSS Mask & Bond Aligner Configurator · MJB4 / MA6 / MA8 / MA12",
    "brand.title": "Mask & Bond Aligner Configurator",
    "brand.subtitle": "MJB4 · MA/BA6 Gen4 · MA/BA8 Gen4 · MA12 Gen3",
    "field.customer": "Customer",
    "field.owner": "Owner",
    "field.date": "Date",
    "ph.customer": "Customer Name",
    "ph.owner": "Owner Name",
    "panel.title": "Equipment Model",
    "panel.sub": "Select a platform — exposure range and options adapt accordingly",
    "about.title": "About SUSS MicroTec",
    "about.p1":
      "With more than 75 years of engineering experience, SUSS MicroTec is a leading supplier of advanced back-end and photomask solutions for the semiconductor and related markets, covering imaging (lithography / mask alignment), coating, bonding and photomasks.",
    "about.p2":
      "The MA/BA Gen4 series is a semi-automated mask / bond aligner platform with MO Exposure Optics<sup>®</sup> telecentric illumination and resolution down to <strong>0.8 µm</strong> (hard / soft / vacuum contact). Optional DirectAlign<sup>®</sup> technology achieves <strong>0.5 µm</strong> overlay accuracy and supports top side (TSA), bottom side (BSA) and infrared (IR) alignment. Typical applications: advanced packaging, MEMS/NEMS, 3D integration, compound semiconductors, LED, micro-optics, AR and optoelectronics.",
    "about.src": "Data source and image copyright: SUSS MicroTec official website.",
    "about.link": "Download product brochure (PDF)",
    "btn.import": "Import",
    "btn.reset": "Reset All",
    "btn.print": "Print to PDF",
    "btn.json": "Save as JSON",
    "tip.import": "Import configuration (JSON)",
    "tip.reset": "Clear all settings",
    "summary.title": "Selected Configuration",
    "summary.empty": "No configuration selected yet",
    "summary.model": "Model",
    "footer.src": "Product information:",
    "footer.link1": "MA/BA Gen4 Series — SUSS MicroTec",
    "footer.link2": "Mask Alignment — SUSS MicroTec",
    "note.show": "Learn more",
    "note.hide": "Hide details",
    "lang.aria": "Language",
    "model.wafer": "Wafer",
    "auto.manual": "Manual",
    "auto.semi": "Semi-Automated",
    "model.mjb4.kind": "Mask Aligner",
    "model.mjb4.tag": "Manual",
    "model.maba6.kind": "Mask & Bond Aligner",
    "model.maba6.tag": "Standard · Semi-Automated",
    "model.maba8.kind": "Mask & Bond Aligner",
    "model.maba8.tag": "Standard · Semi-Automated",
    "model.ma12.kind": "Mask Aligner",
    "model.ma12.tag": "200 / 300 mm · Semi-Automated",

    "sec.exposure_area.title": "Exposure Area",
    "sec.exposure_area.notes":
      "a. The exposure area is the wafer area covered by a single exposure and should match both wafer and mask size.<br/>" +
      "b. Round exposure suits most round wafers; squared exposure suits square substrates or full-field exposure of large patterns.<br/>" +
      "c. Supported ranges differ by model: MJB4 4″, MA/BA6 Gen4 6″, MA/BA8 Gen4 8″, MA12 Gen3 12″.",
    "sec.alignment.title": "Alignment Type",
    "sec.alignment.notes":
      "a. Three alignment modes are available: TSA (top side), BSA (bottom side) and IR (infrared).<br/>" +
      "b. BSA uses a bottom-side microscope; IR uses transmitted infrared imaging. BSA is generally more compatible and independent of substrate material — choose BSA for backside-only alignment.<br/>" +
      "c. If alignment marks are not visible from either side, add the IR module.",
    "sec.tsa_objective.title": "TSA Objective",
    "sec.tsa_objective.notes":
      "a. A 5X objective is sufficient for most applications: 112X optical magnification, field of view 1.56×2.07 mm.<br/>" +
      "b. For very small alignment marks (<50 µm) add a 10X objective: doubled magnification, field of view 0.78×1.04 mm.<br/>" +
      "c. Standard 5X and 10X objectives have a minimum clearance of 29 mm; for closer working distance choose 11.25X Offset (8 mm) or 7.2X Offset (13 mm).",
    "sec.light_source.title": "UV Light Source",
    "sec.light_source.notes":
      "a. The LED is off when not exposing; intensity drops to 70% after about 5000 h, expected lifetime 20000 h.<br/>" +
      "b. The high-pressure mercury lamp must stay on even when not exposing; lamp lifetime is about 600 h.<br/>" +
      "c. LED is replacing mercury lamps as the mainstream; SUSS offers mercury-to-LED conversion support.",
    "sec.uv_spectrum.title": "UV Spectrum (Mercury Lamp)",
    "sec.filter.title": "Filter",
    "sec.exposure_mode.title": "Exposure Dosage Control Mode",
    "sec.exposure_mode.notes":
      "CPC is constant power mode, controlling the dose via exposure time; CDC is constant dose mode, where the dose is entered directly and operation is more convenient. CDC includes CPC functionality. For R&amp;D units we recommend configuring CPC only." +
      '<figure class="note-img"><img src="images/CDC.png?v=20261109" alt="CPC / CDC dosage control" loading="lazy" /></figure>',
    "sec.auto_alignment.title": "Automatic Alignment",
    "sec.auto_alignment.notes":
      "MA6 / MA8 can be equipped with Auto Alignment (±0.5 µm for TSA) or high-precision Direct Alignment (±0.25 µm).<br/>" +
      "The figure below explains high-precision direct alignment (DirectAlign®)." +
      '<figure class="note-img"><img src="images/DA.png?v=20261109" alt="DirectAlign high-precision alignment" loading="lazy" /></figure>',
    "sec.accessories.title": "Additional Accessories",
    "sec.chuck.title": "Chuck",
    "sec.maskholder.title": "Mask Holder",
    "sec.bond_alignment.title": "Bond Alignment",

    "opt.exposure_area.4round": '4″ Round',
    "opt.exposure_area.6round": '6″ Round',
    "opt.exposure_area.6sq": '6″ Squared',
    "opt.exposure_area.8round": '8″ Round',
    "opt.exposure_area.8sq": '8″ Squared',
    "opt.exposure_area.12round": '12″ Round',
    "opt.exposure_area.12sq": '12″ Squared',

    "opt.alignment.tsa": "TSA (Top Side Only)",
    "opt.alignment.tsa_bsa": "TSA + BSA (Top + Bottom)",
    "opt.alignment.bsa": "BSA (Bottom Side Only)",
    "opt.alignment.ir_tsa": "TSA + BSA + IR Visualization via TSA (front + back + IR backside source, front observation)",
    "opt.alignment.ir_bsa": "TSA + BSA + IR Visualization via BSA (front + back + IR front source, back observation)",
    "opt.alignment.none": "No Alignment",

    "opt.tsa_objective.5x": "5X Standard",
    "opt.tsa_objective.10x": "10X Standard",
    "opt.tsa_objective.11_25x": "11.25X Offset",
    "opt.tsa_objective.7_2x": "7.2X Offset",

    "opt.light_source.led": "LED",
    "opt.light_source.hg": "HG High-pressure Mercury Lamp",

    "opt.uv_spectrum.uv400": "UV400",
    "opt.uv_spectrum.uv400_uv300": "UV400 + UV300",

    "opt.filter.i_line": "i-Line Filter",
    "opt.filter.g_line": "g-Line Filter",
    "opt.filter.h_line": "h-Line Filter",
    "opt.filter.gh_line": "gh-Line Filter",
    "opt.filter.t25": "25% Transmission Filter",
    "opt.filter.t33": "33% Transmission Filter",
    "opt.filter.t50": "50% Transmission Filter",
    "opt.filter.t70": "70% Transmission Filter",

    "opt.exposure_mode.cpc": "CPC — Constant Power Mode (exposure time)",
    "opt.exposure_mode.cdc": "CDC — Constant Dose Mode (direct dose)",

    "opt.auto_alignment.manual": "Full Manual Alignment",
    "opt.auto_alignment.auto": "Auto Alignment (±0.5 µm)",
    "opt.auto_alignment.direct": "Direct Alignment (DirectAlign®) (±0.25 µm)",

    "opt.accessories.intensity_meter": "Intensity Meter (original)",
    "opt.accessories.vacuum_pump": "Facility Vacuum Pump",
    "opt.accessories.sector_disk": "Sector Exposure Disk",
    "opt.accessories.filter_cda": "Filter Unit CDA",
    "opt.accessories.cassette_tray": "Cassette Tray",
    "opt.accessories.tool_tray": "Tool Tray",

    "chuckopt.vac_contact": "Vacuum Contact",
    "chuckopt.bsa": "BSA (Backside Alignment)",
    "chuckopt.teflon": "Anti-reflection Coating",
    "mhopt.round": "Round Exposure Opening",
    "mhopt.square": "Square Exposure Opening",
    "mhopt.non_contact": "Non-contact Leveling",
    "bond.size.ba8": '8″ Wafer Bond Alignment',
    "bond.size.ba6": '6″ Wafer Bond Alignment',
    "bond.size.ba4": '4″ Wafer Bond Alignment',
    "bond.size.ba_pieces": '3″ and Pieces BA',

    "notes.chuck":
      "1. A vacuum-contact chuck has a rubber ring that forms the vacuum cavity; vacuum contact gives the highest resolution but the most mask wear.<br/>" +
      "2. A backside-alignment chuck has a bottom microscope window.<br/>" +
      "3. For transparent substrates, use an anti-reflection coated chuck to avoid secondary exposure from UV reflected by the chuck.<br/>" +
      "4. Special requirements (warpage >200 µm, thick wafers >3 mm, high-precision flat alignment) need LED backlighting or mirror reflection.",
    "notes.maskholder":
      "1. A square opening facilitates edge-based alignment of the first mask layer, but the vacuum area holding the mask is smaller; choose round openings for round wafers and square openings for square wafers.<br/>" +
      "2. Non-contact leveling reduces mask damage but costs more; research/education or low-volume users may skip it.<br/>" +
      "3. Because 9″ and 14″ masks are expensive, a mask holder supporting non-contact leveling is supplied regardless of selection.",
    "notes.bond":
      "a. Bond alignment aligns wafers and pieces in bonding processes; multiple wafer sizes can be selected at once.<br/>" +
      "b. Supports 8″, 6″, 4″ wafers and pieces of 3″ and below, multi-selectable per production needs.<br/>" +
      "c. If alignment must be done directly on the bond aligner (without transferring to the mask aligner), additionally tick “Direct Bonding on Aligner”." +

      '<figure class="note-img"><img src="images/BA.png?v=20261109" alt="Bond Alignment" loading="lazy" /></figure>',

    "dyn.chuckTitle": "Chuck #{n}",
    "dyn.holderTitle": "Mask Holder #{n}",
    "dyn.waferSize": "Wafer Size",
    "dyn.openingSize": "Exposure Opening Size",
    "dyn.nonstd": "Non-standard Chuck",
    "dyn.nonstdNone": "— Standard (none) —",
    "dyn.addChuck": "Add chuck",
    "dyn.reset": "Reset",
    "dyn.remove": "Remove",
    "dyn.addHolder": "Add mask holder",
    "dyn.addBond": "Add bond alignment",
    "dyn.removeBond": "Remove bond alignment",
    "dyn.noChuck": "No chuck added yet — use the button above to add one.",
    "dyn.noHolder": "No mask holder added yet — use the button above to add one.",
    "dyn.noBond": "Bond alignment not added yet — use the button above to add it.",
    "dyn.bondDirect": "Direct Bonding on Aligner",
    "dyn.chuckKey": "Chuck #{n}",
    "dyn.holderKey": "Mask Holder #{n}",
    "dyn.bondKey": "Bond Alignment",
    "dyn.unspecified": "Not specified",
    "dyn.unspecifiedNonStd": "Non-standard chuck not specified",
    "size.nonstd": "Non-standard",
    "chuck.bsa.yes": "BSA supported",
    "chuck.bsa.no": "BSA not supported",
    "chuck.vac.yes": "Vacuum contact supported",
    "chuck.vac.no": "Vacuum contact not supported",
    "chuck.teflon.yes": "Teflon coating",
    "chuck.teflon.no": "No Teflon coating",

    "val.title": "Please complete the following required fields before saving:",
    "val.customer": "Customer name",
    "val.owner": "Owner",
    "val.exposure": "Exposure area",
    "val.alignment": "Alignment type",
    "val.devices": "Chuck or mask holder (at least one)",
    "err.import": "Import failed: invalid JSON.",
    "meta.customer": "Customer: {v}",
    "meta.owner": "Owner: {v}",
    "meta.date": "Date: {v}",

    "svg.uv": "UV light",
    "svg.wafer": "Wafer",
    "svg.round": "Round",
    "svg.square": "Squared",
    "svg.diameter": "diameter",
    "svg.side": "side",
    "svg.caption": "{shape} exposure area · {dim} {size}″ ({mm} mm)",
    "svg.diameterLabel": "Ø {mm} mm ({size}″)",
    "svg.sideLabel": "Side {mm} mm ({size}″)",
    "svg.ariaRound": "{size}″ round exposure area over a wafer, UV light on top",
    "svg.ariaSquare": "{size}″ squared exposure area over a wafer, UV light on top",
  },

  zh: {
    "app.title": "SUSS 掩模 / 键合对准机配置器 · MJB4 / MA6 / MA8 / MA12",
    "brand.title": "掩模 / 键合对准机配置器",
    "brand.subtitle": "MJB4 · MA/BA6 Gen4 · MA/BA8 Gen4 · MA12 Gen3",
    "field.customer": "客户名称",
    "field.owner": "负责人",
    "field.date": "日期",
    "ph.customer": "客户名称",
    "ph.owner": "负责人",
    "panel.title": "设备型号",
    "panel.sub": "选择目标平台，曝光范围与选项将随之适配",
    "about.title": "关于 SUSS MicroTec",
    "about.p1":
      "SUSS MicroTec 拥有超过 75 年工程经验，是半导体及相关市场中先进后端与光掩模解决方案的领先供应商，产品覆盖成像（光刻 / 掩模对准）、涂胶、键合与光掩模等多个领域。",
    "about.p2":
      "MA/BA Gen4 系列为半自动掩模 / 键合对准平台，配备 MO Exposure Optics<sup>®</sup> 远心照明，分辨率可达 <strong>0.8 µm</strong>（硬 / 软 / 真空接触模式）；可选 DirectAlign<sup>®</sup> 技术实现 <strong>0.5 µm</strong> 套刻精度，支持正面 (TSA)、背面 (BSA) 与红外 (IR) 对准。典型应用：先进封装、MEMS/NEMS、3D 集成、化合物半导体、LED、微光学、AR 与光电子器件。",
    "about.src": "数据来源与图片版权：SUSS MicroTec 官方网站。",
    "about.link": "下载产品手册（PDF）",
    "btn.import": "导入",
    "btn.reset": "重置全部",
    "btn.print": "打印为 PDF",
    "btn.json": "保存为 JSON",
    "tip.import": "导入配置 (JSON)",
    "tip.reset": "清空所有设置",
    "summary.title": "已选配置",
    "summary.empty": "尚未选择任何配置项",
    "summary.model": "设备型号",
    "footer.src": "产品信息来源：",
    "footer.link1": "MA/BA Gen4 Series — SUSS MicroTec",
    "footer.link2": "Mask Alignment — SUSS MicroTec",
    "note.show": "进一步了解",
    "note.hide": "收起说明",
    "lang.aria": "语言",
    "model.wafer": "晶圆",
    "auto.manual": "手动",
    "auto.semi": "半自动",
    "model.mjb4.kind": "掩模对准机",
    "model.mjb4.tag": "手动",
    "model.maba6.kind": "掩模 / 键合对准机",
    "model.maba6.tag": "标准 · 半自动",
    "model.maba8.kind": "掩模 / 键合对准机",
    "model.maba8.tag": "标准 · 半自动",
    "model.ma12.kind": "掩模对准机",
    "model.ma12.tag": "200 / 300 mm · 半自动",

    "sec.exposure_area.title": "曝光范围",
    "sec.exposure_area.notes":
      "a. 曝光范围指单次曝光所能覆盖的晶圆区域尺寸，应与晶圆尺寸及掩模版尺寸相匹配。<br/>" +
      "b. 圆形（Round）曝光适合大多数圆形晶圆，光斑为圆形；方形（Squared）曝光适合方形基片或需整片曝光的大面积图形，光斑为方形。<br/>" +
      "c. 不同机型支持的曝光范围不同：MJB4 支持 4″，MA/BA6 Gen4 支持 6″，MA/BA8 Gen4 支持 8″，MA12 Gen3 支持 12″。",
    "sec.alignment.title": "对准方式",
    "sec.alignment.notes":
      "a. 共有三种对准方式：TSA 正面、BSA 背面、IR 红外。<br/>" +
      "b. BSA 采用背面光学显微镜成像，IR 通过透射式红外成像；一般 BSA 比 IR 兼容性更强，成像不受衬底材料组成影响。仅做背面对位建议选 BSA。<br/>" +
      "c. 若对准标记从上方和下方都无法观察到，可增配 IR 模块。",
    "sec.tsa_objective.title": "TSA 物镜",
    "sec.tsa_objective.notes":
      "a. 大多数应用采用 5 倍物镜即可，光学放大 112 倍，视场 1.56×2.07 mm。<br/>" +
      "b. 对准标记特别小（<50 µm）可加 10 倍物镜，放大一倍，视场 0.78×1.04 mm。<br/>" +
      "c. 标准 5 倍与 10 倍物镜最小间隙 29 mm；需靠得更近可选 11.25X Offset（8 mm）或 7.2X Offset（13 mm）。",
    "sec.light_source.title": "紫外光源",
    "sec.light_source.notes":
      "a. LED 灯非曝光时关闭，约 5000 h 后光强衰减至 70%，期望寿命 20000 h。<br/>" +
      "b. 高压汞灯非曝光时也需开启，开机寿命约 600 h。<br/>" +
      "c. LED 将取代汞灯成为主流，SUSS 提供汞灯转 LED 技术支持。",
    "sec.uv_spectrum.title": "高压汞灯紫外波长范围",
    "sec.filter.title": "滤镜",
    "sec.exposure_mode.title": "曝光能量控制",
    "sec.exposure_mode.notes":
      "CPC 即恒定功率模式，通过曝光时间控制曝光量；CDC 即恒定剂量模式，可直接输入剂量，使用更方便。CDC 包含 CPC 功能。建议研发单位仅配置 CPC 模式。" +
      '<figure class="note-img"><img src="images/CDC.png?v=20261109" alt="曝光能量控制 CPC / CDC" loading="lazy" /></figure>',
    "sec.auto_alignment.title": "对准自动化",
    "sec.auto_alignment.notes":
      "MA6 / MA8 可配自动对位 Auto Alignment（对位精度 ±0.5 µm for TSA），或超高精度 Direct Alignment（对位精度 ±0.25 µm）。<br/>" +
      "下图为超高精度直接对准（DirectAlign®）的解释。" +
      '<figure class="note-img"><img src="images/DA.png?v=20261109" alt="超高精度直接对准 DirectAlign" loading="lazy" /></figure>',
    "sec.accessories.title": "附属小部件",
    "sec.chuck.title": "晶圆吸盘",
    "sec.maskholder.title": "掩模版架",
    "sec.bond_alignment.title": "键合对准",

    "opt.exposure_area.4round": "4英寸圆形",
    "opt.exposure_area.6round": "6英寸圆形",
    "opt.exposure_area.6sq": "6英寸方形",
    "opt.exposure_area.8round": "8英寸圆形",
    "opt.exposure_area.8sq": "8英寸方形",
    "opt.exposure_area.12round": "12英寸圆形",
    "opt.exposure_area.12sq": "12英寸方形",

    "opt.alignment.tsa": "TSA（仅正面）",
    "opt.alignment.tsa_bsa": "TSA + BSA（正面 + 背面）",
    "opt.alignment.bsa": "BSA（仅背面）",
    "opt.alignment.ir_tsa": "TSA + BSA + IR Visualization via TSA（正面 + 背面 + 红外背面光源，正面观察）",
    "opt.alignment.ir_bsa": "TSA + BSA + IR Visualization via BSA（正面 + 背面 + 红外正面光源，背面观察）",
    "opt.alignment.none": "No Alignment（不做对准）",

    "opt.tsa_objective.5x": "5X Standard 标准物镜",
    "opt.tsa_objective.10x": "10X Standard 标准物镜",
    "opt.tsa_objective.11_25x": "11.25X Offset 标准物镜",
    "opt.tsa_objective.7_2x": "7.2X Offset 标准物镜",

    "opt.light_source.led": "LED",
    "opt.light_source.hg": "HG 高压汞灯",

    "opt.uv_spectrum.uv400": "UV400",
    "opt.uv_spectrum.uv400_uv300": "UV400 + UV300",

    "opt.filter.i_line": "i-Line Filter",
    "opt.filter.g_line": "g-Line Filter",
    "opt.filter.h_line": "h-Line Filter",
    "opt.filter.gh_line": "gh-Line Filter",
    "opt.filter.t25": "25% Transmission Filter",
    "opt.filter.t33": "33% Transmission Filter",
    "opt.filter.t50": "50% Transmission Filter",
    "opt.filter.t70": "70% Transmission Filter",

    "opt.exposure_mode.cpc": "CPC 通过曝光时间控制",
    "opt.exposure_mode.cdc": "CDC 直接控制曝光剂量",

    "opt.auto_alignment.manual": "手动对准 Full Manual Alignment",
    "opt.auto_alignment.auto": "自动对准 Auto Alignment（±0.5 µm）",
    "opt.auto_alignment.direct": "超高精度对准 Direct Alignment（±0.25 µm）",

    "opt.accessories.intensity_meter": "原装光强计",
    "opt.accessories.vacuum_pump": "厂务真空泵",
    "opt.accessories.sector_disk": "分区曝光板",
    "opt.accessories.filter_cda": "压缩空气滤芯",
    "opt.accessories.cassette_tray": "片盒托盘",
    "opt.accessories.tool_tray": "工装夹具收纳托盘",

    "chuckopt.vac_contact": "支持真空接触",
    "chuckopt.bsa": "支持背面对准",
    "chuckopt.teflon": "支持抗反射涂层",
    "mhopt.round": "圆形开孔",
    "mhopt.square": "方形开孔",
    "mhopt.non_contact": "支持非接触式找平",
    "bond.size.ba8": "8英寸晶圆 键合对准",
    "bond.size.ba6": "6英寸晶圆 键合对准",
    "bond.size.ba4": "4英寸晶圆 键合对准",
    "bond.size.ba_pieces": "3英寸及以下小片",

    "notes.chuck":
      "1. 真空接触 Chuck 带用于形成真空腔体的橡胶圈；真空接触分辨率最高，掩模版损伤也最大。<br/>" +
      "2. 背面对准 Chuck 带背面显微镜观察窗。<br/>" +
      "3. 透明衬底建议配置抗反射涂层 Chuck，防止紫外光透射到 Chuck 反射造成二次曝光。<br/>" +
      "4. 特殊要求（大翘曲 >200 µm、超厚片 >3 mm、高精度平边对准）需配 LED 背光或镜面反射。",
    "notes.maskholder":
      "1. 方形开孔方便首层掩模版寻边式对准，但吸附 Mask 的真空区较小；建议圆形晶圆选圆形开孔，方形晶圆选方形开孔。<br/>" +
      "2. 非接触式找平可减少掩模版损伤，但价格较高，科研教育或低产量单位可不选。<br/>" +
      "3. 9″ 与 14″ 因 Mask 价格较贵，无论是否选择，都会提供支持非接触式找平的掩模版架。",
    "notes.bond":
      "a. 键合对准用于键合（Bonding）工艺中晶圆与小片的对准，可按工艺需求同时选择多种晶圆尺寸。<br/>" +
      "b. 支持 8″、6″、4″ 晶圆以及 3″ 及以下小片，可根据产线需求多选。<br/>" +
      "c. 若需在键合对准机上直接完成对准（无需转移至对准机），可额外勾选「直接键合」选项。" +
      '<figure class="note-img"><img src="images/BA.png?v=20261109" alt="键合对准 Bond Alignment" loading="lazy" /></figure>',

    "dyn.chuckTitle": "晶圆吸盘 Chuck #{n}",
    "dyn.holderTitle": "掩模版架 Mask Holder #{n}",
    "dyn.waferSize": "晶圆尺寸 Wafer Size",
    "dyn.openingSize": "曝光孔大小 Exposure Opening Size",
    "dyn.nonstd": "非标准晶圆夹具 Non-standard Chuck",
    "dyn.nonstdNone": "— 标准（不选）—",
    "dyn.addChuck": "增加晶圆吸盘",
    "dyn.reset": "重置",
    "dyn.remove": "删除",
    "dyn.addHolder": "增加掩模版架",
    "dyn.addBond": "添加键合对准功能",
    "dyn.removeBond": "移除键合对准功能",
    "dyn.noChuck": "尚未添加晶圆吸盘，点击上方按钮添加。",
    "dyn.noHolder": "尚未添加掩模版架，点击上方按钮添加。",
    "dyn.noBond": "尚未添加键合对准功能，点击上方按钮添加。",
    "dyn.bondDirect": "在对准机上进行直接键合",
    "dyn.chuckKey": "Chuck #{n}",
    "dyn.holderKey": "Mask Holder #{n}",
    "dyn.bondKey": "键合对准",
    "dyn.unspecified": "未指定",
    "dyn.unspecifiedNonStd": "未指定非标夹具",
    "size.nonstd": "非标",
    "chuck.bsa.yes": "支持BSA",
    "chuck.bsa.no": "不支持BSA",
    "chuck.vac.yes": "支持真空接触",
    "chuck.vac.no": "不支持真空接触",
    "chuck.teflon.yes": "含Teflon涂层",
    "chuck.teflon.no": "无Teflon涂层",

    "val.title": "保存前请先完成以下必填项：",
    "val.customer": "客户名称",
    "val.owner": "负责人",
    "val.exposure": "曝光范围",
    "val.alignment": "对准方式",
    "val.devices": "晶圆吸盘或掩模版（至少一个）",
    "err.import": "导入失败：JSON 格式错误。",
    "meta.customer": "客户：{v}",
    "meta.owner": "负责人：{v}",
    "meta.date": "日期：{v}",

    "svg.uv": "紫外光（UV）",
    "svg.wafer": "晶圆",
    "svg.round": "圆形",
    "svg.square": "方形",
    "svg.diameter": "直径",
    "svg.side": "边长",
    "svg.caption": "{shape}曝光范围 · {dim} {size}″（{mm} mm）",
    "svg.diameterLabel": "Ø {mm} mm（{size}″）",
    "svg.sideLabel": "边长 {mm} mm（{size}″）",
    "svg.ariaRound": "{size} 英寸圆形曝光范围与晶圆示意图，紫外光在上方",
    "svg.ariaSquare": "{size} 英寸方形曝光范围与晶圆示意图，紫外光在上方",
  },

  de: {
    "app.title": "SUSS Masken- & Bond-Ausrichter Konfigurator · MJB4 / MA6 / MA8 / MA12",
    "brand.title": "Masken- & Bond-Ausrichter Konfigurator",
    "brand.subtitle": "MJB4 · MA/BA6 Gen4 · MA/BA8 Gen4 · MA12 Gen3",
    "field.customer": "Kunde",
    "field.owner": "Verantwortlich",
    "field.date": "Datum",
    "ph.customer": "Kundenname",
    "ph.owner": "Name",
    "panel.title": "Gerätemodell",
    "panel.sub": "Plattform wählen — Belichtungsbereich und Optionen passen sich an",
    "about.title": "Über SUSS MicroTec",
    "about.p1":
      "Mit über 75 Jahren Erfahrung ist SUSS MicroTec ein führender Anbieter von Backend- und Photomasken-Lösungen für die Halbleiterbranche — Imaging (Lithografie / Maskenausrichtung), Beschichtung, Bonden und Photomasken.",
    "about.p2":
      "Die MA/BA Gen4 Serie ist eine halbautomatische Masken-/Bond-Ausrichtungsplattform mit MO Exposure Optics<sup>®</sup> telezentrischer Beleuchtung und Auflösung bis <strong>0,8 µm</strong> (Hart-/Weich-/Vakuumkontakt). Optional erreicht DirectAlign<sup>®</sup> <strong>0,5 µm</strong> Overlay-Genauigkeit und unterstützt Vorder- (TSA), Rückseiten- (BSA) und Infrarot-Ausrichtung (IR). Typische Anwendungen: Advanced Packaging, MEMS/NEMS, 3D-Integration, Verbindungshalbleiter, LED, Mikrooptik, AR und Optoelektronik.",
    "about.src": "Datenquelle und Bildrechte: offizielle Website von SUSS MicroTec.",
    "about.link": "Produktbroschüre herunterladen (PDF)",
    "btn.import": "Importieren",
    "btn.reset": "Alles zurücksetzen",
    "btn.print": "Als PDF drucken",
    "btn.json": "Als JSON speichern",
    "tip.import": "Konfiguration importieren (JSON)",
    "tip.reset": "Alle Einstellungen löschen",
    "summary.title": "Ausgewählte Konfiguration",
    "summary.empty": "Noch keine Konfiguration ausgewählt",
    "summary.model": "Modell",
    "footer.src": "Produktinformationen:",
    "footer.link1": "MA/BA Gen4 Series — SUSS MicroTec",
    "footer.link2": "Mask Alignment — SUSS MicroTec",
    "note.show": "Mehr erfahren",
    "note.hide": "Details ausblenden",
    "lang.aria": "Sprache",
    "model.wafer": "Wafer",
    "auto.manual": "Manuell",
    "auto.semi": "Halbautomatisch",
    "model.mjb4.kind": "Maskenausrichter",
    "model.mjb4.tag": "Manuell",
    "model.maba6.kind": "Masken- & Bond-Ausrichter",
    "model.maba6.tag": "Standard · Halbautom.",
    "model.maba8.kind": "Masken- & Bond-Ausrichter",
    "model.maba8.tag": "Standard · Halbautom.",
    "model.ma12.kind": "Maskenausrichter",
    "model.ma12.tag": "200 / 300 mm · Halbautom.",

    "sec.exposure_area.title": "Belichtungsbereich",
    "sec.exposure_area.notes":
      "a. Der Belichtungsbereich ist die Fläche, die eine einzelne Belichtung auf dem Wafer abdeckt, und sollte zu Wafer- und Maskengröße passen.<br/>" +
      "b. Runde Belichtung eignet sich für die meisten runden Wafer, quadratische für quadratische Substrate oder großflächige Vollfeld-Belichtung.<br/>" +
      "c. Der unterstützte Bereich hängt vom Modell ab: MJB4 4″, MA/BA6 Gen4 6″, MA/BA8 Gen4 8″, MA12 Gen3 12″.",
    "sec.alignment.title": "Ausrichtungsart",
    "sec.alignment.notes":
      "a. Es gibt drei Arten: TSA (Vorderseite), BSA (Rückseite) und IR (Infrarot).<br/>" +
      "b. BSA nutzt ein Rückseiten-Mikroskop, IR eine transmittierende Infrarotbildgebung. BSA ist meist kompatibler und unabhängig vom Substratmaterial — für reine Rückseitenausrichtung BSA wählen.<br/>" +
      "c. Sind die Marken von keiner Seite sichtbar, IR-Modul ergänzen.",
    "sec.tsa_objective.title": "TSA-Objektiv",
    "sec.tsa_objective.notes":
      "a. Für die meisten Anwendungen genügt ein 5X-Objektiv: 112X Vergrößerung, Bildfeld 1,56×2,07 mm.<br/>" +
      "b. Bei sehr kleinen Marken (<50 µm) ein 10X-Objektiv ergänzen: doppelte Vergrößerung, Bildfeld 0,78×1,04 mm.<br/>" +
      "c. Standard 5X und 10X haben 29 mm Mindestabstand; für geringeren Abstand 11.25X Offset (8 mm) oder 7.2X Offset (13 mm).",
    "sec.light_source.title": "UV-Lichtquelle",
    "sec.light_source.notes":
      "a. Die LED ist außerhalb der Belichtung aus; die Intensität sinkt nach ca. 5000 h auf 70 %, Lebensdauer ca. 20000 h.<br/>" +
      "b. Die Quecksilberdampflampe muss auch außerhalb der Belichtung brennen; Lebensdauer ca. 600 h.<br/>" +
      "c. LED ersetzt zunehmend die Quecksilberlampe; SUSS bietet Umrüstung an.",
    "sec.uv_spectrum.title": "UV-Spektrum (Quecksilberlampe)",
    "sec.filter.title": "Filter",
    "sec.exposure_mode.title": "Belichtungsdosis-Steuerung",
    "sec.exposure_mode.notes":
      "CPC ist der Konstantleistungsmodus, die Dosis wird über die Belichtungszeit gesteuert; CDC ist der Konstanzdosis-Modus, bei dem die Dosis direkt eingegeben wird. CDC enthält CPC. Für F&amp;E-Einheiten empfehlen wir nur CPC." +
      '<figure class="note-img"><img src="images/CDC.png?v=20261109" alt="CPC / CDC Dosissteuerung" loading="lazy" /></figure>',
    "sec.auto_alignment.title": "Automatische Ausrichtung",
    "sec.auto_alignment.notes":
      "MA6 / MA8 sind mit Auto Alignment (±0,5 µm für TSA) oder hochpräziser Direct Alignment (±0,25 µm) erhältlich.<br/>" +
      "Die Abbildung erläutert die hochpräzise direkte Ausrichtung (DirectAlign®)." +
      '<figure class="note-img"><img src="images/DA.png?v=20261109" alt="DirectAlign hochpräzise Ausrichtung" loading="lazy" /></figure>',
    "sec.accessories.title": "Zubehör",
    "sec.chuck.title": "Wafer-Chuck",
    "sec.maskholder.title": "Maskenhalter",
    "sec.bond_alignment.title": "Bond-Ausrichtung",

    "opt.exposure_area.4round": "4″ rund",
    "opt.exposure_area.6round": "6″ rund",
    "opt.exposure_area.6sq": "6″ quadratisch",
    "opt.exposure_area.8round": "8″ rund",
    "opt.exposure_area.8sq": "8″ quadratisch",
    "opt.exposure_area.12round": "12″ rund",
    "opt.exposure_area.12sq": "12″ quadratisch",

    "opt.alignment.tsa": "TSA (nur Vorderseite)",
    "opt.alignment.tsa_bsa": "TSA + BSA (Vorder- + Rückseite)",
    "opt.alignment.bsa": "BSA (nur Rückseite)",
    "opt.alignment.ir_tsa": "TSA + BSA + IR-Visualisierung über TSA (vorne + hinten + IR-Rücklicht, Beobachtung von vorn)",
    "opt.alignment.ir_bsa": "TSA + BSA + IR-Visualisierung über BSA (vorne + hinten + IR-Frontlicht, Beobachtung von hinten)",
    "opt.alignment.none": "Keine Ausrichtung",

    "opt.tsa_objective.5x": "5X Standard",
    "opt.tsa_objective.10x": "10X Standard",
    "opt.tsa_objective.11_25x": "11.25X Offset",
    "opt.tsa_objective.7_2x": "7.2X Offset",

    "opt.light_source.led": "LED",
    "opt.light_source.hg": "HG Quecksilberdampflampe",

    "opt.uv_spectrum.uv400": "UV400",
    "opt.uv_spectrum.uv400_uv300": "UV400 + UV300",

    "opt.filter.i_line": "i-Line Filter",
    "opt.filter.g_line": "g-Line Filter",
    "opt.filter.h_line": "h-Line Filter",
    "opt.filter.gh_line": "gh-Line Filter",
    "opt.filter.t25": "25 % Transmissionsfilter",
    "opt.filter.t33": "33 % Transmissionsfilter",
    "opt.filter.t50": "50 % Transmissionsfilter",
    "opt.filter.t70": "70 % Transmissionsfilter",

    "opt.exposure_mode.cpc": "CPC — Konstantleistung (Belichtungszeit)",
    "opt.exposure_mode.cdc": "CDC — Konstanzdosis (Dosis direkt)",

    "opt.auto_alignment.manual": "Vollmanuelle Ausrichtung",
    "opt.auto_alignment.auto": "Automatische Ausrichtung (±0,5 µm)",
    "opt.auto_alignment.direct": "Direkte Ausrichtung (DirectAlign®) (±0,25 µm)",

    "opt.accessories.intensity_meter": "Intensitätsmesser (Original)",
    "opt.accessories.vacuum_pump": "Hausvakuumpumpe",
    "opt.accessories.sector_disk": "Sektor-Belichtungsscheibe",
    "opt.accessories.filter_cda": "Druckluftfilter",
    "opt.accessories.cassette_tray": "Kassettenablage",
    "opt.accessories.tool_tray": "Werkzeugablage",

    "chuckopt.vac_contact": "Vakuumkontakt",
    "chuckopt.bsa": "BSA (Rückseitenausrichtung)",
    "chuckopt.teflon": "Antireflexbeschichtung",
    "mhopt.round": "Runde Öffnung",
    "mhopt.square": "Quadratische Öffnung",
    "mhopt.non_contact": "Berührungslose Nivellierung",
    "bond.size.ba8": "8″ Wafer Bond-Ausrichtung",
    "bond.size.ba6": "6″ Wafer Bond-Ausrichtung",
    "bond.size.ba4": "4″ Wafer Bond-Ausrichtung",
    "bond.size.ba_pieces": "3″ und kleinere Teile",

    "notes.chuck":
      "1. Ein Vakuumkontakt-Chuck besitzt einen Gummiring für die Vakuumkammer; Vakuumkontakt liefert die höchste Auflösung, aber den größten Maskenverschleiß.<br/>" +
      "2. Ein BSA-Chuck hat ein Rückseiten-Mikroskopfenster.<br/>" +
      "3. Für transparente Substrate einen Chuck mit Antireflexbeschichtung wählen, um Doppelbelichtung durch reflektiertes UV zu vermeiden.<br/>" +
      "4. Sonderanforderungen (Verwölbung >200 µm, dicke Wafer >3 mm, hochpräzise Flat-Ausrichtung) benötigen LED-Hintergrundlicht oder Spiegelreflexion.",
    "notes.maskholder":
      "1. Eine quadratische Öffnung erleichtert die kantenbasierte Ausrichtung der ersten Maske, die Vakuumfläche ist jedoch kleiner; runde Öffnung für runde Wafer, quadratische für quadratische Wafer.<br/>" +
      "2. Berührungslose Nivellierung reduziert Maskenschäden, ist aber teurer; für Forschung/Lehre oder geringe Stückzahlen optional.<br/>" +
      "3. Da 9″- und 14″-Masken teuer sind, wird unabhängig von der Auswahl ein Maskenhalter mit berührungsloser Nivellierung geliefert.",
    "notes.bond":
      "a. Bond-Ausrichtung dient der Ausrichtung von Wafern und Teilen im Bondprozess; mehrere Wafergrößen sind gleichzeitig wählbar.<br/>" +
      "b. Unterstützt 8″, 6″, 4″ Wafer sowie Teile bis 3″, je nach Bedarf mehrfach wählbar.<br/>" +
      "c. Soll die Ausrichtung direkt auf dem Bond-Ausrichter erfolgen, zusätzlich „Direktes Bonden auf dem Ausrichter“ wählen." +
      '<figure class="note-img"><img src="images/BA.png?v=20261109" alt="Bond-Ausrichtung" loading="lazy" /></figure>',

    "dyn.chuckTitle": "Chuck #{n}",
    "dyn.holderTitle": "Maskenhalter #{n}",
    "dyn.waferSize": "Wafergröße",
    "dyn.openingSize": "Öffnungsgröße",
    "dyn.nonstd": "Sonder-Chuck",
    "dyn.nonstdNone": "— Standard (keiner) —",
    "dyn.addChuck": "Chuck hinzufügen",
    "dyn.reset": "Zurücksetzen",
    "dyn.remove": "Entfernen",
    "dyn.addHolder": "Maskenhalter hinzufügen",
    "dyn.addBond": "Bond-Ausrichtung hinzufügen",
    "dyn.removeBond": "Bond-Ausrichtung entfernen",
    "dyn.noChuck": "Noch kein Chuck hinzugefügt — Schaltfläche oben verwenden.",
    "dyn.noHolder": "Noch kein Maskenhalter hinzugefügt — Schaltfläche oben verwenden.",
    "dyn.noBond": "Bond-Ausrichtung noch nicht hinzugefügt — Schaltfläche oben verwenden.",
    "dyn.bondDirect": "Direktes Bonden auf dem Ausrichter",
    "dyn.chuckKey": "Chuck #{n}",
    "dyn.holderKey": "Maskenhalter #{n}",
    "dyn.bondKey": "Bond-Ausrichtung",
    "dyn.unspecified": "Nicht angegeben",
    "dyn.unspecifiedNonStd": "Sonder-Chuck nicht angegeben",
    "size.nonstd": "Sondermaß",
    "chuck.bsa.yes": "BSA unterstützt",
    "chuck.bsa.no": "BSA nicht unterstützt",
    "chuck.vac.yes": "Vakuumkontakt unterstützt",
    "chuck.vac.no": "Vakuumkontakt nicht unterstützt",
    "chuck.teflon.yes": "Teflon-Beschichtung",
    "chuck.teflon.no": "Keine Teflon-Beschichtung",

    "val.title": "Bitte vor dem Speichern folgende Pflichtfelder ausfüllen:",
    "val.customer": "Kundenname",
    "val.owner": "Verantwortlicher",
    "val.exposure": "Belichtungsbereich",
    "val.alignment": "Ausrichtungsart",
    "val.devices": "Chuck oder Maskenhalter (mindestens einer)",
    "err.import": "Import fehlgeschlagen: ungültiges JSON.",
    "meta.customer": "Kunde: {v}",
    "meta.owner": "Verantwortlich: {v}",
    "meta.date": "Datum: {v}",

    "svg.uv": "UV-Licht",
    "svg.wafer": "Wafer",
    "svg.round": "Rund",
    "svg.square": "Quadratisch",
    "svg.diameter": "Durchmesser",
    "svg.side": "Kante",
    "svg.caption": "Belichtungsbereich {shape} · {dim} {size}″ ({mm} mm)",
    "svg.diameterLabel": "Ø {mm} mm ({size}″)",
    "svg.sideLabel": "Kante {mm} mm ({size}″)",
    "svg.ariaRound": "{size}″ runder Belichtungsbereich über einem Wafer, UV-Licht von oben",
    "svg.ariaSquare": "{size}″ quadratischer Belichtungsbereich über einem Wafer, UV-Licht von oben",
  },

  ja: {
    "app.title": "SUSS マスク／ボンドアライナ コンフィギュレータ · MJB4 / MA6 / MA8 / MA12",
    "brand.title": "マスク／ボンドアライナ コンフィギュレータ",
    "brand.subtitle": "MJB4 · MA/BA6 Gen4 · MA/BA8 Gen4 · MA12 Gen3",
    "field.customer": "顧客名",
    "field.owner": "担当者",
    "field.date": "日付",
    "ph.customer": "顧客名",
    "ph.owner": "担当者名",
    "panel.title": "装置モデル",
    "panel.sub": "プラットフォームを選択すると、露光範囲とオプションが適合します",
    "about.title": "SUSS MicroTec について",
    "about.p1":
      "SUSS MicroTec は 75 年以上のエンジニアリング経験を持ち、半導体関連市場向けの先端バックエンドおよびフォトマスクソリューションの主要サプライヤです。イメージング（リソグラフィ／マスクアライメント）、コーティング、ボンディング、フォトマスクをカバーしています。",
    "about.p2":
      "MA/BA Gen4 シリーズは半自動マスク／ボンドアライナプラットフォームで、MO Exposure Optics<sup>®</sup> のテレセントリック照明により <strong>0.8 µm</strong> の解像度（ハード／ソフト／真空コンタクト）を実現します。オプションの DirectAlign<sup>®</sup> により <strong>0.5 µm</strong> の重ね合わせ精度を達成し、表面（TSA）、裏面（BSA）、赤外（IR）アライメントに対応します。主な用途：先端パッケージ、MEMS/NEMS、3D 集積、化合物半導体、LED、マイクロ光学、AR、光電子デバイス。",
    "about.src": "データ出典・画像著作権：SUSS MicroTec 公式サイト。",
    "about.link": "製品カタログをダウンロード（PDF）",
    "btn.import": "インポート",
    "btn.reset": "すべてリセット",
    "btn.print": "PDF で印刷",
    "btn.json": "JSON で保存",
    "tip.import": "構成をインポート（JSON）",
    "tip.reset": "すべての設定をクリア",
    "summary.title": "選択済み構成",
    "summary.empty": "まだ構成が選択されていません",
    "summary.model": "装置モデル",
    "footer.src": "製品情報：",
    "footer.link1": "MA/BA Gen4 Series — SUSS MicroTec",
    "footer.link2": "Mask Alignment — SUSS MicroTec",
    "note.show": "詳しく見る",
    "note.hide": "説明を閉じる",
    "lang.aria": "言語",
    "model.wafer": "ウェハ",
    "auto.manual": "手動",
    "auto.semi": "半自動",
    "model.mjb4.kind": "マスクアライナ",
    "model.mjb4.tag": "手動",
    "model.maba6.kind": "マスク／ボンドアライナ",
    "model.maba6.tag": "標準 · 半自動",
    "model.maba8.kind": "マスク／ボンドアライナ",
    "model.maba8.tag": "標準 · 半自動",
    "model.ma12.kind": "マスクアライナ",
    "model.ma12.tag": "200 / 300 mm · 半自動",

    "sec.exposure_area.title": "露光範囲",
    "sec.exposure_area.notes":
      "a. 露光範囲とは 1 回の露光でカバーできるウェハ領域のサイズで、ウェハサイズとマスクサイズに合わせる必要があります。<br/>" +
      "b. 円形露光はほとんどの円形ウェハに適し、方形露光は方形基板や大面積パターンの全面露光に適しています。<br/>" +
      "c. 対応範囲は機種ごとに異なります：MJB4 は 4″、MA/BA6 Gen4 は 6″、MA/BA8 Gen4 は 8″、MA12 Gen3 は 12″。",
    "sec.alignment.title": "アライメント方式",
    "sec.alignment.notes":
      "a. アライメント方式は TSA（表面）、BSA（裏面）、IR（赤外）の 3 種類です。<br/>" +
      "b. BSA は裏面光学顕微鏡、IR は透過赤外イメージングを使用します。一般に BSA の方が汎用性が高く、基板材料の影響を受けません。裏面のみの場合は BSA を推奨します。<br/>" +
      "c. マークが表裏どちらからも見えない場合は IR モジュールを追加してください。",
    "sec.tsa_objective.title": "TSA 対物レンズ",
    "sec.tsa_objective.notes":
      "a. 多くの用途では 5 倍対物レンズで十分です（光学倍率 112 倍、視野 1.56×2.07 mm）。<br/>" +
      "b. アライメントマークが非常に小さい場合（<50 µm）は 10 倍を追加（倍率 2 倍、視野 0.78×1.04 mm）。<br/>" +
      "c. 標準 5 倍・10 倍の最小間隔は 29 mm。より近接する場合は 11.25X Offset（8 mm）または 7.2X Offset（13 mm）を選択。",
    "sec.light_source.title": "UV 光源",
    "sec.light_source.notes":
      "a. LED は非露光時に消灯し、約 5000 h で光量が 70% まで低下、期待寿命は 20000 h です。<br/>" +
      "b. 高圧水銀ランプは非露光時も点灯が必要で、寿命は約 600 h です。<br/>" +
      "c. LED が水銀ランプに代わる主流となり、SUSS は水銀ランプから LED への変換をサポートします。",
    "sec.uv_spectrum.title": "UV スペクトル（水銀ランプ）",
    "sec.filter.title": "フィルター",
    "sec.exposure_mode.title": "露光量制御モード",
    "sec.exposure_mode.notes":
      "CPC は定電力モードで、露光時間によって露光量を制御します。CDC は定露光量モードで、線量を直接入力でき操作性に優れます。CDC は CPC の機能を含みます。研究開発用途では CPC のみの構成を推奨します。" +
      '<figure class="note-img"><img src="images/CDC.png?v=20261109" alt="CPC / CDC 露光量制御" loading="lazy" /></figure>',
    "sec.auto_alignment.title": "自動アライメント",
    "sec.auto_alignment.notes":
      "MA6 / MA8 には自動アライメント（TSA ±0.5 µm）または超高精度ダイレクトアライメント（±0.25 µm）を装備できます。<br/>" +
      "下図は超高精度ダイレクトアライメント（DirectAlign®）の説明です。" +
      '<figure class="note-img"><img src="images/DA.png?v=20261109" alt="DirectAlign 超高精度アライメント" loading="lazy" /></figure>',
    "sec.accessories.title": "付属部品",
    "sec.chuck.title": "ウェハチャック",
    "sec.maskholder.title": "マスクホルダー",
    "sec.bond_alignment.title": "ボンドアライメント",

    "opt.exposure_area.4round": "4インチ円形",
    "opt.exposure_area.6round": "6インチ円形",
    "opt.exposure_area.6sq": "6インチ方形",
    "opt.exposure_area.8round": "8インチ円形",
    "opt.exposure_area.8sq": "8インチ方形",
    "opt.exposure_area.12round": "12インチ円形",
    "opt.exposure_area.12sq": "12インチ方形",

    "opt.alignment.tsa": "TSA（表面のみ）",
    "opt.alignment.tsa_bsa": "TSA + BSA（表面 + 裏面）",
    "opt.alignment.bsa": "BSA（裏面のみ）",
    "opt.alignment.ir_tsa": "TSA + BSA + IR Visualization via TSA（表面 + 裏面 + 裏面 IR 光源、表面観察）",
    "opt.alignment.ir_bsa": "TSA + BSA + IR Visualization via BSA（表面 + 裏面 + 表面 IR 光源、裏面観察）",
    "opt.alignment.none": "アライメントなし",

    "opt.tsa_objective.5x": "5X 標準",
    "opt.tsa_objective.10x": "10X 標準",
    "opt.tsa_objective.11_25x": "11.25X オフセット",
    "opt.tsa_objective.7_2x": "7.2X オフセット",

    "opt.light_source.led": "LED",
    "opt.light_source.hg": "HG 高圧水銀ランプ",

    "opt.uv_spectrum.uv400": "UV400",
    "opt.uv_spectrum.uv400_uv300": "UV400 + UV300",

    "opt.filter.i_line": "i-Line フィルター",
    "opt.filter.g_line": "g-Line フィルター",
    "opt.filter.h_line": "h-Line フィルター",
    "opt.filter.gh_line": "gh-Line フィルター",
    "opt.filter.t25": "25% 透過フィルター",
    "opt.filter.t33": "33% 透過フィルター",
    "opt.filter.t50": "50% 透過フィルター",
    "opt.filter.t70": "70% 透過フィルター",

    "opt.exposure_mode.cpc": "CPC — 定電力モード（露光時間制御）",
    "opt.exposure_mode.cdc": "CDC — 定露光量モード（線量直接入力）",

    "opt.auto_alignment.manual": "完全手動アライメント",
    "opt.auto_alignment.auto": "自動アライメント（±0.5 µm）",
    "opt.auto_alignment.direct": "ダイレクトアライメント（DirectAlign®）（±0.25 µm）",

    "opt.accessories.intensity_meter": "純正光量計",
    "opt.accessories.vacuum_pump": "ファシリティ真空ポンプ",
    "opt.accessories.sector_disk": "セクター露光板",
    "opt.accessories.filter_cda": "圧縮空気フィルター",
    "opt.accessories.cassette_tray": "カセットトレイ",
    "opt.accessories.tool_tray": "治具トレイ",

    "chuckopt.vac_contact": "真空コンタクト対応",
    "chuckopt.bsa": "BSA（裏面アライメント）対応",
    "chuckopt.teflon": "反射防止コーティング対応",
    "mhopt.round": "円形開口",
    "mhopt.square": "方形開口",
    "mhopt.non_contact": "非接触レベリング対応",
    "bond.size.ba8": "8インチウェハ ボンドアライメント",
    "bond.size.ba6": "6インチウェハ ボンドアライメント",
    "bond.size.ba4": "4インチウェハ ボンドアライメント",
    "bond.size.ba_pieces": "3インチ以下 小片",

    "notes.chuck":
      "1. 真空コンタクトチャックは真空室を形成するゴムリングを備えます。真空コンタクトは最高解像度ですが、マスク損傷も最大です。<br/>" +
      "2. 裏面アライメントチャックは裏面顕微鏡用の窓を備えます。<br/>" +
      "3. 透明基板では、チャック反射による二重露光を防ぐため反射防止コーティングチャックを推奨します。<br/>" +
      "4. 特殊要件（反り >200 µm、厚膜 >3 mm、高精度フラットアライメント）には LED バックライトまたはミラー反射が必要です。",
    "notes.maskholder":
      "1. 方形開口は初層マスクのエッジ基準アライメントに便利ですが、マスクを吸着する真空領域が小さくなります。円形ウェハには円形開口、方形ウェハには方形開口を推奨します。<br/>" +
      "2. 非接触レベリングはマスク損傷を低減しますが高価です。研究教育や低生産量では省略可能です。<br/>" +
      "3. 9″・14″ はマスクが高価なため、選択に関わらず非接触レベリング対応のマスクホルダーを提供します。",
    "notes.bond":
      "a. ボンドアライメントはボンディング工程でのウェハ・小片の位置合わせに使用し、複数のウェハサイズを同時に選択できます。<br/>" +
      "b. 8″、6″、4″ ウェハおよび 3″ 以下の小片に対応し、生産ラインの要件に応じて複数選択できます。<br/>" +
      "c. ボンドアライナ上で直接位置合わせを行う場合は「アライナ上で直接ボンディング」を追加で選択してください。" +
      '<figure class="note-img"><img src="images/BA.png?v=20261109" alt="ボンドアライメント" loading="lazy" /></figure>',

    "dyn.chuckTitle": "ウェハチャック #{n}",
    "dyn.holderTitle": "マスクホルダー #{n}",
    "dyn.waferSize": "ウェハサイズ",
    "dyn.openingSize": "露光開口サイズ",
    "dyn.nonstd": "非標準チャック",
    "dyn.nonstdNone": "— 標準（選択なし）—",
    "dyn.addChuck": "チャックを追加",
    "dyn.reset": "リセット",
    "dyn.remove": "削除",
    "dyn.addHolder": "マスクホルダーを追加",
    "dyn.addBond": "ボンドアライメントを追加",
    "dyn.removeBond": "ボンドアライメントを削除",
    "dyn.noChuck": "チャックが未追加です。上のボタンで追加してください。",
    "dyn.noHolder": "マスクホルダーが未追加です。上のボタンで追加してください。",
    "dyn.noBond": "ボンドアライメントが未追加です。上のボタンで追加してください。",
    "dyn.bondDirect": "アライナ上で直接ボンディング",
    "dyn.chuckKey": "チャック #{n}",
    "dyn.holderKey": "マスクホルダー #{n}",
    "dyn.bondKey": "ボンドアライメント",
    "dyn.unspecified": "未指定",
    "dyn.unspecifiedNonStd": "非標準チャック未指定",
    "size.nonstd": "非標準",
    "chuck.bsa.yes": "BSA 対応",
    "chuck.bsa.no": "BSA 非対応",
    "chuck.vac.yes": "真空コンタクト対応",
    "chuck.vac.no": "真空コンタクト非対応",
    "chuck.teflon.yes": "Teflon コーティングあり",
    "chuck.teflon.no": "Teflon コーティングなし",

    "val.title": "保存前に以下の必須項目を入力してください：",
    "val.customer": "顧客名",
    "val.owner": "担当者",
    "val.exposure": "露光範囲",
    "val.alignment": "アライメント方式",
    "val.devices": "チャックまたはマスクホルダー（少なくとも 1 つ）",
    "err.import": "インポート失敗：JSON 形式が正しくありません。",
    "meta.customer": "顧客：{v}",
    "meta.owner": "担当者：{v}",
    "meta.date": "日付：{v}",

    "svg.uv": "紫外光（UV）",
    "svg.wafer": "ウェハ",
    "svg.round": "円形",
    "svg.square": "方形",
    "svg.diameter": "直径",
    "svg.side": "辺長",
    "svg.caption": "{shape}露光範囲 · {dim} {size}″（{mm} mm）",
    "svg.diameterLabel": "Ø {mm} mm（{size}″）",
    "svg.sideLabel": "辺長 {mm} mm（{size}″）",
    "svg.ariaRound": "{size} インチ{shape}露光範囲とウェハの模式図、上方から紫外光",
    "svg.ariaSquare": "{size} インチ{shape}露光範囲とウェハの模式図、上方から紫外光",
  },

  ko: {
    "app.title": "SUSS 마스크／본드 정렬기 구성 도구 · MJB4 / MA6 / MA8 / MA12",
    "brand.title": "마스크／본드 정렬기 구성 도구",
    "brand.subtitle": "MJB4 · MA/BA6 Gen4 · MA/BA8 Gen4 · MA12 Gen3",
    "field.customer": "고객명",
    "field.owner": "담당자",
    "field.date": "날짜",
    "ph.customer": "고객명",
    "ph.owner": "담당자명",
    "panel.title": "장비 모델",
    "panel.sub": "플랫폼을 선택하면 노광 범위와 옵션이 자동으로 맞춰집니다",
    "about.title": "SUSS MicroTec 소개",
    "about.p1":
      "SUSS MicroTec은 75년 이상의 엔지니어링 경험을 바탕으로 반도체 및 관련 시장의 첨단 백엔드·포토마스크 솔루션을 공급하는 선도 기업입니다. 이미징(리소그래피/마스크 정렬), 코팅, 본딩, 포토마스크 분야를 아우릅니다.",
    "about.p2":
      "MA/BA Gen4 시리즈는 반자동 마스크／본드 정렬 플랫폼으로, MO Exposure Optics<sup>®</sup> 텔레센트릭 조명을 통해 <strong>0.8 µm</strong> 해상도(하드/소프트/진공 컨택트)를 제공합니다. 옵션인 DirectAlign<sup>®</sup>은 <strong>0.5 µm</strong> 오버레이 정밀도를 구현하며 전면(TSA), 후면(BSA), 적외선(IR) 정렬을 지원합니다. 주요 응용: 첨단 패키징, MEMS/NEMS, 3D 집적, 화합물 반도체, LED, 마이크로 광학, AR, 광전자 소자.",
    "about.src": "데이터 출처 및 이미지 저작권: SUSS MicroTec 공식 웹사이트.",
    "about.link": "제품 브로셔 다운로드(PDF)",
    "btn.import": "가져오기",
    "btn.reset": "전체 초기화",
    "btn.print": "PDF로 인쇄",
    "btn.json": "JSON으로 저장",
    "tip.import": "구성 가져오기(JSON)",
    "tip.reset": "모든 설정 지우기",
    "summary.title": "선택된 구성",
    "summary.empty": "아직 선택된 구성이 없습니다",
    "summary.model": "장비 모델",
    "footer.src": "제품 정보:",
    "footer.link1": "MA/BA Gen4 Series — SUSS MicroTec",
    "footer.link2": "Mask Alignment — SUSS MicroTec",
    "note.show": "자세히 보기",
    "note.hide": "설명 닫기",
    "lang.aria": "언어",
    "model.wafer": "웨이퍼",
    "auto.manual": "수동",
    "auto.semi": "반자동",
    "model.mjb4.kind": "마스크 정렬기",
    "model.mjb4.tag": "수동",
    "model.maba6.kind": "마스크／본드 정렬기",
    "model.maba6.tag": "표준 · 반자동",
    "model.maba8.kind": "마스크／본드 정렬기",
    "model.maba8.tag": "표준 · 반자동",
    "model.ma12.kind": "마스크 정렬기",
    "model.ma12.tag": "200 / 300 mm · 반자동",

    "sec.exposure_area.title": "노광 범위",
    "sec.exposure_area.notes":
      "a. 노광 범위는 1회 노광으로 커버되는 웨이퍼 영역 크기이며, 웨이퍼와 마스크 크기에 맞춰야 합니다.<br/>" +
      "b. 원형 노광은 대부분의 원형 웨이퍼에 적합하고, 사각형 노광은 사각 기판이나 대면적 패턴의 전면 노광에 적합합니다.<br/>" +
      "c. 지원 범위는 모델별로 다릅니다: MJB4 4″, MA/BA6 Gen4 6″, MA/BA8 Gen4 8″, MA12 Gen3 12″.",
    "sec.alignment.title": "정렬 방식",
    "sec.alignment.notes":
      "a. 정렬 방식은 TSA(전면), BSA(후면), IR(적외선) 세 가지입니다.<br/>" +
      "b. BSA는 후면 광학 현미경, IR은 투과 적외선 이미징을 사용합니다. 일반적으로 BSA가 호환성이 높고 기판 재질의 영향을 받지 않습니다. 후면 정렬만 필요하면 BSA를 권장합니다.<br/>" +
      "c. 마크가 위아래 어느 쪽에서도 보이지 않으면 IR 모듈을 추가하십시오.",
    "sec.tsa_objective.title": "TSA 대물렌즈",
    "sec.tsa_objective.notes":
      "a. 대부분의 응용에는 5배 대물렌즈로 충분합니다(광학 배율 112배, 시야 1.56×2.07 mm).<br/>" +
      "b. 정렬 마크가 매우 작은 경우(<50 µm) 10배를 추가합니다(배율 2배, 시야 0.78×1.04 mm).<br/>" +
      "c. 표준 5배·10배의 최소 간격은 29 mm이며, 더 가까이 붙이려면 11.25X Offset(8 mm) 또는 7.2X Offset(13 mm)을 선택합니다.",
    "sec.light_source.title": "UV 광원",
    "sec.light_source.notes":
      "a. LED는 비노광 시 꺼지며 약 5000 h 후 광량이 70%로 감소하고 기대 수명은 20000 h입니다.<br/>" +
      "b. 고압 수은등은 비노광 시에도 켜 두어야 하며 수명은 약 600 h입니다.<br/>" +
      "c. LED가 수은등을 대체하는 주류가 되고 있으며 SUSS는 수은등→LED 전환을 지원합니다.",
    "sec.uv_spectrum.title": "UV 스펙트럼(수은등)",
    "sec.filter.title": "필터",
    "sec.exposure_mode.title": "노광량 제어 모드",
    "sec.exposure_mode.notes":
      "CPC는 정전력 모드로 노광 시간으로 노광량을 제어하고, CDC는 정량 모드로 선량을 직접 입력해 사용이 편리합니다. CDC는 CPC 기능을 포함합니다. 연구개발 기관에는 CPC만 구성하는 것을 권장합니다." +
      '<figure class="note-img"><img src="images/CDC.png?v=20261109" alt="CPC / CDC 노광량 제어" loading="lazy" /></figure>',
    "sec.auto_alignment.title": "자동 정렬",
    "sec.auto_alignment.notes":
      "MA6 / MA8에는 자동 정렬(TSA ±0.5 µm) 또는 초고정밀 Direct Alignment(±0.25 µm)을 장착할 수 있습니다.<br/>" +
      "아래 그림은 초고정밀 직접 정렬(DirectAlign®)에 대한 설명입니다." +
      '<figure class="note-img"><img src="images/DA.png?v=20261109" alt="DirectAlign 초고정밀 정렬" loading="lazy" /></figure>',
    "sec.accessories.title": "부속 부품",
    "sec.chuck.title": "웨이퍼 척",
    "sec.maskholder.title": "마스크 홀더",
    "sec.bond_alignment.title": "본드 정렬",

    "opt.exposure_area.4round": "4인치 원형",
    "opt.exposure_area.6round": "6인치 원형",
    "opt.exposure_area.6sq": "6인치 사각형",
    "opt.exposure_area.8round": "8인치 원형",
    "opt.exposure_area.8sq": "8인치 사각형",
    "opt.exposure_area.12round": "12인치 원형",
    "opt.exposure_area.12sq": "12인치 사각형",

    "opt.alignment.tsa": "TSA(전면만)",
    "opt.alignment.tsa_bsa": "TSA + BSA(전면 + 후면)",
    "opt.alignment.bsa": "BSA(후면만)",
    "opt.alignment.ir_tsa": "TSA + BSA + IR Visualization via TSA(전면 + 후면 + 후면 IR 광원, 전면 관찰)",
    "opt.alignment.ir_bsa": "TSA + BSA + IR Visualization via BSA(전면 + 후면 + 전면 IR 광원, 후면 관찰)",
    "opt.alignment.none": "정렬 없음",

    "opt.tsa_objective.5x": "5X 표준",
    "opt.tsa_objective.10x": "10X 표준",
    "opt.tsa_objective.11_25x": "11.25X 오프셋",
    "opt.tsa_objective.7_2x": "7.2X 오프셋",

    "opt.light_source.led": "LED",
    "opt.light_source.hg": "HG 고압 수은등",

    "opt.uv_spectrum.uv400": "UV400",
    "opt.uv_spectrum.uv400_uv300": "UV400 + UV300",

    "opt.filter.i_line": "i-Line 필터",
    "opt.filter.g_line": "g-Line 필터",
    "opt.filter.h_line": "h-Line 필터",
    "opt.filter.gh_line": "gh-Line 필터",
    "opt.filter.t25": "25% 투과 필터",
    "opt.filter.t33": "33% 투과 필터",
    "opt.filter.t50": "50% 투과 필터",
    "opt.filter.t70": "70% 투과 필터",

    "opt.exposure_mode.cpc": "CPC — 정전력 모드(노광 시간 제어)",
    "opt.exposure_mode.cdc": "CDC — 정량 모드(선량 직접 입력)",

    "opt.auto_alignment.manual": "완전 수동 정렬",
    "opt.auto_alignment.auto": "자동 정렬(±0.5 µm)",
    "opt.auto_alignment.direct": "직접 정렬(DirectAlign®)(±0.25 µm)",

    "opt.accessories.intensity_meter": "정품 광량계",
    "opt.accessories.vacuum_pump": "설비 진공 펌프",
    "opt.accessories.sector_disk": "섹터 노광판",
    "opt.accessories.filter_cda": "압축공기 필터",
    "opt.accessories.cassette_tray": "카세트 트레이",
    "opt.accessories.tool_tray": "공구 트레이",

    "chuckopt.vac_contact": "진공 컨택트 지원",
    "chuckopt.bsa": "BSA(후면 정렬) 지원",
    "chuckopt.teflon": "반사 방지 코팅 지원",
    "mhopt.round": "원형 개구",
    "mhopt.square": "사각형 개구",
    "mhopt.non_contact": "비접촉 레벨링 지원",
    "bond.size.ba8": "8인치 웨이퍼 본드 정렬",
    "bond.size.ba6": "6인치 웨이퍼 본드 정렬",
    "bond.size.ba4": "4인치 웨이퍼 본드 정렬",
    "bond.size.ba_pieces": "3인치 이하 소편",

    "notes.chuck":
      "1. 진공 컨택트 척은 진공 챔버를 형성하는 고무 링이 있습니다. 진공 컨택트는 해상도가 가장 높지만 마스크 손상도 가장 큽니다.<br/>" +
      "2. 후면 정렬 척은 후면 현미경 관찰창이 있습니다.<br/>" +
      "3. 투명 기판에는 척 반사로 인한 이중 노광을 막기 위해 반사 방지 코팅 척을 권장합니다.<br/>" +
      "4. 특수 요구(휨 >200 µm, 두꺼운 웨이퍼 >3 mm, 고정밀 플랫 정렬)에는 LED 백라이트 또는 미러 반사가 필요합니다.",
    "notes.maskholder":
      "1. 사각형 개구는 첫 층 마스크의 에지 기준 정렬에 편리하지만 마스크를 흡착하는 진공 면적이 작습니다. 원형 웨이퍼에는 원형, 사각 웨이퍼에는 사각형 개구를 권장합니다.<br/>" +
      "2. 비접촉 레벨링은 마스크 손상을 줄이지만 가격이 높아 연구·교육 또는 소량 생산에는 생략할 수 있습니다.<br/>" +
      "3. 9″·14″는 마스크 가격이 높아 선택 여부와 관계없이 비접촉 레벨링 지원 마스크 홀더를 제공합니다.",
    "notes.bond":
      "a. 본드 정렬은 본딩 공정에서 웨이퍼와 소편을 정렬하는 기능이며, 여러 웨이퍼 크기를 동시에 선택할 수 있습니다.<br/>" +
      "b. 8″, 6″, 4″ 웨이퍼와 3″ 이하 소편을 지원하며 생산 요구에 따라 다중 선택할 수 있습니다.<br/>" +
      "c. 본드 정렬기에서 직접 정렬해야 하는 경우 '정렬기에서 직접 본딩'을 추가로 선택하십시오." +
      '<figure class="note-img"><img src="images/BA.png?v=20261109" alt="본드 정렬" loading="lazy" /></figure>',

    "dyn.chuckTitle": "웨이퍼 척 #{n}",
    "dyn.holderTitle": "마스크 홀더 #{n}",
    "dyn.waferSize": "웨이퍼 크기",
    "dyn.openingSize": "노광 개구 크기",
    "dyn.nonstd": "비표준 척",
    "dyn.nonstdNone": "— 표준(선택 안 함) —",
    "dyn.addChuck": "척 추가",
    "dyn.reset": "초기화",
    "dyn.remove": "삭제",
    "dyn.addHolder": "마스크 홀더 추가",
    "dyn.addBond": "본드 정렬 추가",
    "dyn.removeBond": "본드 정렬 제거",
    "dyn.noChuck": "아직 척이 없습니다. 위 버튼으로 추가하십시오.",
    "dyn.noHolder": "아직 마스크 홀더가 없습니다. 위 버튼으로 추가하십시오.",
    "dyn.noBond": "아직 본드 정렬이 없습니다. 위 버튼으로 추가하십시오.",
    "dyn.bondDirect": "정렬기에서 직접 본딩",
    "dyn.chuckKey": "척 #{n}",
    "dyn.holderKey": "마스크 홀더 #{n}",
    "dyn.bondKey": "본드 정렬",
    "dyn.unspecified": "미지정",
    "dyn.unspecifiedNonStd": "비표준 척 미지정",
    "size.nonstd": "비표준",
    "chuck.bsa.yes": "BSA 지원",
    "chuck.bsa.no": "BSA 미지원",
    "chuck.vac.yes": "진공 컨택트 지원",
    "chuck.vac.no": "진공 컨택트 미지원",
    "chuck.teflon.yes": "Teflon 코팅 포함",
    "chuck.teflon.no": "Teflon 코팅 없음",

    "val.title": "저장 전에 다음 필수 항목을 입력하십시오:",
    "val.customer": "고객명",
    "val.owner": "담당자",
    "val.exposure": "노광 범위",
    "val.alignment": "정렬 방식",
    "val.devices": "척 또는 마스크 홀더(최소 1개)",
    "err.import": "가져오기 실패: JSON 형식이 올바르지 않습니다.",
    "meta.customer": "고객: {v}",
    "meta.owner": "담당자: {v}",
    "meta.date": "날짜: {v}",

    "svg.uv": "UV 광",
    "svg.wafer": "웨이퍼",
    "svg.round": "원형",
    "svg.square": "사각형",
    "svg.diameter": "직경",
    "svg.side": "변 길이",
    "svg.caption": "{shape} 노광 범위 · {dim} {size}″({mm} mm)",
    "svg.diameterLabel": "Ø {mm} mm ({size}″)",
    "svg.sideLabel": "변 {mm} mm ({size}″)",
    "svg.ariaRound": "{size}인치 {shape} 노광 범위와 웨이퍼 모식도, 상단에서 UV 광",
    "svg.ariaSquare": "{size}인치 {shape} 노광 범위와 웨이퍼 모식도, 상단에서 UV 광",
  },
};

let CURRENT_LANG = "en";

function setCurrentLang(id) {
  CURRENT_LANG = I18N[id] ? id : "en";
}

function t(key, vars) {
  const dict = I18N[CURRENT_LANG] || I18N.en;
  let s = dict[key];
  if (s == null) s = I18N.en[key];
  if (s == null) return key;
  if (vars) Object.keys(vars).forEach((k) => { s = s.split("{" + k + "}").join(vars[k]); });
  return s;
}

/* 副标题：英文界面不再重复显示，其他语言显示英文对照 */
function subLabel(key) {
  return CURRENT_LANG === "en" ? "" : (I18N.en[key] || "");
}
