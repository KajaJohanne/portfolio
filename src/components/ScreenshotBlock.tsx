
type Props = {
    image: string
    caption: string
}

export function ScreenshotBlock({ image, caption }: Props) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
            <p className="font-general md:w-1/3">{caption}</p>
            <img 
            src={image}
            alt={caption}
            className="w-full md:w-2/3"
            />
            
        </div>
    )
}