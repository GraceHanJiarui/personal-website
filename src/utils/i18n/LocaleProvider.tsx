import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'zh';

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };

const LocaleContext = createContext<Ctx>({ locale: 'en', setLocale: () => { } });

export const useLocale = () => useContext(LocaleContext);

/** 全局 Provider：localStorage 持久化 + <html lang> + 事件广播 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    // 首次加载：取本地
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const saved = window.localStorage.getItem('locale') as Locale | null;
        if (saved === 'en' || saved === 'zh') setLocale(saved);
    }, []);

    // 变化：存本地、更新 <html lang>、广播事件
    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem('locale', locale);
        document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hans';
        window.dispatchEvent(new CustomEvent('app-locale-change', { detail: { locale } }));
    }, [locale]);

    return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}
