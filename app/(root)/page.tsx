import { defaultLocale, localeCookie, locales } from "@/lib/i18n";
import { basePath } from "@/lib/site";

// A static host can't redirect on the server, so the site root sends visitors to their saved
// language (cookie set by the switcher), or English, in the browser.
const script = `(function(){var m=document.cookie.match(/(?:^|; )${localeCookie}=([^;]+)/);var l=m&&${JSON.stringify(locales)}.indexOf(m[1])>-1?m[1]:${JSON.stringify(defaultLocale)};location.replace(${JSON.stringify(basePath)}+"/"+l+"/");})();`;

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`1; url=${basePath}/${defaultLocale}/`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p className="p-8 text-center">
        <a href={`${basePath}/${defaultLocale}/`}>Golden Goat Myanmar</a>
      </p>
    </>
  );
}
