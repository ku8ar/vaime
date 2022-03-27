import { useContext } from 'react'
import { DictContext } from 'src/components/dict'
import dict from 'src/dict/dict.json'
import { path } from 'rambda'

const useDict = (text) => {
  const lang = useContext(DictContext) || 'pl'

  return path([lang, text], dict)
}

export default useDict