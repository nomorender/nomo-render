export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const formData = new URLSearchParams()
    formData.append('mauticform[email]', body.email)
    formData.append('mauticform[formId]', '4')
    formData.append('mauticform[return]', '')
    formData.append('mauticform[formName]', 'subscribenomorender')

    try {
        await $fetch('https://mail.nomorender.com/form/submit?formId=4', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        return { success: true }
    } catch (error: Error | any) {
        return { success: false, error: error.message }
    }
})
