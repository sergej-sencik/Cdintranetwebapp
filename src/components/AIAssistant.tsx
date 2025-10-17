import { useState, useRef, useEffect } from "react";
import { X, Send, Mic } from "lucide-react";
import svgPaths from "../imports/svg-ejxmg04asj";
import { CustomButton } from "./ui/custom-button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickPrompt {
  id: string;
  text: string;
}

export function AIAssistant() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts: QuickPrompt[] = [
    { id: '1', text: 'Jak zažádat o dovolenou?' },
    { id: '2', text: 'Kde najdu bezpečnostní předpisy?' },
    { id: '3', text: 'Najít kontakt na kolegu' },
    { id: '4', text: 'Zdravotní péče a bezpečnost' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    setShowWelcome(false);

    setTimeout(() => {
      let botResponse = "";
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("dovolen")) {
        botResponse = "Pro zažádání o dovolenou přejděte do sekce 'HR' → 'Dovolená a absence'. Tam najdete formulář pro podání žádosti. Nezapomeňte získat souhlas vašeho nadřízeného.";
      } else if (lowerMessage.includes("bezpečnost") || lowerMessage.includes("předpis")) {
        botResponse = "Bezpečnostní předpisy najdete v sekci 'Dokumenty' → 'BOZP'. Jsou zde k dispozici všechny aktuální směrnice a pokyny pro bezpečnost práce.";
      } else if (lowerMessage.includes("kontakt") || lowerMessage.includes("koleg")) {
        botResponse = "Kontakty na kolegy najdete v sekci 'Lidé' nebo použijte vyhledávání v horní liště. Každý profil obsahuje e-mail, telefon a oddělení zaměstnance.";
      } else if (lowerMessage.includes("zdravot") || lowerMessage.includes("péče")) {
        botResponse = "Informace o zdravotní péči a benefitech najdete v sekci 'HR' → 'Zdravotní péče'. Najdete zde kontakty na firemního lékaře a informace o zdravotním pojištění.";
      } else {
        botResponse = "Rozumím vaší otázce. Zkuste použít vyhledávání v horní části stránky nebo vyberte jednu z rychlých akcí. Jsem tu, abych vám pomohl!";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    simulateBotResponse(message);
  };

  const handleQuickPrompt = (prompt: QuickPrompt) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: prompt.text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateBotResponse(prompt.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // SVG Component from Figma (Stars gradient icon for AI assistant)
  const Stars01 = () => (
    <div className="relative shrink-0 size-[35px]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="stars-01">
          <path d={svgPaths.p2e35c300} fill="url(#paint0_linear_22_1338)" id="Icon (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_22_1338" x1="33.3967" x2="1.60474" y1="1.6042" y2="1.6042">
            <stop stopColor="#6A11CB" />
            <stop offset="1" stopColor="#2575FC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // White version of Stars icon for collapsed button
  const Stars01White = () => (
    <div className="relative shrink-0 size-[24px] animate-flicker" data-name="stars-01-white">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="stars-01">
          <path d={svgPaths.p2e35c300} fill="white" id="Icon (Stroke)" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="fixed bottom-0 right-[32px] z-50">
      {isExpanded ? (
        <div className="bg-white box-border content-stretch flex flex-col h-[708px] pb-[16px] pt-[12px] px-0 rounded-[8px] shadow-[0px_7px_48px_-12px_rgba(10,13,18,0.18),0px_4px_4px_-2px_rgba(10,13,18,0.04)] shrink-0 w-[464px] animate-in slide-in-from-bottom-4 duration-300">
          {/* Header with close button */}
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-0 px-[16px] relative w-full">
              <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
                <CustomButton
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsExpanded(false)}
                  aria-label="Close AI Assistant"
                >
                  <X className="size-[20px] text-[#838389]" />
                </CustomButton>
              </div>
            </div>
            <Separator className="bg-[#ebebed]" />
          </div>

          {/* Content Area */}
          <div className="content-stretch flex flex-col gap-[24px] h-[648px] items-start relative shrink-0 w-full">
            <div className="h-[556px] relative shrink-0 w-full">
              <div className="flex flex-col items-end justify-end size-full">
                <div className="box-border content-stretch flex flex-col gap-[24px] h-[556px] items-end justify-end px-[20px] py-0 relative w-full">
                  {/* Welcome Screen */}
                  {showWelcome && messages.length === 0 && (
                    <>
                      {/* AI Icon */}
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="box-border content-stretch flex gap-[14px] items-center overflow-clip p-[10.5px] relative rounded-[7px] shrink-0" style={{ background: 'linear-gradient(117deg, #E3ECFF 11.91%, #E8D3FF 105.19%)' }}>
                          <Stars01 />
                        </div>
                      </div>

                      {/* Answer Area */}
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <h4 className="text-h4 relative shrink-0 text-[#252b37]">
                          Dobrý den, pane Novotný 👋
                        </h4>
                        <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#27272e] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="mb-[22px]">
                            Jsem Váš digitální průvodčí pro intranet. Pomohu Vám rychle najít informace, kolegy i správné postupy.
                          </p>
                          <p>S čím Vám dnes mohu pomoci?</p>
                        </div>
                      </div>

                      {/* Preset Buttons */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        {quickPrompts.map((prompt) => (
                          <CustomButton
                            key={prompt.id}
                            variant="outline"
                            size="md"
                            onClick={() => handleQuickPrompt(prompt)}
                            className="border-[#009fda] text-[#009fda] hover:bg-[#009fda] hover:bg-opacity-5 rounded-[4px] w-auto"
                          >
                            {prompt.text}
                          </CustomButton>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Messages */}
                  {messages.length > 0 && (
                    <div className="space-y-4 overflow-y-auto max-h-[400px] w-full">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`rounded-lg p-3 max-w-[85%] ${
                              msg.sender === 'user'
                                ? 'bg-gradient-to-r from-[#009fda] to-[#0097cf] text-white'
                                : 'bg-[#f5f5f7] text-[#27272e]'
                            }`}
                          >
                            <p className="font-['Roboto:Regular',_sans-serif] text-[16px] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {msg.text}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-[#f5f5f7] rounded-lg p-3 max-w-[85%]">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-[#a4a7ae] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2 h-2 bg-[#a4a7ae] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2 h-2 bg-[#a4a7ae] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  )}

                  {/* Input Field */}
                  <div className="bg-white relative rounded-[4px] shrink-0 w-full border border-[#d5d7da]">
                    <div className="flex flex-col items-center">
                      <div className="box-border flex flex-col gap-[8px] items-center px-[14px] py-[10px] w-full">
                        <div className="flex flex-col gap-[4px] items-start w-full">
                          <Input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Napište svůj dotaz"
                            disabled={isTyping}
                            className="h-auto border-0 px-0 py-0 bg-transparent font-['Roboto:Regular',_sans-serif] text-[#535862] text-[16px] leading-[22px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#535862]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          />
                          <div className="flex gap-[12px] items-center justify-end w-full">
                            <CustomButton
                              variant="ghost"
                              size="icon-sm"
                              className="h-auto w-auto p-0 hover:opacity-70"
                              aria-label="Voice input"
                            >
                              <Mic className="size-[20px] text-[#009FDA]" />
                            </CustomButton>
                            <CustomButton
                              variant="ghost"
                              size="icon-sm"
                              onClick={handleSendMessage}
                              disabled={!message.trim() || isTyping}
                              className="h-auto w-auto p-0 hover:opacity-70"
                              aria-label="Send message"
                            >
                              <Send className="size-[20px] text-[#A4A7AE]" />
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="relative shrink-0 w-full">
              <Separator className="bg-[#ebebed]" />
              <div className="box-border flex gap-[8px] items-start pb-0 pt-[12px] px-[20px] w-full">
                <p className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[14px] min-h-px min-w-px text-[#717680] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span style={{ fontVariationSettings: "'wdth' 100" }}>Služba využívá technologii generativní umělé inteligence, která může poskytovat nepřesné informace. V případě jakýchkoli dotazů se prosím </span>
                  <a 
                    href="#" 
                    className="text-[#008bbe] hover:underline"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    obraťte na náš tým
                  </a>
                  <span style={{ fontVariationSettings: "'wdth' 100" }}>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-l box-border content-stretch flex from-[#6a11cb] gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] shrink-0 to-[#2575fc] w-[255px] hover:shadow-xl transition-all animate-in slide-in-from-bottom-2 duration-300"
        >
          <Stars01White />
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            AI Průvodčí Intranetem
          </p>
        </button>
      )}
    </div>
  );
}
