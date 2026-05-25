import homeIcon from '../../assets/Apex - Export/Icon + Button/icon home.png'
import emailIcon from '../../assets/Apex - Export/Icon + Button/icon email.png'
import phoneIcon from '../../assets/Apex - Export/Icon + Button/icon dt.png'
import facebookIcon from '../../assets/Apex - Export/icon social/icon fb.png'
import zaloIcon from '../../assets/Apex - Export/icon social/icon zalo.png'
import messengerIcon from '../../assets/Apex - Export/icon social/icon mes.png'
import footerLogo from '../../assets/Apex - Export/logo/AVATAR.png'

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
      <div className="landing-footer__inner">
        <div className="landing-footer__brand" aria-label="ApexEdu">
          <img className="landing-footer__logo" src={footerLogo} alt="ApexEdu" {...footerImageProps} />
        </div>

        <div className="landing-footer__contacts">
          <div className="landing-footer__contact landing-footer__contact--address">
            <img src={homeIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>
              Tòa nhà ApexGroup, 979 Đường ĐT 743A, Khu phố Tân Long, Phường Dĩ An,
              Dĩ An, Việt Nam
            </span>
          </div>

          <div className="landing-footer__contact landing-footer__contact--phone">
            <img src={phoneIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>037 756 5059</span>
          </div>

          <div className="landing-footer__contact landing-footer__contact--email">
            <img src={emailIcon} alt="" aria-hidden="true" {...footerImageProps} />
            <span>apexedu2025@gmail.com</span>
          </div>

          <div className="landing-footer__socials" aria-label="Mạng xã hội ApexEdu">
            <img className="landing-footer__social" src={facebookIcon} alt="Facebook" {...footerImageProps} />
            <img className="landing-footer__social" src={zaloIcon} alt="Zalo" {...footerImageProps} />
            <img className="landing-footer__social" src={messengerIcon} alt="Messenger" {...footerImageProps} />
          </div>
        </div>
      </div>
    </footer>
  )
}
