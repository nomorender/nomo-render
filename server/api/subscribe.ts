import { ResponseRecaptcha } from "~/types/auth/recaptcha"

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const recaptchaToken = body.recaptchaToken
        const recaptchaSecretToken = process.env.CAPCHA_SECRET_KEY

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
        formData.append('mauticform[email]', body.email)
        formData.append('mauticform[formId]', '4')
        formData.append('mauticform[return]', '')
        formData.append('mauticform[formName]', 'subscribenomorender')

        await $fetch('https://mail.nomorender.com/form/submit?formId=4', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return { success: true }
    } catch (error: any) {
        return { success: false, error: error.message }
    }
})
