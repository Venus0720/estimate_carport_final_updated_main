import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { connectshare } from '../../action';
import Email from '../../assets/images/linkIcons/Email.svg';
import Facebook from '../../assets/images/linkIcons/facebookIcon.svg';
import X from '../../assets/images/linkIcons/xIcon.svg';
import linkIcons from '../../assets/images/linkIcons/linkedIn.svg';
import HandIcon from '../../assets/images/linkIcons/handDownIcon.svg';

const Share = () => {
    const dispatch = useDispatch();
    const linkRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        const linkText = linkRef.current.innerText;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(linkText)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => console.error('Failed to copy: ', err));
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = linkText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareOnFacebook = () => {
        copyLink()
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=`;
        window.open(facebookUrl, '_blank');
    };

    const shareOnLinkdin = () => {
        const LinkdinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=`;
        window.open(LinkdinUrl, '_blank');
    };
    const shareOnTwitter = () => {
        const TwitterUrl = `https://twitter.com/share?url=`;
        window.open(TwitterUrl, '_blank');
    };
    const shareOnEmail = () => {
        const subject = encodeURIComponent("Check out this link!");
        const body = encodeURIComponent(window.location.href);
        const emailUrl = `mailto:?subject=${subject}&body=${body}`;
        window.open(emailUrl, '_blank');
    };
  return (
    <div className='overlay-container'>
        <div className='share-wrap'>
            <div className='share-design'>
                <div className='share-title'>
                    <h2>Share Your Design</h2>
                    <span>Share design or copy the link below to save your design for later</span>
                </div>
                <div className='link-wrap'>
                    <div className='links' style={{cursor:"pointer"}}>
                        <div className='link-ico-container' onClick={shareOnEmail}>
                            <img src={Email} alt='link-icon'/>
                        </div>
                        <span>Email</span>
                    </div>
                    <div className='links' style={{cursor:"pointer"}}>
                        <div className='link-ico-container'  onClick={shareOnFacebook}>
                            <img src={Facebook} alt='link-icon'/>
                        </div>
                        <span>Facebook</span>
                    </div>
                    <div className='links' style={{cursor:"pointer"}}>
                        <div className='link-ico-container' onClick={shareOnTwitter}>
                            <img src={X} alt='link-icon'/>
                        </div>
                        <span>X</span>
                    </div>
                    <div className='links' style={{cursor:"pointer"}}>
                        <div className='link-ico-container' onClick={shareOnLinkdin}>
                            <img src={linkIcons} alt='link-icon'/>
                        </div>
                        <span>LinkedIn</span>
                    </div>
                </div>
                <div className='footer-or'>
                    <span>OR</span>
                </div>
            </div>
            <div className='copy-link-container'>
                <span>
                    Copy link from here <img src={HandIcon} alt='hand-down-img'/>
                </span>
                <div className='copy-link'>
                    <div className='link-url'>
                        <h2>
                            <a ref={linkRef} href={window.location.href} target='_blank'>{window.location.href}</a> 
                        </h2>
                    </div>
                    <div className='copy-link-btn'>
                        <button onClick={copyLink}>
                            {copied ? 'Link Copied!' : 'COPY LINK'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='popup-close' onClick={(e)=> dispatch(connectshare("show"))}><span className='close'>&times;</span></div>
        </div>
    </div>
  )
}

export default Share