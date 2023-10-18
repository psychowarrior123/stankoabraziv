export type ToolItem = {
  image: string
  title: string
  text: string
  subtext?: string
}

export type DiamondType = 'cbn' | 'straight' | 'cup' | 'disc'
export type AbrazivType =
  | 'zatochnie-krygi-Grand'
  | 'zatochnie_krygi-carborundum-electrite'
  | 'zatochnie_krygi-TYROLIT'
  | 'otreznie-krygi'
  | 'krygi-benzopili'
export type Feature = 'main' | 'abraziv' | 'diamond' | DiamondType | AbrazivType
