import type { Locale } from './LocaleProvider';

/** 判断是否是形如 { en?: any; zh?: any } 的本地化对象 */
function isLocalizedObject(v: any): v is { en?: any; zh?: any } {
    return v && typeof v === 'object' && ('en' in v || 'zh' in v);
}

/**
 * 深度本地化：
 * - 任意层级遇到 {en, zh} 就取当前语言值
 * - 缺失时回退到 fallback（默认 'en'）
 * - 再不行回退到对象里第一个非空值
 */
export function deepLocalize<T>(data: T, locale: Locale, fallback: Locale = 'en'): T {
    if (Array.isArray(data)) {
        return data.map((item) => deepLocalize(item, locale, fallback)) as any;
    }
    if (isLocalizedObject(data)) {
        return (data[locale] ?? data[fallback] ?? Object.values(data).find(Boolean)) as any;
    }
    if (data && typeof data === 'object') {
        const out: any = Array.isArray(data) ? [] : {};
        for (const [k, v] of Object.entries(data as any)) {
            out[k] = deepLocalize(v, locale, fallback);
        }
        return out;
    }
    return data;
}
