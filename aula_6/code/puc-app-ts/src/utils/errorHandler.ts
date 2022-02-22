export const errorHandler = (error: any) => {
    let message =error.message || 'Error'
    let status = error.response.status || 500
    let errors = error.response.data.error || {}
    return { message, status, errors}

}