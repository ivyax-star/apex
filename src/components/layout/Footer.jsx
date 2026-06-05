import homeIcon from '../../assets/Apex - Export/Icon + Button/icon home.png'
import emailIcon from '../../assets/Apex - Export/Icon + Button/icon email.png'
import phoneIcon from '../../assets/Apex - Export/Icon + Button/icon dt.png'
import facebookIcon from '../../assets/Apex - Export/icon social/icon fb.png'
import zaloIcon from '../../assets/Apex - Export/icon social/icon zalo.png'
import messengerIcon from '../../assets/Apex - Export/icon social/icon mes.png'
import footerBackground from '../../assets/Apex - Export/BG_/10 Footer.png'
import footerLogo from '../../assets/Apex - Export/logo/AVATAR.png'

const addressMapLink =
  'https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawSPkTNleHRuA2FlbQIxMABicmlkETFJTFdpRGdTNEE4WkR0bWxsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhbqEEDZHK9fXVWny4AKu6e2NJAF1XTMG4zenFAKnF81im27c2xnVNXt2Bn2_aem_SeR0r7Fm0Sc9reWX2AnR4A&FORM=FBKPL1&q=+To%C3%A0+nh%C3%A0+ApexGroup%2C+979+%C4%91%C6%B0%E1%BB%9Dng+DT+743A%2C+Khu+ph%E1%BB%91+T%C3%A2n+Long%2C+Ph%C6%B0%E1%BB%9Dng+D%C4%A9+An%2C+Di+An%2C+Vietnam%2C+Ho+Chi+Minh+City%2C+Vietnam&cp=10.914157%7E106.750448&lvl=16.3&style=r'
const phoneLink = 'tel:0377565059'
const emailLink = 'mailto:apexedu2025@gmail.com'

const socialLinks = [
  {
    href: 'https://www.facebook.com/ApexEduVietNam/',
    label: 'Facebook ApexEdu',
    icon: facebookIcon,
    alt: 'Facebook',
    isExternal: true,
  },
  {
    href: 'https://zalo.me/0377565059',
    label: 'Gọi ApexEdu qua số 037 756 5059',
    icon: zaloIcon,
    alt: 'Zalo',
    ariaLabel: 'Zalo ApexEdu',
    isExternal: true,
  },
  {
    href: 'https://m.me/1145965185259106',
    label: 'Messenger ApexEdu',
    icon: messengerIcon,
    alt: 'Messenger',
    isExternal: true,
  },
]

const footerImageProps = {
  loading: 'lazy',
  decoding: 'async',
}

export default function Footer() {
  return (
    <footer
      className="landing-bg landing-bg--footer landing-footer"
      id="footer"
      aria-label="Thông tin liên hệ ApexEdu"
    >
      <img className="landing-footer__bg" src={footerBackground} alt="" aria-hidden="true" {...footerImageProps} />

      <div className="landing-footer__inner">
        <div className="landing-footer__brand" aria-label="ApexEdu">
          <img className="landing-footer__logo" src={footerLogo} alt="ApexEdu" {...footerImageProps} />
        </div>

        <div className="landing-footer__contacts">
          <a
            className="landing-footer__contact landing-footer__contact--address"
            href={addressMapLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Xem địa chỉ ApexEdu trên bản đồ"
          >
            <img src={homeIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>
              Toà nhà ApexGroup, số 979 Đường ĐT 743A, Phường Dĩ An, TP. Hồ Chí Minh
            </span>
          </a>

          <a
            className="landing-footer__contact landing-footer__contact--phone"
            href={phoneLink}
            aria-label="Gọi ApexEdu qua số 037 756 5059"
          >
            <img src={phoneIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>037 756 5059</span>
          </a>

          <a
            className="landing-footer__contact landing-footer__contact--email"
            href={emailLink}
            aria-label="Gửi email tới ApexEdu"
          >
            <img src={emailIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>apexedu2025@gmail.com</span>
          </a>

          <div className="landing-footer__socials" aria-label="Mạng xã hội ApexEdu">
            {socialLinks.map((social) => (
              <a
                className="landing-footer__social-link"
                href={social.href}
                key={social.label}
                aria-label={social.ariaLabel || social.label}
                target={social.isExternal ? '_blank' : undefined}
                rel={social.isExternal ? 'noreferrer' : undefined}
              >
                <img className="landing-footer__social" src={social.icon} alt={social.alt} {...footerImageProps} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
