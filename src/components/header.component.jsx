import { useEffect } from 'react';

function Header() {
    const ppMiddleOutCompression = () => {
        let scrollTop = window.scrollY;

        let small = document.querySelector('.small');
        let num1 = (1 - scrollTop * 0.002).toFixed(2);
        let num2 = (1 - scrollTop * 0.002).toFixed(2);
        num1 < 0 || num2 < 0
            ? (small.style.transform = `scale3d(0.1,0.1,0.1)`)
            : (small.style.transform = `scale3d(${num1}, ${num2}, 1)`);
    };

    const progressBarLoading = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);

        document.querySelector(
            '.pb'
        ).style.background = `linear-gradient(to right, #009954 ${scrollPercentRounded}%, #f2f2f2 ${scrollPercentRounded}%)`;
    };

    addEventListener('scroll', (event) => {
        ppMiddleOutCompression();
        progressBarLoading();
    });

    return (
        <>
            <div className='pb'></div>

            <nav className='navbar is-transparent is-spaced' role='navigation' aria-label='main navigation'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <a href='#' className='navbar-item'>
                            <img src='assets/images/logo.svg' alt='logo' width='50' />
                        </a>
                        <a
                            role='button'
                            className='navbar-burger'
                            aria-label='menu'
                            aria-expanded='false'
                            data-target='navbarBasicExample'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div id='navMenu' className='navbar-menu'>
                        <div className='navbar-start'>
                            <a href='#' className='navbar-item'>
                                About
                            </a>
                            <a href='#' className='navbar-item'>
                                Documentation
                            </a>
                            <a href='#' className='navbar-item'>
                                FAQ
                            </a>
                            <a href='#' className='navbar-item'>
                                Contact
                            </a>
                        </div>

                        <div className='navbar-end'>
                            <div className='navbar-item'>
                                <button className='button btn-cta'>Download Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='hero is-fullheight-with-navbar'>
                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <p className='splash small'>Go Small or Go Home</p>
                        <p className='subtitle'>
                            A middle-out compression solution <br />
                            to make data storage problems smaller
                        </p>

                        <img
                            src='assets/images/down.svg'
                            alt='down arrow'
                            className='down-arrow has-text-centered is-hidden-mobile'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
