import { AppBar } from "../components/AppBar"
import { Card } from "../components/Card"

export const Main = ()=> {
    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div className="px-10 pt-10">
                <div className="grid grid-cols-4 gap-4">
                    <Card name="images" />
                </div>
            </div>
        </div>
    )
}