import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatCurr(price) {
    const idr = new Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        useGrouping: true,
    });

    return idr.format(price);
}

export function generatedRandomPassword() {
    const length = 12;
    const charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const prefix = 'vas';
    const prefixLength = prefix.length;
    let password = prefix;

    for (let i = 0; i < length - prefixLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
