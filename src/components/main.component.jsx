function Main() {
    return (
        <>
            <div className='container is-max-desktop'>
                {/* intro */}
                <div className='columns is-multiline'>
                    <div className='column is-6'>
                        <div className='content intro'>
                            <h1>
                                Our <span className='justGreen'>Core</span>.
                            </h1>
                            <p>
                                At Pied Piper, innovation is at the heart of everything we do. We believe in pushing the
                                boundaries and taking risks to create groundbreaking solutions that change the world.
                                Our team of experts is constantly working to stay ahead of the curve, developing
                                cutting-edge technology that sets us apart from the competition. We foster a culture of
                                creativity and collaboration, where everyone's ideas are valued and encouraged. We
                                believe in testing and experimenting, failing fast, and learning from our mistakes to
                                achieve success. Our passion for innovation is what drives us to create products that
                                make a difference and leave a lasting impact on the world.
                            </p>
                        </div>
                    </div>
                    <div className='column is-6'>
                        <div className='content intro'>
                            <h1>
                                Meet <span className='justGreen'>Us</span>.
                            </h1>
                            <p>
                                We invite you to join us at 1 Innovation Way, where innovation is in our DNA. Our
                                state-of-the-art facilities are designed to inspire creativity and collaboration,
                                providing a space where ideas can thrive. Whether you're an entrepreneur, investor, or
                                simply curious about what we do, we welcome you to come and experience our culture of
                                innovation firsthand. Our team of experts is always eager to share their knowledge and
                                expertise, and we believe in building lasting relationships with our partners and
                                clients. At 1 Innovation Way, you'll have the opportunity to network with like-minded
                                individuals, attend workshops and seminars, and learn about the latest advancements in
                                technology.
                            </p>
                        </div>
                    </div>

                    {/* brands */}
                    <div className='column is-12 is-hidden-mobile'>
                        <div className='content intro'>
                            <h1>
                                Our <span className='justGreen'>Partners</span>.
                            </h1>
                            <div className='columns brands has-text-centered'>
                                <div className='column'>
                                    <img src='assets/images/brand_microsoft.svg' className='logo' alt='logo' />
                                    <p className='subtitle is-6'>Microsoft</p>
                                </div>
                                <div className='column'>
                                    <img src='assets/images/brand_github.svg' className='logo' alt='logo' />
                                    <p className='subtitle is-6'>Github</p>
                                </div>
                                <div className='column'>
                                    <img src='assets/images/brand_instagram.svg' className='logo' alt='logo' />
                                    <p className='subtitle is-6'>Instagram</p>
                                </div>
                                <div className='column'>
                                    <img src='assets/images/brand_uber.svg' className='logo' alt='logo' />
                                    <p className='subtitle is-6'>Uber</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* team */}
                    <div className='column is-12'>
                        <div className='content intro makeItGreen'>
                            <div className='columns is-multiline is-mobile is-tablet is-desktop'>
                                <div className='column is-12-mobile is-12-tablet is-6-desktop'>
                                    <div className='content intro'>
                                        <h1>
                                            The <span className='justGreen'>Team</span>.
                                        </h1>
                                        <p>
                                            Introducing the Pied Piper team! We're passionate professionals with diverse
                                            backgrounds and expertise. Our culture fosters innovation, collaboration,
                                            and creativity to deliver the best solutions for our users.
                                        </p>
                                    </div>
                                </div>
                                <div className='column is-12-mobile is-12-tablet is-6-desktop'></div>
                            </div>

                            <div className='columns is-multiline is-mobile is-tablet is-desktop has-text-centered'>
                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_ceo.png'
                                            className='card-image'
                                            alt='Pied Piper CEO Picture'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Richard Hendricks</div>
                                    <div className='card-subtitle'>Founder & CEO</div>
                                </div>

                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_coo.png'
                                            className='card-image'
                                            alt='Pied Piper COO Picture'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Jared "Donald" Dunn</div>
                                    <div className='card-subtitle'>COO</div>
                                </div>

                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_cfo.png'
                                            className='card-image'
                                            alt='Pied Piper CFO Picture'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Monica Hall</div>
                                    <div className='card-subtitle'>CFO</div>
                                </div>

                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_programmer.png'
                                            className='card-image'
                                            alt='Pied Piper Senior Programmer Picture'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Dinesh Chugtai</div>
                                    <div className='card-subtitle'>Senior Programmer</div>
                                </div>

                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_csa.png'
                                            className='card-image'
                                            alt='Pied Piper Chief Systesm Architect Picture'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Bertram Gilfoyle</div>
                                    <div className='card-subtitle'>Chief Systems Architect</div>
                                </div>

                                <div className='column is-4-desktop is-4-tablet is-6-mobile'>
                                    <figure className='image'>
                                        <img
                                            src='assets/images/team_investor.png'
                                            className='card-image'
                                            alt='Pied Piper Majority Investor'
                                        />
                                    </figure>
                                    <div className='card-title h5 mt-2'>Nelson 'Big Head' Bighetti</div>
                                    <div className='card-subtitle'>Majority Investor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* columns end */}
            </div>
            {/* container end */}
        </>
    );
}

export default Main;
