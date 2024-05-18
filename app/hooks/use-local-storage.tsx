import { useEffect, useState } from 'react'

interface LocalStorageProps<T> {
  key: string
  defaultValue: T
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>()

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(value))
  // }, [value, key])

  return [value, setValue] as const
}
