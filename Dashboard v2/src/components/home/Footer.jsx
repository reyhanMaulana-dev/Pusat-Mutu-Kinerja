import { Icon } from "../icons/Icon";
import { Logo } from "../icons/Logo";

export const Footer = () => {
  const footerSections = [
    {
      title: "Layanan Akademik",
      items: [
        { label: "Administrasi Akademik", href: "survei/0" },
        { label: "Bimbingan Akademik", href: "survei/1" },
        { label: "Bimbingan Skripsi", href: "survei/2" },
        { label: "Monitoring Perkuliahan", href: "survei/3" },
        { label: "Informasi Karir", href: "survei/4" },
        { label: "Legalisir Dokumen", href: "survei/5" },
      ],
    },
    {
      title: "Layanan Umum",
      items: [
        { label: "Layanan IT Fakultas", href: "survei/7" },
        { label: "Layanan Keamanan", href: "survei/8" },
        { label: "Sarana Prasarana", href: "survei/9" },
      ],
    },
    {
      title: "Lainnya",
      items: [
        { label: "Tracer Study", href: "survei/6" },
        { label: "Profesionalisme ASN", href: "survei/10" },
        { label: "Tranformasi Digital", href: "survei/11" },
      ],
    },
  ];

  return (
    <section className="footer w-screen bg-[#080C2E] lg:-z-10  lg:pt-px h-fit">
      <div className="max-w-6xl mx-auto mt-25 px-5 py-10 lg:py-0 xl:px-0">
        <div className="grid lg:grid-cols-5 gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2">
          <div className="lg:col-span-2 flex flex-col gap-y-8">
            <Logo color="text-white" />
            <p className="text-base text-gray-400 leading-relaxed">
              Mendukung evaluasi dan peningkatan
              <br />
              mutu layanan kampus berbasis data.
            </p>
            <div className="flex flex-row gap-x-4">
              <div className="bg-white flex items-center p-2.5 rounded-full">
                <a href="#">
                  <Icon.Email />
                </a>
              </div>
              <div className="bg-white flex items-center p-2.5 rounded-full">
                <a href="#">
                  <Icon.World />
                </a>
              </div>
              <div className="bg-white flex items-center p-2.5 rounded-full">
                <a href="#">
                  <Icon.Phone />
                </a>
              </div>
              <div className="bg-white flex items-center p-2.5 rounded-full">
                <a href="#">
                  <Icon.Video />
                </a>
              </div>
            </div>
          </div>
          {footerSections.map((section, sectionIndex) => (
            <div className="flex flex-col gap-y-8" key={sectionIndex}>
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="gap-y-4 flex flex-col">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-violet-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="py-20 text-center text-base text-gray-400">
          © 2026 Copyright{" "}
          <a
            href="https://pusatmutukinerja.web.id/"
            className="text-violet-300 font-semibold"
          >
            Pusat Mutu Kinerja - UIN Syarif Hidayatullah Jakarta
          </a>{" "}
          All Rights Reserved
        </p>
      </div>
    </section>
  );
};
