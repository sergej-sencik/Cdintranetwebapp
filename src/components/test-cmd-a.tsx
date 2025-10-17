/**
 * Test Component for Cmd+A functionality
 * This component tests if Cmd+A works properly in inputs
 */

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { SearchInput } from './ui/search-input';

export function TestCmdA() {
  const [logs, setLogs] = useState<string[]>([]);
  
  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };
  
  // Global keyboard handler to log all key events
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        const target = event.target as HTMLElement;
        const targetInfo = target.tagName + (target.id ? `#${target.id}` : '');
        addLog(`Key: ${event.key} | Target: ${targetInfo} | Prevented: ${event.defaultPrevented}`);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown, true); // Use capture phase
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-h2 mb-6">Cmd+A Test Suite</h1>
      
      <div className="space-y-6">
        {/* Test 1: Basic Input */}
        <div className="p-4 border border-border rounded-lg">
          <h2 className="text-h4 mb-2">Test 1: Basic Input Component</h2>
          <p className="text-sm text-foreground-muted mb-3">
            Type text and press Cmd+A (Mac) or Ctrl+A (Windows) to select all
          </p>
          <Input 
            id="test-input-1"
            defaultValue="Hello World - Try Cmd+A to select all this text"
            placeholder="Type something..."
          />
        </div>
        
        {/* Test 2: Textarea */}
        <div className="p-4 border border-border rounded-lg">
          <h2 className="text-h4 mb-2">Test 2: Textarea Component</h2>
          <p className="text-sm text-foreground-muted mb-3">
            Try selecting all text with Cmd+A
          </p>
          <Textarea 
            id="test-textarea-1"
            defaultValue={`Line 1: This is a multiline textarea
Line 2: Press Cmd+A to select all
Line 3: All lines should be selected`}
            rows={4}
          />
        </div>
        
        {/* Test 3: SearchInput */}
        <div className="p-4 border border-border rounded-lg">
          <h2 className="text-h4 mb-2">Test 3: SearchInput Component</h2>
          <p className="text-sm text-foreground-muted mb-3">
            Custom search input with icon - test Cmd+A
          </p>
          <SearchInput 
            placeholder="Search something and try Cmd+A..."
            onSearch={(value) => addLog(`Search: ${value}`)}
          />
        </div>
        
        {/* Test 4: Native HTML Input */}
        <div className="p-4 border border-border rounded-lg">
          <h2 className="text-h4 mb-2">Test 4: Native HTML Input (Control)</h2>
          <p className="text-sm text-foreground-muted mb-3">
            Plain HTML input without React components
          </p>
          <input 
            id="test-native-input"
            type="text"
            defaultValue="Native HTML input - Cmd+A should work"
            className="w-full p-2 border border-input rounded"
          />
        </div>
        
        {/* Keyboard Event Log */}
        <div className="p-4 border border-border rounded-lg bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-h4">Keyboard Event Log</h2>
            <button 
              onClick={() => setLogs([])}
              className="px-3 py-1 text-sm bg-white border border-border rounded hover:bg-gray-100"
            >
              Clear Log
            </button>
          </div>
          <div className="bg-white p-3 rounded border border-border max-h-60 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-sm text-foreground-muted">
                Press Cmd+[key] or Ctrl+[key] in any input above to see events...
              </p>
            ) : (
              <div className="space-y-1 font-mono text-xs">
                {logs.map((log, index) => (
                  <div key={index} className="text-foreground">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Instructions */}
        <div className="p-4 border border-blue-300 bg-blue-50 rounded-lg">
          <h3 className="text-h5 mb-2">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Click into each input field above</li>
            <li>Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">Cmd+A</kbd> (Mac) or <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">Ctrl+A</kbd> (Windows)</li>
            <li>All text in the input should be selected</li>
            <li>Check the event log to see if keyboard events are being captured</li>
            <li>If Cmd+A doesn't work, check if <code>defaultPrevented: true</code> appears in the log</li>
          </ol>
        </div>
        
        {/* Expected Behavior */}
        <div className="p-4 border border-green-300 bg-green-50 rounded-lg">
          <h3 className="text-h5 mb-2">Expected Behavior:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>✅ Cmd+A should select all text in the focused input</li>
            <li>✅ Cmd+C should copy the selected text</li>
            <li>✅ Cmd+V should paste text</li>
            <li>✅ Cmd+X should cut the selected text</li>
            <li>✅ The event log should show <code>defaultPrevented: false</code> for these keys</li>
            <li>❌ If <code>defaultPrevented: true</code>, something is blocking the native behavior</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
