export default function Project({ id, src, alt, mainLink, mainLinkTitle, subLink, subLinkTitle }) {
    return (
        <div id={id}>
            <img src={src} alt={alt}></img>
            <div id="portfolio-links">
                <a href={mainLink} target="_blank">{mainLinkTitle}</a>
                <a class="sub-link" href={subLink} target="_blank">{subLinkTitle}</a>
            </div>
        </div>
    );
}