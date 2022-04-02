export function Banner() {
    return (
        <div className="banner" >
            <picture>
                <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
                <img src="/images/banner.png" alt="banner" />
            </picture>
        </div>
    )
}