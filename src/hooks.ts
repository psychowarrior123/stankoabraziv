import { capitalize } from '@mui/material'
import { useState } from 'react'

export const useGetData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<{ [key: string]: any }>()

  const getData = async (section: string, category?: string) => {
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

// export const useGetAllData = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false)
//   const [allData, setAllData] = useState<{ [key: string]: any }>()

//   const getAllData = async (section: string, category?: string) => {
//     try {
//       setIsLoading(true)
//       const result: { default: any } = await import(`./data`)
//       setAllData(result.default)
//     } catch (e) {
//       console.error(e)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return { allData, getAllData, isLoading }
// }
