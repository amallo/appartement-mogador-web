export type TooltipProps = {
    isOpened : boolean
    name: string
    onClick : (name: string, isOpened: boolean)=>void
    isMobile : boolean
}