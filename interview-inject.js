/**
 * 面试准备板块注入脚本
 * 读取 interview-data.json，为每个页面注入5道面试题
 */
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'interview-data.json');
const pagesDir = path.join(__dirname, 'pages');
const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

let injected = 0, skipped = 0;

for (const [fileKey, info] of Object.entries(data)) {
  const filePath = path.join(pagesDir, fileKey + '.html');
  if (!fs.existsSync(filePath)) { skipped++; continue; }

  let html = fs.readFileSync(filePath, 'utf-8');

  // 跳过已有面试准备板块的页面
  if (html.includes('interview-section')) { skipped++; continue; }

  // 构建面试准备 HTML
  let qhtml = '';
  info.questions.forEach((item, i) => {
    qhtml += `
    <div style="margin-bottom:20px;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
      <div style="background:#f0f4ff;padding:12px 16px;cursor:pointer;display:flex;align-items:center;gap:10px;" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none';this.querySelector('.arrow').textContent=this.nextElementSibling.style.display==='none'?'&#9654;':'&#9660;'">
        <span style="background:#4338ca;color:white;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;flex-shrink:0;">Q${i+1}</span>
        <span style="color:#1e293b;font-size:0.93rem;font-weight:600;flex:1;">${item.q}</span>
        <span class="arrow" style="color:#4338ca;font-size:0.8rem;">&#9654;</span>
      </div>
      <div style="display:none;padding:14px 16px;background:white;border-top:1px solid #e2e8f0;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="background:#dc2626;color:white;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;flex-shrink:0;">A</span>
          <div style="color:#475569;font-size:0.9rem;line-height:1.7;">${item.a}</div>
        </div>
      </div>
    </div>`;
  });

  const sectionHTML = `
<div class="interview-section" style="margin-top:36px;margin-bottom:20px;">
  <hr style="border:none;border-top:2px dashed #c7d2fe;margin:32px 0;">
  <div style="background:linear-gradient(135deg,#eef2ff,#e0e7ff);border:1px solid #a5b4fc;border-radius:12px;padding:24px;margin-top:0;">
    <h2 style="color:#3730a3;font-size:1.3rem;margin:0 0 6px 0;display:flex;align-items:center;gap:8px;">
      <span style="font-size:1.4rem;">&#128188;</span> 面试准备
    </h2>
    <p style="color:#6366f1;font-size:0.85rem;margin:0 0 20px 0;">以下5道题目覆盖本讲核心知识点，点击题目展开参考答案</p>
    ${qhtml}
  </div>
</div>
`;

  // 在 article-content 的关闭 div 之前插入
  // 找到 </div> 后跟 <nav class="page-nav"
  const insertPoint = html.lastIndexOf('</div>', html.indexOf('<nav class="page-nav"'));
  if (insertPoint === -1) {
    console.log(`  [SKIP] ${fileKey}.html - 无法找到插入点`);
    skipped++;
    continue;
  }

  html = html.slice(0, insertPoint) + sectionHTML + html.slice(insertPoint);
  fs.writeFileSync(filePath, html, 'utf-8');
  injected++;
  console.log(`  [OK] ${fileKey}.html`);
}

console.log(`\n完成: 注入 ${injected} 个页面, 跳过 ${skipped} 个页面`);
