# AI Assistant (AI Průvodčí Intranetem) - Features Documentation

## Overview
The AI Assistant is an intelligent chatbot designed to help users navigate the intranet and find information quickly. It's positioned as a fixed widget in the bottom-right corner of the screen.

## Key Features

### ✨ Smart Conversational Interface
- Real-time message exchange with typing indicators
- Message history with timestamps
- Clean, modern bubble-style chat UI
- Smooth animations and transitions

### 🚀 Preset Quick Actions
The assistant provides 4 quick action buttons for common tasks:

1. **Najít dokumenty** (Find Documents)
   - Helps users locate company documents and templates
   - Icon: FileText

2. **Nadcházející akce** (Upcoming Events)
   - Shows information about upcoming company events
   - Icon: Calendar

3. **Kontakty** (Contacts)
   - Guides users to find colleague contact information
   - Icon: Users

4. **Nápověda** (Help)
   - Provides help with using the intranet
   - Icon: HelpCircle

### 🤖 Intelligent Response System
The AI Assistant provides context-aware responses based on keywords:

- **Documents & Templates**: Guides to the Documents section
- **Events & Calendar**: Points to upcoming events and event calendar
- **Contacts**: Helps find colleague information
- **Help & Support**: Provides intranet usage guidance
- **News & Updates**: Directs to the news section
- **General Queries**: Suggests using search or provides helpful guidance

### 💬 User Experience Features
- **Typing Indicator**: Shows animated dots while AI is "thinking"
- **Message Timestamps**: Each message shows the time it was sent
- **Auto-scroll**: Automatically scrolls to the latest message
- **Quick Prompts**: Shows preset action buttons on first load
- **Responsive Design**: Adapts to mobile and desktop screens
- **Keyboard Support**: Press Enter to send messages

### 🎨 Visual Design
- **Gradient Header**: Purple to blue gradient (#6a11cb to #2575fc)
- **Brand Colors**: Uses intranet blue (#009fda) for user messages
- **Sparkle Animation**: Animated sparkle icon for AI personality
- **Shadow Effects**: Elevated shadow for depth
- **Smooth Transitions**: All interactions are animated

### 📱 Responsive Behavior
- **Desktop**: 400px max width, positioned bottom-right with margin
- **Mobile**: 90vw width, maintains bottom-right position
- **Fixed Position**: Stays visible while scrolling
- **High Z-index**: Always appears above other content (z-50)

## Technical Implementation

### Component Location
`/components/AIAssistant.tsx`

### State Management
- `isExpanded`: Controls whether chat is open or minimized
- `message`: Current input text
- `messages`: Array of all conversation messages
- `isTyping`: Shows/hides typing indicator
- `showQuickPrompts`: Controls display of quick action buttons

### Message Format
```typescript
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

### Quick Prompt Format
```typescript
interface QuickPrompt {
  id: string;
  label: string;
  icon: React.ReactNode;
  prompt: string;
}
```

## Usage
The AI Assistant is automatically included on all pages through:
- `HomeWithStickyHeader.tsx` - For the home page
- `ComponentsShowcase.tsx` - For the components showcase page

## Future Enhancement Possibilities
- Integration with real AI/LLM backend
- Search integration for real-time content retrieval
- User preference persistence (conversation history)
- Multi-language support
- Voice input/output
- File attachment support
- Integration with company knowledge base
- Analytics and usage tracking
- Personalized suggestions based on user role
