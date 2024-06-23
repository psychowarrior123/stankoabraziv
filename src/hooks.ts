import { capitalize } from '@mui/material'
import { useState } from 'react'

export const useGetData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<{ [key: string]: any }>()

  const getData = async (section: string, category?: string) => {
    console.log(section, category, `./data/${section}/${category}${capitalize(section)}`)
    try {
      setIsLoading(true)
      const result: { default: any } = await import(`./data/${section}/${category}${capitalize(section)}`)
      setData(result.default)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, getData, isLoading }
}
