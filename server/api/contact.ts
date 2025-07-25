import { ResponseRecaptcha } from "~/types/auth/recaptcha"

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const recaptchaToken = body.recaptchaToken
        const recaptchaSecretToken = process.env.RECAPCHA_SECRET_KEY
        if (!recaptchaToken || !recaptchaSecretToken) {
            throw new Error('Missing reCAPTCHA token or secret key')
        }

        const verification = await $fetch<ResponseRecaptcha>('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: recaptchaSecretToken,
                response: recaptchaToken
            }).toString()
        })

        if (!verification.success || verification.score < 0.5) {
            return {
                success: false,
                message: 'Validation failed, please try again later!',
                score: verification.score,
                errors: verification['error-codes'] || []
            }
        }

        const formData = new URLSearchParams()
        formData.append('mauticform[f_name]', body.name)
        formData.append('mauticform[email]', body.email)
        formData.append('mauticform[f_message]', body.description)
        formData.append('mauticform[formId]', '3')
        formData.append('mauticform[return]', '')
        formData.append('mauticform[formName]', 'contactusnomorender')

        await $fetch('https://mail.nomorender.com/form/submit?formId=3', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        return { success: true }
    } catch (error: any) {
        console.error('Server Error:', error)
        return {
            success: false,
            message: error.message || 'Unexpected error occurred'
        }
    }
})
