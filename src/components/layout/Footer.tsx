import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { Logo as BrandLogo } from '../brand/Logo';

// Logo Component
function Logo2() {
  return (
    <BrandLogo as="a" href="/" height={29} className="relative shrink-0 w-full" />
  );
}

function LogoAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] items-start relative shrink-0 w-full" data-name="Logo and supporting text">
      <Logo2 />
    </div>
  );
}

// Footer Links - Column 1: O intranetu
function ButtonsButton14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] relative shrink-0 text-[#535862] text-[14px] md:text-[15px] lg:text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pravidla používání `}</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton14 />
    </div>
  );
}

function ButtonsButton15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mapa portálu
      </p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton15 />
    </div>
  );
}

function ButtonsButton16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nápověda a časté dotazy
      </p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton16 />
    </div>
  );
}

function ButtonsButton17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Poskytnout zpětnou vazbu
      </p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton17 />
    </div>
  );
}

function ButtonsButton17a() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ochrana osobních údajů
      </p>
    </div>
  );
}

function FooterLink3a() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton17a />
    </div>
  );
}

function ButtonsButton17b() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ukázka komponent
      </p>
    </div>
  );
}

function FooterLink3b() {
  return (
    <a href="/components" className="content-stretch flex gap-[8px] items-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer" data-name="_Footer link">
      <ButtonsButton17b />
    </a>
  );
}

function ButtonsButton17c() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Styly písma
      </p>
    </div>
  );
}

function FooterLink3c() {
  return (
    <a href="/fonts" className="content-stretch flex gap-[8px] items-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer" data-name="_Footer link">
      <ButtonsButton17c />
    </a>
  );
}

function ButtonsButton17d() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Barevné styly
      </p>
    </div>
  );
}

function FooterLink3d() {
  return (
    <a href="/colors" className="content-stretch flex gap-[8px] items-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer" data-name="_Footer link">
      <ButtonsButton17d />
    </a>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
      <FooterLink3a />
      <FooterLink3b />
      <FooterLink3c />
      <FooterLink3d />
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] md:leading-[21px] lg:leading-[22px] relative shrink-0 text-[#002664] text-[14px] md:text-[15px] lg:text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        O intranetu
      </p>
      <FooterLinks />
    </div>
  );
}

// Footer Links - Column 2: Další zdroje a weby
function ButtonsButton18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Web ČD pro veřejnost
      </p>
    </div>
  );
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton18 />
    </div>
  );
}

function ButtonsButton19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        E-shop
      </p>
    </div>
  );
}

function FooterLink5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton19 />
    </div>
  );
}

function ButtonsButton20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ČD Cargo
      </p>
    </div>
  );
}

function FooterLink6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton20 />
    </div>
  );
}

function ButtonsButton21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kariérní portál ČD
      </p>
    </div>
  );
}

function FooterLink7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton21 />
    </div>
  );
}

function ButtonsButton22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vlakem na výlet
      </p>
    </div>
  );
}

function FooterLink8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton22 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink4 />
      <FooterLink5 />
      <FooterLink6 />
      <FooterLink7 />
      <FooterLink8 />
    </div>
  );
}

function FooterLinksColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] md:leading-[21px] lg:leading-[22px] relative shrink-0 text-[#002664] text-[14px] md:text-[15px] lg:text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Další zdroje a weby
      </p>
      <FooterLinks1 />
    </div>
  );
}

// Frame13 - Groups first two columns
function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-start relative shrink-0 w-full">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

// Footer Links - Column 3: Rychlé odkazy
function ButtonsButton23() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Novinky a média
      </p>
    </div>
  );
}

function FooterLink9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton23 />
    </div>
  );
}

function ButtonsButton24() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pro zaměstnance
      </p>
    </div>
  );
}

function FooterLink10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton24 />
    </div>
  );
}

function ButtonsButton25() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Naše firma
      </p>
    </div>
  );
}

function FooterLink11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton25 />
    </div>
  );
}

function ButtonsButton26() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dokumenty
      </p>
    </div>
  );
}

function FooterLink12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton26 />
    </div>
  );
}

function ButtonsButton27() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Podpora
      </p>
    </div>
  );
}

function FooterLink13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton27 />
    </div>
  );
}

function ButtonsButton28() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nástroje a aplikace
      </p>
    </div>
  );
}

function FooterLink14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton28 />
    </div>
  );
}

function ButtonsButton29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Telefonní seznam
      </p>
    </div>
  );
}

function FooterLink15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton29 />
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink9 />
      <FooterLink10 />
      <FooterLink11 />
      <FooterLink12 />
      <FooterLink13 />
      <FooterLink14 />
      <FooterLink15 />
    </div>
  );
}

function FooterLinksColumn2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] md:leading-[21px] lg:leading-[22px] relative shrink-0 text-[#002664] text-[14px] md:text-[15px] lg:text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rychlé odkazy
      </p>
      <FooterLinks2 />
    </div>
  );
}

// Contact Information Components
function LinkExternal4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="link-external-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="link-external-02">
          <path d={svgPaths.p6d9ed80} id="Icon" stroke="var(--stroke-0, #002664)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Helpdesk IT
      </p>
      <LinkExternal4 />
    </div>
  );
}

function Phone6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="phone">
          <path d={svgPaths.p2618ba20} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LocationWrap6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone6 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap6 />
    </div>
  );
}

function Mail02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mail-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mail-02">
          <path d={svgPaths.p1c557800} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LocationWrap7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Mail02 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        helpdesk.it@cd.cz
      </p>
    </div>
  );
}

function Details7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Details6 />
      <Details7 />
    </div>
  );
}

function TextAndSupportingText24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personální oddělení
      </p>
    </div>
  );
}

function Mail3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mail-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mail-02">
          <path d={svgPaths.p1c557800} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LocationWrap8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Mail3 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        personalni@cd.cz
      </p>
    </div>
  );
}

function Details8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap8 />
    </div>
  );
}

function TextAndSupportingText25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <Frame22 />
      <Details8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bezpečnost provozu (NONSTOP)
      </p>
    </div>
  );
}

function Phone7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="phone">
          <path d={svgPaths.p2618ba20} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LocationWrap9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone7 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 800 123 456
      </p>
    </div>
  );
}

function Details9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap9 />
    </div>
  );
}

function TextAndSupportingText26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <Frame23 />
      <Details9 />
    </div>
  );
}

function FooterLinksColumn3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-start relative shrink-0 w-full" data-name="_Footer links column">
      <TextAndSupportingText24 />
      <TextAndSupportingText25 />
      <TextAndSupportingText26 />
    </div>
  );
}

// Main Content Section
function Content43() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px] lg:gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="md:col-span-2 lg:col-span-1">
        <LogoAndSupportingText />
      </div>
      <div className="md:col-span-1 lg:col-span-1">
        <Frame13 />
      </div>
      <div className="md:col-span-1 lg:col-span-1">
        <FooterLinksColumn2 />
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <FooterLinksColumn3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 lg:px-8" data-name="Container">
      <div className="flex flex-col gap-[32px] md:gap-[40px] lg:gap-[48px] items-start w-full">
        <Content43 />
      </div>
    </div>
  );
}

// Social Media Icons
function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social icon">
          <path d={svgPaths.p2334f790} fill="var(--fill-0, #717680)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_19671)" id="Social icon">
          <g id="Vector">
            <path d={svgPaths.p3bfce500} fill="var(--fill-0, #717680)" />
            <path d={svgPaths.p90dcd40} fill="var(--fill-0, #717680)" />
            <path d={svgPaths.p36893400} fill="var(--fill-0, #717680)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_19671">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_19627)" id="Social icon">
          <path clipRule="evenodd" d={svgPaths.p2e42b500} fill="var(--fill-0, #717680)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_19627">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Group">
        <path d={svgPaths.p2ccee40} fill="var(--fill-0, #717680)" id="Vector" />
      </g>
    </svg>
  );
}

function SocialIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
      <Group />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[16px] md:gap-[20px] lg:gap-[24px] items-center relative shrink-0" data-name="Social icons">
      <SocialIcon />
      <SocialIcon1 />
      <SocialIcon2 />
      <SocialIcon3 />
    </div>
  );
}

// Copyright Section with Social Icons
function Frame14() {
  return (
    <div className="content-stretch flex flex-col md:flex-row font-['Roboto:Regular',_sans-serif] font-normal gap-[8px] md:gap-[12px] lg:gap-[16px] items-center leading-[20px] md:leading-[21px] lg:leading-[22px] relative shrink-0 text-[14px] md:text-[15px] lg:text-[16px]">
      <p className="relative shrink-0 text-[#717680] text-center md:text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2025 České dráhy, a.s. Všechna práva vyhrazena.
      </p>
      <p className="relative shrink-0 text-[#535862] text-center md:text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ochrana osobních údajů
      </p>
    </div>
  );
}

function Content44() {
  return (
    <div className="box-border content-center flex flex-col md:flex-row gap-[16px] md:gap-[20px] lg:gap-[24px] items-center md:justify-between pb-0 pt-[24px] md:pt-[28px] lg:pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#d5d7da] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <SocialIcons />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 lg:px-8" data-name="Container">
      <div className="flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-start w-full">
        <Content44 />
      </div>
    </div>
  );
}

// Main Footer Export
export function Footer() {
  return (
    <div className="full-width-section bg-white box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-center overflow-clip px-0 py-[32px] md:py-[48px] lg:py-[64px] relative shrink-0 z-[1]" data-name="Footer">
      <Container5 />
      <Container6 />
    </div>
  );
}
