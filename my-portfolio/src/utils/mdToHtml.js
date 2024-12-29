import markdownit from 'markdown-it'
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // 하이라이트 스타일 (음영 포함)

export default async function convertMd(path) {
    const response = await fetch(path);
    const markdownText = await response.text()
    // Actual default values
    const md = markdownit({
    highlight: function (str, lang) {
        console.log(`Highlighting ${lang}: ${str}`);

        if (lang && hljs.getLanguage(lang)) {
        try {
            return '<pre><code class="hljs">' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                '</code></pre>';
        } catch (__) {}
        }

        return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    }
    });
    const htmlText = md.render(markdownText)
    return htmlText
}
