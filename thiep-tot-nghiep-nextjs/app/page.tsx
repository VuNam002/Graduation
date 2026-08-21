import Doodles from "@/components/Doodles";
import CapCorner from "@/components/CapCorner";
import GradCap from "@/components/GradCap";
import FlyingPlane from "@/components/FlyingPlane";
import PhotoFrame from "@/components/PhotoFrame";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";

const GRAD_NAME = "Vũ Hà Nam";
const MAJOR = "chuyên ngành Toán - Tin";
const SCHOOL = "Trường Đại học Giao Thông Vận Tải";
const ADDRESS = "Số 3 Cầu Giấy, Láng Thượng, Đống Đa, Hà Nội";
const CEREMONY_ISO = "2026-09-07T14:00:00+07:00";

const TIMELINE = [
  {
    date: "09/2022",
    title: "Ngày đầu nhập học",
    hl: "var(--highlight-pink)",
    body: "Bước chân đầu tiên vào giảng đường Giao Thông Vận Tải — vừa hồi hộp vừa háo hức với 4 năm phía trước.",
    photo: "/photos/moment-1.jpg",
  },
  {
    date: "2023 – 2024",
    title: "Những mùa thi, những deadline",
    hl: "var(--highlight-blue)",
    body: "Bao đêm thức cùng bài tập, cùng bạn bè gồng mình qua từng kỳ thi — mệt nhưng vui.",
    photo: "/photos/moment-2.jpg",
  },
  {
    date: "Cuối 2025",
    title: "Bắt tay làm đồ án tốt nghiệp",
    hl: "var(--highlight-green)",
    body: "Chặng nước rút bắt đầu — những buổi làm việc miệt mài để hoàn thành đồ án cuối cùng.",
    photo: "/photos/moment-3.jpg",
  },
  {
    date: "09/2026",
    title: "Ngày nhận bằng",
    hl: "var(--highlight-pink)",
    body: "Khép lại 4 năm đại học bằng một cái bắt tay, một tấm bằng, và rất nhiều lời cảm ơn.",
    photo: "/photos/moment-4.jpg",
  },
];

const GALLERY_PHOTOS = [
  { src: "/photos/moment-1.jpg", alt: "Khoảnh khắc tốt nghiệp 1" },
  { src: "/photos/moment-2.jpg", alt: "Khoảnh khắc tốt nghiệp 2" },
  { src: "/photos/moment-3.jpg", alt: "Khoảnh khắc tốt nghiệp 3" },
  { src: "/photos/moment-4.jpg", alt: "Khoảnh khắc tốt nghiệp 4" },
  { src: "/photos/moment-5.jpg", alt: "Khoảnh khắc tốt nghiệp 5" },
];

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SCHOOL}, ${ADDRESS}`
)}&output=embed`;
const mapsLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SCHOOL}, ${ADDRESS}`
)}`;

export default function Home() {
  return (
    <main className="w-full">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[var(--black)] px-6 pb-16 pt-16 text-center text-[var(--cream)] sm:pt-20">
        <Doodles tone="gold" />
        <FlyingPlane variant="a" delaySeconds={0} durationSeconds={17} className="h-10 w-10 sm:h-12 sm:w-12" />
        <FlyingPlane variant="b" delaySeconds={-9} durationSeconds={21} className="h-7 w-7 opacity-80 sm:h-8 sm:w-8" />
        <FlyingPlane variant="c" delaySeconds={-4} durationSeconds={14} className="h-8 w-8 opacity-90 sm:h-9 sm:w-9" />
        <div className="pointer-events-none absolute -left-6 -top-4 h-28 w-40 opacity-80 sm:h-36 sm:w-52">
          <CapCorner />
        </div>
        <div className="pointer-events-none absolute -right-6 -top-4 h-28 w-40 opacity-80 sm:h-36 sm:w-52">
          <CapCorner flip />
        </div>

        <div className="relative z-[1] mx-auto max-w-xl">
          <GradCap className="mx-auto mb-1 h-12 w-12 sm:h-14 sm:w-14" />
          <p className="font-script text-[clamp(1.8rem,5vw,2.6rem)] text-[var(--gold-soft)]">
            Graduation Ceremony
          </p>

          <div className="relative mx-auto mt-4 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]">
            <div className="absolute inset-0 rounded-full border-[6px] border-[var(--gold)] p-1.5">
              <PhotoFrame
                src="/photos/hero.jpg"
                alt={GRAD_NAME}
                className="h-full w-full rounded-full object-cover"
                placeholderLabel="Ảnh của bạn"
              />
            </div>
            <div className="absolute -left-4 -top-3 h-14 w-14 -rotate-[24deg] text-[var(--gold)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
              <svg viewBox="0 0 40 40" className="h-full w-full">
                <path
                  fill="var(--gold)"
                  d="M20 6 2 15l18 8 18-8-18-9Z"
                />
                <path fill="none" stroke="var(--gold-deep)" strokeWidth="1.4" d="M10 18.5v7c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-7" />
              </svg>
            </div>
            <div className="absolute -right-5 top-2 h-10 w-10 text-[var(--gold)]">
              <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
                <path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" />
                <path d="M12 13v4M9 20h6M10 17h4v3h-4v-3Z" />
              </svg>
            </div>
          </div>

          <h1 className="mt-5 text-balance font-script text-[clamp(3.4rem,12vw,6rem)] font-semibold leading-[1.15] text-[var(--gold-soft)]">
            {GRAD_NAME}
          </h1>

          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-[1.05rem] font-semibold">
            <span>7</span>
            <span className="text-[var(--gold)]">|</span>
            <span>Tháng 09</span>
            <span className="text-[var(--gold)]">|</span>
            <span>2026</span>
          </p>

          <Countdown target={CEREMONY_ISO} />
        </div>
      </section>

      {/* ---------- INVITATION SPLIT ---------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-[var(--black-2)] p-8 sm:p-10">
          <PhotoFrame
            src="/photos/invite.jpg"
            alt={GRAD_NAME}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            placeholderLabel="Ảnh của bạn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-[1] mx-auto w-full max-w-md text-[var(--cream)] sm:mx-0">
            <p className="font-script text-[clamp(2rem,6vw,2.8rem)] leading-tight">Happy Graduation</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]">
              Mời mọi người đến chung vui
              <br />
              lễ tốt nghiệp của
            </p>
            <p className="mt-2 font-script text-[1.8rem] text-[var(--gold-soft)]">Hà Nam</p>
            <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold">
              <span>Thứ Hai</span>
              <span className="text-[var(--gold)]">|</span>
              <span>Tháng 09 2026</span>
              <span className="text-[var(--gold)]">|</span>
              <span>14 giờ</span>
            </p>
          </div>
        </div>

        <div className="bg-[var(--black)] p-8 text-[var(--cream)] sm:p-10">
          <Reveal className="mx-auto max-w-md sm:mx-0">
            <h2 className="font-display text-2xl font-bold text-[var(--gold-soft)]">Thư mời</h2>
            <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-[var(--cream)]/90">
              <p>👋 Xin chào cả nhà thân yêu,</p>
              <p>
                Khoảnh khắc này cuối cùng cũng tới! Ngày <strong>07/09/2026</strong> đánh dấu việc
                mình chính thức hoàn thành chặng đường đại học tại {SCHOOL} và bước sang một
                chương mới của cuộc đời.
              </p>
              <p>
                Mình biết để có được thành quả này, ngoài nỗ lực của bản thân, không thể thiếu
                những lời động viên từ gia đình, thầy cô và bạn bè. Cảm ơn mọi người thật nhiều!
              </p>
              <p>
                Mình sẽ có mặt tại khu vực sảnh chờ sau khi kết thúc buổi lễ. Đây sẽ là dịp tuyệt
                vời để chúng ta gặp gỡ, chụp thật nhiều ảnh kỷ niệm và cùng nhau chia sẻ niềm vui
                tốt nghiệp.
              </p>
              <p>Không cần quà cáp gì cả, chỉ cần mọi người đến chung vui là mình vui rồi!</p>
              <p>Hẹn gặp mọi người tại buổi lễ nhé! ❤️</p>
            </div>
            <p className="mt-6 text-sm text-[var(--cream)]/70">Trân trọng,</p>
            <p className="font-script text-2xl text-[var(--gold-soft)]">Hà Nam</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section className="relative bg-[var(--cream)] px-6 py-16 sm:py-20">
        <Doodles tone="ink" className="opacity-60" />
        <div className="relative z-[1] mx-auto max-w-invite">
          <Reveal className="text-center">
            <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-bold text-[var(--gold-deep)]">
              Lễ tốt nghiệp
            </h2>
            <p className="mt-1 text-[var(--ink-soft)]">Sự hiện diện của bạn là niềm vinh hạnh của mình</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
            <Reveal>
              <p className="text-[0.95rem]">
                <strong>Địa điểm:</strong> {SCHOOL}
              </p>
              <p className="mt-1 text-[0.95rem]">
                <strong>Địa chỉ:</strong> {ADDRESS}
              </p>
              <a
                href={mapsLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-bold text-[var(--black)] shadow-[0_10px_20px_-10px_var(--gold-deep)] transition-transform hover:scale-[1.03]"
              >
                📍 Mở Google Maps
              </a>

              <p className="mt-8 text-[0.92rem] text-[var(--ink-soft)]">
                Nếu bạn đi xe đến, khuôn viên trường có bãi gửi xe ngay tại cổng chính — bạn có
                thể gửi xe ở đó trước khi vào dự lễ.
              </p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]/70">
                (Placeholder — thay bằng địa điểm gửi xe cụ thể nếu bạn có thông tin chính xác hơn.)
              </p>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_18px_40px_-24px_rgba(20,15,5,0.35)]">
                <iframe
                  src={mapsEmbedSrc}
                  title={`Bản đồ ${SCHOOL}`}
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="relative bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-invite">
        <Reveal className="text-center">
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-bold text-[var(--gold-deep)]">
            Dòng thời gian
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--gold)]/40 sm:block" />
          <div className="flex flex-col gap-10">
            {TIMELINE.map((item, i) => {
              const photoFirst = i % 2 === 0;
              return (
                <div key={item.date} className="relative grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                  <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--gold-deep)] bg-[var(--cream)] sm:block" />
                  <Reveal className={photoFirst ? "sm:order-1" : "sm:order-2"}>
                    <PhotoFrame
                      src={item.photo}
                      alt={item.title}
                      className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_16px_32px_-18px_rgba(20,15,5,0.35)]"
                    />
                  </Reveal>
                  <Reveal className={photoFirst ? "sm:order-2" : "sm:order-1"}>
                    <div className="rounded-2xl bg-[var(--paper)] p-6 shadow-[0_14px_30px_-20px_rgba(20,15,5,0.3)]">
                      <span className="inline-block rounded-full bg-[var(--gold-soft)] px-3 py-1 text-xs font-bold text-[var(--ink)]">
                        {item.date}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--ink)]">
                        <span
                          className="highlight-mark"
                          style={{ "--hl": item.hl } as React.CSSProperties}
                        >
                          {item.body}
                        </span>
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[var(--ink-soft)]/70">
          (Placeholder — thay các mốc và câu chuyện bằng kỷ niệm thật của bạn.)
        </p>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="bg-[var(--cream)] py-16 sm:py-20">
        <Reveal className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-bold text-[var(--gold-deep)]">
            Kỷ niệm tốt nghiệp
          </h2>
        </Reveal>
        <div className="mt-10">
          <Gallery photos={GALLERY_PHOTOS} />
        </div>
      </section>

      {/* ---------- CLOSING ---------- */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-[clamp(1.5rem,4vw,2.1rem)] font-bold text-[var(--gold-deep)]">
            Hoàn thành hành trình — Tri ân sâu sắc
          </h2>
          <p className="mt-2 text-[var(--ink-soft)]">
            Lời cảm ơn chân thành nhất đến những người đã cùng mình vượt qua chặng đường này.
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 items-center gap-8 sm:grid-cols-2">
            <PhotoFrame
              src="/photos/closing.jpg"
              alt={GRAD_NAME}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_16px_32px_-18px_rgba(20,15,5,0.3)]"
            />
            <p className="text-[0.95rem] leading-relaxed">
              Khoảnh khắc nhận bằng tốt nghiệp là cả một <strong>hành trình dài</strong> được gói
              gọn. Mình xin gửi lời tri ân chân thành nhất đến <strong>gia đình</strong> — điểm
              tựa vững chắc nhất, luôn hy sinh và tin tưởng tuyệt đối. Cảm ơn <strong>thầy cô</strong>{" "}
              đã dẫn dắt, truyền đạt kiến thức quý giá. Và cảm ơn <strong>bạn bè</strong>, những
              người đồng hành không thể thiếu. Mọi thành quả hôm nay đều nhờ sự đồng hành của mọi
              người.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-[var(--gold-soft)] py-5 text-center font-display text-lg font-bold text-[var(--ink)]">
            Hẹn mọi người tại buổi lễ nhé!
          </div>
        </Reveal>
      </section>

      <footer className="bg-[var(--black)] px-6 py-8 text-center text-xs uppercase tracking-[0.18em] text-[var(--cream)]/60">
        Lễ Tốt Nghiệp · Vũ Hà Nam · 7 · 9 · 2026
      </footer>
    </main>
  );
}
