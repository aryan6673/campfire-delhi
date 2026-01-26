import { forwardRef } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  onSubmit?: () => void;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ value, onChange, placeholder, className = '', onSubmit }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmit) {
        e.preventDefault();
        onSubmit();
      }
    };

    return (
      <input
        required
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type="email"
        className={`text-[#854d16] text-2xl md:text-4xl font-bold truncate bg-transparent border-none outline-none flex-1 cursor-text font-ember-and-fire ${className}`}
        placeholder={placeholder}
      />
    );
  }
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
