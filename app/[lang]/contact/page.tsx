import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getContent();
  return c.ui.contact.meta;
}

const icon = {
  pin: <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
};

function Icon({ d }: { d: React.ReactNode }) {
  return (
    <span className="bg-gold-gradient grid h-12 w-12 shrink-0 place-items-center rounded-full text-volcanic">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {d}
      </svg>
    </span>
  );
}

export default async function ContactPage() {
  const { c } = await getContent();
  const { company, contactPage } = c;
  const ui = c.ui.contact;
  return (
    <>
      <PageHero
        eyebrow={ui.hero.eyebrow}
        title={ui.hero.title}
        text={contactPage.intro}
        image="/images/story/banner-tamarind-orchard.jpg"
        crumbs={[{ label: ui.hero.eyebrow }]}
      />

      <section className="overflow-x-clip">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <Reveal from="left" className="lg:col-span-2">
            <SectionHeading eyebrow={ui.reach.eyebrow} title={ui.reach.title} text={contactPage.outreach} />
            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <Icon d={icon.pin} />
                <div>
                  <p className="font-bold">{ui.reach.office}</p>
                  <p className="text-muted">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon d={icon.phone} />
                <div>
                  <p className="font-bold">{ui.reach.phone}</p>
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="block text-muted hover:text-tamarind">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <Icon d={icon.mail} />
                <div className="min-w-0">
                  <p className="font-bold">{ui.reach.email}</p>
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-muted [overflow-wrap:anywhere] hover:text-tamarind">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal from="right" delay={120} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-xl shadow-ink/5 sm:p-10">
              <h2 className="font-display text-3xl">{ui.formTitle}</h2>
              <p className="mt-2 mb-8 text-muted">{contactPage.formIntro}</p>
              <ContactForm email={company.emails[0]} ui={ui.form} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[420px] bg-sand">
        <iframe
          title={ui.mapTitle}
          src="https://maps.google.com/maps?q=Kyaukpadaung%2C%20Mandalay%20Region%2C%20Myanmar&z=11&output=embed"
          className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href="https://maps.google.com/?q=Kyaukpadaung,+Mandalay+Region,+Myanmar"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-volcanic px-6 py-3 text-sm font-semibold text-white shadow-xl hover:bg-tamarind"
        >
          {ui.openMaps}
        </a>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow={ui.faq.eyebrow} title={ui.faq.title} align="center" />
          </Reveal>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {contactPage.faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-tamarind transition group-open:rotate-45">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pr-14 pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
