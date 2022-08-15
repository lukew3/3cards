export default function rootPath() : string {
    try {
        return (location.pathname.split('/').length > 2) ? '/' + location.pathname.split('/')[1] : '';
    } catch (e) {
        return '';
    }
}