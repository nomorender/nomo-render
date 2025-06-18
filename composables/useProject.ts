import type { Project } from "~/types/project/project"

export const useProject = () => {
    const project = ref<Project | null>(null)
    const projectList = ref<Project[] | null>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>()
    const updateError = ref<string | null>(null)
    const supabase = useSupabaseClient<Project>()
    const toast = useToast()

    const fetchProjectDetail = async (id: string) => {
        try {
            isLoading.value = true
            const { data, error } = await supabase
                .from('project')
                .select('*')
                .eq('id', id)
                .single()
            if (error) {
                fetchError.value = error.message
                return { success: false, error: error.message }
            }
            project.value = data as Project
            return { success: true }
        } catch (error) {
            toast.add({
                title: 'Fetch project error !',
                description: `Error : ${error}`,
                color: 'red'
            })
        } finally {
            isLoading.value = false
        }
    }

    const updateProject = async (id: string, payload: Partial<Project>) => {
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('project').update(payload).eq('id', id).select().single()
            if (error) {
                updateError.value = error.message
                return { success: false, error: error.message }
            }
            project.value = data
        } catch (error) {
            toast.add({
                title: 'Updated project error !',
                description: `Error : ${error}`,
                color: 'red'
            })
        } finally {
            isLoading.value = false
        }
    }

    return {
        projectList,
        fetchError,
        isLoading,
        updateProject,
        fetchProjectDetail
    }
}