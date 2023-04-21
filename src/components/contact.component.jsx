function Contact() {
    return (
        <>
            <div className='container is-max-desktop'>
                {/* intro */}
                <div className='columns'>
                    <div className='column is-12'>
                        <div className='content intro'>
                            <h1>
                                Say<span className='justGreen'> Hello</span>.
                            </h1>

                            <div className='field'>
                                <label className='label'>Name</label>
                                <div className='control'>
                                    <input className='input is-medium' type='text' placeholder='Name' />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Email</label>
                                <div className='control'>
                                    <input className='input is-medium' type='email' placeholder='hello@piedpiper.com' />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Message</label>
                                <div className='control'>
                                    <textarea className='textarea is-medium' placeholder='Message'></textarea>
                                </div>
                            </div>

                            <div className='field is-grouped'>
                                <div className='control'>
                                    <button className='button btn-cta'>Submit</button>
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

export default Contact;
