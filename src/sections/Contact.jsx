import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({ show: false, type: '', message: '' })
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send('service_1di5e63',
                'template_6soz5mk', {
                    from_name: form.name,
                    to_name: "Abhinandh",
                    from_email: form.email,
                    to_email: 'abhinandhc31@gmail.com',
                    message: form.message,
                },
                'h5FSnchIEA9tdU4lE')

            setLoading(false)

            // Show success notification
            setNotification({
                show: true,
                type: 'success',
                message: `Thank you, ${form.name}! Your message has been sent successfully. I'll get back to you soon!`
            })

            setForm({
                name: '',
                email: '',
                message: '',
            });

            // Auto hide notification after 5 seconds
            setTimeout(() => {
                setNotification({ show: false, type: '', message: '' })
            }, 5000)
        } catch(err) {
            setLoading(false)
            console.log(err)

            // Show error notification
            setNotification({
                show: true,
                type: 'error',
                message: 'Oops! Something went wrong while sending your message. Please try again or contact me directly at abhinandhc31@gmail.com'
            })

            // Auto hide notification after 7 seconds (longer for error to read)
            setTimeout(() => {
                setNotification({ show: false, type: '', message: '' })
            }, 7000)
        }
    }

    return (
        <section className='c-space my-20 ' id='contact'>
            {/* Custom Notification */}
            {notification.show && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
                    notification.type === 'success'
                        ? 'bg-green-500 border-l-4 border-green-700'
                        : 'bg-red-500 border-l-4 border-red-700'
                } text-white max-w-md`}>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            {notification.type === 'success' ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium">{notification.message}</p>
                        </div>
                        <button
                            onClick={() => setNotification({ show: false, type: '', message: '' })}
                            className="ml-4 inline-flex text-white hover:text-gray-200 transition-colors"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal' className='absolute insert-0 min-h-screen' />
                <div className='contact-container '>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-rose-50 mt-3'>Whether you're looking to build a new website,
                        improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Will Smith'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='willsmith@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi, I'm interested in....."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;