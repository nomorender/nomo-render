export const slugify = (title: string): string => {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "")
}
export const formatDate = (d: string | Date) => {
    return new Date(d).toLocaleDateString('vi-VN').replace(/\//g, '.')
}