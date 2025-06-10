export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const formData = new URLSearchParams()
    formData.append('mauticform[f_name]', body.name)
    formData.append('mauticform[email]', body.email)
    formData.append('mauticform[f_message]', body.description)
    formData.append('mauticform[formId]', '3')
    formData.append('mauticform[return]', '')
    formData.append('mauticform[formName]', 'contactusnomorender')

    try {
        await $fetch('https://mail.nomorender.com/form/submit?formId=3', {
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