export type Blog = {
    id?: string
    title: string
    tag: string
    description: string
    cover_url: string
    content: string
    slug: string
    created_at: Date
    updated_at?: Date
}