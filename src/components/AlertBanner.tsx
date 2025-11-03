import { AlertTriangle, Info, X } from 'lucide-react';
import { useState } from 'react';

interface AlertBannerProps {
  type: 'info' | 'warning' | 'error';
  message: string;
  dismissible?: boolean;
}

export default function AlertBanner({ type, message, dismissible = true }: AlertBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const styles = {
    info: 'bg-blue-900/30 border-blue-600 text-blue-300',
    warning: 'bg-yellow-900/30 border-yellow-600 text-yellow-300',
    error: 'bg-red-900/30 border-red-600 text-red-300',
  };

  const icons = {
    info: <Info className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    error: <AlertTriangle className="w-5 h-5" />,
  };

  return (
    <div className={`border rounded-lg p-4 ${styles[type]} flex items-start gap-3`}>
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <p className="flex-1 text-sm">{message}</p>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}



