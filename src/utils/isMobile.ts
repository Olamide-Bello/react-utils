export default function isMobileDevice(): boolean {
    return /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Windows Phone|Opera Mini/i.test(navigator.userAgent);
}
