/**
 * Sidebar Widgets Content
 * 
 * Centralized data for all sidebar widgets
 */

export const sidebarWidgets = {
  meta: {
    version: "1.0.0",
    lastUpdated: "2025-01-15",
    description: "Sidebar widget content for the home page"
  },
  myDepartment: {
    title: "Muj odbor",
    banner: {
      departmentName: "Odbor údržby a oprav",
      location: "Depo kolejových vozidel Plzeň",
      icon: "tool" as const
    },
    keyContacts: {
      title: "Klíčové kontakty",
      contacts: [
        {
          id: "contact-1",
          name: "Pavel Dvořák",
          position: "Mistr směny A",
          phone: "+420 725 123 456",
          avatar: "figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png",
          badge: {
            text: "Váš přímý nadřízený",
            variant: "success" as const
          }
        },
        {
          id: "contact-2",
          name: "Ing. Tomáš Vlk",
          position: "Vedoucí depa",
          phone: "+420 725 123 456",
          avatar: "figma:asset/b3a602f2f14d0c2599f1ae90877b09c32103c926.png"
        }
      ]
    },
    quickLinks: {
      title: "Důležité odkazy",
      links: [
        {
          id: "link-1",
          title: "Rozpis směn a pohotovostí",
          href: "#"
        },
        {
          id: "link-2",
          title: "Plán údržby na tento týden",
          href: "#"
        }
      ]
    },
    cta: {
      text: "Přejít na stránky mého odboru",
      href: "#"
    }
  },
  myContacts: {
    title: "Moje kontakty",
    tabs: [
      {
        id: "department",
        label: "Můj odbor"
      },
      {
        id: "saved",
        label: "Uložené",
        count: 6
      }
    ],
    defaultTab: "department",
    contacts: [
      {
        id: "contact-3",
        name: "Miroslav Černý",
        position: "Technik kolejových vozidel",
        phone: "+420 725 123 456",
        avatar: "figma:asset/2b7c1998a9b2750b3154a56c75849d42e9d07630.png"
      },
      {
        id: "contact-4",
        name: "Ing. Lenka Svobodová",
        position: "Specialistka diagnostiky vozidel",
        phone: "+420 725 123 456",
        initials: "LS"
      },
      {
        id: "contact-5",
        name: "Radek Horák",
        position: "Technik speciálních oprav",
        phone: "+420 725 123 456",
        avatar: "figma:asset/f616bdf74826655ce23dd443ed3b5dc09aec80d7.png"
      },
      {
        id: "contact-6",
        name: "Lukáš Marek",
        position: "Technolog oprav",
        phone: "+420 725 123 456",
        initials: "LM"
      }
    ],
    viewAll: {
      text: "Zobrazit všechny (28)",
      href: "#"
    }
  },
  myDocuments: {
    title: "Moje dokumenty",
    tabs: [
      {
        id: "recent",
        label: "Nedávné"
      },
      {
        id: "saved",
        label: "Uložené",
        count: 12
      }
    ],
    defaultTab: "recent",
    files: [
      {
        id: "file-1",
        name: "Servisní manuál: RegioPanter řada 650",
        type: "PDF" as const,
        date: "Dnes, 14:31",
        href: "#"
      },
      {
        id: "file-2",
        name: "Zápis z porady údržby - 22. 9. 2025",
        type: "DOC" as const,
        date: "Dnes, 11:15",
        href: "#"
      },
      {
        id: "file-3",
        name: "ČSN EN 15020 - Brzdové systémy",
        type: "IMG" as const,
        date: "Včera, 15:20",
        badge: {
          text: "IS NORMIS",
          variant: "info" as const
        },
        isExternal: true,
        href: "#"
      },
      {
        id: "file-4",
        name: "Pracovní postup PP-14: Výměna brzdových desek",
        type: "PDF" as const,
        date: "Včera, 9:20",
        href: "#"
      },
      {
        id: "file-5",
        name: "Rozpis směn a pohotovostí - Říjen 2025",
        type: "XLSX" as const,
        date: "19. září 2025, 13:00",
        href: "#"
      },
      {
        id: "file-6",
        name: "Schéma zapojení klimatizace - InterPanter",
        type: "PNG" as const,
        date: "5. září 2025, 9:08",
        href: "#"
      }
    ],
    viewAll: {
      text: "Zobrazit všechny (9)",
      href: "#"
    }
  }
} as const;

export default sidebarWidgets;
