export const createErrorMessage = (status: number , message: string, error?: any) => {
  return {
    status,
    message,
    error
  }
}