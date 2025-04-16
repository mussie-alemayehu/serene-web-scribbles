
export function shareOnTwitter(title: string, url: string) {
  const text = encodeURIComponent(`${title} ${url}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

export function shareOnFacebook(url: string) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

export function shareOnLinkedIn(title: string, url: string) {
  window.open(
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    '_blank'
  );
}

export function copyToClipboard(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => resolve(true))
        .catch(() => resolve(false));
    } else {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        resolve(true);
      } catch (err) {
        resolve(false);
      }
    }
  });
}
