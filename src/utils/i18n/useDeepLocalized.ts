import { useMemo } from 'react';
import { useLocale } from './LocaleProvider';
import { deepLocalize } from './localize';

export function useDeepLocalized<T>(data: T): T {
    const { locale } = useLocale();
    return useMemo(() => deepLocalize<T>(data, locale), [data, locale]);
}
