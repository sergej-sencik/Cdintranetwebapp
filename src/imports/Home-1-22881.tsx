import React from "react";
import svgPaths from "./svg-sjo69dtk3d";
import { CustomButton } from "../components/ui/custom-button";
import { ChevronRight } from "lucide-react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { cn } from "../components/ui/utils";
import { MegaMenuContainer } from "../components/MegaMenu";
import { HeaderNavButton } from "../components/ui/header-nav-button";
import { ContentCard } from "../components/ui/content-card";
import { BlogPostCard } from "../components/ui/blog-post-card";
import { NewsArticleCard } from "../components/ui/news-article-card";
import { VideoArticleCard } from "../components/ui/video-article-card";
import { EventCard } from "../components/ui/event-card";
import { NotificationCard, AlertIcon } from "../components/ui/notification-card";
import { HorizontalTabs as HorizontalTabsComponent } from "../components/ui/horizontal-tabs";
import { PageBlockHeader, PAGE_BLOCK_HEADER_BUTTON_SIZE } from "../components/ui/page-block-header";
import { FeaturedNewsSection, UpcomingEventsSection, LatestVideosSection } from "../components/sections";
import { BannerCarousel } from "../components/ui/banner-carousel";
import { LinkCard, LinkCardIcon } from "../components/ui/link-card";
import { Footer as GlobalFooter } from "../components/layout/Footer";
import { Header as GlobalHeader } from "../components/layout/Header";
import { PageContainer, ContentGrid, SectionHeader } from "../components/layout";
import imgAvatar from "figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png";
import imgBanner from "figma:asset/ff9a737687b20c904b6f07bea2ba2278fb1a04dc.png";
import imgImage from "figma:asset/90df4b7d02738ffcbc0f0ef17227253f8e8b7879.png";
import imgImage1 from "figma:asset/4b99ee7a2dcde35fcd0d684e01f361192035f835.png";
import imgImage2 from "figma:asset/c80065cd823864b3f367a26963864f8c4dc17a23.png";
import imgImage3 from "figma:asset/1807ef066d157783954e75a93f5058d7cb637e09.png";
import imgImage4 from "figma:asset/c2e0a56e68b8dba8d3a20d891869fd1e762ed560.png";
import imgImage5 from "figma:asset/30720479c946f5f34acb60a12f4242d6359aa358.png";
import imgImage6 from "figma:asset/f7811a6b55f3dc801e8bf14174773bccab18611c.png";
import imgImage7 from "figma:asset/729cf44d64ef21a30d4d968925b14dc07b1798e1.png";
import imgImage8 from "figma:asset/dbf351eaaff8f6770bdd423c9ddd9d26f51953e9.png";
import imgImage9 from "figma:asset/ede06680139c4d3ba9eac84adb44e2a2c989b844.png";
import imgAvatar1 from "figma:asset/b3a602f2f14d0c2599f1ae90877b09c32103c926.png";
import imgAvatar2 from "figma:asset/2b7c1998a9b2750b3154a56c75849d42e9d07630.png";
import imgAvatar3 from "figma:asset/f616bdf74826655ce23dd443ed3b5dc09aec80d7.png";
import imgAvatar4 from "figma:asset/2e705d9f98249a59612eebbfa4c28e65b5310f6f.png";

// AI Assistant components removed - now using the enhanced fixed chatbot component from /components/AIAssistant.tsx

function Logomark() {
  return (
    <div className="h-[32px] relative shrink-0 w-[49.245px]" data-name="Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 32">
        <g id="Logomark">
          <g id="Union">
            <path d={svgPaths.p227b9a00} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p373e43f0} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p20376e00} fill="var(--fill-0, #002664)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8.812px] h-full items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['CD_Fedra_Pro',_sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[color:var(--color-blue-500)] text-[22.031px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Intranet</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8.812px] items-center relative shrink-0" data-name="Logo">
      <Logomark />
      <div className="flex flex-row items-center self-stretch">
        <Frame1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[17.625px] items-center relative shrink-0" data-name="Content">
      <Logo />
    </div>
  );
}

function SearchLg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search-lg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search-lg">
          <path d={svgPaths.p22fdb270} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <SearchLg />
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hledejte kolegu, dokument nebo novinku...
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[400px]" data-name="Select">
      <InputWithLabel />
    </div>
  );
}

function Bell01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bell-01">
          <path d={svgPaths.p3f75b400} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function NavItemButton() {
  return (
    <CustomButton 
      variant="icon" 
      size="icon"
      className="w-[40px]"
      data-name="_Nav item button"
    >
      <Bell01 />
    </CustomButton>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#009fda] box-border content-stretch flex items-center justify-center px-[6px] py-[2px] right-[-7px] rounded-[4px] top-[-2px]" data-name="Badge">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Actions">
      <NavItemButton />
      <Badge />
    </div>
  );
}

function Avatar() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar} />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0 text-[#252b37]">
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre">Jan Novotný</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[14px] min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Technik kolejových vozidel
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Avatar />
      <Frame2 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[264px]" data-name="Input">
      <Content2 />
      <ChevronDown />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Actions />
      <Input1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[72px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between max-w-inherit px-[32px] py-0 relative w-full">
          <Content />
          <Select />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigationMain() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[1440px] z-[6]" data-name="Header navigation / Main">
      <Container />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Novinky a média
      </p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #A0E1F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DropdownHeaderNavigationButton() {
  return (
    <HeaderNavButton>
      Novinky a média
    </HeaderNavButton>
  );
}

function TextPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pro zaměstnance
      </p>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #A0E1F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DropdownHeaderNavigationButton1() {
  return (
    <HeaderNavButton>
      Pro zaměstnance
    </HeaderNavButton>
  );
}

function TextPadding3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Naše firma
      </p>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #A0E1F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DropdownHeaderNavigationButton2() {
  return (
    <HeaderNavButton>
      Naše firma
    </HeaderNavButton>
  );
}

function TextPadding4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dokumenty
      </p>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #A0E1F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DropdownHeaderNavigationButton3() {
  return (
    <HeaderNavButton>
      Dokumenty
    </HeaderNavButton>
  );
}

function TextPadding5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Podpora
      </p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #A0E1F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function DropdownHeaderNavigationButton4() {
  return (
    <HeaderNavButton>
      Podpora
    </HeaderNavButton>
  );
}

function TextPadding6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nástroje a aplikace
      </p>
    </div>
  );
}

function DropdownHeaderNavigationButton5() {
  return (
    <HeaderNavButton hasDropdown={false}>
      Nástroje a aplikace
    </HeaderNavButton>
  );
}

function TextPadding7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Telefonní seznam
      </p>
    </div>
  );
}

function DropdownHeaderNavigationButton6() {
  return (
    <HeaderNavButton hasDropdown={false}>
      Telefonní seznam
    </HeaderNavButton>
  );
}

function Navigation() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Navigation">
      <MegaMenuContainer>
        <DropdownHeaderNavigationButton />
        <DropdownHeaderNavigationButton1 />
        <DropdownHeaderNavigationButton2 />
        <DropdownHeaderNavigationButton3 />
        <DropdownHeaderNavigationButton4 />
        <DropdownHeaderNavigationButton5 />
        <DropdownHeaderNavigationButton6 />
      </MegaMenuContainer>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Navigation />
    </div>
  );
}

function NavWrapper() {
  return (
    <div className="bg-[#009fda] relative shrink-0 w-full" data-name="Nav wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[4px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1440px] z-[5]" data-name="Header navigation">
      <NavWrapper />
    </div>
  );
}

function OutlineInner() {
  return (
    <div className="absolute inset-[-16.667%] opacity-30 rounded-[20px]" data-name="Outline inner">
      <div aria-hidden="true" className="absolute border-[#dc6803] border-[1.667px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function OutlineOuter() {
  return (
    <div className="absolute inset-[-37.5%] opacity-10 rounded-[20px]" data-name="Outline outer">
      <div aria-hidden="true" className="absolute border-[#dc6803] border-[1.667px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function AlertCircle() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g clipPath="url(#clip0_1_19781)" id="alert-circle">
        <path d={svgPaths.p2fe1de00} id="Icon" stroke="var(--stroke-0, #DC6803)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_1_19781">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FeaturedIconOutline() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="Featured icon outline">
      <OutlineInner />
      <OutlineOuter />
      <AlertCircle />
    </div>
  );
}

function TextWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text wrap">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-0 pr-[32px] py-0 relative w-full">
          <p className="basis-0 font-['Roboto:Medium',_sans-serif] font-medium grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#252b37] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nový bezpečnostní pokyn pro práci pod napětím
          </p>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <TextWrap />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Byl vydán nový předpis BP-04/25, který s platností od 1.10.2025 upravuje postupy při údržbě elektrických jednotek. Všichni technici jsou povinni potvrdit seznámení.
      </p>
    </div>
  );
}

function TextPadding9() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zobrazit předpis
      </p>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <CustomButton variant="primary" size="lg">
      <TextPadding9 />
    </CustomButton>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Buttons">
      <ButtonsButton2 />
    </div>
  );
}

function XClose() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="x-close">
          <path d="M15 5L5 15M5 5L15 15" id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButtonCloseX() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name="Buttons/Button close X">
      <XClose />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Buttons />
      <ButtonsButtonCloseX />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText />
      <Actions1 />
    </div>
  );
}

function Alert() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const showPrimaryCta = isDesktop; // only show button on desktop

  return (
    <NotificationCard
      icon={<FeaturedIconOutline />}
      title="Nový bezpečnostní pokyn pro práci pod napětím"
      description="Byl vydán nový předpis BP-04/25, který s platností od 1.10.2025 upravuje postupy při údržbě elektrických jednotek. Všichni technici jsou povinni potvrdit seznámení."
      actions={
        showPrimaryCta ? (
          <CustomButton variant="primary" size="md">
            Zobrazit předpis
          </CustomButton>
        ) : null
      }
      onClose={() => console.log("Notification closed")}
      mobileLayout={isMobile || isTablet}
      className={cn(
        "w-full",
        isMobile ? "max-w-full" :
        isTablet ? "max-w-[calc(100vw-4rem)]" :
        "max-w-[1216px]"
      )}
    />
  );
}



function Notifications() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="NotificationsContainer">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit px-[32px] py-0 relative w-full gap-4">
          <Alert />

          <div className={isDesktop ? "flex justify-end w-full" : "flex justify-center w-full"}>
            <CustomButton
              variant="link-color"
              size={isMobile ? "sm" : "md"}
              rightIcon={<ChevronRight className={cn(isMobile ? "size-[16px]" : "size-[20px]")} />}
            >
              {isMobile ? "Všechna oznámení (4)" : "Zobrazit všechna oznámení (4)"}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarDate() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="calendar-date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar-date">
          <path d={svgPaths.p76c4a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <CalendarDate />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#252b37] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pátek, 19. září 2025
      </p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-[70px] items-start min-h-px min-w-[320px] relative shrink-0" data-name="Text and supporting text">
      <Header />
      <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[38px] not-italic relative shrink-0 text-card-foreground text-[30px] w-full">Dobrý den, Jan Novotný</p>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Page header">
      <TextAndSupportingText1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start max-w-inherit px-[32px] py-0 relative w-full mt-[0px] mr-[0px] mb-[0px] ml-[0px]">
          <PageHeader />
        </div>
      </div>
    </div>
  );
}

/**
 * WelcomeHeader - Displays the welcome message with date
 * Semantic replacement for HeaderSection() + Container1()
 * Matches HeroBannerGrid structure for consistent layout and spacing
 */
function WelcomeHeader() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-[2] mb-[24px]" data-name="Welcome Header" role="banner" aria-label="Welcome header with date and greeting">
      <div className="flex flex-col gap-[8px] items-start w-full">
        {/* Date section with calendar icon */}
        <div className="flex items-center gap-[8px]">
          <div className="relative shrink-0 size-[20px]" aria-hidden="true">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="calendar-date">
                <path d={svgPaths.p76c4a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
          <time 
            dateTime="2025-09-19" 
            className="font-['Roboto',sans-serif] text-[#252b37] text-[16px] leading-[22px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Pátek, 19. září 2025
          </time>
        </div>
        
        {/* Greeting heading */}
        <h1 className="font-['CD_Fedra_Pro',sans-serif] font-medium text-card-foreground text-[30px] leading-[38px] w-full">
          Dobrý den, Jan Novotný
        </h1>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="h-[408px] relative rounded-[8px] shrink-0 w-full" data-name="Banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[107.19%] left-0 max-w-none top-[-0.41%] w-full" src={imgBanner} />
      </div>
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[408px] items-center justify-end p-[16px] w-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PauseCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="pause-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_19784)" id="pause-circle">
          <path d={svgPaths.p25cfdf80} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_19784">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 bg-[#e9eaeb] content-stretch flex flex-col gap-[8px] grow h-[4px] items-start min-h-px min-w-px relative shrink-0" data-name="1">
      <div className="bg-[#009fda] h-[4px] shrink-0 w-[24px]" data-name="bg" />
    </div>
  );
}

function Component2() {
  return <div className="basis-0 bg-[#e9eaeb] content-stretch flex flex-col gap-[8px] grow h-[4px] items-start min-h-px min-w-px shrink-0" data-name="2" />;
}

function Component3() {
  return <div className="basis-0 bg-[#e9eaeb] content-stretch flex flex-col gap-[8px] grow h-[4px] items-start min-h-px min-w-px shrink-0" data-name="3" />;
}

function Component4() {
  return <div className="basis-0 bg-[#e9eaeb] content-stretch flex flex-col gap-[8px] grow h-[4px] items-start min-h-px min-w-px shrink-0" data-name="4" />;
}

function Component5() {
  return <div className="basis-0 bg-[#e9eaeb] content-stretch flex flex-col gap-[8px] grow h-[4px] items-start min-h-px min-w-px shrink-0" data-name="5" />;
}

function Items() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Items">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #717680)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function BannerPagination() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[348px]" data-name="Banner Pagination">
      <ChevronLeft />
      <Items />
      <ChevronRight1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <PauseCircle />
      <BannerPagination />
    </div>
  );
}

function Left() {
  return (
    <div className="flex-1 min-w-0 w-full flex flex-col gap-[16px] items-start" data-name="Left">
      <BannerCarousel
        slides={[
          {
            image: imgBanner,
            title: 'Hlavní banner České dráhy',
          },
          {
            image: 'https://images.unsplash.com/photo-1654686473635-2d3d7ab0ac46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            title: 'Moderní železniční stanice',
          },
          {
            image: 'https://images.unsplash.com/photo-1631491705485-2cefece38770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            title: 'Lokomotiva České dráhy',
          },
          {
            image: 'https://images.unsplash.com/photo-1759895504394-b075516a67ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            title: 'Moderní interiér vlaku',
          },
        ]}
        autoPlayInterval={5000}
      />
    </div>
  );
}

function InfoRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        20. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Z regionů
      </p>
    </div>
  );
}

function HeadingAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-k9lp1d font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-blue-700)] text-[18px] w-full">Na veletrhu Trako jsou naše vozidla vidět, poprvé byl představen nový bateriový RegioPanter</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.
      </p>
    </div>
  );
}

function HeadingAndText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading and text">
      <InfoRow />
      <HeadingAndText />
    </div>
  );
}

function NavMenuItemCard() {
  return (
    <ContentCard
      variant="news"
      image={imgImage}
      date="20. září 2025"
      category="Z regionů"
      title="Na veletrhu Trako jsou naše vozidla vidět, poprvé byl představen nový bateriový RegioPanter"
      description="Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí."
      href="#"
    />
  );
}

function InfoRow1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        20. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aktuálně z ČD
      </p>
    </div>
  );
}

function HeadingAndText2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-k9lp1d font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-blue-700)] text-[18px] w-full">Startuje anketa o benefitech: řekněte nám svůj názor</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.
      </p>
    </div>
  );
}

function HeadingAndText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading and text">
      <InfoRow1 />
      <HeadingAndText2 />
    </div>
  );
}

function NavMenuItemCard1() {
  return (
    <ContentCard
      variant="news"
      image={imgImage1}
      date="20. září 2025"
      category="Aktuálně z ČD"
      title="Startuje anketa o benefitech: řekněte nám svůj názor"
      description="Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí."
      href="#"
    />
  );
}

function InfoRow2() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        20. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Naše tipy
      </p>
    </div>
  );
}

function HeadingAndText4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-k9lp1d font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-blue-700)] text-[18px] w-full">Ušetřete 20 % na nářadí Bosch!</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.
      </p>
    </div>
  );
}

function HeadingAndText5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading and text">
      <InfoRow2 />
      <HeadingAndText4 />
    </div>
  );
}

function NavMenuItemCard2() {
  return (
    <ContentCard
      variant="news"
      image={imgImage2}
      date="20. září 2025"
      category="Naše tipy"
      title="Ušetřete 20 % na nářadí Bosch!"
      description="Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí."
      href="#"
    />
  );
}

function Metrics() {
  return (
    <div className="flex-1 min-w-0 w-full flex flex-col gap-[24px] items-start" data-name="Metrics">
      <NavMenuItemCard />
      <NavMenuItemCard1 />
      <NavMenuItemCard2 />
    </div>
  );
}

/**
 * HeroBannerGrid - Grid layout for hero banner carousel and news preview
 * Semantic replacement for Container2()
 * Fully responsive: stacks on mobile/tablet, side-by-side on desktop
 * Equal column widths on desktop using flex-1 min-w-0 pattern
 */
function HeroBannerGrid() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-[1]" data-name="Hero Banner Grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <Left />
        <Metrics />
      </div>
    </div>
  );
}

/**
 * NotificationsSection - Top section containing notifications, welcome header, and hero banner
 * Semantic replacement for Main() with improved naming
 */
function NotificationsSection() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <section 
      className={cn(
        "bg-white box-border content-stretch flex flex-col isolate items-center relative shrink-0 w-full z-[4]",
        // Responsive spacing with negative margin fix for desktop header alignment
        isMobile ? "px-0 pt-6 pb-0" : 
        isTablet ? "px-0 pt-8 pb-0" :
        "px-0 pb-0 -mt-[22px]",
        "gap-0"
      )} 
      data-section="notifications"
      aria-label="Notifications and welcome section"
    >
      <Notifications />
      <WelcomeHeader />
      <HeroBannerGrid />
    </section>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-card-foreground text-[22px] text-nowrap whitespace-pre">Moje odkazy</p>
    </div>
  );
}

function Edit01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit-01">
          <path d={svgPaths.p9f65e00} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <CustomButton 
      variant="link-color" 
      size="md"
      leftIcon={<Edit01 />}
    >
      Upravit
    </CustomButton>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <ButtonsButton4 />
    </div>
  );
}

function Header1() {
  return (
    <PageBlockHeader
      title="Moje odkazy"
      actions={<ButtonsButton4 />}
    />
  );
}

function BookOpen01Icon() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="book-open-01">
            <path d={svgPaths.p21383cf0} id="Icon" stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function PenTool02Icon() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="pen-tool-02">
            <path d={svgPaths.p2120ff80} id="Icon" stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function IconLayoutDashboard() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="icon=layout-dashboard">
            <g id="Vector">
              <path d={svgPaths.p1fc96a00} stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgPaths.p33089d00} stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgPaths.p49cfa80} stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgPaths.p1cfbf300} stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </g>
          </g>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function IconFolderOpen() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="icon=folder-open">
            <path d={svgPaths.p1dfbdc00} id="Vector" stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function AlertTriangleIcon() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="alert-triangle">
            <path d={svgPaths.pfe95070} id="Icon" stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function Gift01Icon() {
  return (
    <LinkCardIcon>
      <div className="absolute left-[10px] size-[20px] top-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_1_19702)" id="gift-01">
            <path d={svgPaths.p1efef500} id="Icon" stroke="var(--stroke-0, #0097CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <defs>
            <clipPath id="clip0_1_19702">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </LinkCardIcon>
  );
}



function Metrics1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Metrics">
      <LinkCard
        icon={<BookOpen01Icon />}
        title="Technická dokumentace a manualy"
        rightIconType="arrow"
        href="#"
      />
      <LinkCard
        icon={<PenTool02Icon />}
        title={<>Provozní <br aria-hidden="true" />a bezpečnostní předpisy</>}
        rightIconType="arrow"
        href="#"
      />
      <LinkCard
        icon={<IconLayoutDashboard />}
        title="Portál zaměstnance"
        rightIconType="external-link"
        href="#"
      />
      <LinkCard
        icon={<IconFolderOpen />}
        title={<>{`Katalog norem `}<br aria-hidden="true" />(IS NORMIS)</>}
        rightIconType="external-link"
        href="#"
      />
      <LinkCard
        icon={<AlertTriangleIcon />}
        title={<>{`Hlášení `}<br aria-hidden="true" />bezpečnostní události</>}
        rightIconType="arrow"
        href="#"
      />
      <LinkCard
        icon={<Gift01Icon />}
        title="Přehled benefitů"
        rightIconType="arrow"
        href="#"
      />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Header1 />
      <Metrics1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

/**
 * QuickLinksSection - Section displaying user's quick access links
 * Semantic replacement for Section()
 */
function QuickLinksSection() {
  return (
    <section 
      className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center px-0 py-[64px] relative shrink-0 w-full z-[3]" 
      data-section="quick-links"
      aria-label="Quick links section"
    >
      <Container3 />
    </section>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-card-foreground text-[22px] w-full">Doporučené novinky</p>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <CustomButton 
      variant="link-color" 
      size="md"
      rightIcon={<LucideChevronRight className="size-[20px]" />}
      data-name="Buttons/Button"
    >
      Zobrazit všechny
    </CustomButton>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <ButtonsButton6 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[3]" data-name="Content">
      <TextAndSupportingText3 />
      <Actions3 />
    </div>
  );
}

function TabButtonBase() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative shrink-0" data-name="_Tab button base">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap tracking-[0.28px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Všechny
      </p>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="_Tab button base">
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Z mého odboru
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TabButtonBase2() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="_Tab button base">
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Z mého regionu
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HorizontalTabs() {
  const tabs = [
    { id: 'all', label: 'Všechny' },
    { id: 'department', label: 'Z mého odboru' },
    { id: 'region', label: 'Z mého regionu' }
  ];

  return (
    <HorizontalTabsComponent 
      tabs={tabs}
      defaultActiveTab="all"
      onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
    />
  );
}

function SectionHeader() {
  const tabs = [
    { id: 'all', label: 'Všechny' },
    { id: 'department', label: 'Z mého odboru' },
    { id: 'region', label: 'Z mého regionu' }
  ];

  return (
    <PageBlockHeader
      title="Doporučené novinky"
      tabs={tabs}
      defaultActiveTab="all"
      onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
      actions={
        <CustomButton 
          variant="link-color" 
          size={PAGE_BLOCK_HEADER_BUTTON_SIZE}
          rightIcon={<LucideChevronRight className="size-[20px]" />}
        >
          Zobrazit všechny
        </CustomButton>
      }
    />
  );
}

function Image() {
  return (
    <div className="h-[210px] pointer-events-none relative shrink-0 w-[312px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage3} />
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0" />
    </div>
  );
}

function InfoRow3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        20. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aktuálně z ČD
      </p>
    </div>
  );
}

function HeadingAndText6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">{`Startuje kampaň "Vidět a být viděn" pro práci v kolejišti`}</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#e3f7ff] box-border content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#a0e1f9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#008bbe] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bezpečnost
      </p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tags">
      <Badge1 />
    </div>
  );
}

function HeadingAndText7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <InfoRow3 />
      <HeadingAndText6 />
      <Tags />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 grow min-h-px min-w-[200px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center min-w-inherit pl-0 pr-[24px] py-[16px] relative size-full">
          <HeadingAndText7 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full group cursor-pointer transition-shadow duration-300 hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)]" data-name="Blog post card">
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="h-[210px] relative shrink-0 w-[312px] overflow-hidden" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full transition-transform duration-[800ms] ease-out group-hover:scale-110" src={imgImage3} />
          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0" />
        </div>
        <Content10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[210px] pointer-events-none relative shrink-0 w-[312px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage4} />
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0" />
    </div>
  );
}

function InfoRow4() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        19. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Soutěže
      </p>
    </div>
  );
}

function HeadingAndText8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-k9lp1d font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">Nový týden, nová soutěž! Tentokrát o vstupenky na MS Supermoto národů 2025</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nejlepší supermoto týmy planety zamíří v září 2025 do Vysokého Mýta, aby zde bojovaly o prestižní titul mistrů světa družstev. Autodrom Vysoké Mýto se totiž stane dějištěm historicky prvních závodů FIM Supermoto of Nations v České republice a náš národní tým na startu rozhodně nebude chybět. Nechcete chybět ani vy? Máme pro vás opět soutěžní otázečku.
      </p>
    </div>
  );
}

function HeadingAndText9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <InfoRow4 />
      <HeadingAndText8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 grow min-h-px min-w-[200px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center min-w-inherit pl-0 pr-[24px] py-[16px] relative size-full">
          <HeadingAndText9 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Blog post card">
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Image1 />
        <Content11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[210px] pointer-events-none relative shrink-0 w-[312px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage5} />
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0" />
    </div>
  );
}

function InfoRow5() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        19. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Z regionů
      </p>
    </div>
  );
}

function HeadingAndText10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">Naše depo v Plzni získalo ocenění za bezpečnost práce</p>
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Depo kolejových vozidel Plzeň bylo oceněno za vynikající výsledky v oblasti BOZP a za zavedení nových preventivních opatření v posledním roce. Děkujeme všem kolegům!
      </p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#fef6ee] box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#f9dbaf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#b93815] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plzeň
      </p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tags">
      <Badge2 />
    </div>
  );
}

function HeadingAndText11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <InfoRow5 />
      <HeadingAndText10 />
      <Tags1 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 grow min-h-px min-w-[200px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center min-w-inherit pl-0 pr-[24px] py-[16px] relative size-full">
          <HeadingAndText11 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Blog post card">
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Image2 />
        <Content12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[210px] pointer-events-none relative shrink-0 w-[312px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage6} />
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0" />
    </div>
  );
}

function InfoRow6() {
  return (
    <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        18. září 2025
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#008bbe]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aktuálně z ČD
      </p>
    </div>
  );
}

function HeadingAndText12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">Vyzkoušejte virtuální kartu MultiSport zdarma</p>
      <div className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-[16px]">Máme pro vás virtuální MultiSport kartu s platností od 1. 9. do 30. 9. 2024. Testovací kartu si objednejte do 26. 8. 2024 prostřednictvím formuláře v odkazu níže. Zaměstnanci, kteří již MultiSport kartu využívají, mají možnost si objednat jednu doprovodnou kartu zdarma pro rodinného příslušníka. Každý den máte jeden volný vstup do více než 2 700 sportovních a relaxačních zařízení po celé ČR a SR. Vybírat můžete na mapa.multisport.cz.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#e3f7ff] box-border content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#a0e1f9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#008bbe] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Benefity
      </p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tags">
      <Badge3 />
    </div>
  );
}

function HeadingAndText13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <InfoRow6 />
      <HeadingAndText12 />
      <Tags2 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 grow min-h-px min-w-[200px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center min-w-inherit pl-0 pr-[24px] py-[16px] relative size-full">
          <HeadingAndText13 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Blog post card">
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Image3 />
        <Content13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <NewsArticleCard
            image={imgImage3}
            date="20. září 2025"
            category="Aktuálně z ČD"
            title='Startuje kampaň "Vidět a být viděn" pro práci v kolejišti'
            description="Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí."
            badge={{ text: "Bezpečnost", variant: "blue" }}
            href="#"
          />
          <NewsArticleCard
            image={imgImage4}
            date="19. září 2025"
            category="Soutěže"
            title="Nový týden, nová soutěž! Tentokrát o vstupenky na MS Supermoto národů 2025"
            description="Nejlepší supermoto týmy planety zamíří v září 2025 do Vysokého Mýta, aby zde bojovaly o prestižní titul mistrů světa družstev. Autodrom Vysoké Mýto se totiž stane dějištěm historicky prvních závodů FIM Supermoto of Nations v České republice a náš národní tým na startu rozhodně nebude chybět. Nechcete chybět ani vy? Máme pro vás opět soutěžní otázečku."
            href="#"
          />
          <NewsArticleCard
            image={imgImage5}
            date="19. září 2025"
            category="Z regionů"
            title="Naše depo v Plzni získalo ocenění za bezpečnost práce"
            description="Depo kolejových vozidel Plzeň bylo oceněno za vynikající výsledky v oblasti BOZP a za zavedení nových preventivních opatření v posledním roce. Děkujeme všem kolegům!"
            badge={{ text: "Plzeň", variant: "orange" }}
            href="#"
          />
          <NewsArticleCard
            image={imgImage6}
            date="18. září 2025"
            category="Aktuálně z ČD"
            title="Vyzkoušejte virtuální kartu MultiSport zdarma"
            badge={{ text: "Benefity", variant: "blue" }}
            href="#"
          />
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="News">
      <SectionHeader />
      <Content14 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-card-foreground text-[22px] w-full">Nadcházející události</p>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #008BBE)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0097cf] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zobrazit vše
      </p>
      <ChevronRight3 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <ButtonsButton8 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[3]" data-name="Content">
      <TextAndSupportingText4 />
      <Actions4 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <PageBlockHeader
      title="Nadcházející události"
      actions={
        <CustomButton
          variant="link-color"
          size={PAGE_BLOCK_HEADER_BUTTON_SIZE}
          onClick={() => console.log('View all events')}
          rightIcon={
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="#008BBE" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
          }
        >
          Zobrazit vše
        </CustomButton>
      }
    />
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Date">
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Září
      </p>
      <p className="font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#008bbe] text-[30px]">28.</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d={svgPaths.p35129400} id="Icon" stroke="var(--stroke-0, #717680)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DateContainer() {
  return (
    <div className="content-stretch flex h-[66px] items-start justify-between relative shrink-0 w-full" data-name="Date container">
      <Date />
      <Arrow />
    </div>
  );
}

function DateAndTitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date and title container">
      <DateContainer />
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">Celostátní konference o bezpečnosti na železnici</p>
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[14px] w-full" data-name="Event details">
      <p className="-webkit-box css-haxumu font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#0097cf] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:00 - 16:00
      </p>
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kongresové centrum Olomouc
      </p>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <DateAndTitleContainer />
      <EventDetails />
    </div>
  );
}

function BlogPostCard4() {
  return (
    <div className="basis-0 bg-white grow h-[288px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Blog post card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[288px] items-start p-[16px] relative w-full">
          <Content17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Date">
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Říjen
      </p>
      <p className="font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#008bbe] text-[30px]">25.</p>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d={svgPaths.p35129400} id="Icon" stroke="var(--stroke-0, #717680)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DateContainer1() {
  return (
    <div className="content-stretch flex h-[66px] items-start justify-between relative shrink-0 w-full" data-name="Date container">
      <Date1 />
      <Arrow1 />
    </div>
  );
}

function DateAndTitleContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date and title container">
      <DateContainer1 />
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-full">Den Českých drah pro veřejnost</p>
    </div>
  );
}

function EventDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[14px] w-full" data-name="Event details">
      <p className="-webkit-box css-haxumu font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#0097cf] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        10:00 - 17:00
      </p>
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Masarykovo nádraží, Praha
      </p>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <DateAndTitleContainer1 />
      <EventDetails1 />
    </div>
  );
}

function BlogPostCard5() {
  return (
    <div className="basis-0 bg-white grow h-[288px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Blog post card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[288px] items-start p-[16px] relative w-full">
          <Content19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Date">
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Listopad
      </p>
      <p className="font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#008bbe] text-[30px]">18.</p>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d={svgPaths.p35129400} id="Icon" stroke="var(--stroke-0, #717680)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DateContainer2() {
  return (
    <div className="content-stretch flex h-[66px] items-start justify-between relative shrink-0 w-full" data-name="Date container">
      <Date2 />
      <Arrow2 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#067647] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Odbor údržby a oprav
      </p>
    </div>
  );
}

function EventTitleAndBadgeContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event title and badge container">
      <p className="-webkit-box css-1ixhkw font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#002664] text-[20px] w-[min-content]">Technické školení nových brzdových systémů</p>
      <Badge4 />
    </div>
  );
}

function DateAndTitleContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date and title container">
      <DateContainer2 />
      <EventTitleAndBadgeContainer />
    </div>
  );
}

function EventDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[14px] w-full" data-name="Event details">
      <p className="-webkit-box css-haxumu font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[#0097cf] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        8:00 - 15:30
      </p>
      <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Školící centrum DKV Plzeň
      </p>
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <DateAndTitleContainer2 />
      <EventDetails2 />
    </div>
  );
}

function BlogPostCard6() {
  return (
    <div className="basis-0 bg-white grow h-[288px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Blog post card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[288px] items-start p-[16px] relative w-full">
          <Content21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Content22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
          <EventCard
            dateDay="28."
            dateMonth="Září"
            title="Celostátní konference o bezpečnosti na železnici"
            time="9:00 - 16:00"
            location="Kongresové centrum Olomouc"
            arrowIconPath={svgPaths.p35129400}
            href="#"
          />
          <EventCard
            dateDay="25."
            dateMonth="Říjen"
            title="Den Českých drah pro veřejnost"
            time="10:00 - 17:00"
            location="Masarykovo nádraží, Praha"
            arrowIconPath={svgPaths.p35129400}
            href="#"
          />
          <EventCard
            dateDay="18."
            dateMonth="Listopad"
            title="Technické školení nových brzdových systémů"
            time="8:00 - 15:30"
            location="Školící centrum DKV Plzeň"
            badge={{
              text: "Odbor údržby a oprav",
              bgColor: "#ecfdf3",
              textColor: "#067647",
              borderColor: "#abefc6"
            }}
            arrowIconPath={svgPaths.p35129400}
            href="#"
          />
        </div>
      </div>
    </div>
  );
}

function News1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="News">
      <SectionHeader1 />
      <Content22 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-card-foreground text-[22px] w-full">Nejnovější videa</p>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#0097cf] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zobrazit vše
      </p>
      <ChevronRight4 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <ButtonsButton10 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[3]" data-name="Content">
      <TextAndSupportingText8 />
      <Actions5 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <PageBlockHeader
      title="Nejnovější videa"
      actions={
        <CustomButton
          variant="link-color"
          size={PAGE_BLOCK_HEADER_BUTTON_SIZE}
          onClick={() => console.log('View all videos')}
          rightIcon={
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="#009FDA" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
          }
        >
          Zobrazit vše
        </CustomButton>
      }
    />
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p35f28e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.3)] bottom-[-0.33px] content-stretch flex items-center justify-center left-0 rounded-[4px] size-[64px]" data-name="Button">
      <Play />
    </div>
  );
}

function Image7() {
  return (
    <div className="aspect-[384/256] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      <div className="aspect-[384/256] overflow-clip relative rounded-[inherit] size-full">
        <Button />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#008bbe] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        19. září 2025
      </p>
      <p className="font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#002664] text-[20px] w-full">Modrá linka s ředitelem IT Janem Hazlbauerem</p>
    </div>
  );
}

function HeadingAndText14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <Frame16 />
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Co si představíte pod pojmem IT? Někdo z vás možná zapomenutá hesla nebo zaseknuté tiskárny. Pozvali jsme si hosta, který má úplně jinou představu o IT. `}</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <HeadingAndText14 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Blog post card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image7 />
        <Content24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Play1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p35f28e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.3)] bottom-[-0.33px] content-stretch flex items-center justify-center left-0 rounded-[4px] size-[64px]" data-name="Button">
      <Play1 />
    </div>
  );
}

function Image8() {
  return (
    <div className="aspect-[384/256] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      <div className="aspect-[384/256] overflow-clip relative rounded-[inherit] size-full">
        <Button1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#008bbe] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        6. září 2025
      </p>
      <p className="font-['CD_Fedra_Pro:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#002664] text-[20px] w-full">DVI slaví 20 let od založení</p>
    </div>
  );
}

function HeadingAndText15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and text">
      <Frame17 />
      <p className="-webkit-box css-nh3oi9 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dopravní vzdělávací institut je nedílnou součástí Skupiny ČD a věnuje se vzdělávání železničářů po celé republice. Jak hodnotí bývalí předsedové a předsedkyně představenstva svá působení a jak na ně vzpomínají? Dozvíte se ve videu.
      </p>
    </div>
  );
}

function Content25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
          <HeadingAndText15 />
        </div>
      </div>
    </div>
  );
}

function BlogPostCard8() {
  return (
    <div className="basis-0 bg-white grow h-[435px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Blog post card">
      <div className="content-stretch flex flex-col h-[435px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Image8 />
        <Content25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Content26() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-stretch p-[24px] relative w-full">
          <VideoArticleCard
            image={imgImage7}
            date="19. září 2025"
            title="Modrá linka s ředitelem IT Janem Hazlbauerem"
            description="Co si představíte pod pojmem IT? Někdo z vás možná zapomenutá hesla nebo zaseknuté tiskárny. Pozvali jsme si hosta, který má úplně jinou představu o IT."
            playIconPath={svgPaths.p35f28e40}
            href="#"
          />
          <VideoArticleCard
            image={imgImage8}
            date="6. září 2025"
            title="DVI slaví 20 let od založení"
            description="Dopravní vzdělávací institut je nedílnou součástí Skupiny ČD a věnuje se vzdělávání železničářů po celé republice. Jak hodnotí bývalí předsedové a předsedkyně představenstva svá působení a jak na ně vzpomínají? Dozvíte se ve videu."
            playIconPath={svgPaths.p35f28e40}
            href="#"
          />
        </div>
      </div>
    </div>
  );
}

function News2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="News">
      <SectionHeader2 />
      <Content26 />
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FeaturedNewsSection
        allArticles={[
          {
            image: imgImage3,
            date: '20. září 2025',
            category: 'Aktuálně z ČD',
            title: 'Startuje kampaň "Vidět a být viděn" pro práci v kolejišti',
            description: 'Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.',
            badge: { text: 'Bezpečnost', variant: 'blue' },
            href: '#',
            tabFilter: 'all'
          },
          {
            image: imgImage4,
            date: '19. září 2025',
            category: 'Soutěže',
            title: 'Nový týden, nová soutěž! Tentokrát o vstupenky na MS Supermoto národů 2025',
            description: 'Nejlepší supermoto týmy planety zamíří v září 2025 do Vysokého Mýta, aby zde bojovaly o prestižní titul mistrů světa družstev. Autodrom Vysoké Mýto se totiž stane dějištěm historicky prvních závodů FIM Supermoto of Nations v České republice a náš národní tým na startu rozhodně nebude chybět. Nechcete chybět ani vy? Máme pro vás opět soutěžní otázečku.',
            href: '#',
            tabFilter: 'all'
          },
          {
            image: imgImage5,
            date: '19. září 2025',
            category: 'Z regionů',
            title: 'Naše depo v Plzni získalo ocenění za bezpečnost práce',
            description: 'Depo kolejových vozidel Plzeň bylo oceněno za vynikající výsledky v oblasti BOZP a za zavedení nových preventivních opatření v posledním roce. Děkujeme všem kolegům!',
            badge: { text: 'Plzeň', variant: 'orange' },
            href: '#',
            tabFilter: 'all'
          },
          {
            image: imgImage6,
            date: '18. září 2025',
            category: 'Aktuálně z ČD',
            title: 'Vyzkoušejte virtuální kartu MultiSport zdarma',
            badge: { text: 'Benefity', variant: 'blue' },
            href: '#',
            tabFilter: 'all'
          }
        ]}
        onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
        onViewAll={() => console.log('View all news')}
      />
      <UpcomingEventsSection
        events={[
          {
            dateDay: '28.',
            dateMonth: 'Září',
            title: 'Celostátní konference o bezpečnosti na železnici',
            time: '9:00 - 16:00',
            location: 'Kongresové centrum Olomouc',
            href: '#'
          },
          {
            dateDay: '25.',
            dateMonth: 'Říjen',
            title: 'Den Českých drah pro veřejnost',
            time: '10:00 - 17:00',
            location: 'Masarykovo nádraží, Praha',
            href: '#'
          },
          {
            dateDay: '18.',
            dateMonth: 'Listopad',
            title: 'Technické školení nových brzdových systémů',
            time: '8:00 - 15:30',
            location: 'Školící centrum DKV Plzeň',
            badge: {
              text: 'Odbor údržby a oprav',
              bgColor: '#ecfdf3',
              textColor: '#067647',
              borderColor: '#abefc6'
            },
            href: '#'
          }
        ]}
        onViewAll={() => console.log('View all events')}
      />
      <LatestVideosSection
        videos={[
          {
            image: imgImage7,
            date: '19. září 2025',
            title: 'Modrá linka s ředitelem IT Janem Hazlbauerem',
            description: 'Co si představíte pod pojmem IT? Někdo z vás možná zapomenutá hesla nebo zaseknuté tiskárny. Pozvali jsme si hosta, který má úplně jinou představu o IT.',
            href: '#'
          },
          {
            image: imgImage8,
            date: '6. září 2025',
            title: 'DVI slaví 20 let od založení',
            description: 'Dopravní vzdělávací institut je nedílnou součástí Skupiny ČD a věnuje se vzdělávání železničářů po celé republice. Jak hodnotí bývalí předsedové a předsedkyně představenstva svá působení a jak na ně vzpomínají? Dozvíte se ve videu.',
            href: '#'
          }
        ]}
        onViewAll={() => console.log('View all videos')}
      />
    </div>
  );
}

function Tool02() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="tool-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tool-02">
          <path d={svgPaths.p26aa7f00} id="Icon" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon6() {
  return (
    <div className="bg-[#ecfdf3] overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="Featured icon">
      <Tool02 />
    </div>
  );
}

function IconMapPin() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon=map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon=map-pin">
          <g id="Vector">
            <path d={svgPaths.p2023d200} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2d617c80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <IconMapPin />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Depo kolejových vozidel Plzeň
      </p>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Odbor údržby a oprav
      </p>
      <Frame20 />
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <FeaturedIcon6 />
      <TextAndSupportingText9 />
    </div>
  );
}

function AttributionCard4() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content27 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel3() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard4 />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[144px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgImage9} />
        <div className="absolute bg-gradient-to-b from-[45.833%] from-[rgba(0,0,0,0)] inset-0 rounded-[4px] to-[64.236%] to-[rgba(0,0,0,0.4)]" />
      </div>
      <BottomPanel3 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar1} />
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#067647] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Váš přímý nadřízený
      </p>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pavel Dvořák
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mistr směny A
      </p>
    </div>
  );
}

function Phone() {
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

function LocationWrap() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap />
    </div>
  );
}

function Content28() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Badge5 />
      <TextAndSupportingText10 />
      <Details />
    </div>
  );
}

function ContactRow() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <Avatar1 />
          <Content28 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[9999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ing. Tomáš Vlk
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vedoucí depa
      </p>
    </div>
  );
}

function Phone1() {
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

function LocationWrap1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone1 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap1 />
    </div>
  );
}

function Content29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText11 />
      <Details1 />
    </div>
  );
}

function ContactRow1() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <Avatar2 />
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ContactRow />
      <ContactRow1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Klíčové kontakty
      </p>
      <Frame19 />
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rozpis směn a pohotovostí
      </p>
    </div>
  );
}

function Content30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText12 />
    </div>
  );
}

function ArrowNarrowRight5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ContactRow6() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Content30 />
          <ArrowNarrowRight5 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plán údržby na tento týden
      </p>
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText13 />
    </div>
  );
}

function ArrowNarrowRight6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ContactRow7() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Content31 />
          <ArrowNarrowRight6 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ContactRow6 />
      <ContactRow7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Důle��ité odkazy
      </p>
      <Frame18 />
    </div>
  );
}

function TextPadding13() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#009fda] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Přejít na stránky mého odboru
      </p>
    </div>
  );
}

function ArrowNarrowRight7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton11() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding13 />
          <ArrowNarrowRight7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#009fda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Activity feed">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-end p-[24px] relative w-full">
          <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-card-foreground text-[22px] w-full">Muj odbor</p>
          <Image9 />
          <Frame11 />
          <Frame9 />
          <ButtonsButton11 />
        </div>
      </div>
    </div>
  );
}

function TabButtonBase3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab button base">
      <div aria-hidden="true" className="absolute border-[#0097cf] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#008bbe] text-[16px] text-nowrap whitespace-pre">Můj odbor</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6
      </p>
    </div>
  );
}

function TabButtonBase4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab button base">
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Uložené</p>
      <Badge6 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tabs">
      <TabButtonBase3 />
      <TabButtonBase4 />
    </div>
  );
}

function HorizontalTabs1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Tabs />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[9999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar3} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Miroslav Černý
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Technik kolejových vozidel
      </p>
    </div>
  );
}

function Phone2() {
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

function LocationWrap2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone2 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap2 />
    </div>
  );
}

function Content32() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText14 />
      <Details2 />
    </div>
  );
}

function ContactRow2() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row 2">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Avatar3 />
          <Content32 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#f2fbff] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <p className="absolute font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[24px] left-1/2 not-italic text-[color:var(--color-blue-500)] text-[18px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[48px]">LS</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ing. Lenka Svobodová
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Specialistka diagnostiky vozidel
      </p>
    </div>
  );
}

function Phone3() {
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

function LocationWrap3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone3 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap3 />
    </div>
  );
}

function Content33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText15 />
      <Details3 />
    </div>
  );
}

function ContactRow4() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row 4">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Avatar4 />
          <Content33 />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
        <div className="absolute bg-[#e0e0e0] inset-0 rounded-[9999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Radek Horák
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Technik speciálních oprav
      </p>
    </div>
  );
}

function Phone4() {
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

function LocationWrap4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone4 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap4 />
    </div>
  );
}

function Content34() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText16 />
      <Details4 />
    </div>
  );
}

function ContactRow5() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row 5">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Avatar5 />
          <Content34 />
        </div>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#f2fbff] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <p className="absolute font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[24px] left-1/2 not-italic text-[color:var(--color-blue-500)] text-[18px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[48px]">LM</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lukáš Marek
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Technolog oprav
      </p>
    </div>
  );
}

function Phone5() {
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

function LocationWrap5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location wrap">
      <Phone5 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 725 123 456
      </p>
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Details">
      <LocationWrap5 />
    </div>
  );
}

function Content35() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText17 />
      <Details5 />
    </div>
  );
}

function ContactRow3() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="Contact Row 3">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Avatar6 />
          <Content35 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ContactRow2 />
      <ContactRow4 />
      <ContactRow5 />
      <ContactRow3 />
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton12() {
  return (
    <CustomButton 
      variant="link-color" 
      size="md"
      rightIcon={<LucideChevronRight className="size-[20px]" />}
      data-name="Buttons/Button"
    >
      Zobrazit všechny (28)
    </CustomButton>
  );
}

function ActivityFeed1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Activity feed">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-end p-[24px] relative w-full">
          <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] min-w-full not-italic relative shrink-0 text-card-foreground text-[22px] w-[min-content]">Moje kontakty</p>
          <HorizontalTabs1 />
          <List />
          <ButtonsButton12 />
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contacts">
      <ActivityFeed1 />
    </div>
  );
}

function TabButtonBase5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab button base">
      <div aria-hidden="true" className="absolute border-[#0097cf] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#008bbe] text-[16px] text-nowrap whitespace-pre">Nedávné</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function TabButtonBase6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pb-[12px] pt-0 px-[4px] relative shrink-0" data-name="_Tab button base">
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Uložené</p>
      <Badge7 />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tabs">
      <TabButtonBase5 />
      <TabButtonBase6 />
    </div>
  );
}

function HorizontalTabs2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Tabs1 />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileTypeIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[#d92d20] text-[9px] text-center">PDF</p>
    </div>
  );
}

function SupportingTextAndStatus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dnes, 14:31
      </p>
    </div>
  );
}

function TextAndSupportingText18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servisní manuál: RegioPanter řada 650
      </p>
      <SupportingTextAndStatus />
    </div>
  );
}

function Content36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText18 />
    </div>
  );
}

function ArrowNarrowRight8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon />
          <Content36 />
          <ArrowNarrowRight8 />
        </div>
      </div>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="absolute inset-[40%_30%_20%_30%] overflow-clip" data-name="Icon wrap">
      <div className="absolute h-[9.6px] left-[0.8px] top-[4px] w-[14.4px]" data-name="Icon">
        <div className="absolute inset-[-7.81%_-5.21%]" style={{ "--stroke-0": "rgba(65, 70, 81, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
            <path d={svgPaths.p1f491c40} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FileTypeIcon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page1 />
      <IconWrap />
    </div>
  );
}

function SupportingTextAndStatus1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dnes, 11:15
      </p>
    </div>
  );
}

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zápis z porady údržby - 22. 9. 2025
      </p>
      <SupportingTextAndStatus1 />
    </div>
  );
}

function Content37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText19 />
    </div>
  );
}

function ArrowNarrowRight9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem1() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon1 />
          <Content37 />
          <ArrowNarrowRight9 />
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileTypeIcon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page2 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[#0097cf] text-[9px] text-center">IMG</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#e3f7ff] box-border content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#a0e1f9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[#008bbe] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        IS NORMIS
      </p>
    </div>
  );
}

function SupportingTextAndStatus2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Včera, 15:20
      </p>
      <div className="h-[12px] relative shrink-0 w-0" data-name="Divider">
        <div className="absolute inset-[-4.17%_-0.5px]" style={{ "--stroke-0": "rgba(213, 215, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
            <path d="M1 1V13" id="Divider" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Badge8 />
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ČSN EN 15020 - Brzdové systémy
      </p>
      <SupportingTextAndStatus2 />
    </div>
  );
}

function Content38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText20 />
    </div>
  );
}

function LinkExternal3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="link-external-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="link-external-02">
          <path d={svgPaths.p3619bb00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem2() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon2 />
          <Content38 />
          <LinkExternal3 />
        </div>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileTypeIcon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page3 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[#d92d20] text-[9px] text-center">PDF</p>
    </div>
  );
}

function SupportingTextAndStatus3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Včera, 9:20
      </p>
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pracovní postup PP-14: Výměna brzdových desek
      </p>
      <SupportingTextAndStatus3 />
    </div>
  );
}

function Content39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText21 />
    </div>
  );
}

function ArrowNarrowRight10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem3() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon3 />
          <Content39 />
          <ArrowNarrowRight10 />
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileTypeIcon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page4 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[#079455] text-[9px] text-center">XLSX</p>
    </div>
  );
}

function SupportingTextAndStatus4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        19. září 2025, 13:00
      </p>
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rozpis směn a pohotovost�� - Říjen 2025
      </p>
      <SupportingTextAndStatus4 />
    </div>
  );
}

function Content40() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText22 />
    </div>
  );
}

function ArrowNarrowRight11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem4() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon4 />
          <Content40 />
          <ArrowNarrowRight11 />
        </div>
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div className="absolute bottom-0 left-[10%] right-[10%] top-0" data-name="Page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
        <g id="Page">
          <g id="Page background wrap">
            <mask height="32" id="mask0_1_19647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
              <path d={svgPaths.p3afca600} fill="url(#paint0_linear_1_19647)" id="Mask" />
            </mask>
            <g mask="url(#mask0_1_19647)">
              <path d={svgPaths.p3afca600} fill="var(--fill-0, white)" id="Page background" />
            </g>
          </g>
          <path d={svgPaths.p2062fa00} fill="var(--fill-0, #E9EAEB)" id="Earmark" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19647" x1="12.8" x2="12.8" y1="0" y2="32">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FileTypeIcon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="File type icon">
      <Page5 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[#0097cf] text-[9px] text-center">PNG</p>
    </div>
  );
}

function SupportingTextAndStatus5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5. září 2025, 9:08
      </p>
    </div>
  );
}

function TextAndSupportingText23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schéma zapojení klimatizace - InterPanter
      </p>
      <SupportingTextAndStatus5 />
    </div>
  );
}

function Content41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText23 />
    </div>
  );
}

function ArrowNarrowRight12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p2cc45a00} id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FileItem5() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 w-full" data-name="File item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <FileTypeIcon5 />
          <Content41 />
          <ArrowNarrowRight12 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <FileItem />
      <FileItem1 />
      <FileItem2 />
      <FileItem3 />
      <FileItem4 />
      <FileItem5 />
    </div>
  );
}

function ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #009FDA)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton13() {
  return (
    <CustomButton 
      variant="link-color" 
      size="md"
      rightIcon={<LucideChevronRight className="size-[20px]" />}
      data-name="Buttons/Button"
    >
      Zobrazit všechny (9)
    </CustomButton>
  );
}

function ActivityFeed2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Activity feed">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-end p-[24px] relative w-full">
          <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] min-w-full not-italic relative shrink-0 text-card-foreground text-[22px] w-[min-content]">Moje dokumenty</p>
          <HorizontalTabs2 />
          <List1 />
          <ButtonsButton13 />
        </div>
      </div>
    </div>
  );
}

function Contacts1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contacts">
      <ActivityFeed2 />
    </div>
  );
}

// Right Sidebar using new component system
import { RightSidebar } from "../components/ui/sidebar-right";

function Ritgh() {
  return <RightSidebar />;
}

function Content42() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Left1 />
      <Ritgh />
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content42 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full z-[1]" data-name="Section">
      <Container4 />
    </div>
  );
}

/**
 * MainContentSection - Main content area with news, events, and videos
 * Semantic replacement for Main1()
 */
function MainContentSection() {
  return (
    <section 
      className="bg-[#f2fbff] box-border content-stretch flex flex-col gap-[32px] isolate items-start px-0 py-[80px] relative shrink-0 w-full z-[2]" 
      data-section="main-content"
      aria-label="Main content section"
    >
      <Section1 />
    </section>
  );
}

function Logomark2() {
  return (
    <div className="h-[29.05px] relative shrink-0 w-[44.705px]" data-name="Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 30">
        <g id="Logomark">
          <g id="Union">
            <path d={svgPaths.p38a22f00} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.pc91b000} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p351c9a00} fill="var(--fill-0, #002664)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['CD_Fedra_Pro',_sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[color:var(--color-blue-500)] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Intranet</p>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Logomark2 />
      <div className="flex flex-row items-center self-stretch">
        <Frame21 />
      </div>
    </div>
  );
}

function LogoAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Logo and supporting text">
      <Logo2 />
    </div>
  );
}

function ButtonsButton14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pravidla použ��vání `}</p>
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

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[96px] relative shrink-0 w-full" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        O intranetu
      </p>
      <FooterLinks />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[96px] relative shrink-0 w-full" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Další zdroje a weby
      </p>
      <FooterLinks1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
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
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rychlé odkazy
      </p>
      <FooterLinks2 />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <Frame23 />
      <Details9 />
    </div>
  );
}

function FooterLinksColumn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="_Footer links column">
      <TextAndSupportingText24 />
      <TextAndSupportingText25 />
      <TextAndSupportingText26 />
    </div>
  );
}

function Content43() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <LogoAndSupportingText />
      <Frame13 />
      <FooterLinksColumn2 />
      <FooterLinksColumn3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content43 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-center leading-[22px] relative shrink-0 text-[16px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#717680]" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2025 České dráhy, a.s. Všechna práva vyhrazena.
      </p>
      <p className="relative shrink-0 text-[#535862]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ochrana osobních údajů
      </p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_19656)" id="Social icon">
          <path d={svgPaths.p2334f790} fill="var(--fill-0, #717680)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_19656">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
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
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Social icons">
      <SocialIcon />
      <SocialIcon1 />
      <SocialIcon2 />
      <SocialIcon3 />
    </div>
  );
}

function Content44() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#d5d7da] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <SocialIcons />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content44 />
        </div>
      </div>
    </div>
  );
}

/**
 * Home - Main homepage component with semantic section organization
 * 
 * Page structure:
 * - NotificationsSection: Alerts, welcome message, hero banner
 * - QuickLinksSection: User's personalized quick links
 * - MainContentSection: Featured news, events, and videos
 */
export default function Home() {
  return (
    <main className="bg-white content-stretch flex flex-col isolate items-start relative size-full">
      <GlobalHeader notificationCount={4} />
      
      <NotificationsSection />
      <QuickLinksSection />
      <MainContentSection />
      
      <GlobalFooter />
    </main>
  );
}