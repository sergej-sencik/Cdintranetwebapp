import { useState, useRef } from "react";
import { Bell, X } from "lucide-react";
import { CustomButton } from "./ui/custom-button";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: "warning" | "info" | "success";
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "Nový bezpečnostní pokyn",
    message: "Byl vydán nový předpis BP-04/25",
    time: "před 2 hodinami",
    type: "warning",
  },
  {
    id: 2,
    title: "Aktualizace systému",
    message: "Plánovaná údržba dnes ve 22:00",
    time: "před 5 hodinami",
    type: "info",
  },
  {
    id: 3,
    title: "Nová zpráva",
    message: "Máte novou zprávu od vedoucího",
    time: "včera",
    type: "info",
  },
  {
    id: 4,
    title: "Dokument ke schválení",
    message: "Čeká na vaše schválení",
    time: "před 2 dny",
    type: "info",
  },
];

export function NotificationBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const unreadCount = notifications.length;

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[var(--radius-sm)] shrink-0 size-[40px] hover:bg-[var(--muted)] transition-colors"
        aria-label={`Notifications (${unreadCount} unread)`}
      >
        <Bell className="size-5 text-foreground-muted" />
      </button>

      {unreadCount > 0 && (
        <div className="absolute bg-primary box-border content-stretch flex items-center justify-center px-[6px] py-[2px] right-[-7px] rounded-[var(--radius-sm)] top-[-2px] pointer-events-none">
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] text-[12px] text-center text-nowrap text-white whitespace-pre">
            {unreadCount}
          </p>
        </div>
      )}

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-[360px] max-w-[90vw] bg-[var(--background)] rounded-[var(--radius-sm)] shadow-[var(--elevation-lg)] border border-[var(--border)] z-[var(--z-dropdown)]"
          onMouseEnter={handleDropdownMouseEnter}
        >
          <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
            <h3 className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] text-[#002664] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Oznámení ({unreadCount})
            </h3>
            {unreadCount > 0 && (
              <CustomButton
                variant="link-color"
                size="sm"
                onClick={clearAll}
              >
                Vymazat vše
              </CustomButton>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#535862] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Žádná nová oznámení
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border-b border-[var(--border-muted)] hover:bg-[var(--muted)] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] text-[#002664] text-[16px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {notification.title}
                      </h4>
                      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#535862] text-[14px] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {notification.message}
                      </p>
                      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] text-[#717680] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {notification.time}
                      </p>
                    </div>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-[#717680] hover:text-[#535862] transition-colors"
                      aria-label="Dismiss notification"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {unreadCount > 0 && (
            <div className="p-3 border-t border-[var(--border)] text-center">
              <CustomButton
                variant="link-color"
                size="sm"
              >
                Zobrazit všechna oznámení
              </CustomButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
