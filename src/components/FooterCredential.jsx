export default function Footer() {
    const year = new Date().getFullYear()
    

    return(
        <div>
            <div className="text-center font-semibold text-violet-400">
                <h3> &copy; {year} Teknologi Pendidikan FKIP - UNIVERSITAS LAMBUNG MANGKURAT</h3>
            </div>
        </div>
    )
}
