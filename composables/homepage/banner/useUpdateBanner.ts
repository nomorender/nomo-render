import type { PostgrestError } from '@supabase/supabase-js'
import type { Banner } from '~/types/homepage/banner'

export const useUpdateBanner = () => {
    const supabase = useSupabaseClient<Banner>()
    const loading = ref(false)
    const success = ref(false)
    const updateError = ref<PostgrestError | null>(null)

    const updateBanner = async (banner: Banner, imageFile: File | null) => {
        loading.value = true
        success.value = false
        updateError.value = null

        try {
            let imageUrl = banner.img
            const folderPath = 'banner'

            if (imageFile) {
                const ext = imageFile.name.split('.').pop() || 'png'
                const fileName = `banner_img.${ext}`
                const filePath = `${folderPath}/${fileName}`

                const { data: existingFiles, error: listError } = await supabase
                    .storage
                    .from('homepage')
                    .list(folderPath)

                if (listError) throw listError

                const filesToDelete = existingFiles
                    ?.filter(file => file.name.startsWith('banner_img.'))
                    .map(file => `${folderPath} / ${file.name}`) || []

                if (filesToDelete.length > 0) {
                    const { error: removeError } = await supabase
                        .storage
                        .from('homepage')
                        .remove(filesToDelete)
                    if (removeError) throw removeError
                }

                const { error: uploadError } = await supabase.storage
                    .from('homepage')
                    .upload(filePath, imageFile, {
                        contentType: imageFile.type
                    })

                if (uploadError) throw uploadError

                const { publicUrl } = supabase
                    .storage
                    .from('homepage')
                    .getPublicUrl(filePath).data

                imageUrl = publicUrl
            }

            let updatedBanner: Banner | null = null

            if (banner.id) {
                const { data, error } = await supabase
                    .from('homepage_banners')
                    .update({ ...banner, img: imageUrl })
                    .eq('id', banner.id)
                    .select()
                    .maybeSingle()
                if (error) throw error
                updatedBanner = data
            } else {
                const { data, error: insertError } = await supabase
                    .from('homepage_banners')
                    .insert({ ...banner, img: imageUrl })
                    .select()
                    .single()
                if (insertError) throw insertError
                updatedBanner = data
            }

            success.value = true
            return updatedBanner
        } catch (e: any) {
            updateError.value = e
            return null
        } finally {
            loading.value = false
        }
    }

    return {
        updateBanner,
        loading,
        success,
        updateError,
    }
}