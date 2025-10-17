import svgPaths from "./svg-pdiakvaw0o";

function Logomark() {
  return (
    <div className="h-[167.448px] relative shrink-0 w-[257.684px]" data-name="Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 168">
        <g id="Logomark">
          <g id="Union">
            <path d={svgPaths.p20f7eb00} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p2f112280} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p38d68600} fill="var(--fill-0, #002664)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[46.113px] h-full items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['CD_Fedra_Pro:Bold',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#009fda] text-[115.283px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Intranet</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[46.113px] items-center relative shrink-0" data-name="Logo">
      <Logomark />
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white relative rounded-[36.89px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[32.279px] items-center justify-center overflow-clip px-[50.724px] py-[36.89px] relative rounded-[inherit]">
        <div className="relative shrink-0 size-[32.279px]" data-name="Dot">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <circle cx="16.1396" cy="16.1396" fill="var(--fill-0, #009FDA)" id="Dot" r="16.1396" />
          </svg>
        </div>
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[87.615px] not-italic relative shrink-0 text-[#002664] text-[69.17px] text-nowrap whitespace-pre">Design system</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9.223px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-[#d5d7da] border-[4.611px] border-solid inset-0 pointer-events-none rounded-[36.89px]" />
    </div>
  );
}

function LogoAndBadge() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-[calc(50%+0.381px)] top-[calc(50%-0.385px)] translate-x-[-50%] translate-y-[-50%]" data-name="Logo and badge">
      <Logo />
      <Badge />
    </div>
  );
}

export default function ThumbnailRightClickHereAndChooseSetAsThumbnail() {
  return (
    <div className="bg-[#f2fbff] relative size-full" data-name="Thumbnail (right click here and choose 'Set as thumbnail')">
      <LogoAndBadge />
    </div>
  );
}