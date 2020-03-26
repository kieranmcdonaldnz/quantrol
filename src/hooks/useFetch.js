import { useEffect, useState } from 'react'

function useFetch(request, dependencies = []) {
  const [data, setData] = useState()
  const [hasError, setHasError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const attemptRequest = () => {
    setIsLoading(true)
    setHasError(false)
    request()
      .then(setData)
      .catch(setHasError)
      .finally(() => setIsLoading(false))
  }

  useEffect(attemptRequest, dependencies)

  return [data, isLoading, hasError, attemptRequest]
}

export default useFetch
