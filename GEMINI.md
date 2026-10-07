# AGENTS.md: Portfolio Firza Himawan (Build)

> Aturan proyek untuk agent yang membangun kode. Letakkan di root repo bersama `DESIGN.md`. Jika Antigravity membaca `GEMINI.md`, salin isi file ini ke `GEMINI.md` juga.

---

## 1. Sumber Kebenaran (urutan prioritas)

1. **Permintaan user di chat.**
2. **`DESIGN.md`**: token (warna, tipografi, spasi, radius) dan aturan Do's/Don'ts.
3. Jika ada konflik antara screenshot dan `DESIGN.md`, **screenshot menang** untuk komposisi, `DESIGN.md` menang untuk token.

Jika sebuah layar tidak punya screenshot (misalnya sebagian layar mobile), turunkan dari `DESIGN.md` dan layar desktop yang sudah ada, lalu tandai di laporan bahwa itu hasil ekstrapolasi.

---

## 2. Stack

- **Vite + React + TypeScript (strict)**
- **Tailwind CSS v4** dengan token di blok `@theme` (lihat `antigravity-prompts.md`, Bagian 3). Tidak ada hex, ukuran font, atau radius yang ditulis langsung di komponen.
- **GSAP** (+ ScrollTrigger, Flip, `@gsap/react` → `useGSAP`) untuk scroll dan transisi, **Lenis** untuk smooth scroll, **wouter** untuk routing.
- **three + @react-three/fiber + @react-three/drei** hanya di fase 3D, dimuat lazy.
- **Font self-hosted** lewat paket `@fontsource` (Big Shoulders Display, font body sesuai `DESIGN.md`, DM Mono). Jangan memakai tag Google Fonts eksternal.
- Konten (proyek, fakta pribadi, link) di `src/content/*.ts`, bukan di JSX.

---

## 3. Aturan Visual (ringkas, rincian di DESIGN.md)

- Tidak ada: kartu berbaris, pil/badge, bayangan, gradien, glass/blur, radius > 0, ikon di heading, panah di link, ikon avatar di navigasi.
- Tidak ada label bertanda kurung atau `//`, tidak ada penomoran seksi, tidak ada metadata teknis palsu, tidak ada kata "telemetry", "dispatch", "channels".
- Warna sinyal (`signal`) maksimal satu pemakaian per layar, kecuali menu overlay (latar penuh).
- Teks minimal 13 px, body 17 px. Tidak ada font serif di mana pun. **Setelah memasang font, buka browser dan pastikan tidak ada teks yang jatuh ke serif.**
- Teks kunci (misalnya email) tidak boleh terpotong di tepi layar.
- Frame state (hover, copied, active) hanya mengubah properti yang berubah.

---

## 4. Aturan Gerak

- Hanya `transform`, `opacity`, dan `clip-path`. Tidak ada animasi `width/height/margin/padding` saat scroll.
- Setiap GSAP/ScrollTrigger dibuat lewat `useGSAP` dengan `scope`, sehingga otomatis di-revert saat unmount.
- Lenis disinkronkan dengan ticker GSAP:
  ```ts
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
- `prefers-reduced-motion: reduce` → Lenis mati, semua timeline dilewati, tampil posisi akhir, objek 3D diganti gambar statis.
- Hanya dua sekuens besar (Selected work dan transisi proyek). Sisanya tenang.

---

## 5. Performa & Aksesibilitas

- LCP < 2,5 s dan scroll 60 fps pada throttling CPU 4× di DevTools.
- Gambar AVIF/WebP, `srcset`, dimensi eksplisit, `loading="lazy"` kecuali hero.
- Komponen 3D dan GSAP-heavy dimuat lazy (`React.lazy`, dynamic import).
- Semantik HTML benar, satu `h1` per halaman, fokus keyboard terlihat, kontras AA, target sentuh ≥ 44 px, `alt`/`aria-label` pada canvas dan gambar.

---

## 6. Struktur Direktori

```text
src/
├── components/
│   ├── layout/         # Nav, MenuOverlay, Footer, PageTransition
│   ├── sections/       # Hero, Statement, WorkPanels, WorkIndex, Beyond, Contact
│   ├── three/          # HeroObject (lazy)
│   └── ui/             # Button, TextLink, Marquee, Cursor
├── content/            # projects.ts, personal.ts, site.ts
├── hooks/              # useLenis, useReducedMotion
├── lib/                # gsap.ts (registry), motion.ts (token ease/durasi)
├── pages/              # Home, Work, Project, NotFound
├── styles/             # globals.css (@theme), fonts.css
└── main.tsx
```

---

## 7. Cara Kerja Per Fase

1. **Satu fase per sesi.** Jangan mengerjakan fase berikutnya sebelum user menyetujui.
2. **Sebelum menulis kode**, tulis rencana singkat: komponen apa yang dibuat, token apa yang dipakai, dan layar mana yang menjadi acuan.
3. **Setelah menulis kode**, jalankan `npm run build` dan `npm run lint`, buka app di browser, ambil screenshot di 1440 dan 390, lalu **bandingkan dengan DESIGN.md**. Laporkan selisihnya secara jujur (ukuran, jarak, font, warna).
4. **Commit per fase** dengan pesan yang jelas.
5. Isi yang kosong ditandai `[PLACEHOLDER]` dan dicantumkan di laporan. Jangan mengarang bio, proyek, atau angka.

---

## 8. Definition of Done per Fase

- [ ] Build dan lint bersih, tanpa error TypeScript.
- [ ] Screenshot 1440 dan 390 dibandingkan dengan acuan, dan selisih dilaporkan.
- [ ] Tidak ada hex, font, atau radius di luar token.
- [ ] Tidak ada font serif, tidak ada teks kunci terpotong.
- [ ] Tidak ada pelanggaran larangan di Bagian 3.
- [ ] Reduced motion diuji (untuk fase yang menyentuh gerak).
- [ ] Daftar `[PLACEHOLDER]` yang tersisa dilaporkan.
