import { AppBar } from "../components/AppBar"
import { UploadedFileList } from "../components/DisplayImages"



export const Images = () => {
    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div className="px-10 py-8">
                <UploadedFileList />
            </div>
        </div>
    )
}