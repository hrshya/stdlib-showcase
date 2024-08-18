import Button from "./Button";


export default function AppBar(){
    return <div className="flex justify-between p-6 px-20">
        <div className="flex gap-12 items-center">
            <div className="font-bold text-xl cursor-pointer">
                TABELA
            </div>
            <div className="flex gap-8 text-slate-600 cursor-pointer">
                <div>
                    Benefits
                </div>
                <div>
                    Features
                </div>
                <div>
                    Constructor
                </div>
                <div>
                    Testemonials
                </div>
                <div>
                    Pricing
                </div>
            </div>
        </div>
        <div className="flex gap-4">
            <Button name={"Login"} colour={"black"} backgroundColor={"amber"} />
            <Button name={"Get Started"} colour={"white"} backgroundColor={"black"} />
        </div>
    </div>
}