import type { PostgrestError } from '@supabase/supabase-js'
import type { project } from '~/types/homepage/project'

export const useUpdateProject = () => {
    const supabase = useSupabaseClient<project>()
    const loading = ref(false)
    const success = ref(false)
    const updateError = ref<PostgrestError | null>(null)

    const uploadImage = async (file: File, folder = 'projects') => {
        const ext = file.name.split('.').pop()
        const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(2)}.${ext}`
        const bucketName = 'homepage'
        const { error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, file, { upsert: true, cacheControl: '3600' })
        if (error) throw error
        const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName)
        return data.publicUrl
    }

    const updateProject = async (
        projectData: project,
        mainImageFile: File | null,
        extraImageFiles: File[]
    ) => {
        loading.value = true
        success.value = false
        updateError.value = null

        try {
            let mainPicUrl = projectData.mainPic

            if (mainImageFile) {
                mainPicUrl = await uploadImage(mainImageFile)
            }

            let picDesUrls: string[] = [...projectData.picDes]

            if (extraImageFiles.length > 0) {
                const uploads = await Promise.all(
                    extraImageFiles.map(file => uploadImage(file))
                )
                picDesUrls = uploads
            }

            const { data, error } = await supabase
                .from('hompage_project')
                .update({
                    name: projectData.name,
                    location: projectData.location,
                    main_pic: mainPicUrl,
                    content1: projectData.content1,
                    content2: projectData.content2,
                    pic_des: picDesUrls,
                })
                .eq('id', projectData.id)
                .select()
                .single()
            if (error) throw error
            success.value = true
            return data
        } catch (err: any) {
            updateError.value = err
        } finally {
            loading.value = false
        }
    }
    return {
        updateProject,
        loading,
        success,
        updateError,
    }
}