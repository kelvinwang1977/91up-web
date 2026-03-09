import express from 'express';
import path from 'path';
import fs from 'fs';
import rateLimit from 'express-rate-limit';

const app = express();
// Cloud Run 位於 Google 的 Load Balancer 後方，必須設定 trust proxy 才能取得真實的 req.ip
app.set('trust proxy', true);

// 設置 Rate Limiting：限制每個 IP 在 15 分鐘內最多只能發送 100 個請求
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 分鐘
  max: 100, // 限制每個 IP 100 個請求
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // 回傳 `RateLimit-*` 標頭
  legacyHeaders: false, // 停用 `X-RateLimit-*` 標頭
});

// 將 rate limiter 套用到所有請求
app.use(limiter);

const __dirname = path.resolve();
const DIST_DIR = path.join(__dirname, 'dist');

// Simple blocking rules
const blockedPathRegex = [
  /\.php$/i, 
  /^\/wp-/i, 
  /\/wp-includes\//i,
  /^\/xmlrpc\.php$/i, 
  /^\/admin/i, 
  /\/wp-content\//i,
  /\.env$/i,
  /\.git/i,
  /^\/phpmyadmin/i
];

// 注意：移除了 'bot'，否則會誤擋 Googlebot (SEO) 以及 LINE/Facebook 的連結預覽爬蟲
const uaRegex = /curl|wget|scanner|python-requests|nikto|sqlmap|acunetix|zgrab|masscan|nmap|dirb/i;

// Optional: list of IPs to always block (pre-populated with top offenders)
const blockedIPs = new Set([
  '104.197.225.193',
  '20.203.144.43',
  '20.220.232.101',
  '40.115.138.121',
  '20.205.120.43',
  '52.253.113.41',
  '20.63.83.113',
  '35.78.7.32',
  '118.163.4.63',
  '79.127.129.201'
]);

app.use((req, res, next) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || '';
    if (blockedIPs.has(ip)) return res.status(403).send('Forbidden');

    const p = req.path || '/';
    const ua = (req.get('user-agent') || '');

    if (blockedPathRegex.some(rx => rx.test(p)) || uaRegex.test(ua)) {
      // quick deny for scanners
      return res.status(403).send('Forbidden');
    }
  } catch (e) {
    // continue on error
  }
  next();
});

// Serve static files from Vite build
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));

  app.get('*', (req, res) => {
    const indexHtml = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexHtml)) return res.sendFile(indexHtml);
    return res.status(404).send('Not Found');
  });
} else {
  // If dist not found, show helpful message
  app.get('/', (req, res) => {
    res.status(200).send('Build not found. Run `npm run build` to generate static assets.');
  });
}

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
