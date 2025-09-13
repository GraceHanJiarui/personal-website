import React from 'react';
import classNames from 'classnames';
import { useLocale } from '../../../utils/i18n/LocaleProvider';

export default function LanguageToggle({ className }: { className?: string }) {
    const { locale, setLocale } = useLocale();
    const isEN = locale === 'en';
    const base = 'px-2 py-1 rounded-md text-sm transition-colors';
    const active = 'bg-gray-900 text-white dark:bg-white dark:text-gray-900';
    const inactive = 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white';

    return (
        <div className={classNames('flex items-center gap-2', className)}>
            <button
                type="button"
                aria-pressed={isEN}
                onClick={() => setLocale('en')}
                className={classNames(base, isEN ? active : inactive)}
            >
                EN
            </button>
            <span className="text-gray-400">／</span>
            <button
                type="button"
                aria-pressed={!isEN}
                onClick={() => setLocale('zh')}
                className={classNames(base, !isEN ? active : inactive)}
            >
                中文
            </button>
        </div>
    );
}
