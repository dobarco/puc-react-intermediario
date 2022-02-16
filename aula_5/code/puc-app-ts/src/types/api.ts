export interface ApiError<T = any> {
    message: string,
    status: number,
    errors: T
}