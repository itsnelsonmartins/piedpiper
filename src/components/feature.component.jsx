function Contact() {
    const timer = () => {
        const countDownDate = new Date('Aug 6, 2025 10:00:00').getTime();

        const x = setInterval(() => {
            const now = new Date().getTime();
            let timeLeft = countDownDate - now;

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.querySelector('.timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    };

    timer();
    return (
        <>
            <div className='container is-max-desktop my-2'>
                <div className='columns'>
                    <div className='column is-12'>
                        <div className='content intro feature'>
                            <h1>
                                PiperNet<span className='justGreen'> 2.0</span>.
                            </h1>
                            <p className='timer'></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
