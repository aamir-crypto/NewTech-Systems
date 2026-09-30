// =========================================================
// EASY PRODUCT EDITING
// Add products ONLY in the PRODUCTS list below.
// Put product photos in the "images" folder.
// =========================================================

const WA = "919895064145";

const PRODUCTS = [
  // Copy this block to add another product:
  // {
  //   category: "Laptops",
  //   icon: "💻",
  //   name: "HP Laptop 15",
  //   image: "images/hp-laptop-15.jpg",
  //   description: "Available in our shop"
  // },

  { category:"Laptops", icon:"💻", name:"Acer One 14", image:"images/Acer-laptop.png", description:"14  HD Display | AMD Ryzen 3 7320U| 8GB DDR5 RAM | 256GB NVMe SSD | Windows 11 | Thin & Light Design | AMD Radeon Graphics | Silver | 1 Year Brand Warranty" },
  { category:"Laptops", icon:"💻", name:"HP15-FD0962TU", image:"images/HP-15fd0682tu.png", description:"Intel® Core™ i3-1315U Processor | 256GB SSD | 8GB SODIMM DDR4 SDRAM | Windows 11 | 15.6' FHD LED Display | 3-cell, 41 Wh" },
  { category:"Laptops", icon:"💻", name:"HP15-FD0682TU", image:"images/HP-15fd0962tu.png", description:"Intel® Core™ i5-120U Processor | 512GB SSD | 16GB SODIMM DDR4 SDRAM | Windows 11 | 15.6' FHD LED Display | 3-cell, 41 Wh" },
  { category:"Laptops", icon:"💻", name:"ASUS X543UA", image:"images/ASUS-X543UA.png", description:"6th Gen i3-6006U Processor | 128GB SSD | 4GB RAM | Windows 11 | 15.6' HD Display | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"LENOVO THINKPAD T14 TOUCH", image:"images/LENOVO-THINKPADT14TOUCH.png", description:"11th - I5 1145G7 Processor | 256GB SSD | 16GB RAM | 14” FHD - Touch screen display | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"LENOVO LOQ 15IAX9", image:"images/LENOVO-LOQ15IAX9.png", description:"i5-12450HX Processor | 256GB SSD | 16GB RAM | 16” FHD IPS | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"LENOVO-LOQ 15 15ARP9", image:"images/LENOVO-LOQ 15 15ARP9.jpg", description:"RYZEN 5 7235HS Processor | 512GB SSD | 12GB RAM | 16” FHD IPS | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"ACER PREDATOR HELIOS NEO 16", image:"images/ACER-PREDATOR HELIOS NEO 16.jpg", description:"13TH Gen i9 - 13900H Processor | 1TB NVMe SSD | 16GB RAM | 16.0” FHD IPS | RTX 4060-8GB GPU | Original Charger with Power cord | 1 Year Warranty (Brand Warranty)" },
  { category:"Laptops", icon:"💻", name:"ASUS TUF FX608JMR", image:"images/ASUS-TUF FX608JMR.jpg", description:"i7 - 14650HX Processor | 1 TB NVMe | 16GB DDR5 | RTX 5060 - (8 GB) | 16.0” WUXGA BEND | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"HP 15-DA3001TU", image:"images/HP15-da3001tu.png", description:"10th-I3-1005G Processor | 256GB SSD | 8GB RAM | Original Charger with Power cord | 7 Days Warranty (Checking)" },
  { category:"Laptops", icon:"💻", name:"MACBOOK NEO-13", image:"images/MACBOOK NEO-13.png", description:"Apple 2026 MacBook Neo 13 A18 Pro Chip | Built for AI & Apple Intelligence | 8GB Unified Memory | 512GB SSD Storage | Protect+ with AppleCare Services" },

  { category:"Desktop computers", icon:"🖥️", name:"HP Z1 G9 TWR", image:"images/HP Z1 G9 TWR.png", description:"PROCESSOR: Intel i5-14500 | MEMORY: 5GB DDR5 | STORAGE: 512GB NVMe SSD | DISPLAY: HP 24\" Pro Monitor | ACCESSORIES: HP Wireless Keyboard + Mouse | WARRANTY: 2 Years (Company Warranty)" },
  { category:"Desktop computers", icon:"🖥️", name:"Acer K202Q Monitor", image:"images/Acer K202Q.jpg", description:"19.5 Inch HD+ 1600 X 900 Pixels LCD Monitor with LED Backlight | 200 Nits Brightness | VGA, HDMI Port with Inbox HDMI Cable | Eye Care Features | Tilt Option | Wall Mount Option | Black" },
  { category:"Desktop computers", icon:"🖥️", name:"FINGERS Satin-2150", image:"images/FINGERS Satin-2150.jpg", description:"FINGERS The Big Picture LED Monitor Satin-2150 [21.45 (51.48cm), FHD (1920x1080 px), Ultra-Slim & Frameless, 16.7 M Colours, Wall Mountable, VGA, HD Interface with 100HZ (Stunning White)" },
  { category:"Desktop computers", icon:"🖥️", name:"Ant Esports ICE-240", image:"images/Ant Esports ICE-240.jpg", description:"240mm Addressable RGB 2600RPM AIO I CPU Liquid Cooler - Black I Support Intel - LGA115X/1200/1700/ 1366/2011/2066, AMD - FM1/FM2/AM2//AM2+/ AM3/AM3+/AM4/AM5" },
  { category:"Desktop computers", icon:"🖥️", name:"Dahua LM32-F200", image:"images/Dahua LM32-F200.png", description:"1920×1080 Full HD VA display, 60Hz refresh rate, 8ms response time, 178° wide viewing angle, 240 cd/m² brightness, HDMI/VGA/USB inputs, built-in 2×6W speakers." },
  { category:"Desktop computers", icon:"🖥️", name:"Assembled desktop PC", image:"images/desktop-pc.png", description:"PROCESSOR: Intel i7-12700K | MEMORY: CORSAIR VENGEANCE 32GB DDR5 (16GB × 2) | STORAGE: 1TB WD NVMe SSD | GPU: GIGABYTE RTX 3060 12GB | DISPLAY: Samsung 27\" 4K ViewFinity S7 Monitor | 4K (3840 × 2160) | ACCESSORIES: ANT Esports RGB Keyboard + Mouse | WARRANTY: 2 Years (Company Warranty)" },

  { category:"CCTV cameras", icon:"📹", name:"Imou Ranger S2", image:"images/Imou Ranger S2.png", description:"Imou Ranger S2 3MP WiFi Security Camera, Pan & Tilt for 360°, Human Detection, Smart Tracking, 2-Way Audio, Night Vision, Alexa Google Assistant, Up to 256GB SD Card Support" },
  { category:"CCTV cameras", icon:"📹", name:"EZVIZ CS-H6C", image:"images/EZVIZ CS-H6C.jpg", description:"EZVIZ CS-H6C 1080p Indoor Wi-Fi Smart Security Camera with 64GB Micro SD Card | 360° View | Motion Detection | Night Vision | Auto-Tracking | 2-Way Talk" },
  { category:"CCTV cameras", icon:"📹", name:"Hikvision Car Dash Cam", image:"images/Hikvision Car Dash Cam.jpg", description:"Hikvision Dash Cam | 1080p HD Resolution | Built- in Wi-Fi | Built-in G-Sensor | Night Vision | 102° Wide Angle Lens | Emergency Recording | Upto 128GB SD Card Supported" },
  { category:"CCTV cameras", icon:"📹", name:"LAPCARE Dash Cam", image:"images/LAPCARE Dash Cam.jpg", description:"LAPCARE 170° Wide Angle Dash Cam, Full HD 1080p, 360° Rotatable, Collision Sensor, Built-in Wi-Fi, GPS Tracking, Night Vision, Loop Recording, TF Card Slot- LWC-068" },
  { category:"CCTV cameras", icon:"📹", name:"Imou Dual Lens", image:"images/Imou Dual Lens.png", description:"CCTV Camera Home Outdoor, Pan-Tilt Wi-Fi Camera, AI Human and Vehicle Detection, Smart Color Night Vision, Red-Blue Warning Light, Two Way Talk, Privacy Mode, Weatherproof" },
  { category:"CCTV cameras", icon:"📹", name:"CP Plus 4MP Full HD IP Indoor Dome Camera", image:"images/CP-UNC-DA41L3C-D-LQ.png", description:"STQC Model | CP-UNC-DA41L3C-D-LQ | Built-in Mic | Color Night Vision | IR Night Vision | 3.6mm Fixed Lens | PoE | Compatible with NVR only" },
  { category:"CCTV cameras", icon:"📹", name:"Hikvision 5 MP Outdoor Bullet CCTV Camera", image:"images/DS-2CE16H0T-ITPFS.png", description:"Hikvision 5 MP Outdoor Bullet CCTV Camera with inbuilt Audio Mic IP67 DS-2CE16H0T-ITPFS + USEWELL BNC/DC, White" },
  { category:"CCTV cameras", icon:"📹", name:"Dahua Wired 2MP Cam", image:"images/DH-HAC-T1A21P.png", description:"Dahua DH-HAC-T1A21P, a popular 2-megapixel (2MP) HDCVI IR Eyeball Dome Camera" },
  { category:"CCTV cameras", icon:"📹", name:"Prama 4MP Bullet IP Cam", image:"images/PT-NC140D3-WNM(D2).jpg", description:"PT-NC140D3-WNM(D2) 4MP Fixed Bullet Network Camera with Smart Dual Light, Built-in Mic" },

  { category:"Printers and scanners", icon:"🖨️", name:"Brother DCP-T230", image:"images/DCP-T230.jpg", description:"Print, scan, copy ink-tank printer with 16 ipm mono, 9 ipm colour, 1200×6000 dpi resolution, USB connectivity, borderless A4 printing." },
  { category:"Printers and scanners", icon:"🖨️", name:"Brother DCP-T530DW", image:"images/DCPT530DW.jpg", description:"Wireless colour ink tank printer with print, scan, copy, auto duplex, A4, and mobile printing support features." },
  { category:"Printers and scanners", icon:"🖨️", name:"Brother DCP-T430W", image:"images/DCP-T430W.jpg", description:"Print, Scan & Copy | 16 ipm Mono / 9 ipm Colour | Dual-Band Wi-Fi | 150-Sheet Tray | Up to 7,500/5,000-Page Yield." },
  { category:"Printers and scanners", icon:"🖨️", name:"Canon Pixma G3012", image:"images/G3012.jpg", description:"Canon PIXMA G3012 | Ink Tank All-in-One | 4800×1200 dpi | 8.8/5 ipm | Wi-Fi | USB | 600×1200 dpi scanning | 100-sheet input" },
  { category:"Printers and scanners", icon:"🖨️", name:"Canon PIXMA MegaTank G2010", image:"images/G2010.jpg", description:"Print, Scan & Copy | 4800×1200 dpi | 8.8/5 ipm Mono/Colour | 600×1200 dpi Scan | 100-Sheet Input | USB | 20 Copies | GI-790 Ink" },
  { category:"Printers and scanners", icon:"🖨️", name:"Image King 12A toner cartridge", image:"images/Q2612A.jpg", description:"For hp LaserJet 1010,1010w,1012,1015, 1018,1020,1022,1022n, 1022nw,m1005,1319f, 3020,3030,3050,3050z, 3052,3055,Canon 303, 703,LBP2900,LBP3000" },
  { category:"Printers and scanners", icon:"🖨️", name:"EVM 12A Catridge", image:"images/EVM ETC 12A.jpg", description:"ForHP LJ 1010, 1012, 1015, 1018, 1020, 1022, 1022N, 1022NW, 3015, 3020, 3030, 3050, 3052, 3055, M1005, M1005 MFP, M1319f MFP, Canon Laser Shot LBP2900, LBP2900B, LBP3000" },
  { category:"Printers and scanners", icon:"🖨️", name:"FINGERS Wireless Barcode Scanner", image:"images/WL2.jpg", description:"(Quickscan Technology, 2200mAh Lithium Battery, 2.4 GHz Wireless, USB Receiver, 300 scans/sec, LED & Beeper Alerts, Useful for Retail & POS) – Classic Black" },

  { category:"Accessories", icon:"🖱️", name:"LAPCARE Safari 009", image:"images/safari009.jpg", description:"Type-C & USB Wireless Mouse, 10M Wirless Range, 2.4Ghz Operational Frequency/1600 DPI/Ambidextrous Design | Suitable for PC/Mac/Laptop" },
  { category:"Accessories", icon:"🖱️", name:"FOXIN Flow Wireless Mouse", image:"images/Foxin Flow.jpg", description:"Rechargeable Battery, Bluetooth & 2.4 Ghz Dual Connectivity, 4 Buttons, Upto 1600 DPI, Type-C Charging | Ergonomic Office Mouse for Laptop, MacBook, PC | Black" },
  { category:"Accessories", icon:"🖱️", name:"FINGERS MasterHit USB Wired", image:"images/FINGERS MasterHit.jpg", description:"FINGERS MasterHit USB Wired PC Mouse (Advanced Optical Technology, 1200 DPI, Ambidextrous, Plug-n-Play, Windows?, macOS, Linux & Chrome OS)" },
  { category:"Accessories", icon:"🖱️", name:"FINGERS SwiftCharge Wireless Mouse", image:"images/FINGERS SwiftCharge.jpg", description:"2.4 GHz with Rechargeable Battery for PCs & Laptops – 1600 DPI, 5 Quick Buttons, 25 Days Long Battery Backup, Ambidextrous Design (Black)" },
  { category:"Accessories", icon:"🖱️", name:"HP M190 Wireless Mouse", image:"images/HP M190.jpg", description:"2.4GHz Wireless | USB-A Nano Receiver | Optical Sensor | 800/1200/1600 DPI | 6 Buttons | Multi-Surface Tracking | Ambidextrous Design | 1×AA Battery | Plug & Play | Up to 10m Range" },
  { category:"Accessories", icon:"🖱️", name:"ASUS Wireless Mouse MW103", image:"images/MW103.jpg", description:"2.4GHz Wireless | Optical Tracking | 1000/1200/1600 DPI | 3 Buttons | Silent Click | Ambidextrous Design | Up to 10m Wireless Range | 105.9×60.7×32.9mm | Windows 10/11" },
  { category:"Accessories", icon:"🖱️", name:"Logitech M90 Wired Mouse", image:"images/M90.jpg", description:"1000 DPI | Optical Tracking | Wired USB 2.0 | 3 Buttons | Ambidextrous Design | Plug & Play | 1.5 m Cable | Black | Windows/macOS/Linux/ChromeOS Compatible" },
  { category:"Accessories", icon:"🖱️", name:"ACER Flow Wireless Mouse", image:"images/acer Flow.jpg", description:"1600 DPI Optical Sensor | 2.4GHz Wireless with USB Nano Receiver | Ergonomic Lightweight Design | Smooth Tracking for Laptop, PC & Mac – White/Green" },
  { category:"Accessories", icon:"🖱️", name:"Zebronics Zeb-Power Plus", image:"images/Zeb-Power Plus.jpg", description:"1200 DPI | Optical Tracking | USB 2.0 | 3 Buttons | Ambidextrous Design | Plug & Play | 1.1 m Cable | 3 Million Clicks | 125 Hz Polling Rate | Black" },
  { category:"Accessories", icon:"🖱️", name:"Zebronics K16 Wired Keyboard", image:"images/K16.jpg", description:"79-Key Layout with Integrated Multimedia Keys, 1.1m Cable Length, ₹ Rupee Key, UV Coated Keys, Spill-Proof Design, USB Interface, Slim & Compact Design" },
  { category:"Accessories", icon:"🖱️", name:"ZEB-K65 Wired Keyboard", image:"images/K65.jpg", description:"Zebronics Wired Keyboard with 104 Keys, 1.2m Cable, ₹ Key, USB Interface, UV-Coated Keys, Retractable Stand, USB Nano Receiver, for PC, Laptop(K65, Black)" },
  { category:"Accessories", icon:"🖱️", name:"ProDot KB-297rs USB", image:"images/KB-297rs.jpg", description:"104 Keys | USB Wired | Regional Keyboard | Membrane Switch | 10 Million Key Life | Rupee Key | Windows/Mac/Linux Compatible | 1 Year Warranty" },
  { category:"Accessories", icon:"🖱️", name:"003 Ink Compatible for Epson", image:"images/003 Ink.jpg", description:"Epson 003 | Dye-Based Ink | 65 ml | Black,Cyan,Magenta, Yellow | Epson EcoTank Compatible | Easy & Mess-Free Refill" },
  { category:"Accessories", icon:"🖱️", name:"664 Ink Genuine Epson", image:"images/664 INK.png", description:"Epson 664 Genuine Ink | Ultra High Capacity | Black, Cyan, Magenta & Yellow | Genuine Epson Ink | Low-Cost High-Quality Printing | Compatible with Select Epson EcoTank Printers" },
  { category:"Accessories", icon:"🖱️", name:"D-Link WiFi USB Adapter", image:"images/AN3U.jpg", description:"D-Link AN3U N300 WiFi 4 USB Adapter | 300Mbps Wireless Speed | WPA3 Security | 2.4GHz | Plug & Play | Compatible with Windows 11/10 | Compact Travel-Friendly" },
  { category:"Accessories", icon:"🖱️", name:"TP-LINK WiFi Dongle", image:"images/TL-WN823N.jpg", description:"300Mbps Wireless N | USB 2.0 | 2.4GHz | IEEE 802.11b/g/n | Internal Antenna | WPS Button | SoftAP Mode | WPA/WPA2/WEP Security | Mini Compact Design" },
  { category:"Accessories", icon:"🖱️", name:"Large Size Gaming Mouse Pad", image:"images/Mouse Pad.jpg", description:"Large Size Gaming Mouse Pad with Stitched Embroidery Edge, Premium-Textured Mouse Mat, Non-Slip Rubber Base Mousepad for Laptop Computer" },
  { category:"Accessories", icon:"🖱️", name:"TP-Link WiFi Router", image:"images/TL-WR820N.jpg", description:"N300 300Mbps | 2.4GHz Wi-Fi 4 | 2×5 dBi Fixed Antennas | 1×10/100Mbps WAN | 2×10/100Mbps LAN | Router/AP/Range Extender/WISP Modes | Guest Network" },
  { category:"Accessories", icon:"🖱️", name:"ASUS Laptop Backpack", image:"images/AP1600.jpg", description:"ASUS AP1600 Midnight Blue Laptop Backpack for 16-inch Laptops, 18L Capacity, with Dual Mesh Pockets, Reflective Logo, Quick Access Front Pockets, and Luggage Strap for Travel, 0.54 Kg" },
  { category:"Accessories", icon:"🖱️", name:"ZEBRONICS Smart Projector", image:"images/PIXAPLAY 55.jpg", description:"ZEBRONICS PIXAPLAY 55, Smart Projector, 10000 Lumens, 4K Support, 150 Inch Screen Size, Quad Core Processor, Bluetooth, HDMI, USB, WiFi, mSD, AUX, 1080p Native, APP Support, Miracast" },
  { category:"Accessories", icon:"🖱️", name:"FINGERS UPS Power Supply", image:"images/FR-630.jpg", description:"Fast Recharge FR-630 UPS Power Supply (600VA/360W, Line Interactive, 33% Faster Recharge, AVR Stabilization, Generator/Inverter Compatible, Auto Restart, Cold Start Mode) – Jet Black" },

  { category:"Storage and memory", icon:"💾", name:"Ant Esports 690 Neo 512GB SSD", image:"images/512GB.jpg", description:"Ant Esports 690 Neo Sata 2.5” 512GB Internal Solid State Drive/SSD with SATA III Interface, 6Gb/s, Fast Performance, Read/Write - 520/450 MB/s" },
  { category:"Storage and memory", icon:"💾", name:"Ant Esports 690 Neo 256GB SSD", image:"images/256GB.jpg", description:"Ant Esports 690 Neo 256GB SATA SSD 2.5 Inch Internal Solid State Drive | SATA III 6Gb/s | Up to 500MB/s Read Speed |Fast Boot & Data Transfer SSD" },
  { category:"Storage and memory", icon:"💾", name:"HIKVISION 32GB microSD", image:"images/Extreme 32GB.jpg", description:"Memory Card Class 10, V30 | 92MB/s Read, 25MB/s Write Speed | Compitable with Smartphones, Camera, CCTV | Drop Protection | Memory Card | 3 Yrs Warranty" },
  { category:"Storage and memory", icon:"💾", name:"Lexar 32GB", image:"images/lexar 32gb.png", description:"Lexar 32GB | USB 2.0 | USB Type-A | Plug & Play | Compact Design | PC & Mac Compatible | Portable Storage | 2-Year Limited Warranty" } ,
  { category:"Storage and memory", icon:"💾", name:"Lexar 16GB", image:"images/lexar 16gb.png", description:"Lexar 16GB | USB 2.0 | USB Type-A | Plug & Play | Compact Design | PC & Mac Compatible | Portable Storage | 2-Year Limited Warranty" } ,
  { category:"Storage and memory", icon:"💾", name:"Lexar 64GB", image:"images/lexar 64gb.png", description:"Lexar 64GB | USB 2.0 | USB Type-A | Plug & Play | Compact Design | PC & Mac Compatible | Portable Storage | 2-Year Limited Warranty" } ,
  { category:"Storage and memory", icon:"💾", name:"EVM EnStore 16GB", image:"images/EnStore 16GB.jpg", description:"EVM EnStore 16GB USB 2.0 Durable Metal Flash Drive | Dependable 15MB/s Read|Rugged Metal Body | Laptop Desktop Car Stereo Set-Top Box | 10 Years Warranty" } ,
  { category:"Storage and memory", icon:"💾", name:"EVM EnStore 32GB", image:"images/EnStore 32GB.jpg", description:"EVM EnStore 32GB USB 2.0 Durable Metal Flash Drive | Dependable 15MB/s Read|Rugged Metal Body | Laptop Desktop Car Stereo Set-Top Box | 10 Years Warranty" } ,
  { category:"Storage and memory", icon:"💾", name:"EVM EnStore 64GB", image:"images/EnStore 64gb.jpg", description:"EVM EnStore 64GB USB 2.0 Durable Metal Flash Drive | Dependable 15MB/s Read|Rugged Metal Body | Laptop Desktop Car Stereo Set-Top Box | 10 Years Warranty" } ,
];

// ---------- WEBSITE CODE BELOW ----------

const body = document.getElementById("shopBody");
let cart = JSON.parse(localStorage.getItem("nts_cart") || "[]");
let cust = "";

function save() {
  localStorage.setItem("nts_cart", JSON.stringify(cart));
  document.getElementById("cnt").textContent = cart.length;
}

function esc(text) {
  return String(text).replace(/[&<>"]/g, c =>
    ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c])
  );
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
}

function findItem(category, name) {
  return cart.find(item => item.c === category && item.n === name);
}

function addItem(category, name) {
  const item = findItem(category, name);

  if (!item) {
    cart.push({ c:category, n:name });
  }

  save();
}

function showCategories() {
  const categories = [...new Set(PRODUCTS.map(p => p.category))];

  body.innerHTML = `
    <h1 style="font-size:clamp(44px,8vw,84px)">Products</h1>
    <p style="color:var(--mute);max-width:40em;font-size:19px;margin:12px 0 28px">
      Pick a category to see what we have in the shop.
    </p>
    <div class="grid">
      ${categories.map(category => {
        const first = PRODUCTS.find(p => p.category === category);
        const count = PRODUCTS.filter(p => p.category === category).length;
        return `
          <a class="glass card" href="products.html#category=${slug(category)}">
            <div class="tile">${first.icon}</div>
            <h3>${esc(category)}</h3>
            <p>${count} items</p>
          </a>`;
      }).join("")}
    </div>
  `;
}

function showCategory(slugName) {
  const category = [...new Set(PRODUCTS.map(p => p.category))]
    .find(c => slug(c) === slugName);

  if (!category) return showCategories();

  const items = PRODUCTS.filter(p => p.category === category);

  body.innerHTML = `
    <p class="crumb"><a href="products.html">Products</a> / ${esc(category)}</p>
    <h1 style="font-size:clamp(44px,8vw,84px)">${esc(category)}</h1>
    <p style="color:var(--mute);max-width:40em;font-size:19px;margin:12px 0 28px">
      Tap Enquire to add an item to your list. We'll confirm models, stock and prices on WhatsApp.
    </p>
    <div class="grid" id="productGrid"></div>
  `;

  const grid = document.getElementById("productGrid");

  grid.innerHTML = items.map((product, index) => {
    const item = findItem(product.category, product.name);

    return `
      <article class="glass card pc">
        <div class="tile">
          <img class="product-image"
               src="${esc(product.image)}"
               alt="${esc(product.name)}"
               loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="product-placeholder" style="display:none">${product.icon}</span>
        </div>
        <h3>${esc(product.name)}</h3>
        <p style="margin:0 0 16px">${esc(product.description)}</p>
        <button class="btn ${item ? "done" : "p"}" data-index="${index}" ${item ? "disabled" : ""}>
  ${item ? "Added to enquiry" : "Enquire"}
</button>
      </article>
    `;
  }).join("");

  grid.onclick = event => {
    const button = event.target.closest("button");
    if (!button) return;
    const product = items[Number(button.dataset.index)];
    addItem(product.category, product.name);
    showCategory(slugName);
  };
}

function whatsappMessage() {
  const text =
    "Hello New Tech Systems, I'd like to enquire about these products:\n\n" +
    cart.map((item, i) =>
      `${i + 1}. ${item.n} (${item.c})`
    ).join("\n") +
    "\n\nPlease share availability and prices." +
    (cust ? `\n\nName: ${cust}` : "");

  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function showEnquiry() {
  let html = `<h1 style="font-size:clamp(44px,8vw,84px)">Enquiry list</h1>`;

  if (!cart.length) {
    body.innerHTML = html + `
      <p style="color:var(--mute);font-size:19px;margin:12px 0 24px">
        Your list is empty. Add items with the Enquire button.
      </p>
      <a class="btn p" href="products.html">Browse products</a>
    `;
    return;
  }

  html += `
    <p style="color:var(--mute);font-size:19px;margin:12px 0 24px">
      Check your list, then send it to us on WhatsApp.
    </p>
  `;

  html += cart.map((item, index) => `
    <div class="glass item">
      <div class="nm"><b>${esc(item.n)}</b><br><small>${esc(item.c)}</small></div>
      <div class="qty">
        <button data-action="minus" data-index="${index}">−</button>
        <span>${item.q}</span>
        <button data-action="plus" data-index="${index}">+</button>
      </div>
      <button class="rm" data-action="remove" data-index="${index}">Remove</button>
    </div>
  `).join("");

  html += `
    <div class="glass card" style="margin-top:20px">
      <label for="cn" style="font-weight:600">Your name (optional)</label><br>
      <input class="f" id="cn" value="${esc(cust)}" autocomplete="name">
      <div style="margin-top:20px">
        <a class="btn wa" id="wa" href="${whatsappMessage()}" target="_blank" rel="noopener">
          Checkout on WhatsApp
        </a>
      </div>
    </div>
  `;

  body.innerHTML = html;

  body.onclick = event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const i = Number(button.dataset.index);
    const action = button.dataset.action;

    if (action === "plus") cart[i].q++;
    if (action === "minus") {
      cart[i].q--;
      if (cart[i].q < 1) cart.splice(i, 1);
    }
    if (action === "remove") cart.splice(i, 1);

    save();
    showEnquiry();
  };

  document.getElementById("cn").oninput = event => {
    cust = event.target.value;
    document.getElementById("wa").href = whatsappMessage();
  };
}

function route() {
  const hash = location.hash.replace(/^#/, "");

  if (hash === "enquiry") showEnquiry();
  else if (hash.startsWith("category=")) showCategory(hash.substring(9));
  else showCategories();

  save();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
document.getElementById("yr").textContent = new Date().getFullYear();
route();
