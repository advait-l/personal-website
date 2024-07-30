// utils/sanitize.ts
export function sanitize(html: string): string {
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.documentElement.innerHTML;
    } else {
        return html;
    }
}
